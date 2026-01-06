import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@/components/Analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://chato.ro";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: "resizes-content",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Chato | Asistent AI pentru Clinici Stomatologice 24/7",
  description:
    "Chato răspunde automat la întrebările pacienților pe site-ul clinicii tale, 24/7. Prețuri, program, servicii - fără să pierzi timp. 2 luni gratuite.",
  keywords: [
    "chatbot clinica stomatologica",
    "asistent AI dentist",
    "chatbot dentist",
    "automatizare clinica dentara",
    "raspuns automat pacienti",
    "chatbot medical romania",
    "AI stomatologie",
    "receptie virtuala clinica",
    "chatbot site clinica",
    "asistent virtual dentist",
  ],
  authors: [{ name: "Chato", url: siteUrl }],
  creator: "Chato",
  publisher: "Chato",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: siteUrl,
    siteName: "Chato",
    title: "Chato | Asistent AI pentru Clinici Stomatologice 24/7",
    description:
      "Răspunde automat la întrebările pacienților pe site-ul clinicii tale. Prețuri, program, servicii - fără să pierzi timp. 2 luni gratuite.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chato - Asistent AI pentru Clinici Stomatologice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chato | Asistent AI pentru Clinici Stomatologice 24/7",
    description:
      "Răspunde automat la întrebările pacienților pe site-ul clinicii tale. 2 luni gratuite pentru primele 20 de clinici.",
    images: ["/og-image.png"],
    creator: "@chato_ro",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Chato",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.svg`,
        width: 200,
        height: 200,
      },
      description:
        "Chato este un asistent AI care răspunde automat la întrebările pacienților pentru clinici stomatologice din România.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "RO",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "contact@chato.ro",
        contactType: "customer service",
        availableLanguage: "Romanian",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Chato",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "ro-RO",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Chato | Asistent AI pentru Clinici Stomatologice 24/7",
      description:
        "Chato răspunde automat la întrebările pacienților pe site-ul clinicii tale, 24/7. Prețuri, program, servicii - fără să pierzi timp.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "ro-RO",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: "Chato",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Asistent AI care răspunde automat la întrebările pacienților pe site-ul clinicilor stomatologice, 24/7.",
      offers: [
        {
          "@type": "Offer",
          name: "Start",
          price: "150",
          priceCurrency: "RON",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/PreOrder",
          description: "500 conversații/lună, 1 utilizator, notificări",
        },
        {
          "@type": "Offer",
          name: "Business",
          price: "350",
          priceCurrency: "RON",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/PreOrder",
          description: "2000 conversații/lună, analytics, 2 utilizatori",
        },
        {
          "@type": "Offer",
          name: "Pro",
          price: "700",
          priceCurrency: "RON",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/PreOrder",
          description: "Conversații nelimitate, WhatsApp, suport prioritar",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        ratingCount: "12",
        bestRating: "5",
        worstRating: "1",
      },
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Ce este Chato?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chato este un asistent AI care răspunde automat la întrebările pacienților pe site-ul clinicii tale stomatologice, 24/7. Preia întrebările repetitive despre prețuri, program, servicii - exact ce consumă mult timp din ziua ta.",
          },
        },
        {
          "@type": "Question",
          name: "Cum funcționează Chato?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Simplu: copiezi un cod pe site (2 minute, ca un script de Google Analytics). În dashboard completezi informațiile clinicii - prețuri, servicii, program. Chato învață și începe să răspundă automat. Când e ceva ce nu știe, îți trimite notificare pe WhatsApp.",
          },
        },
        {
          "@type": "Question",
          name: "Ce întrebări poate răspunde Chato?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chato poate răspunde la întrebări despre: prețuri servicii (detartraj, albire, implant), program de lucru, adresă și indicații, servicii disponibile, cum se face o programare, informații despre proceduri, doctorii disponibili, metode de plată și dacă acceptați asigurări.",
          },
        },
        {
          "@type": "Question",
          name: "Ce se întâmplă când Chato nu știe răspunsul?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Când Chato primește o întrebare pe care nu o știe, încearcă să ajute cu ce știe. Dacă nu poate, spune sincer, colectează datele pacientului (nume, telefon) și îți trimite notificare pe WhatsApp/email. Tu continui conversația direct cu pacientul.",
          },
        },
        {
          "@type": "Question",
          name: "Cât costă Chato?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Planul Start e 150 RON/lună pentru 500 conversații. Planul Business e 350 RON/lună cu 2000 conversații și analytics. Planul Pro e 700 RON/lună cu conversații nelimitate și WhatsApp. Pentru comparație, o recepționeră part-time costă minim 2000 RON/lună.",
          },
        },
        {
          "@type": "Question",
          name: "E nevoie de cunoștințe tehnice pentru instalare?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nu. Dacă poți face copy-paste, poți instala Chato. Setup-ul de bază durează sub 10 minute, iar configurarea completă durează sub o oră.",
          },
        },
        {
          "@type": "Question",
          name: "Ce platforme suportă Chato?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chato funcționează pe orice website (WordPress, Wix, custom, etc.). În curând vom lansa și integrări cu Facebook Messenger și WhatsApp Business.",
          },
        },
        {
          "@type": "Question",
          name: "Nu am website. Pot folosi Chato?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Momentan Chato funcționează pe website. Dar poți să te înscrii pe waitlist și te contactăm când lansăm integrarea cu Facebook Messenger.",
          },
        },
        {
          "@type": "Question",
          name: "Poate un AI să răspundă corect la întrebări medicale?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chato nu inventează răspunsuri, ci răspunde doar pe baza informațiilor pe care le configurezi tu - prețuri exacte, servicii, program. E ca un FAQ inteligent, nu un doctor. Și când nu știe ceva, îți transferă conversația.",
          },
        },
        {
          "@type": "Question",
          name: "Ce primesc dacă mă înscriu pe waitlist?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Clinicile de pe waitlist primesc 2 luni gratuite în loc de 14 zile trial standard, acces prioritar la funcționalități noi, și posibilitatea de a sugera ce feature-uri să adăugăm. Nicio obligație.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
