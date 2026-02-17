"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  FileText,
  Zap,
  Shield,
  ArrowRight,
  Code,
  FileCheck,
  Languages,
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

const LENS_FEATURES = [
  {
    icon: <FileText size={22} strokeWidth={1.5} />,
    title: "Multi-formato",
    description:
      "Facturas, recetas médicas, formularios, contratos, remitos y cualquier documento estructurado o semi-estructurado.",
  },
  {
    icon: <Zap size={22} strokeWidth={1.5} />,
    title: "Procesamiento en paralelo",
    description:
      "Miles de documentos por hora. Procesamiento batch con colas inteligentes y priorización automática.",
  },
  {
    icon: <Shield size={22} strokeWidth={1.5} />,
    title: "Validación automática",
    description:
      "Cross-check de datos extraídos contra reglas de negocio. Alertas cuando algo no cuadra.",
  },
  {
    icon: <Code size={22} strokeWidth={1.5} />,
    title: "API REST simple",
    description:
      "Endpoint único, respuesta JSON estructurada. SDKs para Python, Node.js y .NET.",
  },
  {
    icon: <Languages size={22} strokeWidth={1.5} />,
    title: "Optimizado para español",
    description:
      "Modelos entrenados con documentos argentinos y latinoamericanos. Entiende formatos locales de CUIT, fechas y monedas.",
  },
  {
    icon: <FileCheck size={22} strokeWidth={1.5} />,
    title: "Campos personalizables",
    description:
      "Definí qué datos extraer de cada tipo de documento. Templates reutilizables para tu flujo.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Subís el documento",
    description:
      "PDF, imagen o foto desde el celular. Lens acepta cualquier formato y calidad.",
  },
  {
    step: "02",
    title: "Lens analiza y extrae",
    description:
      "OCR + ML identifica campos, tablas y relaciones. Resultados en menos de 500ms.",
  },
  {
    step: "03",
    title: "Recibís datos estructurados",
    description:
      "JSON limpio con cada campo, su valor y nivel de confianza. Listo para tu sistema.",
  },
];

