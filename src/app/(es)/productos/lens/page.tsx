import type { Metadata } from "next";
import CardboardBand from "@/components/paper/CardboardBand";
import CtaNote from "@/components/paper/CtaNote";
import Chips from "@/components/paper/Chips";
import Closing from "@/components/paper/Closing";
import Desk from "@/components/paper/Desk";
import Eyebrow from "@/components/paper/Eyebrow";
import Footer from "@/components/paper/Footer";
import Nav from "@/components/paper/Nav";
import OtherCards from "@/components/paper/OtherCards";
import Questions from "@/components/paper/Questions";
import Reveal from "@/components/paper/Reveal";
import Underline from "@/components/paper/Underline";
import Window from "@/components/paper/Window";
import { lens, lensNormWindow, lensSearchWindow } from "@/content/lens";
import { breadcrumbJsonLd, faqJsonLd, JsonLd, pageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: lens.title,
  description: lens.description,
  path: lens.path,
  ogSlug: "lens",
});

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Luvant Lens",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: lens.description,
  url: `${SITE_URL}${lens.path}`,
  author: { "@id": `${SITE_URL}/#org` },
  offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
};

const rotations = ["-rotate-[.8deg]", "rotate-[.8deg]", "-rotate-[.8deg]", "rotate-[.8deg]"];

export default function LensPage() {
  return (
    <>
      <JsonLd data={appJsonLd} />
      <JsonLd data={faqJsonLd(lens.questions)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Luvant", path: "/" }, { name: "Luvant Lens", path: lens.path }])} />
      <Nav />
      <main id="main-content">
        <section className="px-5 pt-12 md:px-page md:pt-[72px]">
          <Eyebrow>{lens.eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-[980px] text-[44px] font-bold leading-[.96] tracking-[-.035em] md:text-[80px]">
            {lens.h1}
            <span className="text-papel-rojo">{lens.h1Accent}</span>
          </h1>
          <div className="mt-6 flex flex-col gap-6 md:mt-8 md:flex-row md:items-end md:justify-between md:gap-10">
            <p className="max-w-[560px] text-[16px] leading-[1.4] text-papel-tinta-2 md:text-[18px]">{lens.intro}</p>
            <div className="flex flex-col gap-3 md:items-end md:text-right">
              <Underline href={lens.cta.href} size="lg" event="cta_click">
                {lens.cta.label}
              </Underline>
              <CtaNote lead={lens.note} />
            </div>
          </div>
          <Desk
            height={380}
            windows={[
              { spec: lensSearchWindow, left: "0%", top: "20px", width: "54%", rotate: -1, z: 1 },
              { spec: lensNormWindow, right: "0%", top: "0px", width: "50%", rotate: 1, z: 2 },
            ]}
            sticker={{ main: lens.tag, left: "46%", bottom: "40px" }}
          />
        </section>

        <CardboardBand>
          <Eyebrow>{lens.how.eyebrow}</Eyebrow>
          <h2 className="mt-3 text-[30px] font-bold leading-[1] tracking-[-.03em] md:text-[40px]">{lens.how.title}</h2>
          <div className="mt-9 grid gap-5 md:grid-cols-4">
            {lens.how.steps.map((st, i) => (
              <Reveal
                key={st.title}
                delay={i * 0.08}
                className={cn("rounded border border-papel-borde bg-papel-foja pb-4 shadow-[0_14px_34px_rgba(30,42,35,.12)]", rotations[i])}
              >
                <div className="flex justify-between border-b border-papel-borde px-3.5 py-2 font-mono text-[11px] uppercase tracking-[.1em] text-papel-tinta-2">
                  <span>
                    Paso <b className="font-bold text-papel-rojo">0{i + 1}</b>
                  </span>
                  <span>{st.tag}</span>
                </div>
                <Window spec={st.window} className="mx-3.5 my-3 text-[10.5px] shadow-[0_10px_24px_rgba(30,42,35,.2)]" />
                <h3 className="mx-3.5 mb-1 text-[18px] font-semibold tracking-[-.02em]">{st.title}</h3>
                <p className="mx-3.5 text-[13px] text-papel-tinta-2">{st.text}</p>
              </Reveal>
            ))}
          </div>
        </CardboardBand>

        <section className="border-t border-papel-tinta px-5 py-14 md:px-page md:py-16">
          <Eyebrow>{lens.who.eyebrow}</Eyebrow>
          <div className="mt-9 grid gap-10 md:grid-cols-2">
            {lens.who.columns.map((c) => (
              <div key={c.id} id={c.id} className="border-t border-papel-tinta pt-4">
                <b className="mb-2 block text-[24px] font-semibold tracking-[-.02em]">{c.title}</b>
                <p className="mb-3 max-w-[440px] text-[15px] text-papel-tinta-2">{c.text}</p>
                <Chips items={c.chips} />
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-papel-tinta bg-papel-foja-2">
          <Questions items={lens.questions} />
        </div>
        <Closing
          eyebrow={lens.closing.eyebrow}
          title={lens.closing.title}
          text={lens.closing.text}
          cta={lens.cta}
          note={lens.closing.note}
        />
        <OtherCards exclude="lens" />
      </main>
      <Footer />
    </>
  );
}
