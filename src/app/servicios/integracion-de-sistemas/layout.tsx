import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integración de sistemas empresariales",
  description:
    "Conectamos tu ERP, CRM y herramientas internas con APIs para que la información fluya en tiempo real. Sin duplicados, sin inconsistencias. Desde Argentina.",
  alternates: {
    canonical: "/servicios/integracion-de-sistemas",
    languages: {
      "es-AR": "https://luvant.com.ar/servicios/integracion-de-sistemas",
      "x-default": "https://luvant.com.ar/servicios/integracion-de-sistemas",
    },
  },
  keywords: [
    "integración de sistemas",
    "integración de sistemas Argentina",
    "integración ERP CRM",
    "APIs empresariales",
    "conectar sistemas",
    "sincronización de datos",
    "webhooks",
    "middleware empresarial",
  ],
  openGraph: {
    title: "Integración de sistemas empresariales | Luvant",
    description:
      "Tu ERP, CRM y herramientas internas hablando entre sí. Datos sincronizados en tiempo real, sin duplicados.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Integración de sistemas empresariales | Luvant",
    description:
      "Tu ERP, CRM y herramientas internas hablando entre sí. Datos sincronizados en tiempo real, sin duplicados.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Integración de sistemas empresariales",
  description:
    "Conexión de plataformas existentes mediante APIs para que la información fluya en tiempo real sin duplicados.",
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
  url: "https://luvant.com.ar/servicios/integracion-de-sistemas",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué sistemas se pueden integrar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cualquier sistema que tenga una API o permita conexiones externas: ERPs (SAP, Odoo, Tango), CRMs (Salesforce, HubSpot), plataformas de e-commerce, sistemas contables, herramientas de gestión y software interno.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si mi sistema actual no tiene API?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Desarrollamos APIs y middlewares personalizados para conectar sistemas legacy que no fueron diseñados para integrarse. También podemos trabajar con bases de datos directamente si es necesario.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se manejan los errores en las integraciones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Implementamos reintentos automáticos, colas de mensajes, logs detallados y alertas en tiempo real. Si algo falla, el sistema reintenta automáticamente y te notifica para que nunca pierdas datos.",
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
      name: "Integración de sistemas",
      item: "https://luvant.com.ar/servicios/integracion-de-sistemas",
    },
  ],
};

export default function IntegracionLayout({
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
