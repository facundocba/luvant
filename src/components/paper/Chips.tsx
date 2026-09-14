import { cn } from "@/lib/utils";

export default function Chips({
  items,
  last,
  className,
}: {
  items: string[];
  last?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {items.map((it) => (
        <span
          key={it}
          className="rounded-full border border-papel-borde bg-papel-foja px-3 py-1.5 font-mono text-[12px] text-papel-tinta"
        >
          {it}
        </span>
      ))}
      {last && (
        <span className="rounded-full border border-dashed border-papel-borde px-3 py-1.5 font-mono text-[12px] text-papel-tinta-3">
          {last}
        </span>
      )}
    </div>
  );
}
