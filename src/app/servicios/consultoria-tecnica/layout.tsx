import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultoría técnica de software",
  description:
    "Evaluamos tu stack tecnológico actual y te ayudamos a tomar la decisión correcta. Arquitectura, selección de tecnologías, auditoría de código y planificación técnica.",
  alternates: {
    canonical: "/servicios/consultoria-tecnica",
    languages: {
      "es-AR": "https://luvant.com.ar/servicios/consultoria-tecnica",
      "x-default": "https://luvant.com.ar/servicios/consultoria-tecnica",
    },
  },
  keywords: [
    "consultoría técnica",
    "consultoría de software",
    "consultoría tecnológica Argentina",
    "auditoría de código",
    "arquitectura de software",
    "asesoramiento técnico",
    "selección de tecnologías",
    "CTO externo",
  ],
  openGraph: {
    title: "Consultoría técnica de software | Luvant",
    description:
      "Evaluamos tu stack actual y te ayudamos a tomar la decisión tecnológica correcta. Arquitectura, auditoría y planificación.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoría técnica de software | Luvant",
    description:
      "Evaluamos tu stack actual y te ayudamos a tomar la decisión tecnológica correcta. Arquitectura, auditoría y planificación.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Consultoría técnica de software",
  description:
    "Evaluación de stack tecnológico, arquitectura de software, auditoría de código y planificación técnica para empresas.",
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
  url: "https://luvant.com.ar/servicios/consultoria-tecnica",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué incluye una consultoría técnica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Análisis de tu stack actual, identificación de problemas técnicos, recomendaciones de arquitectura, selección de tecnologías y un plan de acción concreto con prioridades claras.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito tener un equipo técnico para contratar consultoría?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Justamente la consultoría técnica es ideal para empresas que no tienen CTO o equipo de desarrollo propio y necesitan tomar decisiones tecnológicas informadas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Pueden auditar código existente desarrollado por otro equipo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Revisamos calidad de código, arquitectura, seguridad, rendimiento y deuda técnica. Entregamos un informe detallado con recomendaciones priorizadas y accionables.",
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
      name: "Servicios",
      item: "https://luvant.com.ar/servicios",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Consultoría técnica",
      item: "https://luvant.com.ar/servicios/consultoria-tecnica",
    },
  ],
};

export default function ConsultoriaLayout({
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
