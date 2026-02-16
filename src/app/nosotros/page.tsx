import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Somos Luvant, una empresa de software B2B con sede en Argentina. Desarrollamos tecnología que impulsa negocios.",
};

const VALUES = [
  {
    title: "Excelencia técnica",
    description:
      "Cada línea de código se escribe con estándares de calidad enterprise. No tomamos atajos.",
  },
  {
    title: "Transparencia total",
    description:
      "Comunicación directa y honesta. Nuestros clientes siempre saben en qué estado está su proyecto.",
  },
  {
    title: "Impacto real",
    description:
      "Medimos el éxito por el valor que generamos. Si no mejora tu negocio, no lo construimos.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-32 pb-24">
        <Container>
          {/* Intro */}
          <div className="mb-24">
            <span className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600">
              Nosotros
            </span>
            <h1 className="text-h1 md:text-display mb-6">
              Tecnología con propósito
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-luvant-400">
              Somos un equipo de ingenieros y diseñadores en Argentina que
              construye software B2B para empresas que necesitan soluciones
              serias. Creemos que la tecnología bien hecha transforma negocios.
            </p>
          </div>

          {/* Values */}
          <section className="mb-24">
            <span className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600">
              Valores
            </span>
            <h2 className="text-h2 mb-12">Lo que nos define</h2>

            <div className="grid gap-6 md:grid-cols-3">
              {VALUES.map((value) => (
                <Card key={value.title}>
                  <h3 className="mb-2 text-lg font-medium">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-luvant-400">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          {/* Mission */}
          <section className="rounded-2xl bg-luvant-900 p-12 md:p-16">
            <span className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600">
              Misión
            </span>
            <p className="max-w-3xl text-h3 leading-relaxed">
              Desarrollar software que permita a las empresas latinoamericanas
              competir al más alto nivel tecnológico, eliminando fricciones
              operativas con soluciones elegantes y escalables.
            </p>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
