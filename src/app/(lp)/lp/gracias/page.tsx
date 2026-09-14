import type { Metadata } from "next";
import { FiltrosPapel, Fibra } from "@/components/papel/Materia";
import { Sello } from "@/components/papel/Traza";

/*
 * Página de gracias. Existe sobre todo para medir: la conversión de Google Ads
 * se dispara con la vista de esta URL, que es la forma más simple de trackear
 * en un sitio con output: "export".
 */
export const metadata: Metadata = {
  title: "Recibimos tu pedido | Luvant",
  description: "Te escribimos para coordinar el envío de tus 5 facturas de prueba.",
  alternates: { canonical: "/lp/gracias" },
  robots: { index: false, follow: false },
};

const PASOS = [
  "Te escribimos a tu email para que nos pases las 5 facturas.",
  "Las procesamos y te devolvemos los datos extraídos, campo por campo.",
  "Te decimos qué tan bien funcionaría en tu caso y cuánto saldría. Sin vueltas.",
];

export default function Gracias() {
  return (
    <main
      data-tema="papel"
      className="relative flex min-h-screen items-center overflow-hidden bg-papel-carton text-papel-tinta"
    >
      <FiltrosPapel />
      <Fibra opacity={0.14} />

      <div className="relative mx-auto w-full max-w-2xl px-6 py-20">
        <div className="pp-foja relative -rotate-[0.4deg] px-8 py-10 sm:px-12 sm:py-14">
          <Fibra opacity={0.07} />

          <div className="relative">
            <div className="flex items-baseline justify-between border-b border-papel-tinta pb-2">
              <span className="pp-folio">Solicitud registrada</span>
              <span className="pp-folio">Fs. 3</span>
            </div>

            <h1 className="mt-7 text-[36px] font-bold leading-[0.98] tracking-[-0.038em] sm:text-[44px]">
              Listo. Quedó asentado.
            </h1>

            <p className="pp-anotacion mt-4">
              Te respondemos dentro de las 24 h hábiles. Si es urgente,
              escribinos directo a hola@luvant.com.ar.
            </p>

            <ol className="mt-9 space-y-5">
              {PASOS.map((paso, i) => (
                <li key={paso} className="flex gap-4">
                  <span className="pp-folio shrink-0 pt-0.5 font-bold !text-papel-rojo">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] leading-snug">{paso}</span>
                </li>
              ))}
            </ol>

            <div className="mt-11 flex items-end justify-between gap-6">
              <div className="flex flex-col gap-1.5">
                <div className="w-44 border-b border-papel-tinta" />
                <span className="pp-folio">Luvant · Córdoba, AR</span>
              </div>
              <Sello />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
