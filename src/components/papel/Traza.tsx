"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

/*
 * La traza: el recorrido real de un proceso, dibujado como el anexo de un
 * expediente. Rojo punteado = tramo manual, verde continuo = automatizado, y las
 * paradas siempre son cuadraditos. El dibujo describe el problema, no lo decora.
 *
 * La geometría está compuesta a mano y no se parametriza; lo que cambia entre un
 * proceso y otro son las etiquetas y el remate numérico. La secuencia arranca
 * cuando la pieza entra en viewport: si arrancara al cargar, el visitante se la
 * perdería antes de scrollear.
 */

export interface TrazaProps {
  titulo?: string;
  folio?: string;
  actualLabel?: string;
  propuestaLabel?: string;
  /** mail · descarga · EL PASO CARO · control · archivo */
  nodosActual?: [string, string, string, string, string];
  /** entrada · EL PASO AUTOMATIZADO · salida */
  nodosPropuesta?: [string, string, string];
  payoffAntes?: { valor: string; nota: string };
  payoffDespues?: { valor: string; nota: string };
  cuenta?: string;
  nota?: string;
  firma?: string;
}

const POR_DEFECTO: Required<TrazaProps> = {
  titulo: "Anexo I — Recorrido de una factura de proveedor",
  folio: "Fs. 2",
  actualLabel: "TRAZA ACTUAL · 6 PARADAS · 4 MIN",
  propuestaLabel: "TRAZA PROPUESTA · 2 PARADAS · 8 SEG",
  nodosActual: ["mail", "descarga", "SE TIPEA A MANO", "control", "archivo"],
  nodosPropuesta: ["mail", "LECTURA + VALIDACIÓN", "sistema"],
  payoffAntes: { valor: "27 h", nota: "Por mes · 400 facturas" },
  payoffDespues: { valor: "50 min", nota: "Por mes · revisando excepciones" },
  cuenta:
    "400 facturas × 4 min de carga y control = 26,7 h. La cuenta es tuya: cambiá el volumen por el que manejás vos.",
  nota: "los 4 pasos del medio no los hace nadie más",
  firma: "Relevamiento · Luvant · Córdoba, AR",
};

