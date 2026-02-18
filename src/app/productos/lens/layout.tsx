import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luvant Lens - OCR y procesamiento de documentos",
  description:
    "Luvant Lens: procesamiento inteligente de documentos con OCR y machine learning. Extracción automática de datos de facturas, remitos y formularios argentinos con +99% de precisión.",
  alternates: {
    canonical: "/productos/lens",
  },
  openGraph: {
    title: "Luvant Lens | OCR inteligente para documentos empresariales",
    description:
      "Extracción automática de datos de facturas, remitos y formularios con +99% de precisión y <500ms de latencia. API REST lista para integrar.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luvant Lens | OCR inteligente para documentos empresariales",
    description:
      "Extracción automática de datos de facturas, remitos y formularios con +99% de precisión y <500ms de latencia. API REST lista para integrar.",
  },
  keywords: [
    "OCR",
    "procesamiento de documentos",
    "extracción de datos",
    "facturas electrónicas",
    "machine learning",
    "API OCR",
    "automatización de facturas",
    "AFIP",
    "Argentina",
  ],
};

const lensProductJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Luvant Lens",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Procesamiento inteligente de documentos con OCR y machine learning. Extracción automática de datos de facturas, remitos y formularios argentinos con +99% de precisión.",
  url: "https://luvant.com.ar/productos/lens",
  author: {
    "@type": "Organization",
    name: "Luvant",
    url: "https://luvant.com.ar",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    price: "0",
  },
  featureList: [
    "OCR avanzado para documentos argentinos",
    "Extracción de datos de facturas, remitos y formularios",
    "+99% de precisión",
    "Latencia menor a 500ms",
    "API REST documentada",
    "Soporte para 15+ tipos de documentos",
    "Machine learning adaptativo",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué tipos de documentos puede procesar Luvant Lens?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Luvant Lens soporta más de 15 tipos de documentos, incluyendo facturas electrónicas AFIP (A, B, C), remitos, órdenes de compra, recibos, presupuestos y formularios personalizados.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué precisión tiene el OCR de Luvant Lens?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Luvant Lens alcanza más del 99% de precisión en la extracción de datos de documentos argentinos, con una latencia menor a 500 milisegundos por documento.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se integra Luvant Lens con mis sistemas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Luvant Lens expone una API REST completamente documentada. Podés integrarla con tu ERP, sistema contable o cualquier plataforma que soporte webhooks o llamadas HTTP.",
      },
    },
    {
      "@type": "Question",
      name: "¿Luvant Lens funciona con facturas de AFIP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Luvant Lens está entrenado específicamente para los formatos de facturación electrónica de Argentina (AFIP), incluyendo facturas A, B y C, con extracción de CUIT, número de comprobante, importes e ítems.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://luvant.com.ar",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Productos",
      item: "https://luvant.com.ar/productos",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Luvant Lens",
      item: "https://luvant.com.ar/productos/lens",
    },
  ],
};

export default function LensLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(lensProductJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      {children}
    </>
  );
}
