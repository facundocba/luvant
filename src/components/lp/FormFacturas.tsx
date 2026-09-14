"use client";

import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Clip, Fibra } from "@/components/papel/Materia";

const VOLUMENES = ["Menos de 100", "100 a 500", "Más de 500"] as const;

type Estado = "idle" | "loading" | "error";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/*
 * La conversión de la landing: "mandá 5 facturas de prueba", no "agendá una
 * llamada". Menos fricción y el lead se califica solo — quien se toma el
 * trabajo de juntar 5 facturas reales tiene el problema de verdad.
 */
export function FormFacturas() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [estado, setEstado] = useState<Estado>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [volumen, setVolumen] = useState<string>(VOLUMENES[1]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (estado === "loading") return;

    setEstado("loading");
    setErrorMsg("");

    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    const sistema = (data.get("sistema") as string) || "no indicado";

    const payload = {
      name: data.get("name") as string,
      company: data.get("company") as string,
      email: data.get("email") as string,
      phone: "",
      services: ["Carga automática de facturas (landing Ads)"],
      message: [
        `Volumen mensual de facturas: ${volumen}`,
        `Sistema al que entran hoy: ${sistema}`,
        "",
        "Pidió la prueba con 5 facturas reales.",
      ].join("\n"),
      company_fax: data.get("company_fax") as string, // honeypot
    };

    try {
      const res = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (res.ok && json.ok) {
        window.dataLayer?.push({
          event: "lead_facturas",
          volumen_facturas: volumen,
        });
        form.reset();
        router.push("/lp/gracias");
        return;
      }

      setEstado("error");
      setErrorMsg(
        json.error || "Hubo un error al enviar. Probá de nuevo en un momento.",
      );
    } catch {
      setEstado("error");
      setErrorMsg(
        "No se pudo conectar con el servidor. Escribinos a hola@luvant.com.ar y lo resolvemos por ahí.",
      );
    }
  }

  return (
    <div className="relative">
      <Clip className="absolute -top-7 right-8 z-10 -rotate-6" />

      <div className="pp-foja relative -rotate-[0.4deg] p-7 sm:p-9">
        <Fibra opacity={0.07} />

        <div className="relative">
          <div className="flex items-baseline justify-between border-b border-papel-tinta pb-2">
            <span className="pp-folio">Solicitud de prueba</span>
            <span className="pp-folio">Fs. 1</span>
          </div>

          <h2 className="mt-5 text-[26px] font-bold leading-[1.08] tracking-[-0.02em] sm:text-[30px]">
            Probalo con tus propias facturas.
          </h2>
          <p className="pp-anotacion mt-3">
            Mandanos 5 facturas reales. Te devolvemos los datos extraídos, uno
            por uno, y qué tan bien funcionaría en tu caso. Sin costo y sin
            reunión previa.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Honeypot: invisible para personas, irresistible para bots */}
            <div className="absolute left-[-9999px]" aria-hidden="true">
              <label htmlFor="company_fax">No completar</label>
              <input
                id="company_fax"
                name="company_fax"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="lp-name" className="pp-folio">
                  Nombre
                </label>
                <input
                  id="lp-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Tu nombre"
                  className="pp-campo"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="lp-company" className="pp-folio">
                  Empresa
                </label>
                <input
                  id="lp-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Razón social"
                  className="pp-campo"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="lp-email" className="pp-folio">
                Email de trabajo
              </label>
              <input
                id="lp-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="vos@empresa.com"
                className="pp-campo"
              />
            </div>

            <fieldset className="flex flex-col gap-2">
              <legend className="pp-folio mb-1">
                ¿Cuántas facturas cargás por mes?
              </legend>
              <div className="flex flex-wrap gap-2">
                {VOLUMENES.map((v) => {
                  const activo = volumen === v;
                  return (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setVolumen(v)}
                      aria-pressed={activo}
                      className={`flex-1 whitespace-nowrap border px-3 py-2.5 text-[13px] transition-colors ${
                        activo
                          ? "border-papel-tinta bg-papel-tinta font-semibold text-papel-carton"
                          : "border-papel-borde-suave bg-[#fffefa] text-papel-tinta"
                      }`}
                    >
                      {v}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="lp-sistema" className="pp-folio">
                ¿A qué sistema entran hoy?
              </label>
              <input
                id="lp-sistema"
                name="sistema"
                type="text"
                placeholder="Tango, Xubio, Excel, otro…"
                className="pp-campo"
              />
            </div>

            {estado === "error" && (
              <p role="alert" className="pp-anotacion !text-papel-rojo">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={estado === "loading"}
              className="flex w-full items-center justify-center gap-2.5 bg-papel-tinta px-6 py-4 text-[15px] font-semibold text-papel-carton transition-opacity disabled:opacity-60"
            >
              {estado === "loading" ? (
                "Enviando…"
              ) : (
                <>
                  Enviar mis facturas de prueba
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </>
              )}
            </button>

            <p className="pp-folio text-center leading-relaxed">
              Te escribimos para que nos pases las facturas. Se usan sólo para
              la prueba y se borran al terminar.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
