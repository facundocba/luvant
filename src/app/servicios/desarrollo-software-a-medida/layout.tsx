import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desarrollo de software a medida en Argentina",
  description:
    "Diseñamos y construimos aplicaciones web, APIs y sistemas internos a medida para tu empresa. Software pensado para tus procesos, no plantillas genéricas. Desde Argentina.",
  alternates: {
    canonical: "/servicios/desarrollo-software-a-medida",
    languages: {
      "es-AR": "https://luvant.com.ar/servicios/desarrollo-software-a-medida",
      "x-default":
        "https://luvant.com.ar/servicios/desarrollo-software-a-medida",
    },
  },
  keywords: [
    "desarrollo de software a medida",
    "software a medida Argentina",
    "desarrollo web a medida",
    "aplicaciones empresariales",
    "sistemas a medida",
    "software personalizado",
    "desarrollo de APIs",
    "dashboards a medida",
  ],
  openGraph: {
    title: "Desarrollo de software a medida | Luvant",
    description:
      "Aplicaciones web, APIs y sistemas internos diseñados para cómo opera tu negocio. Sin plantillas, sin limitaciones.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo de software a medida | Luvant",
    description:
      "Aplicaciones web, APIs y sistemas internos diseñados para cómo opera tu negocio. Sin plantillas, sin limitaciones.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Desarrollo de software a medida",
  description:
    "Diseño y construcción de aplicaciones web, APIs y sistemas internos adaptados a los procesos de cada empresa.",
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
  url: "https://luvant.com.ar/servicios/desarrollo-software-a-medida",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto tarda desarrollar un software a medida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del alcance. Un MVP funcional puede estar listo en 4-8 semanas. Proyectos más complejos se entregan en fases, con demos cada 2 semanas para que veas avances reales desde el inicio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta un desarrollo de software a medida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El costo depende de la complejidad y el alcance. Después de una reunión inicial gratuita, enviamos una propuesta detallada con tiempos y costos claros, sin compromiso.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si necesito cambios después de la entrega?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cada proyecto incluye documentación técnica completa y transferencia de conocimiento. Tu equipo puede mantenerlo, o podemos seguir acompañándote con soporte continuo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Con qué tecnologías desarrollan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TypeScript, React, Next.js, Python, Node.js y PostgreSQL entre otras. Elegimos la herramienta correcta para cada problema, priorizando rendimiento y mantenibilidad.",
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
      name: "Desarrollo de software a medida",
      item: "https://luvant.com.ar/servicios/desarrollo-software-a-medida",
    },
  ],
};

export default function DesarrolloLayout({
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
