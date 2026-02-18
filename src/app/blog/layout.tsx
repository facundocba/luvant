import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Tecnología, OCR y automatización empresarial",
  description:
    "Artículos sobre procesamiento de documentos, OCR, automatización empresarial e ingeniería de software. Contenido técnico desde Luvant, Argentina.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Luvant",
    description:
      "Ideas, técnica y producto. Artículos sobre procesamiento de documentos, ingeniería de software y los problemas reales que resolvemos con tecnología.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Luvant",
    description:
      "Ideas, técnica y producto. Artículos sobre procesamiento de documentos, ingeniería de software y los problemas reales que resolvemos con tecnología.",
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
      name: "Blog",
      item: "https://luvant.com.ar/blog",
    },
  ],
};

export default function BlogLayout({
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
