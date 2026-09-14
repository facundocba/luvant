import Link from "next/link";
import { lensLink, serviceLinks } from "@/content/services";
import { footer } from "@/content/shared";
import { EMAIL } from "@/lib/site";
import Mark from "./Mark";

const cap = "mb-3 font-mono text-[11px] uppercase tracking-[.15em] text-papel-tinta-3";
const item = "mb-2 block text-[13.5px] hover:underline";

export default function Footer() {
  return (
    <footer className="grid gap-10 bg-papel-tinta px-5 pb-8 pt-12 text-papel-carton md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-page">
      <div>
        <div className="flex items-center gap-2 text-[21px] font-bold tracking-[-.02em] text-papel-foja">
          <Mark tone="paper" />
          Luvant
        </div>
        <p className="mt-3 max-w-[260px] text-[13.5px]">{footer.blurb}</p>
      </div>
      <div>
        <div className={cap}>Qué hacemos</div>
        {serviceLinks.map((s) => (
          <Link key={s.slug} href={s.path} className={item}>
            {s.name}
          </Link>
        ))}
      </div>
      <div>
        <div className={cap}>Luvant Lens</div>
        <Link href={lensLink.path} className={item}>
          Normativa para organismos
        </Link>
        <Link href={`${lensLink.path}#integradores`} className={item}>
          API de documentos
        </Link>
      </div>
      <div>
        <div className={cap}>Luvant</div>
        <Link href="/blog" className={item}>
          Blog
        </Link>
        <Link href="/contacto" className={item}>
          Contacto
        </Link>
      </div>
      <div className="col-span-full mt-3 flex flex-col gap-2 border-t border-papel-carton/20 pt-4 font-mono text-[11px] text-papel-tinta-3 md:flex-row md:justify-between">
        <span>
          © {new Date().getFullYear()} Luvant · {EMAIL}
        </span>
        <span>{footer.madeIn}</span>
      </div>
    </footer>
  );
}
