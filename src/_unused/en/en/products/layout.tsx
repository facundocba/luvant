import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products and custom software solutions",
  description:
    "Luvant Lens for document processing with OCR, process automation, systems integration, and custom software development.",
  alternates: {
    canonical: "/en/products",
    languages: {
      "es-AR": "https://luvant.com.ar/productos",
      en: "https://luvant.com.ar/en/products",
      "x-default": "https://luvant.com.ar/productos",
    },
  },
  openGraph: {
    title: "Products & solutions | Luvant",
    description:
      "Intelligent OCR, automation, systems integration, and custom development. Technology solutions from Argentina.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products & solutions | Luvant",
    description:
      "Intelligent OCR, automation, systems integration, and custom development. Technology solutions from Argentina.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://luvant.com.ar/en",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Products",
      item: "https://luvant.com.ar/en/products",
    },
  ],
};

export default function ProductsLayout({
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
