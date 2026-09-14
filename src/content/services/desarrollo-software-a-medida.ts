import type { Service } from "../types";

export const service: Service = {
  slug: "desarrollo-software-a-medida",
  number: "01",
  name: "Software a medida",
  tag: "a medida",
  path: "/servicios/desarrollo-software-a-medida",
  title: "Software a medida para negocios, estudios y organismos | Luvant",
  description:
    "Sistemas de pedidos, turnos, stock y expedientes escritos para cómo trabaja tu negocio. Precio cerrado antes de empezar. Córdoba, Argentina.",
  updatedAt: "2026-09-13",
  h1: "El sistema que tu negocio necesita ",
  h1Accent: "y no existe.",
  intro:
    "Pedidos, turnos, stock, expedientes: lo que hoy llevás en papel, en planillas o en la cabeza. Un programa escrito para cómo trabajás vos, no una plantilla que te obliga a trabajar como ella.",
  windows: [
    {
      kind: "list",
      title: "sistema de pedidos · panadería",
      rows: [
        { title: "#1041 · Retira 12:30", sub: "2 kg pan, 6 medialunas · WhatsApp", chip: "Listo", chipOn: true },
        { title: "#1042 · Retira 12:45", sub: "1 torta 20 personas · mostrador", chip: "En horno" },
        { title: "#1043 · Envío 13:00", sub: "4 kg pan · WhatsApp", chip: "Pendiente" },
        { title: "#1044 · Retira 13:15", sub: "12 facturas, 1 kg pan · teléfono", chip: "Pendiente" },
      ],
    },
    {
      kind: "dashboard",
      title: "resumen · hoy",
      kpis: [
        { value: "38", label: "pedidos hoy" },
        { value: "29", label: "listos" },
        { value: "3", label: "sin retirar" },
      ],
      bars: [30, 55, 80, 100, 70, 40, 25],
    },
  ],
  situations: [
    {
      when: "tomás pedidos por WhatsApp o teléfono",
      tag: "pedidos",
      title: "Setenta pedidos por día, y ninguno se pierde.",
      text: "Los lee, arma el pedido y lo deja en pantalla ordenado por hora de retiro. Sobre el mismo WhatsApp que ya usás.",
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
      when: "atendés con turnos",
      tag: "turnos",
      title: "Los turnos se dan solos. El mostrador sigue atendiendo.",
      text: "Da el turno, lo confirma y lo recuerda el día anterior, contra tu Google Calendar de siempre.",
      window: {
        kind: "flow",
        title: "turnos",
        steps: [
          { text: "Turno pedido · jueves 16:30", state: "ok" },
          { text: "Confirmado en Google Calendar", state: "ok" },
          { text: "Recordatorio el miércoles", state: "run" },
        ],
      },
    },
    {
      when: "llevás expedientes o trámites",
      tag: "expedientes",
      title: "Cada trámite con su estado, sin preguntar en qué oficina quedó.",
      text: "Quién lo tiene, qué falta y desde cuándo, en una pantalla que ve todo el equipo.",
      window: {
        kind: "list",
        title: "trámites",
        rows: [
          { title: "Exp. 2026-0412", sub: "Habilitación · Comercio · 3 días", chip: "En curso", chipOn: true },
          { title: "Exp. 2026-0409", sub: "Falta plano · Obras", chip: "Falta" },
        ],
      },
    },
  ],
  includesFirst: {
    title: "El programa, escrito para lo tuyo.",
    text: "No es una plantilla configurada: se escribe para cómo trabajás.",
  },
  connections: [
    "Google Sheets",
    "Excel",
    "Google Calendar",
    "WhatsApp Business",
    "AFIP",
    "Mercado Pago",
    "impresora de tickets",
    "lector de códigos",
    "tu sistema contable",
  ],
  questions: [
    {
      q: "«¿No me conviene comprar un sistema hecho?»",
      a: "Si hay uno que hace exactamente lo tuyo, sí, y te lo decimos. Los sistemas hechos sirven cuando tu negocio trabaja como ellos; cuando no, terminás trabajando para el sistema.",
    },
    {
      q: "«¿Quién lo mantiene después?»",
      a: "Nosotros. Y el código es tuyo: si algún día querés que lo siga otro, puede.",
    },
    {
      q: "«¿Necesito servidores o licencias?»",
      a: "No. Corre donde convenga (tu PC, un servidor chico, la nube) y no hay licencias por usuario.",
    },
  ],
  card: { sketch: "lines", text: "El sistema que necesitás y no existe: pedidos, turnos, stock, expedientes." },
};
