import Link from "next/link";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export type PaperCardProps = {
  number: string;
  tag: string;
  title: string;
  text: string;
  href: string;
  cta?: string;
  dark?: boolean;
  rotate?: number;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
};

export default function PaperCard({
  number,
  tag,
  title,
  text,
  href,
  cta,
  dark,
  rotate = 0,
  className,
  style,
  children,
}: PaperCardProps) {
  return (
    <Link
      href={href}
      style={{ ...style, "--r": `${rotate}deg` } as CSSProperties}
      className={cn(
        "block rotate-[var(--r)] rounded border pb-4 shadow-[0_14px_34px_rgba(30,42,35,.16)] transition-transform duration-200 hover:-translate-y-1 hover:rotate-0",
        dark
          ? "border-luvant-950 bg-luvant-950 text-white"
          : "border-papel-borde bg-papel-foja text-papel-tinta",
        className,
      )}
    >
      <div
        className={cn(
          "flex justify-between border-b px-4 py-2 text-[11px] uppercase tracking-[.1em]",
          dark
            ? "border-white/10 font-geistmono text-luvant-400"
            : "border-papel-borde font-mono text-papel-tinta-2",
        )}
      >
        <span>
          {dark ? "Producto" : "Ficha"}{" "}
          <b className={dark ? "text-white" : "text-papel-rojo"}>{number}</b>
        </span>
        <span>{tag}</span>
      </div>
      {children && <div className="mx-4 my-3 h-[84px] [&>*]:h-full">{children}</div>}
      <div
        className={cn(
          "mx-4 mb-1.5 text-[22px] font-semibold leading-[1.05] tracking-[-.02em]",
          dark && "font-geist",
        )}
      >
        {title}
      </div>
      <p className={cn("mx-4 text-[13.5px]", dark ? "text-luvant-400" : "text-papel-tinta-2")}>
        {text}
      </p>
      <div
        className={cn(
          "mx-4 mt-3 text-[11px]",
          dark ? "font-geistmono text-white" : "font-mono text-papel-rojo",
        )}
      >
        {cta ?? "ver más →"}
      </div>
    </Link>
  );
}
