import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type Props = {
  cap?: string;
  main: string;
  sub?: string;
  className?: string;
  style?: CSSProperties;
};

export default function Sticker({ cap, main, sub, className, style }: Props) {
  return (
    <div
      style={style}
      className={cn(
        "inline-block -rotate-3 rounded bg-papel-verde px-3.5 py-2.5 font-mono text-[11.5px] leading-tight text-papel-foja shadow-[0_8px_20px_rgba(30,42,35,.28)]",
        className,
      )}
    >
      {cap && <div>{cap}</div>}
      <div className="my-0.5 font-sans text-[15px] font-semibold">{main}</div>
      {sub && <div>{sub}</div>}
    </div>
  );
}
