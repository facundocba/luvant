import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article";
}

export default function Card({
  children,
  className,
  hover = false,
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-xl border border-luvant-800 bg-luvant-900 p-8",
        hover &&
          "transition-all duration-200 hover:border-luvant-600 hover:-translate-y-0.5",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
