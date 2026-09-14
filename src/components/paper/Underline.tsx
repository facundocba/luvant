import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  children: React.ReactNode;
  size?: "sm" | "lg" | "xl";
  tone?: "ink" | "light";
  className?: string;
  event?: string;
};

const sizes = {
  sm: "text-[15px] font-medium pb-0.5 after:h-[2px]",
  lg: "text-[21px] font-semibold pb-[3px] after:h-[3px]",
  xl: "text-[26px] md:text-[30px] font-semibold pb-[3px] after:h-[3px]",
};

export default function Underline({
  href,
  children,
  size = "lg",
  tone = "ink",
  className,
  event,
}: Props) {
  const classes = cn(
    "group relative inline-block whitespace-nowrap leading-none tracking-[-.01em]",
    "after:absolute after:bottom-0 after:left-0 after:w-full hover:after:animate-underline",
    tone === "ink" ? "text-papel-tinta after:bg-papel-rojo" : "text-white after:bg-white",
    sizes[size],
    className,
  );
  const arrow = (
    <span
      className={cn(
        "ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1",
        tone === "ink" ? "text-papel-rojo" : "text-white",
      )}
    >
      →
    </span>
  );
  if (!href) {
    return (
      <button type="submit" className={classes}>
        {children}
        {arrow}
      </button>
    );
  }
  return (
    <Link href={href} className={classes} data-event={event}>
      {children}
      {arrow}
    </Link>
  );
}
