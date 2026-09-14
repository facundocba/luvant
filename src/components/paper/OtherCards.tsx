import Link from "next/link";
import { lensLink, serviceLinks } from "@/content/services";
import { cn } from "@/lib/utils";
import Eyebrow from "./Eyebrow";

export default function OtherCards({ exclude }: { exclude: string }) {
  const items = [...serviceLinks, lensLink].filter((s) => s.slug !== exclude);
  return (
    <section className="px-5 pb-14 pt-12 md:px-page">
      <Eyebrow>Otras fichas</Eyebrow>
      <div className="mt-7 grid grid-cols-2 gap-3.5 md:grid-cols-5">
        {items.map((s, i) => {
          const dark = s.slug === "lens";
          return (
            <Link
              key={s.slug}
              href={s.path}
              className={cn(
                "rounded border px-3.5 pb-3.5 pt-3 shadow-[0_8px_20px_rgba(30,42,35,.08)] transition-transform duration-200 hover:-translate-y-1 hover:rotate-0",
                i % 2 ? "rotate-[.6deg]" : "-rotate-[.6deg]",
                dark ? "border-luvant-950 bg-luvant-950 text-white" : "border-papel-borde bg-papel-foja",
              )}
            >
              <small
                className={cn(
                  "mb-1.5 block text-[10.5px] uppercase tracking-[.1em]",
                  dark ? "font-geistmono text-luvant-400" : "font-mono text-papel-tinta-3",
                )}
              >
                {dark ? "Producto" : "Ficha"}{" "}
                <b className={dark ? "text-white" : "text-papel-rojo"}>{s.number}</b>
              </small>
              <b className="text-[15px] font-semibold tracking-[-.01em]">{s.name}</b>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
