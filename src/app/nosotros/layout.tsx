import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros - Empresa de software B2B en Argentina",
  description:
    "Luvant es una empresa de software B2B con base en Argentina. Desarrollamos tecnología con estándares enterprise para empresas que necesitan resultados concretos.",
  alternates: {
    canonical: "/nosotros",
  },
  openGraph: {
    title: "Nosotros | Luvant",
    description:
      "Empresa de software B2B en Argentina. Excelencia técnica, transparencia total e impacto medible en cada proyecto.",
  },
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
