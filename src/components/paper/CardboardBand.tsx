import { cn } from "@/lib/utils";

export default function CardboardBand({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "border-t border-papel-tinta bg-papel-carton px-5 py-14 md:px-page md:py-16",
        className,
      )}
    >
      {children}
    </section>
  );
}
