"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import {
  Code,
  Target,
  Eye,
  Lightbulb,
  ArrowRight,
  Shield,
  Layers,
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

const VALUES = [
  {
    icon: <Target size={22} strokeWidth={1.5} />,
    title: "Obsesión por la calidad",
    description:
      "Testing, code reviews y despliegue automatizado en cada proyecto. No entregamos software que no usaríamos nosotros mismos.",
  },
  {
    icon: <Eye size={22} strokeWidth={1.5} />,
    title: "Transparencia real",
    description:
      "Acceso al repositorio, demos cada 2 semanas y comunicación directa. Siempre sabés en qué está tu proyecto y por qué.",
  },
  {
    icon: <Lightbulb size={22} strokeWidth={1.5} />,
    title: "Resultados, no promesas",
    description:
      "Definimos métricas de éxito antes de arrancar. Si no podemos demostrar impacto concreto, te lo decimos de entrada.",
  },
];

const NUMBERS = [
  { value: "2024", label: "Fundada" },
  { value: "100%", label: "Remoto" },
  { value: "100%", label: "Código propio" },
  { value: "API", label: "Todo integrado" },
];

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="pointer-events-none absolute inset-0 dot-grid" />
          <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-white/[0.02] blur-3xl" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-white/[0.03] blur-3xl" />

          <Container className="relative">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
              className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600"
            >
              Nosotros
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="text-h1 md:text-display mb-6 max-w-3xl leading-[1.05]"
            >
              Software con{" "}
              <span className="text-gradient-bright">criterio</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="max-w-2xl text-lg leading-relaxed text-luvant-400"
            >
              Luvant nació de una convicción simple: quien invierte en software
              merece soluciones que resuelvan problemas reales, no que creen
              nuevos. Somos una empresa de desarrollo de software enfocada en
              construir tecnología que funcione desde el día uno.
            </motion.p>
          </Container>
        </section>

        {/* Numbers */}
        <section className="py-16">
          <Container>
            <motion.div
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6 md:grid-cols-4"
            >
              {NUMBERS.map((item) => (
                <motion.div key={item.label} variants={itemVariants}>
                  <div className="rounded-xl border border-white/[0.06] bg-luvant-900/50 p-6 text-center transition-all duration-300 hover:border-white/10">
                    <div className="font-mono text-2xl font-semibold text-white">
                      {item.value}
                    </div>
                    <div className="mt-1 font-mono text-caption uppercase text-luvant-600">
                      {item.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Lo que creemos */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0 bg-luvant-900" />
          <div className="pointer-events-none absolute inset-0 cross-grid" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-full w-[600px] -translate-x-1/2 bg-gradient-to-b from-white/[0.02] via-transparent to-white/[0.01] blur-3xl" />

          <Container className="relative">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
                className="lg:sticky lg:top-32"
              >
                <span className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600">
                  Principios
                </span>
                <h2 className="text-h2 md:text-h1 mb-4">
                  Cómo <span className="text-gradient-bright">pensamos</span>
                </h2>
                <p className="text-body text-luvant-400">
                  Tres ideas que guían cada decisión que tomamos, desde qué
                  tecnología usar hasta cómo comunicamos el avance.
                </p>
              </motion.div>

              <motion.div
                variants={{ show: { transition: { staggerChildren: 0.12 } } }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {VALUES.map((value, i) => (
                  <motion.div key={value.title} variants={itemVariants}>
                    <div className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-luvant-950/80 p-7 transition-all duration-300 hover:border-white/10">
                      <div
                        className="pointer-events-none absolute left-0 top-0 h-full w-px opacity-0 transition-opacity group-hover:opacity-100"
                        style={{
                          background: `linear-gradient(180deg, transparent, rgba(255,255,255,${0.1 + i * 0.05}), transparent)`,
                        }}
                      />
                      <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 bg-gradient-to-bl from-white/[0.02] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-luvant-300 ring-1 ring-white/[0.08] transition-colors group-hover:text-white">
                          {value.icon}
                        </div>
                        <div>
                          <h3 className="mb-2 text-lg font-medium">
                            {value.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-luvant-400">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Misión */}
        <section className="py-24 lg:py-32">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <div className="gradient-border relative overflow-hidden rounded-2xl glow-md">
                <div className="relative p-12 md:p-16">
                  <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 bg-gradient-to-bl from-white/[0.03] to-transparent" />
                  <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 bg-gradient-to-tr from-white/[0.02] to-transparent" />

                  <div className="relative">
                    <span className="mb-6 block font-mono text-caption uppercase tracking-widest text-luvant-600">
                      Misión
                    </span>
                    <p className="max-w-3xl text-h3 md:text-h2 leading-relaxed text-gradient">
                      Construir software que elimine fricciones operativas y le
                      permita a cada empresa enfocarse en lo que mejor sabe
                      hacer — sin perder tiempo en procesos que la tecnología
                      puede resolver.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Cómo se trabaja */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          <div className="pointer-events-none absolute inset-0 dot-grid opacity-30" />

          <Container className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="mb-12"
            >
              <span className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600">
                Forma de trabajo
              </span>
              <h2 className="text-h2 text-gradient">Cómo opera Luvant</h2>
            </motion.div>

            <motion.div
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-4 md:grid-cols-2"
            >
              {[
                {
                  icon: <Code size={20} strokeWidth={1.5} />,
                  title: "Tecnología que elegimos con criterio",
                  description:
                    "TypeScript, React, Next.js, Python, PostgreSQL. Elegimos la herramienta correcta para cada problema, no la más popular.",
                },
                {
                  icon: <Shield size={20} strokeWidth={1.5} />,
                  title: "Nada sale sin revisión",
                  description:
                    "Testing automatizado, code review y CI/CD. Cada cambio pasa por un pipeline completo antes de llegar a producción.",
                },
                {
                  title: "Ves avances, no slides",
                  icon: <Layers size={20} strokeWidth={1.5} />,
                  description:
                    "Entregas funcionales cada 2 semanas. Demo, feedback, ajuste. Nunca te llevás una sorpresa a fin de proyecto.",
                },
                {
                  title: "Tu equipo puede mantenerlo",
                  icon: <Eye size={20} strokeWidth={1.5} />,
                  description:
                    "Cada proyecto incluye documentación técnica completa y transferencia de conocimiento. No creamos dependencia.",
                },
              ].map((item) => (
                <motion.div key={item.title} variants={itemVariants}>
                  <div className="group relative h-full overflow-hidden rounded-xl border border-luvant-800/60 bg-luvant-900/30 p-6 transition-all duration-300 hover:border-white/[0.08]">
                    <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 bg-gradient-to-bl from-white/[0.02] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-luvant-800 text-luvant-400 transition-colors group-hover:text-white">
                      {item.icon}
                    </div>
                    <h3 className="mb-2 text-base font-medium">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-luvant-500">
                      {item.description}
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
                ¿Tenés un proyecto en mente?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-body text-luvant-400">
                Contanos qué problema querés resolver y te decimos cómo podemos
                ayudarte.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button as="a" href="/contacto" size="lg">
                  Iniciar conversación
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
