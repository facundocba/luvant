import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Tecnología, OCR y automatización empresarial",
  description:
    "Artículos sobre procesamiento de documentos, OCR, automatización empresarial e ingeniería de software. Contenido técnico desde Luvant, Argentina.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Luvant",
    description:
      "Ideas, técnica y producto. Artículos sobre procesamiento de documentos, ingeniería de software y los problemas reales que resolvemos con tecnología.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
