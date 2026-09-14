import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luvant Lens - OCR and document processing",
  description:
    "Luvant Lens: intelligent document processing with OCR and machine learning. Automatic data extraction from invoices, receipts, and forms with +99% accuracy.",
  alternates: {
    canonical: "/en/products/lens",
    languages: {
      "es-AR": "https://luvant.com.ar/productos/lens",
      en: "https://luvant.com.ar/en/products/lens",
      "x-default": "https://luvant.com.ar/productos/lens",
    },
  },
  openGraph: {
    title: "Luvant Lens | Intelligent OCR for business documents",
    description:
      "Automatic data extraction from invoices, receipts, and forms with +99% accuracy and <500ms latency. REST API ready to integrate.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luvant Lens | Intelligent OCR for business documents",
    description:
      "Automatic data extraction from invoices, receipts, and forms with +99% accuracy and <500ms latency. REST API ready to integrate.",
  },
  keywords: [
    "OCR",
    "document processing",
    "data extraction",
    "electronic invoices",
    "machine learning",
    "OCR API",
    "invoice automation",
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
    "Intelligent document processing with OCR and machine learning. Automatic data extraction from invoices, receipts, and forms with +99% accuracy.",
  url: "https://luvant.com.ar/en/products/lens",
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
    "Advanced OCR for Argentine documents",
    "Data extraction from invoices, receipts, and forms",
    "+99% accuracy",
    "Latency under 500ms",
    "Documented REST API",
    "Support for 15+ document types",
    "Adaptive machine learning",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of documents can Luvant Lens process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Luvant Lens supports over 15 document types, including AFIP electronic invoices (A, B, C), delivery notes, purchase orders, receipts, quotes, and custom forms.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is Luvant Lens OCR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Luvant Lens achieves over 99% accuracy in data extraction from Argentine documents, with latency under 500 milliseconds per document.",
      },
    },
    {
      "@type": "Question",
      name: "How does Luvant Lens integrate with my systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Luvant Lens exposes a fully documented REST API. You can integrate it with your ERP, accounting system, or any platform that supports webhooks or HTTP calls.",
      },
    },
    {
      "@type": "Question",
      name: "Does Luvant Lens work with AFIP invoices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Luvant Lens is specifically trained for Argentine electronic invoicing formats (AFIP), including A, B, and C invoices, with extraction of CUIT, voucher number, amounts, and line items.",
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
      name: "Home",
      item: "https://luvant.com.ar/en",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Products",
      item: "https://luvant.com.ar/en/products",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Luvant Lens",
      item: "https://luvant.com.ar/en/products/lens",
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
