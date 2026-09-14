import type { Service } from "../types";

export const service: Service = {
  slug: "automatizacion-con-ia",
  number: "02",
  name: "Automatización con IA",
  tag: "IA",
  path: "/servicios/automatizacion-con-ia",
  title: "Automatización con IA: facturas, pedidos y documentos que se cargan solos | Luvant",
  description:
    "Programas que leen correos, facturas, pedidos de WhatsApp y PDFs y los cargan en tu sistema. Con IA donde hace falta leer y reglas donde no. Precio cerrado.",
  updatedAt: "2026-09-13",
  h1: "Que los correos, las facturas y los pedidos se carguen ",
  h1Accent: "solos.",
  intro:
    "Un programa que lee lo que te llega (correo, WhatsApp, PDF, foto), saca los datos y los carga donde vos los cargás hoy a mano. Con inteligencia artificial donde hace falta leer, y reglas fijas donde no.",
  windows: [
    {
      kind: "flow",
      title: "automatización · facturas de proveedores · hoy",
      steps: [
        { text: "Correo recibido de Proveedor S.A. · factura-0001-00012345.pdf", time: "09:41", state: "ok" },
        { text: "Factura A leída · CUIT 30-71234567-9 · $148.350 · vence 30/09", time: "09:41", state: "ok" },
        { text: "Proveedor encontrado en el sistema contable · asiento creado", time: "09:42", state: "ok" },
        { text: "Aviso por WhatsApp a quien aprueba · aprobado", time: "09:58", state: "ok" },
        { text: "Correo recibido de Distribuidora Norte · remito-4471.jpg", time: "10:03", state: "run" },
      ],
    },
    {
      kind: "code",
      title: "resumen · esta semana",
      lines: [
        "documentos leídos: 212",
        "cargados sin tocar: 197",
        "a revisar por alguien: 15",
        "errores de tipeo: 0",
      ],
    },
  ],
  situations: [
    {
      when: "te llegan facturas",
      tag: "correo",
      title: "Dos días por mes cargando facturas. Que sean cero.",
      text: "Lee cada factura que llega por correo y la carga en tu sistema contable como la cargarías vos. Sin errores de tipeo.",
      window: {
        kind: "flow",
        title: "facturas",
        steps: [
          { text: "PDF en el correo", state: "ok" },
          { text: "Factura leída", state: "ok" },
          { text: "Cargada en contable", state: "ok" },
        ],
      },
    },
    {
      when: "te piden por WhatsApp",
      tag: "pedidos",
      title: "Setenta pedidos por WhatsApp, y ninguno se pierde.",
      text: "Lee los mensajes, arma el pedido solo y lo deja en pantalla ordenado por hora. Tu WhatsApp sigue siendo tu WhatsApp.",
      window: {
        kind: "flow",
        title: "pedidos",
        steps: [
          { text: "\"2 kg de pan y 6 medialunas\"", state: "ok" },
          { text: "Pedido armado · retira 12:30", state: "ok" },
          { text: "En pantalla del local", state: "run" },
        ],
      },
    },
    {
      when: "clasificás papeles",
      tag: "expedientes",
      title: "Cada papel a la oficina que corresponde, sin que nadie lo lea antes.",
      text: "Lee lo que entra, dice qué es y de quién es, y lo deja en la bandeja correcta con sus datos cargados.",
      window: {
        kind: "flow",
        title: "mesa de entradas",
        steps: [
          { text: "Escaneo recibido", state: "ok" },
          { text: "Es un reclamo · Obras · zona norte", state: "ok" },
          { text: "Derivado a la oficina", state: "ok" },
        ],
      },
    },
  ],
  includesFirst: {
    title: "El programa, escrito para tus documentos.",
    text: "No es una plantilla configurada: se escribe para tus documentos y tu sistema.",
  },
  connections: [
    "Gmail",
    "Outlook",
    "WhatsApp Business",
    "Google Sheets",
    "Excel",
    "Google Drive",
    "AFIP",
    "Tango",
    "Colppy",
    "Xubio",
    "Mercado Pago",
    "Tienda Nube",
    "Google Calendar",
    "tu sistema a medida",
  ],
  questions: [
    {
      q: "«¿Se equivoca?»",
      a: "A veces, como una persona. La diferencia es que cuando no está seguro no adivina: lo deja marcado. Vos decidís cuánta duda tolerás.",
    },
    {
      q: "«¿Mis datos van a parar a la IA?»",
      a: "Solo el texto del documento que hay que leer, en el momento de leerlo, a un proveedor que no lo usa para entrenar ni lo guarda. Nada queda afuera.",
    },
    {
      q: "«¿Y si cambia el formato de un proveedor?»",
      a: "Lee el contenido, no la posición en la hoja: un formato nuevo casi siempre entra solo. Si no, se ajusta y listo.",
    },
  ],
  card: { sketch: "nodes", text: "Correos, facturas y documentos que se leen y se cargan solos. Nadie transcribe." },
};
