export type ServiceLink = {
  slug: string;
  number: string;
  name: string;
  tag: string;
  path: string;
};

export const serviceLinks: ServiceLink[] = [
  {
    slug: "desarrollo-software-a-medida",
    number: "01",
    name: "Software a medida",
    tag: "a medida",
    path: "/servicios/desarrollo-software-a-medida",
  },
  {
    slug: "automatizacion-con-ia",
    number: "02",
    name: "Automatización con IA",
    tag: "IA",
    path: "/servicios/automatizacion-con-ia",
  },
  {
    slug: "datos-y-tableros",
    number: "03",
    name: "Datos y tableros",
    tag: "datos",
    path: "/servicios/datos-y-tableros",
  },
  {
    slug: "integracion-de-sistemas",
    number: "04",
    name: "Integración de sistemas",
    tag: "integración",
    path: "/servicios/integracion-de-sistemas",
  },
  {
    slug: "web-ecommerce-y-apps",
    number: "05",
    name: "Web, e-commerce y apps",
    tag: "web",
    path: "/servicios/web-ecommerce-y-apps",
  },
];

export const lensLink: ServiceLink = {
  slug: "lens",
  number: "06",
  name: "Luvant Lens",
  tag: "lens",
  path: "/productos/lens",
};
