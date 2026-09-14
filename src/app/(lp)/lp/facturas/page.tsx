import type { Metadata } from "next";
import {
  FiltrosPapel,
  Fibra,
  Perforaciones,
  MargenEncuadernado,
} from "@/components/papel/Materia";
import { Traza, Sello } from "@/components/papel/Traza";
import { FormFacturas } from "@/components/lp/FormFacturas";

/* ------------------------------------------------------------------
 * DATOS A CONFIRMAR — lo único que hay que tocar para que la landing
 * deje de tener supuestos. Todo lo demás ya es verificable.
 * ------------------------------------------------------------------ */
const DATOS = {
  /** Plazo real de puesta en marcha. Confirmá el número antes de publicar. */
  semanasEntrega: 4,
  /** Dejalo vacío y el botón de WhatsApp no se renderiza. Formato: 5493511234567 */
  whatsapp: "",
  email: "hola@luvant.com.ar",
};

const INTEGRACIONES = [
  "Tango",
  "Xubio",
  "Colppy",
  "Bejerman",
  "ARCA (ex AFIP)",
];

const OBJECIONES = [
  {
    p: "¿Y si la factura viene mal escaneada?",
    r: "Se marca como dudosa y la revisa una persona. El sistema nunca carga algo de lo que no está seguro: preferimos que revises 20 y no que se cuelen 3 mal.",
  },
  {
    p: "¿Tengo que cambiar de sistema contable?",
    r: "No. Nos conectamos al que ya usás. Si no tiene forma de conectarse, lo evaluamos antes de cobrarte nada y te lo decimos.",
  },
  {
    p: "¿Cuánto tarda en estar andando?",
    r: `Alrededor de ${DATOS.semanasEntrega} semanas desde que arrancamos, con precio cerrado antes de empezar. No cobramos por hora.`,
  },
  {
    p: "¿Qué pasa con mis datos?",
    r: "Los documentos de la prueba se borran cuando termina. En producción, todo corre donde vos decidas y nadie más accede.",
  },
];

export const metadata: Metadata = {
  title: "Automatizá la carga de facturas de proveedores | Luvant",
  description:
    "Las facturas llegan por mail, se leen solas y entran validadas a tu sistema contable. Probalo gratis con 5 facturas reales tuyas.",
  alternates: { canonical: "/lp/facturas" },
};

