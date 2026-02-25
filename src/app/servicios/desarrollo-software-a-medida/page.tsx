"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import {
  ArrowRight,
  Code,
  Layers,
  Smartphone,
  Globe,
  Database,
  Shield,
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

const CAPABILITIES = [
  {
    icon: <Globe size={22} strokeWidth={1.5} />,
    title: "Aplicaciones web",
    description:
      "Plataformas, dashboards y portales diseñados para tu operación. Responsivas, rápidas y seguras.",
  },
  {
    icon: <Database size={22} strokeWidth={1.5} />,
    title: "APIs y backends",
    description:
      "Servicios robustos, documentados y escalables. REST o GraphQL, según lo que necesite tu proyecto.",
  },
  {
    icon: <Smartphone size={22} strokeWidth={1.5} />,
    title: "Apps móviles",
    description:
      "Aplicaciones nativas o cross-platform para iOS y Android, integradas con tu backend.",
  },
  {
    icon: <Layers size={22} strokeWidth={1.5} />,
    title: "Sistemas internos",
    description:
      "ERPs, CRMs y herramientas de gestión adaptadas a los procesos reales de tu empresa.",
  },
  {
    icon: <Code size={22} strokeWidth={1.5} />,
    title: "MVPs y prototipos",
    description:
      "Validá tu idea de negocio con un producto funcional en semanas, no meses.",
  },
  {
    icon: <Shield size={22} strokeWidth={1.5} />,
    title: "Mantenimiento y evolución",
    description:
      "Soporte continuo, nuevas funcionalidades y optimización de software existente.",
  },
];

const FAQS = [
  {
    q: "¿Cuánto tarda desarrollar un software a medida?",
    a: "Depende del alcance. Un MVP funcional puede estar listo en 4-8 semanas. Proyectos más complejos se entregan en fases, con demos cada 2 semanas.",
  },
  {
    q: "¿Cuánto cuesta un desarrollo a medida?",
    a: "El costo depende de la complejidad y el alcance. Después de una reunión inicial gratuita, enviamos una propuesta detallada con tiempos y costos claros.",
  },
  {
    q: "¿Qué pasa si necesito cambios después de la entrega?",
    a: "Cada proyecto incluye documentación técnica completa y transferencia de conocimiento. Tu equipo puede mantenerlo, o podemos acompañarte con soporte continuo.",
  },
  {
    q: "¿Con qué tecnologías desarrollan?",
    a: "TypeScript, React, Next.js, Python, Node.js y PostgreSQL entre otras. Elegimos la herramienta correcta para cada problema.",
  },
];

export default function DesarrolloSoftwarePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="pointer-events-none absolute inset-0 dot-grid" />
          <div className="pointer-events-none absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full bg-white/[0.03] blur-3xl" />

          <Container className="relative">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
              className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600"
            >
              Desarrollo a medida
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="text-h1 md:text-display mb-6 max-w-3xl leading-[1.05]"
            >
              Software diseñado para{" "}
              <span className="text-gradient-bright">tu negocio</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="max-w-2xl text-lg leading-relaxed text-luvant-400"
            >
              No adaptamos plantillas. Diseñamos y construimos aplicaciones web,
              APIs y sistemas internos desde cero, pensados para cómo opera tu
              negocio. Cada línea de código tiene un propósito.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button as="a" href="/contacto" size="lg">
                Contanos tu proyecto
                <ArrowRight size={16} className="ml-1.5" />
              </Button>
              <Button as="a" href="/productos" variant="secondary" size="lg">
                Ver productos
              </Button>
            </motion.div>
          </Container>
        </section>

        {/* Qué construimos */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0 bg-luvant-900" />
          <div className="pointer-events-none absolute inset-0 cross-grid" />

          <Container className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="mb-12"
            >
              <span className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600">
                Capacidades
              </span>
              <h2 className="text-h2 md:text-h1 mb-4">
                Qué <span className="text-gradient-bright">construimos</span>
              </h2>
              <p className="max-w-xl text-body text-luvant-400">
                Desde una idea en una servilleta hasta un sistema en producción
                con miles de usuarios.
              </p>
            </motion.div>

            <motion.div
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {CAPABILITIES.map((cap) => (
                <motion.div key={cap.title} variants={itemVariants}>
                  <div className="group relative h-full overflow-hidden rounded-xl border border-white/[0.06] bg-luvant-950/80 p-6 transition-all duration-300 hover:border-white/10">
                    <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 bg-gradient-to-bl from-white/[0.02] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.05] text-luvant-300 ring-1 ring-white/[0.08] transition-colors group-hover:text-white">
                      {cap.icon}
                    </div>
                    <h3 className="mb-2 text-base font-medium">{cap.title}</h3>
                    <p className="text-sm leading-relaxed text-luvant-500">
                      {cap.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Proceso */}
        <section className="py-24 lg:py-32">
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
                Cómo trabajamos
              </h2>
            </motion.div>

            <motion.div
              variants={{ show: { transition: { staggerChildren: 0.15 } } }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            >
              {[
                {
                  step: "01",
                  title: "Entendemos tu problema",
                  description:
                    "Escuchamos, analizamos tus procesos y entendemos qué necesita tu negocio antes de escribir una línea de código.",
                },
                {
                  step: "02",
                  title: "Diseñamos la solución",
                  description:
                    "Definimos la arquitectura, las integraciones y la experiencia de usuario. Vos aprobás antes de avanzar.",
                },
                {
                  step: "03",
                  title: "Construimos y mostramos",
                  description:
                    "Desarrollamos en sprints cortos con demos cada 2 semanas. Ves avances reales, no promesas.",
                },
                {
                  step: "04",
                  title: "Entregamos y acompañamos",
                  description:
                    "Desplegamos, capacitamos a tu equipo y seguimos disponibles. El soporte no termina con la entrega.",
                },
              ].map((item) => (
                <motion.div key={item.step} variants={itemVariants}>
                  <div className="relative">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-luvant-950 font-mono text-sm ring-1 ring-white/10">
                      <span className="text-gradient-bright">{item.step}</span>
                    </div>
                    <h3 className="mb-2 text-lg font-medium">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-luvant-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="relative overflow-hidden py-24 lg:py-32">
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
                FAQ
              </span>
              <h2 className="text-h2 text-gradient">Preguntas frecuentes</h2>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2">
              {FAQS.map((faq) => (
                <div
                  key={faq.q}
                  className="group rounded-xl border border-luvant-800/40 p-6 transition-all duration-300 hover:border-white/[0.08]"
                >
                  <h3 className="mb-2 text-base font-medium text-white">
                    {faq.q}
                  </h3>
                  <p className="text-sm leading-relaxed text-luvant-500">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-luvant-black py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0 dot-grid opacity-50" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[100px]" />
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

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
