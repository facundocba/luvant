import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos y soluciones de software a medida",
  description:
    "Luvant Lens para procesamiento de documentos con OCR, automatización de procesos, integración de sistemas y desarrollo de software a medida.",
  alternates: {
    canonical: "/productos",
  },
  openGraph: {
    title: "Productos y soluciones | Luvant",
    description:
      "OCR inteligente, automatización, integración de sistemas y desarrollo a medida. Soluciones tecnológicas desde Argentina.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Productos y soluciones | Luvant",
    description:
      "OCR inteligente, automatización, integración de sistemas y desarrollo a medida. Soluciones tecnológicas desde Argentina.",
  },
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
  ],
};

export default function ProductosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
