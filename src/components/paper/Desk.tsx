"use client";

import { useRef, type CSSProperties } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionStyle } from "framer-motion";
import type { WindowSpec } from "@/content/types";
import { cn } from "@/lib/utils";
import Sticker from "./Sticker";
import Window from "./Window";

export type DeskWindow = {
  spec: WindowSpec;
  left?: string;
  right?: string;
  top: string;
  width: string;
  rotate: number;
  z?: number;
};

type Props = {
  windows: DeskWindow[];
  sticker?: { cap?: string; main: string; sub?: string; left: string; bottom: string };
  height: number;
  className?: string;
};

const ease = [0.16, 1, 0.3, 1] as const;

export default function Desk({ windows, sticker, height, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [12, -12]);

  return (
    <div
      ref={ref}
      style={{ "--h": `${height}px` } as CSSProperties}
      className={cn(
        "relative mb-20 mt-7 lg:mb-0 lg:mt-11 lg:h-[var(--h)]",
        className,
      )}
    >
      {windows.map((w, i) => (
        <motion.div
          key={i}
          style={
            {
              y,
              "--l": w.left ?? "auto",
              "--rt": w.right ?? "auto",
              "--t": w.top,
              "--w": w.width,
              "--r": `${w.rotate}deg`,
              zIndex: w.z,
            } as MotionStyle
          }
          className={cn(
            "lg:absolute lg:left-[var(--l)] lg:right-[var(--rt)] lg:top-[var(--t)] lg:w-[var(--w)]",
            i > 0 && "hidden lg:block",
          )}
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: i * 0.08 }}
            className={i === 0 ? "-rotate-[1.5deg] lg:rotate-[var(--r)]" : "rotate-[var(--r)]"}
          >
            <Window spec={w.spec} />
          </motion.div>
        </motion.div>
      ))}
      {sticker && (
        <Sticker
          cap={sticker.cap}
          main={sticker.main}
          sub={sticker.sub}
          style={{ "--sl": sticker.left, "--sb": sticker.bottom } as CSSProperties}
          className="absolute -bottom-12 left-5 z-10 lg:bottom-[var(--sb)] lg:left-[var(--sl)]"
        />
      )}
    </div>
  );
}