export function Traza(props: TrazaProps) {
  const t = { ...POR_DEFECTO, ...props };
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <div ref={ref} className={inView ? "pp-anim" : undefined}>
      {/* Encabezado de foja */}
      <div className="flex items-baseline justify-between border-b border-papel-tinta pb-2">
        <span className="pp-folio">{t.titulo}</span>
        <span className="pp-folio">{t.folio}</span>
      </div>

      {/* ---------- TRAZA ACTUAL ---------- */}
      <svg
        viewBox="0 0 570 322"
        fill="none"
        className="mt-6 w-full"
        role="img"
        aria-label={`${t.actualLabel}. El paso caro es: ${t.nodosActual[2]}.`}
      >
        <g stroke="#F0EBDC" strokeWidth="1">
          <path d="M0 56 H570 M0 116 H570 M0 176 H570 M0 236 H570" />
        </g>

        <text
          x="0"
          y="16"
          fontFamily="var(--font-courier), monospace"
          fontSize="11"
          fontWeight="700"
          fill="var(--pp-rojo)"
        >
          {t.actualLabel}
        </text>

        <path
          className="pp-trace-a"
          style={{ ["--pp-len" as string]: 1000, strokeDasharray: 1000 }}
          d="M24 250 C 74 132, 124 268, 176 164 S 262 262, 306 106 S 404 268, 452 182 S 528 252, 556 204"
          stroke="var(--pp-rojo)"
          strokeWidth="2.6"
          strokeDasharray="7 5"
          fill="none"
        />

        <g className="pp-node-a">
          <g fill="var(--pp-foja)" stroke="var(--pp-rojo)" strokeWidth="2">
            <rect x="17" y="243" width="15" height="15" />
            <rect x="169" y="157" width="15" height="15" />
            <rect x="445" y="175" width="15" height="15" />
            <rect x="549" y="197" width="15" height="15" />
          </g>
          <rect x="294" y="94" width="25" height="25" fill="var(--pp-rojo)" />
          <g
            fontFamily="var(--font-courier), monospace"
            fontSize="10"
            fill="var(--pp-tinta-2)"
          >
            <text x="24" y="280">
              {t.nodosActual[0]}
            </text>
            <text x="158" y="190">
              {t.nodosActual[1]}
            </text>
            <text
              x="306"
              y="84"
              textAnchor="middle"
              fill="var(--pp-rojo)"
              fontWeight="700"
            >
              {t.nodosActual[2]}
            </text>
            <text x="420" y="208">
              {t.nodosActual[3]}
            </text>
            <text x="514" y="230">
              {t.nodosActual[4]}
            </text>
          </g>
        </g>

        {/* Alguien rodeó el paso caro con birome: dos vueltas, sin cerrar bien */}
        <g filter="url(#ppBirome)">
          <path
            className="pp-hand"
            style={{ ["--pp-len" as string]: 760, strokeDasharray: 760 }}
            d="M306 62 C 246 60, 214 92, 226 118 C 238 146, 302 154, 344 140 C 382 128, 396 96, 372 76 C 350 58, 300 56, 268 70 C 242 82, 236 106, 252 122"
            stroke="var(--pp-birome)"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </svg>

      {/* ---------- TRAZA PROPUESTA ---------- */}
      <svg
        viewBox="0 0 570 176"
        fill="none"
        className="mt-3 w-full"
        role="img"
        aria-label={`${t.propuestaLabel}. El paso automatizado es: ${t.nodosPropuesta[1]}.`}
      >
        <g stroke="#F0EBDC" strokeWidth="1">
          <path d="M0 48 H570 M0 112 H570" />
        </g>
        <text
          x="0"
          y="16"
          fontFamily="var(--font-courier), monospace"
          fontSize="11"
          fontWeight="700"
          fill="var(--pp-verde)"
        >
          {t.propuestaLabel}
        </text>

        <path
          className="pp-trace-b"
          style={{ ["--pp-len" as string]: 640, strokeDasharray: 640 }}
          d="M24 80 L556 80"
          stroke="var(--pp-verde)"
          strokeWidth="2.6"
          fill="none"
        />

        <g className="pp-node-b">
          <g fill="var(--pp-foja)" stroke="var(--pp-verde)" strokeWidth="2">
            <rect x="17" y="73" width="15" height="15" />
            <rect x="549" y="73" width="15" height="15" />
          </g>
          <rect x="278" y="68" width="25" height="25" fill="var(--pp-verde)" />
          <g
            fontFamily="var(--font-courier), monospace"
            fontSize="10"
            fill="var(--pp-tinta-2)"
          >
            <text x="24" y="110">
              {t.nodosPropuesta[0]}
            </text>
            <text
              x="290"
              y="58"
              textAnchor="middle"
              fill="var(--pp-verde)"
              fontWeight="700"
            >
              {t.nodosPropuesta[1]}
            </text>
            <text x="514" y="110">
              {t.nodosPropuesta[2]}
            </text>
          </g>
        </g>
      </svg>

      {/* El remate, con el rango tipográfico al extremo */}
      <div className="pp-payoff mt-7 flex flex-wrap items-end gap-x-6 gap-y-5 border-t border-papel-tinta pt-6">
        <div className="flex flex-col">
          <span className="text-[54px] font-bold leading-[0.82] tracking-[-0.05em] text-papel-rojo sm:text-[72px]">
            {t.payoffAntes.valor}
          </span>
          <span className="pp-folio mt-2">{t.payoffAntes.nota}</span>
        </div>

        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--pp-tinta-3)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="mb-5"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>

        <div className="flex flex-col">
          <span className="text-[54px] font-bold leading-[0.82] tracking-[-0.05em] text-papel-verde sm:text-[72px]">
            {t.payoffDespues.valor}
          </span>
          <span className="pp-folio mt-2">{t.payoffDespues.nota}</span>
        </div>
      </div>

      {/* La cuenta a la vista: el número no es una promesa, es una multiplicación */}
      <p className="pp-anotacion mt-4">{t.cuenta}</p>

      {/* Nota a mano al pie de la foja */}
      <div className="pp-hand-txt mt-6 -rotate-1">
        <span className="pp-birome text-[24px] sm:text-[26px]">{t.nota}</span>
      </div>

      {/* Firma del relevamiento */}
      <div className="mt-9 flex flex-col gap-1.5">
        <div className="w-52 border-b border-papel-tinta" />
        <span className="pp-folio">{t.firma}</span>
      </div>
    </div>
  );
}

/* El sello: cae cuando entra en pantalla, con el borde comido por la tinta */
export function Sello({
  texto = "SIN TRÁMITE",
  className = "",
}: {
  texto?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className={`${className} ${inView ? "pp-anim" : ""}`}>
      <svg
        className="pp-stamp"
        width="230"
        height="128"
        viewBox="0 0 270 150"
        fill="none"
        role="img"
        aria-label={`Sello: ${texto}`}
      >
        <g filter="url(#ppTinta)" opacity="0.88">
          <rect
            x="6"
            y="6"
            width="258"
            height="138"
            stroke="var(--pp-rojo)"
            strokeWidth="4"
            fill="none"
          />
          <rect
            x="15"
            y="15"
            width="240"
            height="120"
            stroke="var(--pp-rojo)"
            strokeWidth="1.6"
            fill="none"
          />
          <text
            x="135"
            y="72"
            textAnchor="middle"
            fontFamily="var(--font-courier), monospace"
            fontSize={texto.length > 11 ? 28 : 38}
            fontWeight="700"
            letterSpacing="4"
            fill="var(--pp-rojo)"
          >
            {texto}
          </text>
          <text
            x="135"
            y="102"
            textAnchor="middle"
            fontFamily="var(--font-courier), monospace"
            fontSize="14"
            letterSpacing="7"
            fill="var(--pp-rojo)"
          >
            L U V A N T
          </text>
          <path d="M40 118 H230" stroke="var(--pp-rojo)" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}
