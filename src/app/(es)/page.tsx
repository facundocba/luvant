import type { Metadata } from "next";
import CardboardBand from "@/components/paper/CardboardBand";
import CtaNote from "@/components/paper/CtaNote";
import Closing from "@/components/paper/Closing";
import Desk from "@/components/paper/Desk";
import Eyebrow from "@/components/paper/Eyebrow";
import Footer from "@/components/paper/Footer";
import Nav from "@/components/paper/Nav";
import Questions from "@/components/paper/Questions";
import Reveal from "@/components/paper/Reveal";
import Sketch from "@/components/paper/Sketch";
import Sticker from "@/components/paper/Sticker";
import Table from "@/components/paper/Table";
import Underline from "@/components/paper/Underline";
import Window from "@/components/paper/Window";
import { home, invoicesWindow, normWindow, salesWindow, searchWindow } from "@/content/home";
import { lensLink, serviceLinks } from "@/content/services";
import { closing, cta, homeQuestions } from "@/content/shared";
import { faqJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: home.title,
  description: home.description,
  path: "/",
  ogSlug: "home",
});

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeQuestions)} />
      <Nav />
      <main id="main-content">
        <section className="px-5 pt-12 md:px-page md:pt-[72px]">
          <h1 className="max-w-[1000px] text-[46px] font-bold leading-[.96] tracking-[-.035em] md:text-[92px]">
            {home.h1}
            <span className="text-papel-rojo">{home.h1Accent}</span>
          </h1>
          <div className="mt-6 flex flex-col gap-6 md:mt-8 md:flex-row md:items-end md:justify-between md:gap-10">
            <p className="max-w-[560px] text-[16px] leading-[1.4] text-papel-tinta-2 md:text-[18px]">
              {home.intro}
            </p>
            <div className="flex flex-col gap-3 md:items-end md:text-right">
              <Underline href={cta.href} size="lg" event="cta_click">
                {cta.label}
              </Underline>
              <CtaNote />
            </div>
          </div>
          <Desk
            height={330}
            windows={[
              { spec: normWindow, left: "0%", top: "30px", width: "46%", rotate: -1, z: 2 },
              { spec: salesWindow, left: "39%", top: "0px", width: "30%", rotate: 1.2, z: 1 },
              { spec: invoicesWindow, right: "0%", top: "46px", width: "34%", rotate: -0.6, z: 3 },
            ]}
            sticker={{ ...home.sticker, left: "33%", bottom: "20px" }}
          />
        </section>

        <section className="border-t border-papel-tinta bg-papel-foja-2 px-5 py-14 md:px-page md:py-16">
          <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
            <div>
              <Eyebrow>{home.cards.eyebrow}</Eyebrow>
              <h2 className="mt-3 max-w-[620px] text-[30px] font-bold leading-[1] tracking-[-.03em] md:text-[40px]">
                {home.cards.title}
              </h2>
            </div>
            <p className="max-w-[380px] text-[16px] text-papel-tinta-2">{home.cards.text}</p>
          </div>
          <Table
            cards={[
              ...serviceLinks.map((s, i) => ({
                number: s.number,
                tag: s.tag,
                title: s.name,
                text: home.cards.items[i].text,
                href: s.path,
                children: <Sketch kind={home.cards.items[i].sketch} />,
              })),
              {
                number: lensLink.number,
                tag: lensLink.tag,
                title: lensLink.name,
                text: home.cards.lens.text,
                href: lensLink.path,
                cta: home.cards.lens.cta,
                dark: true,
                children: <Sketch kind="code" />,
              },
            ]}
          />
        </section>

        <CardboardBand className="grid items-center gap-10 md:grid-cols-[1fr_1.15fr] md:gap-14">
          <div>
            <Eyebrow>{home.lens.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-[30px] font-bold leading-[1] tracking-[-.03em] md:text-[40px]">
              {home.lens.title}
            </h2>
            <p className="my-4 max-w-[460px] text-[17px] leading-[1.45] text-papel-tinta-2">{home.lens.text}</p>
            <div className="mb-6 grid max-w-[480px] grid-cols-2 gap-4">
              {home.lens.columns.map((c) => (
                <div key={c.title} className="border-t border-papel-tinta pt-2.5 text-[13.5px] text-papel-tinta-2">
                  <b className="mb-1 block text-[14.5px] font-semibold text-papel-tinta">{c.title}</b>
                  {c.text}
                </div>
              ))}
            </div>
            <Underline href={home.lens.cta.href} size="lg">
              {home.lens.cta.label}
            </Underline>
          </div>
          <Reveal className="relative">
            <Window spec={searchWindow} />
            <Sticker main={home.lens.tag} className="absolute -bottom-3 -left-3.5 rotate-2 text-[11px] uppercase tracking-[.1em] [&>div]:my-0 [&>div]:font-mono [&>div]:text-[11px] [&>div]:font-normal" />
          </Reveal>
        </CardboardBand>

        <Questions items={homeQuestions} />
        <Closing eyebrow={closing.eyebrow} title={closing.title} text={closing.text} cta={cta} note={closing.note} />
      </main>
      <Footer />
    </>
  );
}
