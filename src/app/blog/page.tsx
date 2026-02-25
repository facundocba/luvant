"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";

const ease = [0.25, 0.4, 0.25, 1] as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

const ARTICLES = [
  {
    slug: "por-que-tu-empresa-necesita-software-a-medida",
    category: "Estrategia",
    title: "Por qué tu empresa necesita software a medida (y cuándo no)",
    excerpt:
      "No toda empresa necesita desarrollo custom. Analizamos cuándo tiene sentido invertir en software propio vs usar soluciones existentes, y qué preguntas hacerte antes de decidir.",
    date: "Febrero 2026",
    href: "/blog/por-que-tu-empresa-necesita-software-a-medida",
  },
  {
    slug: "automatizar-carga-facturas",
    category: "Guía práctica",
    title: "Cómo dejar de cargar facturas a mano",
    excerpt:
      "Tu equipo pierde horas por semana tipeando datos de facturas en el sistema. Hay una forma mejor: extracción automática con OCR que se integra con tu software contable.",
    date: "Febrero 2026",
    href: "/blog/automatizar-carga-facturas",
  },
  {
    slug: "que-es-una-api-y-por-que-importa",
    category: "Conceptos",
    title: "Qué es una API y por qué le importa a tu negocio",
    excerpt:
      "Una explicación sin tecnicismos de qué son las APIs, por qué tus sistemas necesitan hablar entre sí, y cómo una buena integración puede ahorrarte horas de trabajo manual.",
    date: "Febrero 2026",
    href: "/blog/que-es-una-api-y-por-que-importa",
  },
  {
    slug: "ocr-documentos-argentina",
    category: "Producto",
    title: "OCR para documentos argentinos: desafíos y soluciones",
    excerpt:
      "Procesar facturas AFIP, remitos con formato libre y comprobantes con CUIT requiere OCR entrenado para las particularidades locales. Así lo resolvemos con Luvant Lens.",
    date: "Febrero 2026",
    href: "/blog/ocr-documentos-argentina",
  },
  {
    slug: "senales-de-que-necesitas-automatizar",
    category: "Estrategia",
    title: "5 señales de que tu empresa necesita automatizar procesos",
    excerpt:
      "Si tu equipo copia datos entre planillas, manda los mismos emails todos los días o depende de una persona para un proceso crítico, es hora de automatizar.",
    date: "Febrero 2026",
    href: "/blog/senales-de-que-necesitas-automatizar",
  },
  {
    slug: "elegir-proveedor-desarrollo-software",
    category: "Guía práctica",
    title: "Cómo elegir un proveedor de desarrollo de software",
    excerpt:
      "Qué preguntar, qué pedir como prueba y qué señales de alerta buscar antes de contratar a alguien para construir software para tu empresa.",
    date: "Febrero 2026",
    href: "/blog/elegir-proveedor-desarrollo-software",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="pointer-events-none absolute inset-0 dot-grid" />
          <div className="pointer-events-none absolute -right-40 -top-20 h-[400px] w-[400px] rounded-full bg-white/[0.03] blur-3xl" />

          <Container className="relative">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
              className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600"
            >
              Blog
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="text-h1 md:text-display mb-6 max-w-2xl leading-[1.05]"
            >
              Ideas, técnica y{" "}
              <span className="text-gradient-bright">producto</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="max-w-xl text-lg text-luvant-400"
            >
              Artículos sobre procesamiento de documentos, ingeniería de
              software y los problemas reales que resolvemos con tecnología.
            </motion.p>
          </Container>
        </section>

        {/* Articles */}
        <section className="pb-24 lg:pb-32">
          <Container>
            <motion.div
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {ARTICLES.map((article) => {
                const cardContent = (
                  <>
                    <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 bg-gradient-to-bl from-white/[0.02] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                    <div className="mb-4 flex items-center justify-between">
                      <Badge variant="outline">{article.category}</Badge>
                      <span className="font-mono text-[10px] text-luvant-600">
                        {article.date}
                      </span>
                    </div>

                    <h2 className="mb-3 text-lg font-medium leading-snug transition-colors group-hover:text-white">
                      {article.title}
                    </h2>

                    <p className="mb-6 flex-1 text-sm leading-relaxed text-luvant-500">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-1.5 font-mono text-xs text-luvant-400 transition-colors group-hover:text-white">
                      {article.href ? "Leer artículo" : "Próximamente"}
                      {article.href && (
                        <ArrowRight
                          size={12}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      )}
                    </div>
                  </>
                );

                const cardClass =
                  "group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.06] bg-luvant-900/30 p-6 transition-all duration-300 hover:border-white/10";

                return (
                  <motion.article key={article.slug} variants={itemVariants}>
                    {article.href ? (
                      <Link href={article.href} className={cardClass}>
                        {cardContent}
                      </Link>
                    ) : (
                      <div className={cardClass}>{cardContent}</div>
                    )}
                  </motion.article>
                );
              })}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="mt-16"
            >
              <div className="gradient-border relative overflow-hidden rounded-2xl">
                <div className="relative p-10 text-center md:p-14">
                  <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-gradient-to-bl from-white/[0.02] to-transparent" />
                  <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 bg-gradient-to-tr from-white/[0.02] to-transparent" />

                  <div className="relative">
                    <span className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600">
                      ¿Tenés un proyecto?
                    </span>
                    <h3 className="mx-auto mb-3 max-w-md text-h3 text-gradient-bright">
                      Hablemos de cómo resolver tu problema con tecnología
                    </h3>
                    <p className="mx-auto max-w-sm text-sm text-luvant-400">
                      Si tenés dudas sobre procesamiento de documentos,
                      automatización o desarrollo a medida, escribinos.
                    </p>
                    <div className="mt-8">
                      <Link
                        href="/contacto"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-luvant-200"
                      >
                        Contactar
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
