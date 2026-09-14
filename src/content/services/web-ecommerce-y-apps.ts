import type { Service } from "../types";

export const service: Service = {
  slug: "web-ecommerce-y-apps",
  number: "05",
  name: "Web, e-commerce y apps",
  tag: "web",
  path: "/servicios/web-ecommerce-y-apps",
  title: "Sitios web, tiendas online y apps a medida, conectados a tu stock y tu cobro | Luvant",
  description:
    "Sitios, e-commerce y apps internas que leen tu stock, cobran con Mercado Pago, facturan en AFIP y te avisan. Rápidos y hechos para Google. Precio cerrado.",
  updatedAt: "2026-09-13",
  h1: "Tu sitio, tu tienda o tu app, ",
  h1Accent: "conectados a tu negocio.",
  intro:
    "No una página que después nadie actualiza: un sitio o una tienda que lee tu stock, cobra, factura y te avisa. O una app interna para tu gente, que hace una sola cosa bien.",
  windows: [
    {
      kind: "shop",
      title: "tienda · stock real",
      items: [
        { name: "Remera básica", stock: "12 en stock" },
        { name: "Buzo capucha", stock: "4 en stock" },
        { name: "Gorra", stock: "sin stock", out: true },
        { name: "Campera", stock: "7 en stock" },
        { name: "Pantalón", stock: "9 en stock" },
        { name: "Zapatillas", stock: "2 en stock" },
        { name: "Medias x3", stock: "31 en stock" },
        { name: "Cinturón", stock: "sin stock", out: true },
      ],
    },
    {
      kind: "flow",
      title: "pedidos · hoy",
      steps: [
        { text: "#2210 cobrado con Mercado Pago", time: "10:12", state: "ok" },
        { text: "Facturado en AFIP", time: "10:12", state: "ok" },
        { text: "A preparar · aviso al depósito", time: "10:12", state: "run" },
      ],
    },
  ],
  situations: [
    {
      when: "vendés y todavía no tenés tienda",
      tag: "tienda",
      title: "Vendé mientras dormís, con el stock de verdad.",
      text: "Tienda conectada a tu stock y a tu cobro; lo que se vende se descuenta y se factura.",
      window: {
        kind: "flow",
        title: "tienda",
        steps: [
          { text: "Compra a las 23:40", state: "ok" },
          { text: "Cobrada · stock descontado", state: "ok" },
          { text: "Facturada", state: "ok" },
        ],
      },
    },
    {
      when: "tu equipo carga cosas desde el celular",
      tag: "app",
      title: "Una app que hace eso, y nada más.",
      text: "Pedidos, visitas, lecturas, fotos: una pantalla por tarea, sin menús que nadie usa.",
      window: {
        kind: "list",
        title: "app · visitas",
        rows: [
          { title: "Cliente Norte S.A.", sub: "Visita cargada · 2 fotos", chip: "Hecho", chipOn: true },
          { title: "Distribuidora Sur", sub: "Pendiente · 14:00", chip: "Hoy" },
        ],
      },
    },
    {
      when: "tu sitio es de hace años",
      tag: "sitio",
      title: "Que aparezca en Google y que cargue rápido.",
      text: "Textos, estructura y velocidad hechos para que Google lo entienda y la gente no se vaya.",
      window: {
        kind: "code",
        title: "sitio",
        lines: ["carga: rápida", "móvil: sí", "textos: para lo que buscan"],
      },
    },
  ],
  includesFirst: {
    title: "El sitio, la tienda o la app, hechos para lo tuyo.",
    text: "Con un panel simple para que cambies precios y textos sin depender de nadie.",
  },
  connections: [
    "Mercado Pago",
    "Tienda Nube",
    "AFIP",
    "Google Sheets",
    "Google Maps",
    "Instagram",
    "WhatsApp Business",
    "tu sistema de stock",
  ],
  questions: [
    {
      q: "«¿Es WordPress o Tienda Nube?»",
      a: "Si te alcanza con eso, te lo decimos y te lo armamos. Si necesitás que hable con tu stock o tu facturación, es a medida.",
    },
    {
      q: "«¿Quién lo actualiza?»",
      a: "Vos, desde un panel simple, o nosotros. Sin depender de nadie para cambiar un precio.",
    },
    {
      q: "«¿Sale en Google?»",
      a: "Se hace para eso: rápido, con los textos y la estructura que Google entiende. Lo que después aparezca depende del rubro y la competencia, y te lo decimos antes.",
    },
  ],
  card: { sketch: "shop", text: "Tu sitio, tu tienda o tu app, conectados a tu stock y tu cobro." },
};
