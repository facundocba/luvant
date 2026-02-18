import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a Luvant para consultas sobre desarrollo de software a medida, procesamiento de documentos con OCR o soluciones tecnológicas para tu proyecto.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto | Luvant",
    description:
      "Iniciá una conversación sobre tu próximo proyecto de software. OCR, automatización y desarrollo a medida desde Argentina.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Luvant",
    description:
      "Iniciá una conversación sobre tu próximo proyecto de software. OCR, automatización y desarrollo a medida desde Argentina.",
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
    availableLanguage: "Spanish",
    areaServed: "AR",
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
      name: "Contacto",
      item: "https://luvant.com.ar/contacto",
    },
  ],
};

export default function ContactoLayout({
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
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      {children}
    </>
  );
}
