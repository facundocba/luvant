import type { Question } from "./types";

export const cta = {
  label: "Pedí tu presupuesto",
  href: "/contacto",
  note: "o escribinos a",
};

export const closing = {
  eyebrow: "Tu caso",
  title: "¿Qué es lo que hacés todos los días a mano?",
  text: "Contá qué es eso que hacés todos los días a mano. Salís sabiendo si se puede, cuánto sale y en cuánto lo tenés andando. Y si no te conviene, te lo decimos ahí mismo.",
  note: "Hablás con quien lo programa.",
};

export const howWeWork = [
  {
    label: "Primero, hablamos",
    title: "Nos contás qué hacés a mano y qué usás hoy.",
    text: "Salís sabiendo si se puede, cuánto sale y cuánto tarda.",
  },
  {
    label: "Precio cerrado",
    title: "Lo escribimos y lo probamos con tus datos reales.",
    text: "Ves cómo anda antes de que quede andando.",
  },
  {
    label: "Desde ahí",
    title: "Queda andando y lo seguimos.",
    text: "Los primeros días lo miramos juntos.",
  },
];

export const includesRest = [
  {
    title: "Conectado a lo que ya usás.",
    text: "Tu correo, tu WhatsApp, tu planilla o tu sistema contable. Nada nuevo que aprender.",
  },
  {
    title: "Lo dudoso te lo pregunta.",
    text: "Cuando no está seguro, no inventa: lo deja marcado para que alguien lo mire.",
  },
  {
    title: "Precio cerrado y fecha.",
    text: "Antes de empezar sabés cuánto sale y cuándo está andando.",
  },
  {
    title: "Se queda andando.",
    text: "Si algo cambia (un proveedor nuevo, otro formato), se ajusta.",
  },
];

export const homeQuestions: Question[] = [
  {
    q: "«¿Y si lo mío es un caso raro?»",
    a: "Mejor. Las seis fichas de arriba no se parecen entre sí y ninguna le sirve a otro. La tuya tampoco se va a parecer.",
  },
  {
    q: "«¿Tengo que cambiar lo que ya uso?»",
    a: "No cambiás nada. Se enchufa a tu WhatsApp, a tu planilla o a tu sistema contable. Nadie aprende un programa nuevo.",
  },
  {
    q: "«¿Cuánto sale y cuánto tarda?»",
    a: "Te lo decimos en la primera llamada, cerrado, antes de escribir una línea. Si se complica en el medio, no lo pagás vos.",
  },
];

export const situationsHeading = {
  eyebrow: "Tres situaciones",
  title: "Si te pasa alguna de estas, es para vos.",
  text: "Son ejemplos, no casos: lo que te haríamos según lo que te llega y adónde va.",
};

export const footer = {
  blurb: "Sistemas, automatizaciones y lectura de documentos, escritos para tu operación.",
  madeIn: "Hecho en Córdoba",
};
