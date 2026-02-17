import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a Luvant para consultas sobre desarrollo de software a medida, procesamiento de documentos con OCR o soluciones tecnológicas para tu proyecto.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto | Luvant",
    description:
      "Iniciá una conversación sobre tu próximo proyecto de software. OCR, automatización y desarrollo a medida desde Argentina.",
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
