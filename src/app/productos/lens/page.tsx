import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { ScanLine, FileText, Zap, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Luvant Lens",
  description:
    "Procesamiento inteligente de documentos con OCR avanzado. Extraé datos de facturas, recetas, formularios y más con precisión.",
};

const LENS_FEATURES = [
  {
    icon: <FileText size={24} strokeWidth={1.5} />,
    title: "Multi-formato",
    description:
      "Procesá facturas, recetas médicas, formularios, contratos y cualquier documento estructurado o semi-estructurado.",
  },
  {
    icon: <Zap size={24} strokeWidth={1.5} />,
    title: "Procesamiento rápido",
    description:
      "Resultados en segundos. Optimizado para volúmenes grandes con procesamiento en paralelo.",
  },
  {
    icon: <Shield size={24} strokeWidth={1.5} />,
    title: "Precisión confiable",
    description:
      "Algoritmos entrenados para documentos en español con validación automática de datos extraídos.",
  },
  {
    icon: <ScanLine size={24} strokeWidth={1.5} />,
    title: "API simple",
    description:
      "Integrá Lens en tu sistema con una API REST documentada. SDKs disponibles para los lenguajes más populares.",
  },
];

export default function LensPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-32 pb-24">
        <Container>
          {/* Hero */}
          <div className="mb-24">
            <Badge className="mb-6">OCR · Documentos</Badge>
            <h1 className="text-h1 md:text-display mb-6">Luvant Lens</h1>
            <p className="mb-8 max-w-2xl text-lg text-luvant-400">
              Procesamiento inteligente de documentos. Extraé datos de facturas,
              recetas, formularios y más con precisión mediante OCR avanzado.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button as="a" href="/contacto" size="lg">
                Solicitar demo
              </Button>
              <Button as="a" href="#features" variant="secondary" size="lg">
                Ver características
              </Button>
            </div>
          </div>

          {/* Features */}
          <section id="features">
            <span className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600">
              Características
            </span>
            <h2 className="text-h2 mb-12">
              Todo lo que necesitás para procesar documentos
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {LENS_FEATURES.map((feature) => (
                <Card key={feature.title}>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-luvant-800 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-medium">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-luvant-400">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-24 rounded-2xl bg-luvant-black p-12 text-center md:p-16">
            <h2 className="text-h2 mb-4">¿Querés ver Lens en acción?</h2>
            <p className="mx-auto mb-8 max-w-lg text-body text-luvant-400">
              Agendá una demo personalizada y te mostramos cómo Lens puede
              transformar el procesamiento de documentos en tu empresa.
            </p>
            <Button as="a" href="/contacto" size="lg">
              Agendar demo
            </Button>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
