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
    default: "Luvant | Software B2B y procesamiento de documentos | Argentina",
    template: "%s | Luvant",
  },
  description:
    "Luvant desarrolla software B2B y soluciones de procesamiento inteligente de documentos para empresas argentinas. OCR con +99% de precisión, automatización e integración de sistemas.",
  keywords: [
    "software B2B",
    "desarrollo de software Argentina",
    "OCR documentos",
    "procesamiento de documentos",
    "automatización empresarial",
    "extracción de datos facturas",
    "software a medida",
    "integración de sistemas",
    "Luvant",
    "Luvant Lens",
    "machine learning documentos",
    "digitalización empresas",
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
    title: "Luvant | Software B2B y procesamiento de documentos",
    description:
      "Software B2B y procesamiento inteligente de documentos para empresas argentinas. OCR avanzado, automatización e integración de sistemas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luvant | Software B2B y procesamiento de documentos",
    description:
      "Software B2B y procesamiento inteligente de documentos para empresas argentinas. OCR avanzado, automatización e integración de sistemas.",
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
    "Empresa de software B2B en Argentina especializada en procesamiento inteligente de documentos, automatización e integración de sistemas.",
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
    "Software B2B y procesamiento inteligente de documentos para empresas argentinas.",
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
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
