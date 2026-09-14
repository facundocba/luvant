import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Custom Software Consulting",
  description:
    "Contact Luvant for inquiries about custom software development, document processing with OCR or technology solutions for your project.",
  alternates: {
    canonical: "/en/contact",
    languages: {
      "es-AR": "https://luvant.com.ar/contacto",
      en: "https://luvant.com.ar/en/contact",
      "x-default": "https://luvant.com.ar/contacto",
    },
  },
  openGraph: {
    title: "Contact Us - Custom Software Consulting | Luvant",
    description:
      "Start a conversation about your next software project. OCR, automation and custom development from Argentina.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Custom Software Consulting | Luvant",
    description:
      "Start a conversation about your next software project. OCR, automation and custom development from Argentina.",
  },
};

const contactPointJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Luvant",
  url: "https://luvant.com.ar",
  contactPoint: {
    "@type": "ContactPoint",
    email: "hola@luvant.com.ar",
    contactType: "customer support",
    availableLanguage: ["Spanish", "English"],
    areaServed: "AR",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a custom software project cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the scope. After the first meeting we send a detailed estimate with no commitment.",
      },
    },
    {
      "@type": "Question",
      name: "What type of clients does Luvant work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With companies, entrepreneurs and independent professionals. B2B or B2C, what matters is having a concrete problem to solve with technology.",
      },
    },
    {
      "@type": "Question",
      name: "Can I see a demo of Luvant Lens first?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We schedule a personalized Lens demo with documents from your industry.",
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
      name: "Contact",
      item: "https://luvant.com.ar/en/contact",
    },
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPointJsonLd),
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
