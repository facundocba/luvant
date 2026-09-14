import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Footer from "./Footer";
import Nav from "./Nav";
import Underline from "./Underline";

type Props = {
  category: string;
  date: string;
  readTime: string;
  title: string;
  intro: string;
  related: { label: string; href: string; text: string };
  children: React.ReactNode;
};

export default function Article({ category, date, readTime, title, intro, related, children }: Props) {
  return (
    <>
      <Nav />
      <main id="main-content">
        <section className="px-5 pb-10 pt-10 md:px-page md:pb-14 md:pt-14">
          <Link href="/blog" className="font-mono text-[12px] text-papel-tinta-3 hover:text-papel-tinta">
            ← Volver al blog
          </Link>
          <Eyebrow className="mt-8">
            {category} · {date} · {readTime}
          </Eyebrow>
          <h1 className="mt-4 max-w-[900px] text-[38px] font-bold leading-[1] tracking-[-.03em] md:text-[60px]">
            {title}
          </h1>
          <p className="mt-6 max-w-[680px] text-[18px] leading-[1.45] text-papel-tinta-2 md:text-[20px]">{intro}</p>
        </section>
        <section className="px-5 pb-16 md:px-page">
          <article className="prose-paper max-w-[680px]">{children}</article>
          <aside className="mt-14 max-w-[680px] -rotate-[.6deg] rounded border border-papel-borde bg-papel-foja-2 px-6 py-6 shadow-[0_14px_34px_rgba(30,42,35,.12)]">
            <Eyebrow>Si te pasa esto</Eyebrow>
            <p className="my-3 text-[17px] text-papel-tinta-2">{related.text}</p>
            <Underline href={related.href} size="lg">
              {related.label}
            </Underline>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
