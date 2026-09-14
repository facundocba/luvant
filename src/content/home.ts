import type { SketchKind, WindowSpec } from "./types";

export const home = {
  title: "Luvant: software a medida y automatización con IA para tu negocio · Córdoba",
  description:
    "Dejá de perder horas en lo mismo de todos los días. Software a medida, automatizaciones con IA, tableros, integraciones y Luvant Lens. Precio cerrado antes de empezar.",
  updatedAt: "2026-09-13",
  h1: "Dejá de perder horas en lo mismo de ",
  h1Accent: "todos los días.",
  intro:
    "Software a medida y automatizaciones con IA para tu empresa, tu estudio o tu organismo. Precio cerrado antes de empezar.",
  sticker: { cap: "Cliente", main: "Municipalidad de Embalse", sub: "Córdoba" },
  cards: {
    eyebrow: "Qué hacemos",
    title: "Seis maneras de sacarte trabajo de encima.",
    text: "Cada una se escribe para tu operación y se enchufa a lo que ya usás.",
    items: [
      { sketch: "lines", text: "El sistema que necesitás y no existe: pedidos, turnos, stock, expedientes." },
      { sketch: "nodes", text: "Correos, facturas y documentos que se leen y se cargan solos. Nadie transcribe." },
      { sketch: "bars", text: "Todas tus planillas en un tablero que se entiende de un vistazo." },
      { sketch: "systems", text: "Tu facturación, tu ERP y tu WhatsApp hablando entre sí. Nada cargado dos veces." },
      { sketch: "shop", text: "Tu sitio, tu tienda o tu app, conectados a tu stock y tu cobro." },
    ] as { sketch: SketchKind; text: string }[],
    lens: { text: "Miles de documentos leídos y buscables. Para organismos e integradores.", cta: "ver Lens →" },
  },
  lens: {
    eyebrow: "Producto · Luvant Lens",
    title: "Miles de documentos leídos, ordenados y buscables.",
    text: "OCR, extracción, texto ordenado con cada modificación aplicada, buscador y panel de revisión. Lo que un organismo tarda años en ordenar a mano, en semanas.",
    columns: [
      { title: "Para organismos", text: "Ordenanzas, decretos y resoluciones con su vigencia y el texto al día." },
      { title: "Para integradores", text: "API de documentos: subís un PDF, recibís los datos por webhook." },
    ],
    cta: { label: "Ver Luvant Lens", href: "/productos/lens" },
    tag: "Normativa al día",
  },
};

export const normWindow: WindowSpec = {
  kind: "norm",
  title: "luvant lens · ficha de norma",
  name: "Ordenanza 1.234/2019 · Habilitaciones comerciales",
  meta: "Concejo Deliberante · 4 relaciones",
  chip: "Vigente",
  tabs: ["Texto original", "Relaciones", "Texto ordenado"],
  activeTab: 2,
  paragraphs: [
    {
      article: "Art. 3º",
      parts: [
        { text: "El plazo de la habilitación será de " },
        { text: "dos años", kind: "del" },
        { text: " " },
        { text: "cinco años", kind: "ins" },
        { text: ", renovable." },
        { text: "· sust. por Ord. 1.402/2022", kind: "note" },
      ],
    },
  ],
};

export const salesWindow: WindowSpec = {
  kind: "flow",
  title: "tablero · ventas",
  steps: [
    { text: "Planilla de caja leída", time: "08:00", state: "ok" },
    { text: "Stock actualizado", time: "08:00", state: "ok" },
    { text: "Resumen al dueño", time: "…", state: "run" },
  ],
};

export const invoicesWindow: WindowSpec = {
  kind: "flow",
  title: "automatización · facturas",
  steps: [
    { text: "Correo recibido de Proveedor S.A.", time: "09:41", state: "ok" },
    { text: "Factura A leída · CUIT, total", time: "09:41", state: "ok" },
    { text: "Cargada en el sistema contable", time: "09:42", state: "ok" },
    { text: "Aviso por WhatsApp", time: "…", state: "run" },
  ],
};

export const searchWindow: WindowSpec = {
  kind: "search",
  title: "normativa · tu organismo",
  query: "habilitación comercial 2019",
  total: "3.412 normas",
  facets: [
    { label: "Todas", on: true },
    { label: "Ordenanzas" },
    { label: "Decretos" },
    { label: "Vigentes" },
    { label: "2015–2024" },
  ],
  rows: [
    { title: "Ordenanza 1.234/2019", sub: "Régimen de habilitaciones comerciales · Concejo Deliberante", chip: "Vigente", chipOn: true },
    { title: "Decreto 456/2021", sub: "Reglamenta la Ord. 1.234/2019 · Departamento Ejecutivo", chip: "Reglamenta" },
    { title: "Ordenanza 1.402/2022", sub: "Modifica el art. 3º de la Ord. 1.234/2019", chip: "Modifica" },
  ],
};
