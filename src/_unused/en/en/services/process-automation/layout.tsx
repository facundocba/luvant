import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Process Automation",
  description:
    "Eliminate repetitive manual tasks with automated workflows. We connect your systems with smart integrations that reduce errors and free up time. From Argentina.",
  alternates: {
    canonical: "/en/services/process-automation",
    languages: {
      "es-AR": "https://luvant.com.ar/servicios/automatizacion-de-procesos",
      en: "https://luvant.com.ar/en/services/process-automation",
      "x-default": "https://luvant.com.ar/en/services/process-automation",
    },
  },
  keywords: [
    "process automation",
    "business automation",
    "process automation Argentina",
    "automated workflows",
    "eliminate manual tasks",
    "billing automation",
    "RPA Argentina",
    "business processes",
  ],
  openGraph: {
    title: "Business Process Automation | Luvant",
    description:
      "Eliminate hours of manual work. Automated workflows that connect your systems and reduce errors.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Process Automation | Luvant",
    description:
      "Eliminate hours of manual work. Automated workflows that connect your systems and reduce errors.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Business Process Automation",
  description:
    "Elimination of repetitive manual tasks through automated workflows and integrations between systems.",
  provider: {
    "@type": "Organization",
    name: "Luvant",
    url: "https://luvant.com.ar",
  },
  areaServed: {
    "@type": "Country",
    name: "Argentina",
  },
  serviceType: "Business Process Automation",
  url: "https://luvant.com.ar/en/services/process-automation",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What processes can be automated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Data entry between systems, billing, report generation, notifications, inventory synchronization, document processing, and any repetitive manual task that follows defined rules.",
      },
    },
    {
      "@type": "Question",
      name: "Does automation replace my team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Automation frees your team from repetitive tasks so they can focus on higher-value work. It's a tool that amplifies your team's capacity, not one that replaces them.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to implement an automation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A simple automation can be up and running in 1-2 weeks. More complex workflows involving multiple systems can take 4-6 weeks. We always prioritize delivering value quickly with incremental iterations.",
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
      name: "Process Automation",
      item: "https://luvant.com.ar/en/services/process-automation",
    },
  ],
};

export default function ProcessAutomationLayout({
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
