import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const BASE_URL = "https://luvant.com.ar";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "Luvant | Desarrollo de software a medida y automatización | Argentina",
    template: "%s | Luvant",
  },
  description:
    "Desarrollo de software a medida, automatización de procesos e integración de sistemas. OCR avanzado con Luvant Lens, APIs y soluciones técnicas que resuelven problemas reales.",
  keywords: [
    "desarrollo de software a medida",
    "software a medida Argentina",
    "automatización de procesos",
    "integración de sistemas",
    "OCR documentos",
    "procesamiento de documentos",
    "extracción de datos facturas",
    "Luvant",
    "Luvant Lens",
    "software empresarial",
    "consultoría técnica",
    "APIs e integraciones",
  ],
  authors: [{ name: "Luvant", url: BASE_URL }],
  creator: "Luvant",
  publisher: "Luvant",
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "https://luvant.com.ar",
      "x-default": "https://luvant.com.ar",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: BASE_URL,
    siteName: "Luvant",
    title: "Luvant | Desarrollo de software a medida y automatización",
    description:
      "Desarrollo de software a medida, automatización de procesos e integración de sistemas. Soluciones técnicas que resuelven problemas reales.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luvant | Desarrollo de software a medida y automatización",
    description:
      "Desarrollo de software a medida, automatización de procesos e integración de sistemas. Soluciones técnicas que resuelven problemas reales.",
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
    "Empresa de desarrollo de software en Argentina. Software a medida, automatización de procesos, integración de sistemas y procesamiento inteligente de documentos.",
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
    "Empresa de desarrollo de software a medida en Argentina. Automatización de procesos, integración de sistemas y procesamiento inteligente de documentos con OCR.",
  areaServed: {
    "@type": "Country",
    name: "Argentina",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de software",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Desarrollo de software a medida",
          description:
            "Construcción de aplicaciones web, APIs y sistemas internos adaptados a los procesos de cada empresa.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automatización de procesos",
          description:
            "Eliminación de tareas manuales repetitivas mediante flujos automatizados e integraciones entre sistemas.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Integración de sistemas",
          description:
            "Conexión de plataformas existentes mediante APIs para que la información fluya en tiempo real sin duplicados.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Luvant Lens",
          description:
            "OCR inteligente para procesamiento automático de facturas, remitos y documentos empresariales argentinos.",
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
    "Desarrollo de software a medida, automatización de procesos e integración de sistemas.",
  publisher: {
    "@type": "Organization",
    name: "Luvant",
  },
  inLanguage: "es",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
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
