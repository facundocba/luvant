import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
          <div className="pointer-events-none absolute inset-0 dot-grid" />
          <Container className="relative text-center">
            <p className="mb-4 font-mono text-sm text-luvant-600">404</p>
            <h1 className="text-h2 md:text-h1 text-gradient-bright">
              Página no encontrada
            </h1>
            <p className="mx-auto mt-6 max-w-md text-lg text-luvant-400">
              La página que buscás no existe o fue movida. Podés volver al
              inicio o explorar nuestras secciones.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-luvant-200"
              >
                Ir al inicio
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/40"
              >
                Contactanos
              </Link>
            </div>

            <nav className="mt-16" aria-label="Enlaces principales">
              <ul className="flex flex-wrap justify-center gap-6">
                <li>
                  <Link
                    href="/productos"
                    className="font-mono text-xs text-luvant-500 transition-colors hover:text-white"
                  >
                    Productos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/productos/lens"
                    className="font-mono text-xs text-luvant-500 transition-colors hover:text-white"
                  >
                    Luvant Lens
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nosotros"
                    className="font-mono text-xs text-luvant-500 transition-colors hover:text-white"
                  >
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="font-mono text-xs text-luvant-500 transition-colors hover:text-white"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
