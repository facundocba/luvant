import type { Metadata } from "next";
import type { Question, Service } from "@/content/types";
import { EMAIL, SITE_NAME, SITE_URL } from "./site";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#org`,
    name: SITE_NAME,
    url: SITE_URL,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Córdoba",
      addressCountry: "AR",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "es-AR",
    publisher: { "@id": `${SITE_URL}/#org` },
  };
}

type PageMeta = {
  title: string;
  description: string;
  path: string;
  ogSlug: string;
  noindex?: boolean;
};

export function pageMetadata(m: PageMeta): Metadata {
  const image = { url: `/og/${m.ogSlug}.png`, width: 1200, height: 630 };
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: m.path },
    openGraph: {
      title: m.title,
      description: m.description,
      url: m.path,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: [image.url],
    },
    robots: m.noindex ? { index: false, follow: false } : undefined,
  };
}

export function faqJsonLd(questions: Question[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.q.replace(/^«|»$/g, ""),
      acceptedAnswer: { "@type": "Answer", text: q.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function serviceJsonLd(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.description,
    url: `${SITE_URL}${s.path}`,
    provider: { "@id": `${SITE_URL}/#org` },
    areaServed: { "@type": "Country", name: "Argentina" },
  };
}

export function serviceMetadata(s: Service): Metadata {
  return pageMetadata({
    title: s.title,
    description: s.description,
    path: s.path,
    ogSlug: s.slug,
  });
}
