import Link from "next/link";
import Chips from "./Chips";
import CtaNote from "./CtaNote";
import Closing from "./Closing";
import Desk from "./Desk";
import Eyebrow from "./Eyebrow";
import Footer from "./Footer";
import Nav from "./Nav";
import OtherCards from "./OtherCards";
import Questions from "./Questions";
import Reveal from "./Reveal";
import Underline from "./Underline";
import Window from "./Window";
import type { Service } from "@/content/types";
import { closing, cta, howWeWork, includesRest, situationsHeading } from "@/content/shared";
import { breadcrumbJsonLd, faqJsonLd, JsonLd, serviceJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

const rotations = ["-rotate-1", "rotate-[.8deg] md:mt-4", "-rotate-[.6deg]"];

export default function ServicePage({ service: s }: { service: Service }) {
  const includes = [s.includesFirst, ...includesRest];
  return (
    <>
      <JsonLd data={serviceJsonLd(s)} />
      <JsonLd data={faqJsonLd(s.questions)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Luvant", path: "/" },
          { name: "Qué hacemos", path: "/servicios/desarrollo-software-a-medida" },
          { name: s.name, path: s.path },
        ])}
      />
      <Nav />
      <main id="main-content">
        <div className="px-5 pt-3.5 font-mono text-[11.5px] text-papel-tinta-3 md:px-page">
          <Link href="/">Luvant</Link> / <Link href="/servicios/desarrollo-software-a-medida">Qué hacemos</Link> /{" "}
          <span className="text-papel-tinta">{s.name}</span>
        </div>
        <section className="px-5 pt-8 md:px-page md:pt-10">
          <Eyebrow>
            Ficha <b className="font-bold text-papel-rojo">{s.number}</b> · {s.name}
          </Eyebrow>
          <h1 className="mt-4 max-w-[980px] text-[42px] font-bold leading-[.96] tracking-[-.035em] md:text-[76px]">
            {s.h1}
            <span className="text-papel-rojo">{s.h1Accent}</span>
          </h1>
          <div className="mt-6 flex flex-col gap-6 md:mt-8 md:flex-row md:items-end md:justify-between md:gap-10">
            <p className="max-w-[600px] text-[16px] leading-[1.4] text-papel-tinta-2 md:text-[18px]">{s.intro}</p>
            <div className="flex flex-col gap-3 md:items-end md:text-right">
              <Underline href={cta.href} size="lg" event="cta_click">
                {cta.label}
              </Underline>
              <CtaNote />
            </div>
          </div>
          <Desk
            height={300}
            windows={[
              { spec: s.windows[0], left: "0%", top: "0px", width: "58%", rotate: -1, z: 2 },
              { spec: s.windows[1], right: "0%", top: "30px", width: "44%", rotate: 1.2, z: 1 },
            ]}
            sticker={{ main: "Precio cerrado", left: "50%", bottom: "20px" }}
          />
        </section>

        <section className="border-t border-papel-tinta bg-papel-carton px-5 py-14 md:px-page md:py-16">
          <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
            <div>
              <Eyebrow>{situationsHeading.eyebrow}</Eyebrow>
              <h2 className="mt-3 max-w-[620px] text-[30px] font-bold leading-[1] tracking-[-.03em] md:text-[40px]">
                {situationsHeading.title}
              </h2>
            </div>
            <p className="max-w-[400px] text-[16px] text-papel-tinta-2">{situationsHeading.text}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {s.situations.map((sit, i) => (
              <Reveal key={sit.title} delay={i * 0.08} className={cn("rounded border border-papel-borde bg-papel-foja pb-[18px] shadow-[0_14px_34px_rgba(30,42,35,.12)]", rotations[i])}>
                <div className="flex justify-between border-b border-papel-borde px-4 py-2 font-mono text-[11px] uppercase tracking-[.1em] text-papel-tinta-2">
                  <span>
                    Si <b className="font-bold text-papel-rojo">{sit.when}</b>
                  </span>
                  <span>{sit.tag}</span>
                </div>
                <Window spec={sit.window} className="mx-4 my-3.5 text-[10.5px] shadow-[0_10px_24px_rgba(30,42,35,.2)]" />
                <h3 className="mx-4 mb-2 text-[22px] font-semibold leading-[1.05] tracking-[-.02em]">{sit.title}</h3>
                <p className="mx-4 text-[14px] text-papel-tinta-2">{sit.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="grid gap-12 border-t border-papel-tinta px-5 py-14 md:grid-cols-2 md:gap-14 md:px-page md:py-16">
          <div>
            <Eyebrow>Qué incluye</Eyebrow>
            <div className="mt-4 border-t border-papel-tinta">
              {includes.map((it, i) => (
                <div key={it.title} className="flex gap-4 border-b border-papel-borde-suave py-3 text-[16px]">
                  <small className="w-6 shrink-0 font-mono text-[11px] text-papel-tinta-3">0{i + 1}</small>
                  <div>
                    <b className="font-medium">{it.title}</b> <span className="text-papel-tinta-2">{it.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Eyebrow>Con qué se conecta</Eyebrow>
            <p className="mt-4 max-w-[420px] text-[16px] text-papel-tinta-2">
              Lo que ya tenés. Si tu sistema no está en la lista, casi seguro que también.
            </p>
            <Chips items={s.connections} last="+ el tuyo" className="mt-5" />
            <Eyebrow className="mt-9">Cómo trabajamos</Eyebrow>
            <div className="mt-4 grid gap-6">
              {howWeWork.map((st, i) => (
                <div key={st.label} className="border-t border-papel-tinta pt-3.5">
                  <div className="mb-2.5 font-mono text-[12px] text-papel-rojo">
                    0{i + 1} · {st.label}
                  </div>
                  <b className="mb-2 block text-[22px] font-semibold leading-[1.1] tracking-[-.02em]">{st.title}</b>
                  <p className="text-[15px] text-papel-tinta-2">{st.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-papel-tinta bg-papel-foja-2">
          <Questions items={s.questions} />
        </div>
        <Closing eyebrow={closing.eyebrow} title={closing.title} text={closing.text} cta={cta} note={closing.note} />
        <OtherCards exclude={s.slug} />
      </main>
      <Footer />
    </>
  );
}
