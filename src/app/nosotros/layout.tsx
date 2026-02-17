import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros - Empresa de desarrollo de software en Argentina",
  description:
    "Luvant es una empresa de desarrollo de software con base en Argentina. Construimos soluciones a medida con estándares profesionales para quienes necesitan resultados concretos.",
  alternates: {
    canonical: "/nosotros",
  },
  openGraph: {
    title: "Nosotros | Luvant",
    description:
      "Empresa de desarrollo de software en Argentina. Calidad técnica, transparencia total e impacto medible en cada proyecto.",
  },
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
