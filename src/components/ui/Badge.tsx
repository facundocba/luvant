import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "accent";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 font-mono text-caption",
        variant === "default" && "bg-luvant-900 text-luvant-400",
        variant === "outline" &&
          "border border-luvant-800 bg-transparent text-luvant-400",
        variant === "accent" && "bg-white/10 text-white",
        className,
      )}
    >
      {children}
    </span>
  );
}
