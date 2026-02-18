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
  twitter: {
    card: "summary_large_image",
    title: "Nosotros | Luvant",
    description:
      "Empresa de desarrollo de software en Argentina. Calidad técnica, transparencia total e impacto medible en cada proyecto.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://luvant.com.ar",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Nosotros",
      item: "https://luvant.com.ar/nosotros",
    },
  ],
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      {children}
    </>
  );
}
