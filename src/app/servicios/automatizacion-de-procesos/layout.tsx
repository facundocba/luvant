import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatización de procesos empresariales",
  description:
    "Eliminá tareas manuales repetitivas con flujos automatizados. Conectamos tus sistemas con integraciones inteligentes que reducen errores y liberan tiempo. Desde Argentina.",
  alternates: {
    canonical: "/servicios/automatizacion-de-procesos",
    languages: {
      "es-AR": "https://luvant.com.ar/servicios/automatizacion-de-procesos",
      "x-default": "https://luvant.com.ar/servicios/automatizacion-de-procesos",
    },
  },
  keywords: [
    "automatización de procesos",
    "automatización empresarial",
    "automatización de procesos Argentina",
    "flujos automatizados",
    "eliminar tareas manuales",
    "automatización de facturación",
    "RPA Argentina",
    "procesos empresariales",
  ],
  openGraph: {
    title: "Automatización de procesos empresariales | Luvant",
    description:
      "Eliminá horas de trabajo manual. Flujos automatizados que conectan tus sistemas y reducen errores.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatización de procesos empresariales | Luvant",
    description:
      "Eliminá horas de trabajo manual. Flujos automatizados que conectan tus sistemas y reducen errores.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automatización de procesos empresariales",
  description:
    "Eliminación de tareas manuales repetitivas mediante flujos automatizados e integraciones entre sistemas.",
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
  url: "https://luvant.com.ar/servicios/automatizacion-de-procesos",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué procesos se pueden automatizar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Carga de datos entre sistemas, facturación, generación de reportes, notificaciones, sincronización de inventario, procesamiento de documentos, y cualquier tarea manual repetitiva que siga reglas definidas.",
      },
    },
    {
      "@type": "Question",
      name: "¿La automatización reemplaza a mi equipo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. La automatización libera a tu equipo de tareas repetitivas para que puedan enfocarse en trabajo de mayor valor. Es una herramienta que amplifica la capacidad de tu equipo, no que lo reemplaza.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo lleva implementar una automatización?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una automatización simple puede estar funcionando en 1-2 semanas. Flujos más complejos con múltiples sistemas pueden tomar 4-6 semanas. Siempre priorizamos entregar valor rápido con iteraciones incrementales.",
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
      name: "Automatización de procesos",
      item: "https://luvant.com.ar/servicios/automatizacion-de-procesos",
    },
  ],
};

export default function AutomatizacionLayout({
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
