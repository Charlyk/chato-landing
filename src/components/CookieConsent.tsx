"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = "chato-cookie-consent";

export function getCookiePreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = getCookiePreferences();
    if (!stored) {
      // Small delay to avoid layout shift on page load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs));
    setIsVisible(false);
    // Dispatch event so other components can react
    window.dispatchEvent(new CustomEvent("cookieConsentChanged", { detail: prefs }));
  };

  const acceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    savePreferences(allAccepted);
  };

  const acceptNecessary = () => {
    const necessaryOnly = { necessary: true, analytics: false, marketing: false };
    savePreferences(necessaryOnly);
  };

  const saveCustom = () => {
    savePreferences(preferences);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <Card className="max-w-2xl mx-auto p-6 shadow-lg border-border bg-background">
        <div className="flex justify-between items-start gap-4 mb-4">
          <div>
            <h3 className="font-semibold text-lg mb-1">Setări cookie-uri</h3>
            <p className="text-sm text-muted-foreground">
              Folosim cookie-uri pentru a îmbunătăți experiența ta pe site și pentru a analiza traficul.
            </p>
          </div>
          <button
            onClick={acceptNecessary}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Închide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {showDetails && (
          <div className="space-y-4 mb-6 border-t border-border pt-4">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="necessary"
                checked={preferences.necessary}
                disabled
                className="mt-1 accent-primary"
              />
              <div>
                <label htmlFor="necessary" className="font-medium text-sm">
                  Cookie-uri necesare
                </label>
                <p className="text-xs text-muted-foreground">
                  Esențiale pentru funcționarea site-ului. Nu pot fi dezactivate.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="analytics"
                checked={preferences.analytics}
                onChange={(e) =>
                  setPreferences((prev) => ({ ...prev, analytics: e.target.checked }))
                }
                className="mt-1 accent-primary"
              />
              <div>
                <label htmlFor="analytics" className="font-medium text-sm cursor-pointer">
                  Cookie-uri de analiză (Google Analytics)
                </label>
                <p className="text-xs text-muted-foreground">
                  Ne ajută să înțelegem cum folosești site-ul pentru a-l îmbunătăți.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="marketing"
                checked={preferences.marketing}
                onChange={(e) =>
                  setPreferences((prev) => ({ ...prev, marketing: e.target.checked }))
                }
                className="mt-1 accent-primary"
              />
              <div>
                <label htmlFor="marketing" className="font-medium text-sm cursor-pointer">
                  Cookie-uri de marketing (Facebook Pixel)
                </label>
                <p className="text-xs text-muted-foreground">
                  Folosite pentru a-ți afișa reclame relevante pe alte platforme.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          {!showDetails ? (
            <>
              <Button onClick={acceptAll} className="btn-primary flex-1">
                Acceptă toate
              </Button>
              <Button onClick={acceptNecessary} variant="outline" className="flex-1">
                Doar necesare
              </Button>
              <Button
                onClick={() => setShowDetails(true)}
                variant="ghost"
                className="flex-1"
              >
                Personalizează
              </Button>
            </>
          ) : (
            <>
              <Button onClick={saveCustom} className="btn-primary flex-1">
                Salvează preferințele
              </Button>
              <Button onClick={acceptAll} variant="outline" className="flex-1">
                Acceptă toate
              </Button>
            </>
          )}
        </div>

        <p className="text-xs text-muted-foreground mt-4 text-center">
          Citește{" "}
          <a href="/politica-confidentialitate" className="text-primary hover:underline">
            Politica de Confidențialitate
          </a>{" "}
          pentru mai multe detalii.
        </p>
      </Card>
    </div>
  );
}
