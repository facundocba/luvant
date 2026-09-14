import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development in Argentina",
  description:
    "We design and build custom web applications, APIs and internal systems for your business. Software built for your processes, not generic templates. From Argentina.",
  alternates: {
    canonical: "/en/services/custom-software",
    languages: {
      "es-AR": "https://luvant.com.ar/servicios/desarrollo-software-a-medida",
      en: "https://luvant.com.ar/en/services/custom-software",
      "x-default": "https://luvant.com.ar/en/services/custom-software",
    },
  },
  keywords: [
    "custom software development",
    "custom software Argentina",
    "custom web development",
    "enterprise applications",
    "custom systems",
    "custom software",
    "API development",
    "custom dashboards",
  ],
  openGraph: {
    title: "Custom Software Development | Luvant",
    description:
      "Web applications, APIs and internal systems designed for how your business operates. No templates, no limitations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development | Luvant",
    description:
      "Web applications, APIs and internal systems designed for how your business operates. No templates, no limitations.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Software Development",
  description:
    "Design and development of custom web applications, APIs and internal systems tailored to each company's processes.",
  provider: {
    "@type": "Organization",
    name: "Luvant",
    url: "https://luvant.com.ar",
  },
  areaServed: {
    "@type": "Country",
    name: "Argentina",
  },
  serviceType: "Software Development",
  url: "https://luvant.com.ar/en/services/custom-software",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to develop custom software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the scope. A functional MVP can be ready in 4-8 weeks. More complex projects are delivered in phases, with demos every 2 weeks so you can see real progress from the start.",
      },
    },
    {
      "@type": "Question",
      name: "How much does custom software development cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost depends on the complexity and scope. After a free initial meeting, we send a detailed proposal with clear timelines and costs, with no commitment.",
      },
    },
    {
      "@type": "Question",
      name: "What about changes after delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every project includes complete technical documentation and knowledge transfer. Your team can maintain it, or we can continue supporting you with ongoing maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TypeScript, React, Next.js, Python, Node.js and PostgreSQL among others. We choose the right tool for each problem, prioritizing performance and maintainability.",
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
      name: "Custom Software Development",
      item: "https://luvant.com.ar/en/services/custom-software",
    },
  ],
};

export default function CustomSoftwareLayout({
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
