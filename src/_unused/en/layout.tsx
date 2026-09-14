import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../globals.css";

const BASE_URL = "https://luvant.com.ar";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Luvant | Custom Software Development & Automation | Argentina",
    template: "%s | Luvant",
  },
  description:
    "Custom software development, process automation, and systems integration. Advanced OCR with Luvant Lens, APIs, and technical solutions that solve real problems.",
  keywords: [
    "custom software development",
    "software development Argentina",
    "process automation",
    "systems integration",
    "OCR documents",
    "document processing",
    "invoice data extraction",
    "Luvant",
    "Luvant Lens",
    "enterprise software",
    "technical consulting",
    "APIs and integrations",
  ],
  authors: [{ name: "Luvant", url: BASE_URL }],
  creator: "Luvant",
  publisher: "Luvant",
  alternates: {
    canonical: "/en",
    languages: {
      "es-AR": "https://luvant.com.ar",
      en: "https://luvant.com.ar/en",
      "x-default": "https://luvant.com.ar",
    },
  },
  openGraph: {
    type: "website",
    locale: "en",
    url: `${BASE_URL}/en`,
    siteName: "Luvant",
    title: "Luvant | Custom Software Development & Automation",
    description:
      "Custom software development, process automation, and systems integration. Technical solutions that solve real problems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luvant | Custom Software Development & Automation",
    description:
      "Custom software development, process automation, and systems integration. Technical solutions that solve real problems.",
    creator: "@luvant_ar",
  },
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
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  category: "technology",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Luvant",
  url: BASE_URL,
  description:
    "Software development company in Argentina. Custom software, process automation, systems integration, and intelligent document processing.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AR",
  },
  email: "hola@luvant.com.ar",
  sameAs: [],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Luvant",
  url: BASE_URL,
  email: "hola@luvant.com.ar",
  description:
    "Custom software development company in Argentina. Process automation, systems integration, and intelligent document processing with OCR.",
  areaServed: {
    "@type": "Country",
    name: "Argentina",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Development",
          description:
            "Building web applications, APIs, and internal systems tailored to each company's processes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Process Automation",
          description:
            "Eliminating repetitive manual tasks through automated workflows and system integrations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Systems Integration",
          description:
            "Connecting existing platforms through APIs so information flows in real time without duplicates.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Luvant Lens",
          description:
            "Intelligent OCR for automatic processing of invoices, receipts, and business documents.",
        },
      },
    ],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Luvant",
  url: BASE_URL,
  description:
    "Custom software development, process automation, and systems integration.",
  publisher: {
    "@type": "Organization",
    name: "Luvant",
  },
  inLanguage: "en",
};

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N86HLLWQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}

        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N86HLLWQ');`,
          }}
        />
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YS1TSMR4NJ"
          strategy="afterInteractive"
        />
        <Script
          id="ga4"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-YS1TSMR4NJ');`,
          }}
        />
      </body>
    </html>
  );
}
