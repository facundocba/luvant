import type { Metadata } from "next";
import { Suspense } from "react";
import CardboardBand from "@/components/paper/CardboardBand";
import Eyebrow from "@/components/paper/Eyebrow";
import Footer from "@/components/paper/Footer";
import Nav from "@/components/paper/Nav";
import ThanksCard from "@/components/paper/ThanksCard";
import { contact } from "@/content/contact";

export const metadata: Metadata = {
  title: contact.thanks.title,
  description: contact.thanks.text,
  alternates: { canonical: "/contacto/gracias" },
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  const t = contact.thanks;
  return (
    <>
      <Nav />
      <main id="main-content" className="min-h-[60vh]">
        <CardboardBand className="grid items-center gap-10 border-t-0 md:grid-cols-2 md:gap-14">
          <div>
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h1 className="my-3.5 text-[36px] font-bold leading-[1] tracking-[-.03em] md:text-[46px]">{t.h2}</h1>
            <p className="max-w-[460px] text-[16px] text-papel-tinta-2">{t.text}</p>
          </div>
          <Suspense>
            <ThanksCard />
          </Suspense>
        </CardboardBand>
      </main>
      <Footer />
    </>
  );
}
