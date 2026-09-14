"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { lensLink, serviceLinks } from "@/content/services";
import { cta } from "@/content/shared";
import { cn } from "@/lib/utils";
import Mark from "./Mark";
import Underline from "./Underline";

const links = [
  { label: "Qué hacemos", href: serviceLinks[0].path, prefix: "/servicios" },
  { label: "Luvant Lens", href: lensLink.path, prefix: "/productos" },
  { label: "Blog", href: "/blog", prefix: "/blog" },
  { label: "Contacto", href: "/contacto", prefix: "/contacto" },
];

const all = [...serviceLinks, lensLink];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="relative z-40 border-b border-papel-borde-suave bg-papel-foja">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-papel-foja focus:px-3 focus:py-2"
      >
        Ir al contenido
      </a>
      <div className="flex items-center justify-between px-5 py-4 md:px-page md:py-5">
        <Link
          href="/"
          aria-label="Luvant, inicio"
          className="flex items-center gap-2 text-[21px] font-bold tracking-[-.02em]"
        >
          <Mark />
          Luvant
        </Link>
        <nav className="hidden items-center gap-7 text-[15px] text-papel-tinta-2 md:flex">
          {links.map((l) => (
            <div key={l.href} className="group relative">
              <Link
                href={l.href}
                className={cn(
                  "py-2 hover:text-papel-tinta",
                  pathname.startsWith(l.prefix) && "font-medium text-papel-tinta",
                )}
              >
                {l.label}
              </Link>
              {l.prefix === "/servicios" && (
                <div className="absolute left-0 top-full hidden w-64 pt-3 group-focus-within:block group-hover:block">
                  <div className="rounded border border-papel-borde bg-papel-foja py-2 shadow-[0_14px_34px_rgba(30,42,35,.16)]">
                    {all.map((s) => (
                      <Link
                        key={s.slug}
                        href={s.path}
                        className="flex items-baseline gap-3 px-4 py-2 text-[14px] text-papel-tinta hover:bg-papel-foja-2"
                      >
                        <small className="w-5 font-mono text-[11px] text-papel-tinta-3">{s.number}</small>
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="hidden md:block">
          <Underline href={cta.href} size="sm" event="cta_click">
            {cta.label}
          </Underline>
        </div>
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="h-3.5 w-[22px] border-y-2 border-papel-tinta md:hidden"
        />
      </div>
      {open && (
        <div className="absolute inset-x-0 top-full border-b border-papel-borde bg-papel-foja px-5 pb-8 pt-2 md:hidden">
          {all.map((s) => (
            <Link
              key={s.slug}
              href={s.path}
              className="flex items-baseline gap-3 border-b border-papel-borde-suave py-3 text-[17px]"
            >
              <small className="w-6 font-mono text-[11px] text-papel-tinta-3">{s.number}</small>
              {s.name}
            </Link>
          ))}
          <Link href="/blog" className="block border-b border-papel-borde-suave py-3 text-[17px]">
            Blog
          </Link>
          <Link href="/contacto" className="block border-b border-papel-borde-suave py-3 text-[17px]">
            Contacto
          </Link>
          <div className="pt-6">
            <Underline href={cta.href} size="lg" event="cta_click">
              {cta.label}
            </Underline>
          </div>
        </div>
      )}
    </header>
  );
}
