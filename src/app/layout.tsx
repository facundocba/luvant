import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Luvant | Software B2B para empresas",
    template: "%s | Luvant",
  },
  description:
    "Desarrollamos soluciones tecnológicas a medida para empresas que necesitan eficiencia, integración y escalabilidad.",
  keywords: [
    "software B2B",
    "desarrollo a medida",
    "OCR",
    "procesamiento de documentos",
    "Argentina",
    "Luvant",
  ],
  authors: [{ name: "Luvant" }],
  creator: "Luvant",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://luvant.com.ar",
    siteName: "Luvant",
    title: "Luvant | Software B2B para empresas",
    description:
      "Desarrollamos soluciones tecnológicas a medida para empresas que necesitan eficiencia, integración y escalabilidad.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luvant | Software B2B para empresas",
    description:
      "Desarrollamos soluciones tecnológicas a medida para empresas que necesitan eficiencia, integración y escalabilidad.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
