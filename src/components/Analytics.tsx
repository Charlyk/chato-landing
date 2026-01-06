"use client";

import Script from "next/script";
import { useReducer, useEffect } from "react";
import { getCookiePreferences, CookiePreferences } from "./CookieConsent";

// Replace these with your actual IDs
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

type State = {
  preferences: CookiePreferences | null;
  mounted: boolean;
};

type Action =
  | { type: "INIT"; preferences: CookiePreferences | null }
  | { type: "UPDATE"; preferences: CookiePreferences };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "INIT":
      return { mounted: true, preferences: action.preferences };
    case "UPDATE":
      return { ...state, preferences: action.preferences };
    default:
      return state;
  }
}

export function Analytics() {
  const [state, dispatch] = useReducer(reducer, { preferences: null, mounted: false });

  useEffect(() => {
    dispatch({ type: "INIT", preferences: getCookiePreferences() });

    const handleConsentChange = (e: Event) => {
      const customEvent = e as CustomEvent<CookiePreferences>;
      dispatch({ type: "UPDATE", preferences: customEvent.detail });
    };

    window.addEventListener("cookieConsentChanged", handleConsentChange);
    return () => window.removeEventListener("cookieConsentChanged", handleConsentChange);
  }, []);

  // Don't render anything until mounted to avoid hydration mismatch
  if (!state.mounted) return null;

  const { preferences } = state;

  return (
    <>
      {/* Google Analytics */}
      {preferences?.analytics && GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
                anonymize_ip: true
              });
            `}
          </Script>
        </>
      )}

      {/* Facebook/Meta Pixel */}
      {preferences?.marketing && FB_PIXEL_ID && (
        <>
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}
    </>
  );
}

// Helper functions to track events (can be imported in other components)
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  const preferences = getCookiePreferences();

  // Google Analytics event
  if (preferences?.analytics && typeof window !== "undefined" && "gtag" in window) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", eventName, params);
  }
}

export function trackFBEvent(eventName: string, params?: Record<string, unknown>) {
  const preferences = getCookiePreferences();

  // Facebook Pixel event
  if (preferences?.marketing && typeof window !== "undefined" && "fbq" in window) {
    (window as unknown as { fbq: (...args: unknown[]) => void }).fbq("track", eventName, params);
  }
}
