import type { Service } from "../types";

export const service: Service = {
  slug: "integracion-de-sistemas",
  number: "04",
  name: "Integración de sistemas",
  tag: "integración",
  path: "/servicios/integracion-de-sistemas",
  title: "Integración de sistemas: Tienda Nube, AFIP, contable y WhatsApp conectados | Luvant",
  description:
    "Conectamos tu tienda, tu facturación, tu stock y tu WhatsApp para que los datos pasen solos, sin cargar nada dos veces. Precio cerrado.",
  updatedAt: "2026-09-13",
  h1: "Tus sistemas hablando entre sí. ",
  h1Accent: "Nada cargado dos veces.",
  intro:
    "Tu tienda, tu facturación, tu WhatsApp, tu planilla: hoy alguien copia datos de uno al otro. Los conectamos para que pase solo, en el momento, sin errores de tipeo.",
  windows: [
    {
      kind: "flow",
      title: "integración · tienda → facturación",
      steps: [
        { text: "Pedido #4471 en Tienda Nube · $23.900", time: "11:02", state: "ok" },
        { text: "Factura B emitida en AFIP · CAE recibido", time: "11:02", state: "ok" },
        { text: "Remito generado · stock descontado", time: "11:02", state: "ok" },
        { text: "Factura enviada al cliente por correo", time: "11:03", state: "ok" },
        { text: "Pedido #4472 en Tienda Nube", time: "11:09", state: "run" },
      ],
    },
    {
      kind: "code",
      title: "hoy",
      lines: ["pedidos: 84", "facturados: 84", "cargados a mano: 0", "stock desfasado: 0"],
    },
  ],
  situations: [
    {
      when: "vendés online y facturás aparte",
      tag: "facturación",
      title: "Cada venta, facturada sola.",
      text: "El pedido entra, la factura sale en AFIP y el cliente la recibe, sin que nadie tipee un CUIT.",
      window: {
        kind: "flow",
        title: "venta → factura",
        steps: [
          { text: "Pedido en la tienda", state: "ok" },
          { text: "Factura en AFIP", state: "ok" },
          { text: "Enviada al cliente", state: "ok" },
        ],
      },
    },
    {
      when: "tu stock vive en dos lugares",
      tag: "stock",
      title: "Un stock, todas las bocas.",
      text: "Lo que se vende en el local se descuenta en la tienda, y al revés.",
      window: {
        kind: "flow",
        title: "stock",
        steps: [
          { text: "Venta en el local · 2 unidades", state: "ok" },
          { text: "Tienda Nube: 7 → 5", state: "ok" },
          { text: "MercadoLibre: 7 → 5", state: "run" },
        ],
      },
    },
    {
      when: "pasás datos de un sistema a otro a mano",
      tag: "datos",
      title: "Lo que entra por un lado, sale por el otro.",
      text: "Del formulario al CRM, del CRM a la planilla, de la planilla al contable. Solo.",
      window: {
        kind: "flow",
        title: "formulario → CRM",
        steps: [
          { text: "Consulta desde el sitio", state: "ok" },
          { text: "Contacto creado en el CRM", state: "ok" },
          { text: "Fila agregada en la planilla", state: "ok" },
        ],
      },
    },
  ],
  includesFirst: {
    title: "La conexión, escrita para tus dos sistemas.",
    text: "No un conector genérico: lo que tu operación necesita que pase entre ellos.",
  },
  connections: [
    "Tienda Nube",
    "MercadoLibre",
    "Mercado Pago",
    "AFIP",
    "Tango",
    "Colppy",
    "Xubio",
    "WhatsApp Business",
    "Google Sheets",
    "Gmail",
    "APIs propias",
  ],
  questions: [
    {
      q: "«¿Mi sistema tiene API?»",
      a: "Casi todos los conocidos sí. Si el tuyo no, hay otras formas (archivos, base de datos, la misma pantalla) y te decimos cuál conviene.",
    },
    {
      q: "«¿Se rompe si uno de los sistemas cambia?»",
      a: "Puede pasar; por eso avisa cuando algo no cuadra en vez de seguir de largo, y lo ajustamos.",
    },
    {
      q: "«¿Reemplaza a lo que uso?»",
      a: "No. Conecta lo que ya usás; nadie cambia de sistema.",
    },
  ],
  card: { sketch: "systems", text: "Tu facturación, tu ERP y tu WhatsApp hablando entre sí. Nada cargado dos veces." },
};
