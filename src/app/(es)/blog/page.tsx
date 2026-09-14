import Link from "next/link";
import Eyebrow from "@/components/paper/Eyebrow";
import Footer from "@/components/paper/Footer";
import Nav from "@/components/paper/Nav";
import { cn } from "@/lib/utils";

const ARTICLES = [
  {
    slug: "por-que-tu-empresa-necesita-software-a-medida",
    category: "Estrategia",
    title: "Por qué tu empresa necesita software a medida (y cuándo no)",
    excerpt:
      "No toda empresa necesita desarrollo custom. Cuándo tiene sentido invertir en software propio, cuándo conviene uno hecho, y qué preguntarte antes de decidir.",
    date: "Febrero 2026",
  },
  {
    slug: "automatizar-carga-facturas",
    category: "Guía práctica",
    title: "Cómo dejar de cargar facturas a mano",
    excerpt:
      "Tu equipo pierde horas por semana tipeando datos de facturas en el sistema. Cómo se lee una factura sola, qué necesitás y qué esperar.",
    date: "Febrero 2026",
  },
  {
    slug: "que-es-una-api-y-por-que-importa",
    category: "Conceptos",
    title: "Qué es una API y por qué le importa a tu negocio",
    excerpt:
      "Una explicación sin tecnicismos de qué son las APIs, por qué tus sistemas necesitan hablar entre sí, y cómo una buena integración te ahorra horas de trabajo manual.",
    date: "Febrero 2026",
  },
  {
    slug: "ocr-documentos-argentina",
    category: "Guía práctica",
    title: "OCR para documentos argentinos: desafíos y soluciones",
    excerpt:
      "Facturas AFIP, remitos con formato libre, comprobantes con CUIT: por qué los servicios genéricos fallan y cómo se lee bien un documento argentino.",
    date: "Febrero 2026",
  },
  {
    slug: "senales-de-que-necesitas-automatizar",
    category: "Estrategia",
    title: "5 señales de que tu empresa necesita automatizar procesos",
    excerpt:
      "Las cosas que pasan en una empresa cuando un proceso manual ya no da más, y cómo saber cuál automatizar primero.",
    date: "Febrero 2026",
  },
  {
    slug: "elegir-proveedor-desarrollo-software",
    category: "Guía práctica",
    title: "Cómo elegir un proveedor de desarrollo de software",
    excerpt:
      "Qué preguntar, qué mirar y qué señales de alarma tener en cuenta antes de contratar a alguien para que te haga un sistema.",
    date: "Febrero 2026",
  },
];

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <section className="px-5 pb-8 pt-12 md:px-page md:pt-[72px]">
          <Eyebrow>Blog</Eyebrow>
          <h1 className="mt-4 max-w-[900px] text-[42px] font-bold leading-[.96] tracking-[-.035em] md:text-[72px]">
            Lo que aprendimos haciendo software para otros.
          </h1>
        </section>
        <section className="px-5 pb-20 md:px-page">
          <div className="border-t border-papel-tinta">
            {ARTICLES.map((a, i) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="group grid gap-3 border-b border-papel-borde-suave py-7 md:grid-cols-[180px_1fr] md:gap-10"
              >
                <div className="font-mono text-[12px] uppercase tracking-[.12em] text-papel-tinta-3">
                  <span className="text-papel-rojo">0{i + 1}</span> · {a.category}
                  <br />
                  {a.date}
                </div>
                <div>
                  <h2 className={cn("text-[24px] font-semibold leading-[1.1] tracking-[-.02em] md:text-[30px]", "group-hover:underline group-hover:decoration-papel-rojo group-hover:decoration-2 group-hover:underline-offset-4")}>
                    {a.title}
                  </h2>
                  <p className="mt-2 max-w-[640px] text-[16px] text-papel-tinta-2">{a.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
