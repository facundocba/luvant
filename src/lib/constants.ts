export const SITE_CONFIG = {
  name: "Luvant",
  url: "https://luvant.com.ar",
  email: "hola@luvant.com.ar",
  description:
    "Desarrollo de software a medida, automatización de procesos e integración de sistemas.",
} as const;

export const NAV_LINKS = [
  { label: "Productos", href: "/productos" },
  { label: "Servicios", href: "/servicios/desarrollo-software-a-medida" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
] as const;

export const PRODUCTS = [
  {
    name: "Luvant Lens",
    slug: "lens",
    description:
      "Procesamiento inteligente de documentos. Extraé datos de facturas, recetas, formularios y más con precisión mediante OCR avanzado.",
    badge: "OCR · Documentos",
    status: "active" as const,
    href: "/productos/lens",
  },
] as const;

export const SOLUTIONS = [
  {
    title: "Automatización de procesos",
    description:
      "Eliminá horas de trabajo manual. Conectamos tus sistemas con flujos inteligentes que se ejecutan solos.",
    icon: "Workflow" as const,
  },
  {
    title: "Integración de sistemas",
    description:
      "Tu ERP, CRM y herramientas internas hablando entre sí. Datos sincronizados en tiempo real, sin duplicados.",
    icon: "RefreshCw" as const,
  },
  {
    title: "Software a medida",
    description:
      "Plataformas, dashboards y APIs diseñadas exclusivamente para cómo opera tu negocio.",
    icon: "Code" as const,
  },
  {
    title: "Consultoría técnica",
    description:
      "Evaluamos tu stack actual y te ayudamos a tomar la decisión tecnológica correcta.",
    icon: "Lightbulb" as const,
  },
] as const;

export const FEATURES = [
  {
    title: "Hecho a tu medida",
    description:
      "No adaptamos plantillas. Diseñamos y construimos software desde cero, pensado para cómo opera tu negocio.",
    icon: "Code" as const,
  },
  {
    title: "Se conecta con todo",
    description:
      "APIs documentadas, webhooks y SDKs. Integramos con tu ERP, CRM o cualquier sistema que ya uses.",
    icon: "Plug" as const,
  },
  {
    title: "Soporte humano",
    description:
      "Hablás con ingenieros, no con bots. Acompañamiento técnico desde la implementación hasta el escalado.",
    icon: "Headphones" as const,
  },
] as const;

export const STEPS = [
  {
    number: "01",
    title: "Entendemos tu problema",
    description:
      "Escuchamos, analizamos tus procesos y entendemos qué necesita tu negocio antes de escribir una línea de código.",
  },
  {
    number: "02",
    title: "Diseñamos la solución",
    description:
      "Definimos la arquitectura, las integraciones y la experiencia de usuario. Vos aprobás antes de avanzar.",
  },
  {
    number: "03",
    title: "Construimos y mostramos",
    description:
      "Desarrollamos en sprints cortos con demos cada 2 semanas. Ves avances reales, no promesas.",
  },
  {
    number: "04",
    title: "Entregamos y acompañamos",
    description:
      "Desplegamos, capacitamos a tu equipo y seguimos disponibles. El soporte no termina con la entrega.",
  },
] as const;

export const FOOTER_LINKS = {
  productos: [
    { label: "Luvant Lens", href: "/productos/lens" },
    { label: "Soluciones", href: "/productos" },
  ],
  servicios: [
    {
      label: "Desarrollo a medida",
      href: "/servicios/desarrollo-software-a-medida",
    },
    { label: "Automatización", href: "/servicios/automatizacion-de-procesos" },
    {
      label: "Integración de sistemas",
      href: "/servicios/integracion-de-sistemas",
    },
    { label: "Consultoría técnica", href: "/servicios/consultoria-tecnica" },
  ],
  empresa: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/contacto" },
  ],
} as const;
