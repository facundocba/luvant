import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/paper/ContactForm";
import Eyebrow from "@/components/paper/Eyebrow";
import Footer from "@/components/paper/Footer";
import Nav from "@/components/paper/Nav";
import { contact } from "@/content/contact";
import { pageMetadata } from "@/lib/seo";
import { EMAIL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: contact.title,
  description: contact.description,
  path: contact.path,
  ogSlug: "contacto",
});

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="grid gap-12 px-5 py-14 md:grid-cols-[1.1fr_1fr] md:gap-16 md:px-page md:py-16">
        <div>
          <Eyebrow>{contact.eyebrow}</Eyebrow>
          <h1 className="my-4 text-[44px] font-bold leading-[.96] tracking-[-.035em] md:text-[64px]">
            {contact.h1}
            <span className="text-papel-rojo">{contact.h1Accent}</span>
          </h1>
          <p className="max-w-[520px] text-[18px] leading-[1.4] text-papel-tinta-2">{contact.intro}</p>
          <div className="mt-10 border-t border-papel-tinta">
            {contact.steps.map((s) => (
              <div key={s.label} className="flex gap-4 border-b border-papel-borde-suave py-3.5">
                <small className="w-[110px] shrink-0 font-mono text-[11.5px] text-papel-rojo">{s.label}</small>
                <div className="text-[15px]">
                  <b className="font-medium text-papel-tinta">{s.title}</b>{" "}
                  <span className="text-papel-tinta-2">{s.text}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-9 text-[15px] text-papel-tinta-2">
            {contact.direct}{" "}
            <a href={`mailto:${EMAIL}`} className="border-b border-papel-tinta text-papel-tinta">
              {EMAIL}
            </a>
          </p>
        </div>
        <Suspense>
          <ContactForm />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
