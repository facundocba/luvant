import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a Luvant para consultas sobre desarrollo de software B2B, procesamiento de documentos con OCR o soluciones tecnológicas a medida para tu empresa.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto | Luvant",
    description:
      "Iniciá una conversación sobre tu próximo proyecto de software. Soluciones B2B, OCR y automatización para empresas en Argentina.",
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
