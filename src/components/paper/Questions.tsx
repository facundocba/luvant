import type { Question } from "@/content/types";
import Reveal from "./Reveal";

export default function Questions({ items }: { items: Question[] }) {
  return (
    <section className="grid gap-10 px-5 py-16 md:grid-cols-3 md:px-page">
      {items.map((q, i) => (
        <Reveal key={q.q} delay={i * 0.08}>
          <div className="mb-3.5 border-t border-papel-tinta pt-3 font-mono text-[12px] text-papel-tinta-3">
            0{i + 1}
          </div>
          <h3 className="mb-2.5 text-[21px] font-semibold leading-[1.15] tracking-[-.02em]">
            {q.q}
          </h3>
          <p className="text-[15px] text-papel-tinta-2">{q.a}</p>
        </Reveal>
      ))}
    </section>
  );
}
