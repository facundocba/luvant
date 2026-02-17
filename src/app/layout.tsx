import type { Metadata, Viewport } from "next";
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  category: "technology",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Luvant",
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.ico`,
  description:
    "Empresa de desarrollo de software en Argentina. Software a medida, automatización de procesos, integración de sistemas y procesamiento inteligente de documentos.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AR",
  },
  email: "hola@luvant.com.ar",
  sameAs: [],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N86HLLWQ');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
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
      </body>
    </html>
  );
}