function ApiResponseVisual() {
  const topFields = [
    {
      key: '"status"',
      value: '"success"',
      cls: "text-green-500/70",
      delay: 0.4,
    },
    {
      key: '"doc_type"',
      value: '"factura_a"',
      cls: "text-white/70",
      delay: 0.55,
    },
    { key: '"confidence"', value: "0.994", cls: "text-white/70", delay: 0.7 },
  ];

  const nestedFields = [
    { key: '"emisor"', value: '"Distribuidora Norte S.R.L."', delay: 0.9 },
    { key: '"cuit_emisor"', value: '"30-71589234-8"', delay: 1.0 },
    { key: '"fecha"', value: '"2026-02-14"', delay: 1.1 },
    { key: '"nro_comprobante"', value: '"0003-00018742"', delay: 1.2 },
    { key: '"subtotal"', value: "204.818,60", delay: 1.3 },
    { key: '"iva_21"', value: "43.011,90", delay: 1.4 },
    { key: '"total"', value: "247.830,50", delay: 1.5 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease }}
      className="relative"
    >
      <div className="absolute -inset-4 rounded-3xl bg-white/[0.02] blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-luvant-900/80">
        {/* Top bar */}
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <span className="ml-2 font-mono text-[11px] text-luvant-600">
            POST /api/v1/extract
          </span>
        </div>

        {/* JSON body */}
        <div className="p-5 font-mono text-xs leading-relaxed">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-luvant-600"
          >
            {"// Response — factura_0003-00018742.pdf"}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-luvant-500"
          >
            {"{"}
          </motion.div>

          {/* Top-level fields */}
          {topFields.map((f) => (
            <motion.div
              key={f.key}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: f.delay, ease }}
              className="pl-4"
            >
              <span className="text-luvant-400">{f.key}</span>
              <span className="text-luvant-600">{": "}</span>
              <span className={f.cls}>{f.value}</span>
              <span className="text-luvant-600">,</span>
            </motion.div>
          ))}

          {/* "fields" object open */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="pl-4"
          >
            <span className="text-luvant-400">{'"fields"'}</span>
            <span className="text-luvant-600">{": {"}</span>
          </motion.div>

          {/* Nested fields */}
          {nestedFields.map((f, i) => (
            <motion.div
              key={f.key}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: f.delay, ease }}
              className="pl-8"
            >
              <span className="text-luvant-400">{f.key}</span>
              <span className="text-luvant-600">{": "}</span>
              <span className="text-white/70">{f.value}</span>
              {i < nestedFields.length - 1 && (
                <span className="text-luvant-600">,</span>
              )}
            </motion.div>
          ))}

          {/* Close braces */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <div className="pl-4 text-luvant-600">{"}"}</div>
            <div className="text-luvant-500">{"}"}</div>
          </motion.div>
        </div>

        {/* Bottom status bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          className="flex items-center justify-between border-t border-white/[0.06] px-4 py-2.5"
        >
          <span className="font-mono text-[10px] text-luvant-600">
            Lens v3.1 · 7 campos extraídos
          </span>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            <span className="font-mono text-[10px] text-green-500/80">
              387ms · 99.4%
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function LensPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
          <div className="pointer-events-none absolute inset-0 dot-grid" />
          <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-white/[0.03] blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-white/[0.02] blur-3xl" />

          <Container className="relative">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease }}
                >
                  <Badge variant="accent" className="mb-6">
                    OCR &middot; Documentos &middot; ML
                  </Badge>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease }}
                  className="text-h1 md:text-display mb-6 leading-[1.05]"
                >
                  Luvant <span className="text-gradient-bright">Lens</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease }}
                  className="mb-8 max-w-lg text-lg leading-relaxed text-luvant-400"
                >
                  Transformá documentos físicos y digitales en datos
                  estructurados con precisión enterprise. Sin intervención
                  manual, sin errores de carga.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease }}
                  className="mb-10 flex flex-wrap gap-4"
                >
                  <Button as="a" href="/contacto" size="lg">
                    Solicitar demo
                  </Button>
                  <Button
                    as="a"
                    href="#como-funciona"
                    variant="secondary"
                    size="lg"
                  >
                    Cómo funciona
                  </Button>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="grid grid-cols-3 gap-4 border-t border-white/[0.06] pt-6"
                >
                  {[
                    { value: "99.2%", label: "Precisión promedio" },
                    { value: "<500ms", label: "Tiempo de respuesta" },
                    { value: "15+", label: "Tipos de documento" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="font-mono text-xl font-semibold text-white">
                        {stat.value}
                      </div>
                      <div className="font-mono text-[11px] text-luvant-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Visual */}
              <div className="hidden lg:block">
                <ApiResponseVisual />
              </div>
            </div>
          </Container>
        </section>

        {/* Cómo funciona */}
        <section id="como-funciona" className="relative py-24 lg:py-32">
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="mb-16"
            >
              <span className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600">
                Proceso
              </span>
              <h2 className="text-h2 md:text-h1 text-gradient max-w-md">
                Así de simple
              </h2>
            </motion.div>

            <motion.div
              variants={{ show: { transition: { staggerChildren: 0.15 } } }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative grid gap-8 md:grid-cols-3"
            >
              {/* Desktop connecting line */}
              <div className="absolute left-0 right-0 top-[22px] hidden h-px md:block">
                <div className="h-full w-full bg-gradient-to-r from-white/10 via-white/[0.04] to-white/10" />
              </div>

              {/* Mobile vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/[0.04] to-transparent md:hidden" />

              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.step}
                  variants={itemVariants}
                  className="relative pl-14 md:pl-0"
                >
                  <div className="absolute left-0 top-0 md:relative md:mb-5">
                    <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-luvant-950 font-mono text-sm ring-1 ring-white/10">
                      <span className="text-gradient-bright">{step.step}</span>
                    </div>
                    {i === 0 && (
                      <div className="absolute inset-0 rounded-full bg-white/5 blur-md" />
                    )}
                  </div>
                  <h3 className="mb-2 text-lg font-medium">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-luvant-400">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Features */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0 bg-luvant-900" />
          <div className="pointer-events-none absolute inset-0 cross-grid" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-full w-[600px] -translate-x-1/2 bg-gradient-to-b from-white/[0.02] via-transparent to-white/[0.01] blur-3xl" />

          <Container className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="mb-16"
            >
              <span className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600">
                Características
              </span>
              <h2 className="text-h2 md:text-h1 mb-4">
                Construido para{" "}
                <span className="text-gradient-bright">producción</span>
              </h2>
              <p className="max-w-xl text-body text-luvant-400">
                No es un prototipo. Lens está diseñado para manejar volúmenes
                reales con la confiabilidad que tu operación necesita.
              </p>
            </motion.div>

            <motion.div
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {LENS_FEATURES.map((feature) => (
                <motion.div key={feature.title} variants={itemVariants}>
                  <div className="group relative h-full overflow-hidden rounded-xl border border-white/[0.06] bg-luvant-950/80 p-6 transition-all duration-300 hover:border-white/10">
                    <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 bg-gradient-to-bl from-white/[0.02] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.05] text-luvant-300 ring-1 ring-white/[0.08] transition-colors group-hover:text-white">
                      {feature.icon}
                    </div>
                    <h3 className="mb-2 text-base font-medium">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-luvant-500">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Tipos de documento */}
        <section className="py-24 lg:py-32">
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="mb-12"
            >
              <span className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600">
                Compatibilidad
              </span>
              <h2 className="text-h2 text-gradient">
                Documentos que Lens puede procesar
              </h2>
            </motion.div>

            <div className="flex flex-wrap gap-3">
              {[
                "Facturas",
                "Recetas médicas",
                "Remitos",
                "Contratos",
                "Órdenes de compra",
                "Notas de crédito",
                "Formularios AFIP",
                "Boletas",
                "Presupuestos",
                "Comprobantes bancarios",
                "Declaraciones juradas",
                "Certificados",
                "Seguros",
                "Nóminas",
                "Más...",
              ].map((doc, i) => (
                <motion.span
                  key={doc}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03, ease }}
                  className="rounded-lg border border-luvant-800/60 bg-luvant-900/50 px-4 py-2 font-mono text-sm text-luvant-400 transition-colors hover:border-white/10 hover:text-white"
                >
                  {doc}
                </motion.span>
              ))}
            </div>
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
                ¿Querés ver Lens en acción?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-body text-luvant-400">
                Agendá una demo con tus documentos reales y medí los resultados
                vos mismo.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button as="a" href="/contacto" size="lg">
                  Agendar demo
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
