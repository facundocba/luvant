import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre tecnología, desarrollo de software y soluciones B2B por el equipo de Luvant.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-32 pb-24">
        <Container>
          <span className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600">
            Blog
          </span>
          <h1 className="text-h1 md:text-display mb-6">
            Artículos y novedades
          </h1>
          <p className="max-w-2xl text-lg text-luvant-400">
            Próximamente compartiremos artículos sobre tecnología, desarrollo de
            software y soluciones B2B.
          </p>

          <div className="mt-16 rounded-xl border border-dashed border-luvant-800 p-16 text-center">
            <p className="font-mono text-sm text-luvant-600">
              Contenido próximamente
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
