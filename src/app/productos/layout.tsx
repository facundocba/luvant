import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos y soluciones de software B2B",
  description:
    "Productos de software B2B de Luvant: Luvant Lens para procesamiento de documentos con OCR, automatización de procesos, integración de sistemas y desarrollo a medida.",
  alternates: {
    canonical: "/productos",
  },
  openGraph: {
    title: "Productos y soluciones | Luvant",
    description:
      "OCR inteligente, automatización, integración de sistemas y desarrollo a medida. Soluciones tecnológicas para empresas argentinas.",
  },
};

export default function ProductosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
