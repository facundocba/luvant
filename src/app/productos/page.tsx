"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import {
  ArrowRight,
  ScanLine,
  Workflow,
  RefreshCw,
  Code,
  Lightbulb,
} from "lucide-react";

const ease = [0.25, 0.4, 0.25, 1] as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

function LensProcessingVisual() {
  const extractedFields = [
    { label: "Emisor", value: "Distribuidora Norte S.R.L.", delay: 0.3 },
    { label: "CUIT", value: "30-71589234-8", delay: 0.45 },
    { label: "Tipo", value: "Factura A", delay: 0.6 },
    { label: "N° Comp.", value: "0003-00018742", delay: 0.75 },
    { label: "Total", value: "$247.830,50", delay: 0.9 },
  ];

  return (
    <div className="w-full space-y-3">
      {/* Simulated document preview */}
      <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-luvant-950/60">
        <div className="border-b border-white/[0.04] px-4 py-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-luvant-600">
              factura_0003-00018742.pdf
            </span>
            <span className="font-mono text-[10px] text-luvant-600">
              1/3 páginas
            </span>
          </div>
        </div>
        <div className="p-4">
          {/* Mini invoice skeleton */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <div className="h-2 w-24 rounded-full bg-white/[0.08]" />
              <div className="h-2 w-16 rounded-full bg-white/[0.06]" />
            </div>
            <div className="h-2 w-full rounded-full bg-white/[0.04]" />
            <div className="h-2 w-3/4 rounded-full bg-white/[0.04]" />
            <div className="mt-3 h-px w-full bg-white/[0.04]" />
            <div className="flex justify-between">
              <div className="h-2 w-20 rounded-full bg-white/[0.06]" />
              <div className="h-2 w-14 rounded-full bg-white/[0.08]" />
            </div>
            <div className="flex justify-between">
              <div className="h-2 w-28 rounded-full bg-white/[0.04]" />
              <div className="h-2 w-12 rounded-full bg-white/[0.06]" />
            </div>
          </div>

          {/* Scan line */}
          <motion.div
            className="mt-1 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ y: [-30, 30] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      {/* Extracted data */}
      <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-luvant-950/60">
        <div className="border-b border-white/[0.04] px-4 py-2">
          <span className="font-mono text-[10px] text-luvant-600">
            Datos extraídos
          </span>
        </div>
        <div className="space-y-0 divide-y divide-white/[0.03]">
          {extractedFields.map((field) => (
            <motion.div
              key={field.label}
              initial={{ opacity: 0, x: 8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: field.delay, ease }}
              className="flex items-center justify-between px-4 py-2"
            >
              <span className="font-mono text-[10px] text-luvant-600">
                {field.label}
              </span>
              <span className="font-mono text-[11px] text-white/80">
                {field.value}
              </span>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1 }}
          className="flex items-center justify-between border-t border-white/[0.04] px-4 py-2"
        >
          <span className="font-mono text-[10px] text-luvant-600">
            Confianza
          </span>
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            <span className="font-mono text-[10px] text-green-500/80">
              99.4%
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ProductosPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="pointer-events-none absolute inset-0 dot-grid" />
          <div className="pointer-events-none absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full bg-white/[0.03] blur-3xl" />
          <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          <Container className="relative">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
              className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600"
            >
              Productos
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="text-h1 md:text-display mb-6 max-w-2xl leading-[1.05]"
            >
              Herramientas construidas para{" "}
              <span className="text-gradient-bright">escalar</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="max-w-xl text-lg text-luvant-400"
            >
              Cada producto resuelve un problema real del mundo empresarial con
              tecnología moderna, APIs documentadas y soporte dedicado.
            </motion.p>
          </Container>
        </section>

        {/* Luvant Lens — Featured */}
        <section className="pb-16">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <div className="gradient-border relative overflow-hidden rounded-2xl glow-md">
                <div className="relative grid gap-8 p-8 md:grid-cols-2 md:p-12">
                  <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/[0.03] blur-3xl" />

                  <div className="relative">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/10">
                        <ScanLine size={22} strokeWidth={1.5} />
                      </div>
                      <Badge variant="accent">Disponible</Badge>
                    </div>

                    <h2 className="text-h1 mb-3">Luvant Lens</h2>
                    <p className="mb-6 text-body leading-relaxed text-luvant-400">
                      Procesamiento inteligente de documentos. Extraé datos de
                      facturas, recetas, formularios y más con precisión
                      mediante OCR avanzado y machine learning.
                    </p>

                    <div className="mb-8 grid grid-cols-3 gap-3">
                      {[
                        { value: "99.2%", label: "Precisión" },
                        { value: "<500ms", label: "Latencia" },
                        { value: "15+", label: "Tipos de doc" },
                      ].map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: 0.2 + i * 0.1,
                            ease,
                          }}
                          className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5"
                        >
                          <div className="font-mono text-sm font-medium text-white">
                            {stat.value}
                          </div>
                          <div className="font-mono text-[10px] text-luvant-600">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button as="a" href="/productos/lens">
                        Conocer Lens
                        <ArrowRight size={14} className="ml-1.5" />
                      </Button>
                      <Button as="a" href="/contacto" variant="secondary">
                        Solicitar demo
                      </Button>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="hidden items-center md:flex">
                    <LensProcessingVisual />
                  </div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Soluciones */}
        <section className="relative overflow-hidden pb-24 lg:pb-32">
          <div className="pointer-events-none absolute inset-0 bg-luvant-900" />
          <div className="pointer-events-none absolute inset-0 cross-grid" />
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          <Container className="relative pt-24 lg:pt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="mb-12"
            >
              <span className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600">
                Soluciones
              </span>
              <h2 className="text-h2 md:text-h1 mb-4">
                También{" "}
                <span className="text-gradient-bright">construimos</span>
              </h2>
              <p className="max-w-xl text-body text-luvant-400">
                Más allá de nuestros productos, desarrollamos soluciones a
                medida para resolver los desafíos técnicos de tu empresa.
              </p>
            </motion.div>

            <motion.div
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {[
                {
                  title: "Automatización de procesos",
                  icon: <Workflow size={22} strokeWidth={1.5} />,
                  description:
                    "Eliminá tareas manuales repetitivas conectando tus sistemas con flujos inteligentes que se adaptan a tu operación.",
                },
                {
                  title: "Integración de sistemas",
                  icon: <RefreshCw size={22} strokeWidth={1.5} />,
                  description:
                    "Conectamos tus plataformas para que la información fluya en tiempo real, sin duplicados ni inconsistencias.",
                },
                {
                  title: "Desarrollo a medida",
                  icon: <Code size={22} strokeWidth={1.5} />,
                  description:
                    "Software diseñado para tu negocio. Dashboards internos, plataformas web, APIs y aplicaciones móviles.",
                },
                {
                  title: "Consultoría técnica",
                  icon: <Lightbulb size={22} strokeWidth={1.5} />,
                  description:
                    "Te ayudamos a evaluar, planificar e implementar la solución tecnológica correcta para tu empresa.",
                },
              ].map((solution) => (
                <motion.div key={solution.title} variants={itemVariants}>
                  <div className="group relative h-full overflow-hidden rounded-xl border border-white/[0.06] bg-luvant-950/80 p-6 transition-all duration-300 hover:border-white/10">
                    <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 bg-gradient-to-bl from-white/[0.02] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.05] text-luvant-300 ring-1 ring-white/[0.08] transition-colors group-hover:text-white">
                      {solution.icon}
                    </div>
                    <h3 className="mb-2 text-base font-medium">
                      {solution.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-luvant-500">
                      {solution.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-luvant-black py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0 dot-grid opacity-50" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[100px]" />
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 bg-gradient-to-br from-white/[0.02] to-transparent" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 bg-gradient-to-tl from-white/[0.02] to-transparent" />

          <Container className="relative text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <h2 className="mx-auto max-w-xl text-h2 md:text-h1 text-gradient-bright">
                ¿No encontrás lo que necesitás?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-body text-luvant-400">
                También desarrollamos soluciones a medida. Contanos tu problema
                y lo resolvemos.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button as="a" href="/contacto" size="lg">
                  Contactar
                  <ArrowRight size={16} className="ml-1.5" />
                </Button>
                <Button
                  as="a"
                  href="mailto:hola@luvant.com.ar"
                  variant="ghost"
                  size="lg"
                >
                  hola@luvant.com.ar
                </Button>
              </div>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
