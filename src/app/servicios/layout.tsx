import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Servicios | Luvant",
    default: "Servicios de software a medida | Luvant",
  },
};

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
