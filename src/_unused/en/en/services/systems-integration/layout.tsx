import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Systems Integration",
  description:
    "We connect your ERP, CRM and internal tools with APIs so information flows in real time. No duplicates, no inconsistencies. From Argentina.",
  alternates: {
    canonical: "/en/services/systems-integration",
    languages: {
      "es-AR": "https://luvant.com.ar/servicios/integracion-de-sistemas",
      en: "https://luvant.com.ar/en/services/systems-integration",
      "x-default": "https://luvant.com.ar/en/services/systems-integration",
    },
  },
  keywords: [
    "systems integration",
    "systems integration Argentina",
    "ERP CRM integration",
    "enterprise APIs",
    "connect systems",
    "data synchronization",
    "webhooks",
    "enterprise middleware",
  ],
  openGraph: {
    title: "Enterprise Systems Integration | Luvant",
    description:
      "Your ERP, CRM and internal tools talking to each other. Data synchronized in real time, no duplicates.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Systems Integration | Luvant",
    description:
      "Your ERP, CRM and internal tools talking to each other. Data synchronized in real time, no duplicates.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Enterprise Systems Integration",
  description:
    "Connecting existing platforms through APIs so information flows in real time without duplicates.",
  provider: {
    "@type": "Organization",
    name: "Luvant",
    url: "https://luvant.com.ar",
  },
  areaServed: {
    "@type": "Country",
    name: "Argentina",
  },
  serviceType: "Systems Integration",
  url: "https://luvant.com.ar/en/services/systems-integration",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What systems can be integrated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any system that has an API or allows external connections: ERPs (SAP, Odoo, Tango), CRMs (Salesforce, HubSpot), e-commerce platforms, accounting systems, management tools and internal software.",
      },
    },
    {
      "@type": "Question",
      name: "What if my current system doesn't have an API?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We develop custom APIs and middleware to connect legacy systems that weren't designed to integrate. We can also work directly with databases if necessary.",
      },
    },
    {
      "@type": "Question",
      name: "How are errors handled in integrations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We implement automatic retries, message queues, detailed logs and real-time alerts. If something fails, the system automatically retries and notifies you so you never lose data.",
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
      name: "Systems Integration",
      item: "https://luvant.com.ar/en/services/systems-integration",
    },
  ],
};

export default function SystemsIntegrationLayout({
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
