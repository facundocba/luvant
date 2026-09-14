import { cn } from "@/lib/utils";

export default function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "font-mono text-[12px] uppercase tracking-[.2em] text-papel-tinta-2",
        className,
      )}
    >
      {children}
    </div>
  );
}
