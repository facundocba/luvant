import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactanos - Consultoría de software a medida",
  description:
    "Contacta a Luvant para consultas sobre desarrollo de software a medida, procesamiento de documentos con OCR o soluciones tecnológicas para tu proyecto.",
  alternates: {
    canonical: "/contacto",
    languages: {
      "es-AR": "https://luvant.com.ar/contacto",
      "x-default": "https://luvant.com.ar/contacto",
    },
  },
  openGraph: {
    title: "Contactanos - Consultoría de software a medida | Luvant",
    description:
      "Iniciá una conversación sobre tu próximo proyecto de software. OCR, automatización y desarrollo a medida desde Argentina.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contactanos - Consultoría de software a medida | Luvant",
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta un proyecto de software a medida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del alcance. Después de la primera reunión enviamos una estimación detallada sin compromiso.",
      },
    },
    {
      "@type": "Question",
      name: "¿Con qué tipo de clientes trabaja Luvant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Con empresas, emprendedores y profesionales independientes. B2B o B2C, lo que importa es tener un problema concreto que resolver con tecnología.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo ver una demo de Luvant Lens antes de contratar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Agendamos una demo personalizada de Lens con documentos de tu industria.",
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
