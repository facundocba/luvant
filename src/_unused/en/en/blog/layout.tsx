import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Technology, OCR and business automation",
  description:
    "Articles on document processing, OCR, business automation and software engineering. Technical content from Luvant, Argentina.",
  alternates: {
    canonical: "/en/blog",
    languages: {
      "es-AR": "https://luvant.com.ar/blog",
      en: "https://luvant.com.ar/en/blog",
      "x-default": "https://luvant.com.ar/blog",
    },
  },
  openGraph: {
    title: "Blog | Luvant",
    description:
      "Ideas, technique, and product. Articles on document processing, software engineering and the real problems we solve with technology.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Luvant",
    description:
      "Ideas, technique, and product. Articles on document processing, software engineering and the real problems we solve with technology.",
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
      name: "Blog",
      item: "https://luvant.com.ar/en/blog",
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
