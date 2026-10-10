"use client";

import { useEffect, useState } from "react";
import { useMotionValueEvent, useSpring } from "framer-motion";

const TASKS = [
  { label: "Cargar facturas de proveedores", unit: "facturas", min: 4, max: 60 },
  { label: "Pasar ventas a la planilla", unit: "ventas", min: 2, max: 80 },
  { label: "Responder consultas repetidas", unit: "consultas", min: 3, max: 60 },
  { label: "Armar el reporte del día", unit: "reportes", min: 40, max: 4 },
];
const WORKDAYS = 230;

function Counter({ value }: { value: number }) {
  const spring = useSpring(value, { stiffness: 120, damping: 22 });
  const [shown, setShown] = useState(value);
  useEffect(() => spring.set(value), [spring, value]);
  useMotionValueEvent(spring, "change", (v) => setShown(v));
  return <>{shown.toLocaleString("es-AR", { maximumFractionDigits: 0 })}</>;
}

export default function Calculator() {
  const [task, setTask] = useState(0);
  const [perDay, setPerDay] = useState(15);
  const t = TASKS[task];
  const n = Math.min(perDay, t.max);
  const hours = (n * t.min * WORKDAYS) / 60;
  return (
    <div className="rounded-[14px] border border-papel-tinta/15 bg-white p-6 shadow-[0_30px_70px_-16px_rgba(30,42,35,.22)] md:p-7">
      <div className="font-mono text-[12px] uppercase tracking-[.14em] text-papel-tinta-3">Hacé la cuenta</div>
      <div className="mt-5 text-[15px] font-semibold">¿Qué hacés a mano?</div>
      <div className="mt-2.5 flex flex-wrap gap-2">
        {TASKS.map((x, i) => (
          <button
            key={x.label}
            type="button"
            aria-pressed={i === task}
            onClick={() => setTask(i)}
            className={`rounded-full border px-3.5 py-1.5 text-[14px] transition-colors ${
              i === task
                ? "border-papel-tinta bg-papel-tinta text-papel-foja"
                : "border-papel-tinta/20 text-papel-tinta-2 hover:border-papel-tinta/50"
            }`}
          >
            {x.label}
          </button>
        ))}
      </div>
      <label htmlFor="calc-n" className="mt-6 flex items-baseline justify-between text-[15px] font-semibold">
        ¿Cuántas {t.unit} por día?
        <span className="font-geistmono text-[22px]">{n}</span>
      </label>
      <input
        id="calc-n"
        type="range"
        min={1}
        max={t.max}
        value={n}
        onChange={(e) => setPerDay(Number(e.target.value))}
        className="mt-3 w-full accent-papel-rojo"
      />
      <div className="mt-1 font-geistmono text-[12px] text-papel-tinta-3">≈ {t.min} min cada una</div>
      <div className="mt-6 border-t border-papel-tinta/15 pt-5">
        <div className="flex items-baseline gap-2 text-papel-rojo">
          <span className="text-[60px] font-bold leading-none tracking-[-.04em] md:text-[72px]">
            <Counter value={hours} />
          </span>
          <span className="text-[22px] font-semibold md:text-[24px]">horas al año</span>
        </div>
        <p className="mt-2 text-[15px] text-papel-tinta-2">
          Son{" "}
          <b className="text-papel-tinta">
            <Counter value={hours / 8} /> días hábiles
          </b>{" "}
          de alguien de tu equipo haciendo lo mismo.
        </p>
      </div>
    </div>
  );
}
