import Eyebrow from "./Eyebrow";
import Underline from "./Underline";

type Props = {
  eyebrow: string;
  title: string;
  text: string;
  cta: { label: string; href: string };
  note: string;
};

export default function Closing({ eyebrow, title, text, cta, note }: Props) {
  return (
    <section className="mx-5 grid items-end gap-10 border-t border-papel-tinta py-16 md:mx-page md:grid-cols-[1.3fr_1fr] md:gap-14 md:py-20">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-3 max-w-[640px] text-[40px] font-bold leading-[1] tracking-[-.03em] md:text-[54px]">
          {title}
        </h2>
        <p className="mt-4 max-w-[520px] text-[17px] text-papel-tinta-2">{text}</p>
      </div>
      <div className="flex flex-col items-start gap-3.5">
        <Underline href={cta.href} size="xl" event="cta_click">
          {cta.label}
        </Underline>
        <div className="font-mono text-[12px] leading-[1.45] text-papel-tinta-3">{note}</div>
      </div>
    </section>
  );
}
