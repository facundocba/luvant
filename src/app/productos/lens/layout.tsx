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
      {children}
    </>
  );
}
