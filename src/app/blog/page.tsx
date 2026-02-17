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
    slug: "ocr-documentos-argentina",
    category: "Producto",
    title: "Cómo funciona el OCR en documentos argentinos",
    excerpt:
      "Los desafíos específicos de procesar facturas, remitos y formularios de AFIP con reconocimiento óptico de caracteres. Formatos de CUIT, fechas y monedas locales.",
    date: "Próximamente",
  },
  {
    slug: "automatizar-carga-facturas",
    category: "Guía",
    title: "Automatizar la carga de facturas: antes y después",
    excerpt:
      "El proceso manual de cargar facturas al sistema contable consume horas por semana. Analizamos cómo la extracción automática de datos cambia esa ecuación.",
    date: "Próximamente",
  },
  {
    slug: "api-first-productos-b2b",
    category: "Ingeniería",
    title: "Por qué diseñamos productos API-first",
    excerpt:
      "Cada producto de Luvant empieza por la API. Las ventajas de este enfoque para empresas que necesitan integrar, no reemplazar, sus sistemas existentes.",
    date: "Próximamente",
  },
  {
    slug: "precision-vs-velocidad-ml",
    category: "Técnico",
    title: "Precisión vs velocidad en modelos de extracción",
    excerpt:
      "El trade-off entre exactitud y tiempo de respuesta en procesamiento de documentos. Cómo Lens logra 99%+ de precisión en menos de 500ms.",
    date: "Próximamente",
  },
  {
    slug: "digitalizacion-pymes-latam",
    category: "Industria",
    title: "El estado de la digitalización en PyMEs de LATAM",
    excerpt:
      "La mayoría de las empresas medianas en Argentina todavía procesan documentos manualmente. Qué frena la adopción y cómo desbloquearla.",
    date: "Próximamente",
  },
  {
    slug: "typescript-produccion-b2b",
    category: "Ingeniería",
    title: "TypeScript en producción: lecciones de software B2B",
    excerpt:
      "Strict mode, tipos compartidos entre frontend y backend, y por qué elegimos TypeScript para todo el stack de Luvant.",
    date: "Próximamente",
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
              {ARTICLES.map((article) => (
                <motion.article key={article.slug} variants={itemVariants}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.06] bg-luvant-900/30 p-6 transition-all duration-300 hover:border-white/10">
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
                      Leer artículo
                      <ArrowRight
                        size={12}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* Newsletter / Coming soon */}
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
                      Contenido en camino
                    </span>
                    <h3 className="mx-auto mb-3 max-w-md text-h3 text-gradient-bright">
                      Estamos preparando los primeros artículos
                    </h3>
                    <p className="mx-auto max-w-sm text-sm text-luvant-400">
                      Mientras tanto, si tenés dudas sobre procesamiento de
                      documentos o automatización, escribinos.
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
