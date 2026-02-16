export const SITE_CONFIG = {
  name: "Luvant",
  url: "https://luvant.com.ar",
  email: "hola@luvant.com.ar",
  description:
    "Desarrollamos soluciones tecnológicas a medida para empresas que necesitan eficiencia, integración y escalabilidad.",
} as const;

export const NAV_LINKS = [
  { label: "Productos", href: "/productos" },
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
  {
    name: "Luvant Flow",
    slug: "flow",
    description:
      "Automatización de procesos empresariales. Conectá tus sistemas y eliminá tareas manuales con flujos inteligentes.",
    badge: "Automatización",
    status: "coming-soon" as const,
    href: "#",
  },
  {
    name: "Luvant Sync",
    slug: "sync",
    description:
      "Integración de datos en tiempo real entre tus plataformas. Sincronizá información sin fricciones ni duplicados.",
    badge: "Integración",
    status: "coming-soon" as const,
    href: "#",
  },
] as const;

export const FEATURES = [
  {
    title: "Desarrollo a medida",
    description:
      "Cada solución se diseña específicamente para las necesidades de tu empresa. Sin templates genéricos.",
    icon: "Code" as const,
  },
  {
    title: "Integración sin fricción",
    description:
      "Nuestros productos se conectan con tus sistemas existentes de manera fluida y sin interrupciones.",
    icon: "Plug" as const,
  },
  {
    title: "Soporte dedicado",
    description:
      "Equipo técnico disponible para acompañarte en cada etapa, desde la implementación hasta el escalado.",
    icon: "Headphones" as const,
  },
] as const;

export const STEPS = [
  {
    number: "01",
    title: "Descubrimiento",
    description:
      "Analizamos tus procesos actuales, identificamos oportunidades de mejora y definimos objetivos claros.",
  },
  {
    number: "02",
    title: "Diseño",
    description:
      "Diseñamos la arquitectura técnica y la experiencia de usuario adaptada a tu flujo de trabajo.",
  },
  {
    number: "03",
    title: "Desarrollo",
    description:
      "Construimos la solución con tecnología moderna, iterando con tu feedback en cada sprint.",
  },
  {
    number: "04",
    title: "Entrega",
    description:
      "Desplegamos, capacitamos a tu equipo y aseguramos una transición sin fricciones.",
  },
] as const;

export const FOOTER_LINKS = {
  productos: [
    { label: "Luvant Lens", href: "/productos/lens" },
    { label: "Luvant Flow", href: "#" },
    { label: "Luvant Sync", href: "#" },
  ],
  empresa: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/contacto" },
  ],
  legal: [
    { label: "Privacidad", href: "#" },
    { label: "Términos", href: "#" },
  ],
} as const;
