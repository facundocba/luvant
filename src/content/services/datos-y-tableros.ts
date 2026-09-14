import type { Service } from "../types";

export const service: Service = {
  slug: "datos-y-tableros",
  number: "03",
  name: "Datos y tableros",
  tag: "datos",
  path: "/servicios/datos-y-tableros",
  title: "Tableros de control para pymes: todos tus números en una pantalla | Luvant",
  description:
    "Unificamos planillas, sistema contable y tienda en un tablero que se actualiza solo. Ventas, stock, caja y cobranzas de un vistazo. Precio cerrado.",
  updatedAt: "2026-09-13",
  h1: "Todos tus números en una pantalla ",
  h1Accent: "que se entiende.",
  intro:
    "Ventas, stock, caja, cobranzas: lo que hoy está repartido en planillas, en el sistema contable y en la cabeza de alguien, junto y actualizado solo. Para mirar a la mañana y saber cómo venís.",
  windows: [
    {
      kind: "dashboard",
      title: "tablero · septiembre",
      kpis: [
        { value: "$4,2 M", label: "ventas del mes" },
        { value: "$3,1 M", label: "cobrado" },
        { value: "3", label: "productos críticos" },
      ],
      bars: [40, 55, 45, 70, 65, 90, 75, 60, 85, 100],
    },
    {
      kind: "flow",
      title: "avisos · hoy",
      steps: [
        { text: "3 productos por debajo del mínimo", time: "07:30", state: "ok" },
        { text: "12 facturas vencen esta semana", time: "07:30", state: "ok" },
        { text: "Cierre de caja de ayer cuadró", time: "07:31", state: "ok" },
      ],
    },
  ],
  situations: [
    {
      when: "tenés varias planillas que no cierran entre sí",
      tag: "planillas",
      title: "Una sola verdad, y que se arme sola.",
      text: "Lee todas, las cruza y te muestra dónde no cuadran en vez de esconderlo.",
      window: {
        kind: "flow",
        title: "cruce",
        steps: [
          { text: "Ventas.xlsx leída", state: "ok" },
          { text: "Caja.xlsx leída", state: "ok" },
          { text: "2 diferencias marcadas", state: "run" },
        ],
      },
    },
    {
      when: "querés saber cómo viene el mes sin pedirlo",
      tag: "resumen",
      title: "El resumen llega solo, todas las mañanas.",
      text: "Ventas de ayer, caja, lo que vence hoy. Por correo o en una pantalla en el local.",
      window: {
        kind: "code",
        title: "resumen · lunes 07:30",
        lines: ["ventas ayer: $182.400", "caja: cuadró", "vence hoy: 4 facturas"],
      },
    },
    {
      when: "tenés sucursales o vendedores",
      tag: "sucursales",
      title: "Cada uno con lo suyo, vos con el total.",
      text: "Cada sucursal ve su tablero; vos ves todas juntas y comparadas.",
      window: {
        kind: "dashboard",
        title: "sucursales",
        kpis: [
          { value: "Centro", label: "$1,9 M" },
          { value: "Norte", label: "$1,4 M" },
          { value: "Online", label: "$0,9 M" },
        ],
        bars: [80, 60, 40],
      },
    },
  ],
  includesFirst: {
    title: "El tablero, armado con tus datos de verdad.",
    text: "Lee de donde ya están: planillas, sistema, tienda.",
  },
  connections: [
    "Google Sheets",
    "Excel",
    "Tango",
    "Colppy",
    "Xubio",
    "Mercado Pago",
    "Tienda Nube",
    "MercadoLibre",
    "AFIP",
    "tu base de datos",
    "tu sistema a medida",
  ],
  questions: [
    {
      q: "«¿Tengo que cargar datos en otro lado?»",
      a: "No. El tablero lee de donde ya están. Si algo no está en ningún lado, lo hablamos.",
    },
    {
      q: "«¿Es Power BI o algo así?»",
      a: "Puede serlo si ya lo usás. Si no, es una página tuya, sin licencias, que abre en cualquier celular.",
    },
    {
      q: "«¿Y si los datos están sucios?»",
      a: "Casi siempre lo están. Parte del trabajo es ordenarlos, y el tablero te muestra qué quedó dudoso en vez de esconderlo.",
    },
  ],
  card: { sketch: "bars", text: "Todas tus planillas en un tablero que se entiende de un vistazo." },
};
