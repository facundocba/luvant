"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Code, Plug, Headphones, Shield, Zap } from "lucide-react";

const ease = [0.25, 0.4, 0.25, 1] as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

export default function Features() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-luvant-900" />
      <div className="pointer-events-none absolute inset-0 cross-grid" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-[600px] -translate-x-1/2 bg-gradient-to-b from-white/[0.02] via-transparent to-white/[0.01] blur-3xl" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <span className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600">
            Por qué elegirnos
          </span>
          <h2 className="text-h2 md:text-h1 mb-4">
            Software que se mide por{" "}
            <span className="text-gradient-bright">resultados</span>
          </h2>
          <p className="text-body text-luvant-400">
            Cada proyecto se diseña para resolver un problema concreto de tu
            empresa. Sin soluciones genéricas, sin funcionalidades que no usás.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-4 md:grid-cols-6 md:grid-rows-2"
        >
          {/* Card 1: Desarrollo a medida — large, spans 2 cols */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 md:row-span-2"
          >
            <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.06] bg-luvant-950/80 p-7 transition-all duration-300 hover:border-white/10">
              <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-bl from-white/[0.03] to-transparent" />
              <div className="relative">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.05] text-luvant-300 ring-1 ring-white/[0.08] transition-colors group-hover:text-white">
                  <Code size={22} strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-lg font-medium">Hecho a tu medida</h3>
                <p className="text-sm leading-relaxed text-luvant-400">
                  No adaptamos plantillas. Diseñamos y construimos software
                  desde cero, pensado para cómo opera tu negocio.
                </p>
              </div>

              {/* Visual: Code-like lines */}
              <div className="mt-auto pt-8 space-y-2 opacity-40">
                <div className="flex gap-2">
                  <div className="h-1 w-8 rounded-full bg-white/20" />
                  <div className="h-1 w-16 rounded-full bg-white/10" />
                </div>
                <div className="flex gap-2 pl-4">
                  <div className="h-1 w-12 rounded-full bg-white/10" />
                  <div className="h-1 w-20 rounded-full bg-white/15" />
                </div>
                <div className="flex gap-2 pl-4">
                  <div className="h-1 w-10 rounded-full bg-white/10" />
                  <div className="h-1 w-14 rounded-full bg-white/10" />
                </div>
                <div className="flex gap-2">
                  <div className="h-1 w-6 rounded-full bg-white/20" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Integración — spans 2 cols */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="group relative h-full overflow-hidden rounded-xl border border-white/[0.06] bg-luvant-950/80 p-7 transition-all duration-300 hover:border-white/10">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.05] text-luvant-300 ring-1 ring-white/[0.08] transition-colors group-hover:text-white">
                <Plug size={22} strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-lg font-medium">Se conecta con todo</h3>
              <p className="text-sm leading-relaxed text-luvant-400">
                APIs documentadas, webhooks y SDKs. Integramos con tu ERP, CRM o
                cualquier sistema que ya uses.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Performance — spans 2 cols, with visual */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 md:row-span-2"
          >
            <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.06] bg-luvant-950/80 p-7 transition-all duration-300 hover:border-white/10">
              <div className="absolute left-0 bottom-0 h-32 w-32 bg-gradient-to-tr from-white/[0.03] to-transparent" />
              <div className="relative">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.05] text-luvant-300 ring-1 ring-white/[0.08] transition-colors group-hover:text-white">
                  <Zap size={22} strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-lg font-medium">
                  Rendimiento enterprise
                </h3>
                <p className="text-sm leading-relaxed text-luvant-400">
                  Arquitectura optimizada para responder en milisegundos. Escala
                  con tu negocio sin degradar la experiencia.
                </p>
              </div>

              {/* Visual: Bar chart */}
              <div className="mt-auto flex items-end gap-2 pt-8 opacity-40">
                {[35, 55, 25, 70, 45, 85, 60, 90, 50, 75].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-white/20 to-white/5"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 4: Soporte */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className="group relative h-full overflow-hidden rounded-xl border border-white/[0.06] bg-luvant-950/80 p-7 transition-all duration-300 hover:border-white/10">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.05] text-luvant-300 ring-1 ring-white/[0.08] transition-colors group-hover:text-white">
                <Headphones size={22} strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-base font-medium">Soporte humano</h3>
              <p className="text-sm leading-relaxed text-luvant-500">
                Hablás con ingenieros, no con bots. Respuesta en horas.
              </p>
            </div>
          </motion.div>

          {/* Card 5: Seguridad */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className="group relative h-full overflow-hidden rounded-xl border border-white/[0.06] bg-luvant-950/80 p-7 transition-all duration-300 hover:border-white/10">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.05] text-luvant-300 ring-1 ring-white/[0.08] transition-colors group-hover:text-white">
                <Shield size={22} strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-base font-medium">
                Tus datos, tu control
              </h3>
              <p className="text-sm leading-relaxed text-luvant-500">
                Encriptación end-to-end. Tu información nunca sale de tu
                infraestructura.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
