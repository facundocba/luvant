import type { CSSProperties } from "react";
import PaperCard, { type PaperCardProps } from "./PaperCard";

const spots = [
  { l: "0%", t: "0px", r: -2 },
  { l: "25.7%", t: "40px", r: 1.2, z: 2 },
  { l: "53.2%", t: "8px", r: -1 },
  { l: "5.7%", t: "272px", r: 1.5 },
  { l: "34.2%", t: "300px", r: -1.8, z: 3 },
  { l: "65.6%", t: "260px", r: 2, z: 2 },
];

export default function Table({ cards }: { cards: Omit<PaperCardProps, "rotate">[] }) {
  return (
    <div className="flex flex-col gap-4 lg:relative lg:block lg:h-[540px]">
      {cards.map((c, i) => (
        <PaperCard
          key={c.href}
          {...c}
          rotate={spots[i].r}
          style={{ "--l": spots[i].l, "--t": spots[i].t, zIndex: spots[i].z } as CSSProperties}
          className="lg:absolute lg:left-[var(--l)] lg:top-[var(--t)] lg:w-[28.5%]"
        />
      ))}
    </div>
  );
}
