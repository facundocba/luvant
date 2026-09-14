import type { Question, WindowSpec } from "./types";
import { searchWindow } from "./home";

export const lens = {
  title: "Luvant Lens: miles de documentos leídos, ordenados y buscables",
  description:
    "Lens lee los documentos de tu organismo o tu empresa (ordenanzas, decretos, resoluciones, contratos), saca lo importante y los deja buscables con el texto al día. API para integradores.",
  path: "/productos/lens",
  updatedAt: "2026-09-13",
  eyebrow: "Producto · Luvant Lens",
  h1: "Dejá de buscar a mano en miles de PDFs. ",
  h1Accent: "Lens los lee por vos.",
  intro:
    "Lee los documentos de tu organismo o tu empresa, saca lo importante y los deja buscables, con el texto al día. Lo que hoy hacés abriendo uno por uno.",
  cta: { label: "Pedí una demo", href: "/contacto?tema=lens" },
  note: "Con tus propios documentos.",
  tag: "Normativa al día",
  how: {
    eyebrow: "Cómo funciona",
    title: "De una carpeta de PDFs a un buscador con el texto al día.",
    steps: [
      {
        tag: "subir",
        title: "Subís los documentos",
        text: "Una carpeta, un disco, o directo por API. Escaneados o nativos.",
        window: { kind: "code", title: "api", lines: ["POST /api/v1/documents", "→ { \"status\": \"queued\" }"] } as WindowSpec,
      },
      {
        tag: "leer",
        title: "Lens los lee",
        text: "OCR si hace falta; después saca número, fecha, órgano, tema y qué modifica o deroga.",
        window: { kind: "code", title: "extracción", lines: ["Ordenanza 1.234/2019", "órgano: Concejo Deliberante", "modifica: Ord. 987/2015 · 0.94"] } as WindowSpec,
      },
      {
        tag: "revisar",
        title: "Tu equipo revisa lo dudoso",
        text: "Solo lo que Lens no está seguro llega al panel. Se confirma con un clic.",
        window: { kind: "task", title: "panel · tarea", question: "¿1.402/2022 modifica a 1.234/2019?", meta: "art. 1º · confianza 0.71" } as WindowSpec,
      },
      {
        tag: "publicar",
        title: "Queda publicado y buscable",
        text: "Buscador para tu gente o para el público, con el texto ordenado al día.",
        window: {
          kind: "search",
          title: "buscador",
          query: "licencia de conducir",
          total: "12",
          facets: [],
          rows: [{ title: "Ord. 2.011/2023", sub: "Licencias · vigente", chip: "Vigente", chipOn: true }],
        } as WindowSpec,
      },
    ],
  },
  who: {
    eyebrow: "Para quién",
    columns: [
      {
        id: "organismos",
        title: "Organismos y empresas con normativa propia",
        text: "Ordenanzas, decretos, resoluciones, reglamentos internos, contratos con adendas: todo lo que se modifica con el tiempo y hay que saber qué está vigente.",
        chips: ["vigencia", "texto al día", "buscador público", "panel de revisión", "historial"],
      },
      {
        id: "integradores",
        title: "Integradores y sistemas de gestión",
        text: "Lens como pieza de tu sistema: mandás PDFs, recibís los datos por webhook, exportás todo cuando quieras.",
        chips: ["API REST", "webhooks firmados", "keys con permisos", "export completo"],
      },
    ],
  },
  questions: [
    {
      q: "«¿Sirve para documentos que no son normativa?»",
      a: "Sí. Reglamentos internos, contratos con adendas, convenios: cualquier cosa que se modifique con el tiempo y haya que saber qué versión vale.",
    },
    {
      q: "«¿Y si son escaneos viejos?»",
      a: "Lens los pasa por OCR primero. Si una página sale mal, lo marca para que alguien la mire; no inventa.",
    },
    {
      q: "«¿Dónde quedan mis documentos?»",
      a: "Donde vos digas: en tu servidor o en el nuestro. Podés exportar todo, cuando quieras, en un solo archivo.",
    },
  ] as Question[],
  closing: {
    eyebrow: "Tu caso",
    title: "¿Cuántos documentos tenés sin leer?",
    text: "Mandanos una muestra. Te mostramos cómo quedan leídos, ordenados y buscables, y te decimos cuánto sale para el total.",
    note: "Con tus propios documentos · Hablás con quien lo programa.",
  },
};

export const lensSearchWindow = {
  ...searchWindow,
  title: "buscador · normativa · tu organismo",
  facets: [{ label: "Todas", on: true }, { label: "Ordenanzas" }, { label: "Decretos" }, { label: "Vigentes" }],
} as WindowSpec;

export const lensNormWindow: WindowSpec = {
  kind: "norm",
  title: "ficha · texto ordenado",
  name: "Ordenanza 1.234/2019",
  meta: "Habilitaciones comerciales · 4 relaciones · 12 págs.",
  chip: "Vigente",
  tabs: ["Original", "Relaciones", "Texto ordenado", "Historial"],
  activeTab: 2,
  paragraphs: [
    {
      article: "Art. 3º",
      parts: [
        { text: "El plazo de la habilitación será de " },
        { text: "dos años", kind: "del" },
        { text: " " },
        { text: "cinco años", kind: "ins" },
        { text: ", renovable por períodos iguales." },
        { text: "· sustituido por Ord. 1.402/2022, art. 1º", kind: "note" },
      ],
    },
    {
      article: "Art. 4º",
      parts: [{ text: "La solicitud se presentará ante la Dirección de Comercio con la documentación del Anexo I." }],
    },
  ],
};
