import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros - Empresa de desarrollo de software en Argentina",
  description:
    "Luvant es una empresa de desarrollo de software con base en Argentina. Construimos soluciones a medida con estándares profesionales para quienes necesitan resultados concretos.",
  alternates: {
    canonical: "/nosotros",
    languages: {
      "es-AR": "https://luvant.com.ar/nosotros",
      "x-default": "https://luvant.com.ar/nosotros",
    },
  },
  openGraph: {
    title: "Nosotros | Luvant",
    description:
      "Empresa de desarrollo de software en Argentina. Calidad técnica, transparencia total e impacto medible en cada proyecto.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosotros | Luvant",
    description:
      "Empresa de desarrollo de software en Argentina. Calidad técnica, transparencia total e impacto medible en cada proyecto.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Dónde está ubicada Luvant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Luvant es una empresa 100% remota con base en Argentina. Trabajamos con clientes de todo el país y la región.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué tecnologías usa Luvant para desarrollar software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usamos TypeScript, React, Next.js, Python y PostgreSQL. Elegimos la herramienta correcta para cada problema, priorizando calidad, rendimiento y mantenibilidad.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo es el proceso de trabajo de Luvant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trabajamos en sprints cortos con demos cada 2 semanas. Tenés acceso al repositorio, comunicación directa con ingenieros y entregas funcionales desde el inicio del proyecto.",
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
      name: "Nosotros",
      item: "https://luvant.com.ar/nosotros",
    },
  ],
};

export default function NosotrosLayout({
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
