import type { Metadata } from "next";
import Eyebrow from "@/components/paper/Eyebrow";
import Footer from "@/components/paper/Footer";
import Nav from "@/components/paper/Nav";
import Underline from "@/components/paper/Underline";

export const metadata: Metadata = {
  title: "Página no encontrada | Luvant",
  description: "Esta página no existe.",
  alternates: { canonical: "/no-encontrado" },
  robots: { index: false, follow: false },
};

export default function NotFoundPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="min-h-[60vh] px-5 py-20 md:px-page">
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-4 max-w-[800px] text-[42px] font-bold leading-[.96] tracking-[-.035em] md:text-[72px]">
          Esta página no existe. <span className="text-papel-rojo">La home, sí.</span>
        </h1>
        <div className="mt-8">
          <Underline href="/" size="lg">
            Volver al inicio
          </Underline>
        </div>
      </main>
      <Footer />
    </>
  );
}