export default function LandingFacturas() {
  return (
    <main
      data-tema="papel"
      className="relative overflow-hidden bg-papel-carton text-papel-tinta"
    >
      <FiltrosPapel />
      <Fibra opacity={0.14} />
      <Perforaciones />
      <MargenEncuadernado />

      <div className="relative mx-auto max-w-6xl px-6 lg:pl-28 lg:pr-10">
        {/* ============ CABECERA — sin links de salida ============ */}
        <header className="flex flex-wrap items-center justify-between gap-4 py-7">
          <div className="flex items-center gap-2.5">
            <svg
              width="22"
              height="22"
              viewBox="0 0 56 56"
              fill="none"
              aria-hidden="true"
            >
              <rect width="56" height="56" fill="var(--pp-tinta)" />
              <path
                d="M14 40L28 16L42 40"
                stroke="var(--pp-carton)"
                strokeWidth="4"
                strokeLinecap="square"
              />
              <circle cx="28" cy="16" r="4" fill="var(--pp-carton)" />
            </svg>
            <span className="text-[15px] font-bold tracking-[0.1em]">
              LUVANT
            </span>
          </div>
          <span className="pp-anotacion">
            Respondemos dentro de las 24 h hábiles
          </span>
        </header>

        {/* ============ HERO ============ */}
        <section className="grid items-start gap-12 pb-20 pt-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-28">
          <div>
            <span className="pp-folio font-bold !text-papel-rojo">
              Carga automática de facturas
            </span>

            <h1 className="mt-4 text-[40px] font-bold leading-[0.98] tracking-[-0.038em] sm:text-[52px] lg:text-[58px]">
              Dejá de cargar facturas de proveedores a mano.
            </h1>

            <p className="pp-anotacion mt-6 max-w-md !text-[13px]">
              Las facturas llegan por mail, se leen solas y entran validadas a
              tu sistema contable. Tu equipo revisa sólo las que quedan marcadas
              como dudosas.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Funciona con el sistema que ya usás — no hay que migrar nada",
                `Andando en ${DATOS.semanasEntrega} semanas, con precio cerrado antes de empezar`,
                "Hablás directo con el que lo construye",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--pp-verde)"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="mt-[3px] shrink-0"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span className="text-[15px] leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 -rotate-[1.5deg]">
              <span className="pp-birome text-[25px]">
                esto ya lo vivimos en un municipio
              </span>
            </div>

            <div className="mt-9 border-t border-papel-borde-suave pt-5">
              <span className="pp-folio">Se conecta con</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {INTEGRACIONES.map((n) => (
                  <span
                    key={n}
                    className="pp-anotacion border border-papel-borde-suave bg-papel-foja px-3 py-1.5 !text-[12px] !text-papel-tinta"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <FormFacturas />
        </section>

        {/* ============ EL EXPEDIENTE: LA TRAZA ============ */}
        <section className="pb-24 lg:pb-32">
          <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
            {/* Marginalia: la anotación va al margen, no arriba y centrada */}
            <div className="flex flex-col gap-7 lg:pt-16">
              <p className="pp-anotacion">
                La factura entra por mail a Compras y ahí arranca el recorrido.
              </p>
              <p className="pp-anotacion !text-papel-tinta">
                Acá se va el mes: alguien la tipea en el sistema, otro la
                controla contra la orden de compra, un tercero corrige lo que
                salió mal.
              </p>
              <p className="pp-anotacion">
                La traza propuesta no molesta a nadie hasta que algo no cierra.
              </p>

              <p className="mt-2 text-[34px] font-bold leading-[0.96] tracking-[-0.038em] sm:text-[40px]">
                El mismo dato, copiado seis veces.
              </p>
              <p className="pp-anotacion">
                Lo dejamos en una. No cambiamos tu sistema contable: sacamos los
                pasos que no aportan nada.
              </p>
            </div>

            {/* La foja con el anexo */}
            <div className="pp-foja relative -rotate-[0.3deg] px-6 py-8 sm:px-9 sm:py-10">
              <Fibra opacity={0.08} />
              <div className="relative">
                <Traza />
              </div>
            </div>
          </div>
        </section>

        {/* ============ OBJECIONES ============ */}
        <section className="pb-24 lg:pb-32">
          <h2 className="max-w-xl text-[32px] font-bold leading-[1.02] tracking-[-0.032em] sm:text-[40px]">
            Lo que todos preguntan antes de avanzar.
          </h2>

          <dl className="mt-9 grid gap-4 sm:grid-cols-2">
            {OBJECIONES.map(({ p, r }) => (
              <div
                key={p}
                className="pp-foja relative p-6"
                style={{ boxShadow: "0 6px 18px rgba(30,42,35,0.07)" }}
              >
                <Fibra opacity={0.05} />
                <div className="relative">
                  <dt className="text-[15px] font-semibold leading-snug">
                    {p}
                  </dt>
                  <dd className="pp-anotacion mt-2.5">{r}</dd>
                </div>
              </div>
            ))}
          </dl>
        </section>

        {/* ============ CIERRE ============ */}
        <section className="relative pb-28">
          <div className="relative bg-papel-tinta px-7 py-12 text-papel-carton sm:px-12 sm:py-14">
            <div className="grid items-center gap-9 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <h2 className="max-w-lg text-[30px] font-bold leading-[1.04] tracking-[-0.032em] sm:text-[38px]">
                  Mandá 5 facturas y te mostramos qué pasa.
                </h2>
                <p className="pp-anotacion mt-4 max-w-md !text-[#9baa9f]">
                  Sin costo, sin reunión previa, sin compromiso. Te devolvemos
                  los datos extraídos y una estimación real.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href="#lp-name"
                    className="bg-papel-carton px-6 py-3.5 text-[15px] font-semibold text-papel-tinta"
                  >
                    Subir al formulario
                  </a>
                  {DATOS.whatsapp && (
                    <a
                      href={`https://wa.me/${DATOS.whatsapp}`}
                      className="border border-papel-tinta-2 px-6 py-3.5 text-[15px] font-semibold text-papel-carton"
                    >
                      Escribir por WhatsApp
                    </a>
                  )}
                  <a
                    href={`mailto:${DATOS.email}`}
                    className="pp-anotacion !text-[#9baa9f]"
                  >
                    {DATOS.email}
                  </a>
                </div>
              </div>

              <Sello className="justify-self-center lg:justify-self-end" />
            </div>
          </div>

          <div className="mt-8 border-t border-papel-borde-suave pt-5">
            <p className="pp-anotacion max-w-md">
              Nuestro primer expediente fue la Municipalidad de Embalse,
              Córdoba.
            </p>
            <p className="pp-folio mt-3">Luvant.com.ar · Córdoba, Argentina</p>
          </div>
        </section>
      </div>
    </main>
  );
}
