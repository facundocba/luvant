import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Software Development Company in Argentina",
  description:
    "Luvant is a software development company based in Argentina. We build custom solutions with professional standards for those who need concrete results.",
  alternates: {
    canonical: "/en/about",
    languages: {
      "es-AR": "https://luvant.com.ar/nosotros",
      en: "https://luvant.com.ar/en/about",
      "x-default": "https://luvant.com.ar/nosotros",
    },
  },
  openGraph: {
    title: "About Us | Luvant",
    description:
      "Software development company in Argentina. Technical quality, full transparency and measurable impact in every project.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Luvant",
    description:
      "Software development company in Argentina. Technical quality, full transparency and measurable impact in every project.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is Luvant located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Luvant is a 100% remote company based in Argentina. We work with clients across the country and the region.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does Luvant use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use TypeScript, React, Next.js, Python and PostgreSQL. We choose the right tool for each problem, prioritizing quality, performance and maintainability.",
      },
    },
    {
      "@type": "Question",
      name: "How does Luvant's work process look?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work in short sprints with demos every 2 weeks. You get access to the repository, direct communication with engineers and functional deliveries from the start of the project.",
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
      name: "About",
      item: "https://luvant.com.ar/en/about",
    },
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
