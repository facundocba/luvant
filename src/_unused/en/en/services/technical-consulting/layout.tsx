import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Software Consulting",
  description:
    "We evaluate your current tech stack and help you make the right decision. Architecture, technology selection, code audits and technical planning.",
  alternates: {
    canonical: "/en/services/technical-consulting",
    languages: {
      "es-AR": "https://luvant.com.ar/servicios/consultoria-tecnica",
      en: "https://luvant.com.ar/en/services/technical-consulting",
      "x-default": "https://luvant.com.ar/en/services/technical-consulting",
    },
  },
  keywords: [
    "technical consulting",
    "software consulting",
    "technology consulting Argentina",
    "code audit",
    "software architecture",
    "technical advisory",
    "technology selection",
    "external CTO",
  ],
  openGraph: {
    title: "Technical Software Consulting | Luvant",
    description:
      "We evaluate your current stack and help you make the right technology decision. Architecture, audits and planning.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Software Consulting | Luvant",
    description:
      "We evaluate your current stack and help you make the right technology decision. Architecture, audits and planning.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Technical Software Consulting",
  description:
    "Tech stack evaluation, software architecture, code audits and technical planning for businesses.",
  provider: {
    "@type": "Organization",
    name: "Luvant",
    url: "https://luvant.com.ar",
  },
  areaServed: {
    "@type": "Country",
    name: "Argentina",
  },
  serviceType: "Technology Consulting",
  url: "https://luvant.com.ar/en/services/technical-consulting",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a technical consulting engagement include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Analysis of your current stack, identification of technical issues, architecture recommendations, technology selection and a concrete action plan with clear priorities.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a technical team to hire consulting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Technical consulting is ideal for companies that don't have a CTO or in-house development team and need to make informed technology decisions.",
      },
    },
    {
      "@type": "Question",
      name: "Can you audit existing code developed by another team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We review code quality, architecture, security, performance and technical debt. We deliver a detailed report with prioritized, actionable recommendations.",
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
      name: "Services",
      item: "https://luvant.com.ar/en/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Technical Consulting",
      item: "https://luvant.com.ar/en/services/technical-consulting",
    },
  ],
};

export default function TechnicalConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
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
