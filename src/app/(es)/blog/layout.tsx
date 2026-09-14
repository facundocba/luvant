import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Luvant",
  description:
    "Artículos sobre software a medida, automatización con IA, lectura de documentos e integraciones, escritos desde Córdoba, Argentina.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Luvant",
    description: "Ideas y guías sobre software a medida, automatización con IA y lectura de documentos.",
    images: [{ url: "/og/blog.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Luvant",
    description: "Ideas y guías sobre software a medida, automatización con IA y lectura de documentos.",
    images: ["/og/blog.png"],
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
