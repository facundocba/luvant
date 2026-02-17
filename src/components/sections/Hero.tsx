"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";

const ease = [0.25, 0.4, 0.25, 1] as const;

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease }}
      className="relative"
    >
      {/* Glow behind the card */}
      <div className="absolute -inset-4 rounded-3xl bg-white/[0.03] blur-2xl" />

      {/* Main visual card */}
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-luvant-900/80 backdrop-blur-sm">
        {/* Top bar */}
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <span className="ml-2 font-mono text-[11px] text-luvant-600">
            luvant-lens — procesando
          </span>
        </div>

        <div className="grid grid-cols-2 divide-x divide-white/[0.06]">
          {/* Left: Document */}
          <div className="p-5">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-wider text-luvant-600">
              Documento
            </div>
            <div className="space-y-2.5">
              {/* Simulated document lines */}
              <div className="h-2 w-3/4 rounded-full bg-white/[0.06]" />
              <div className="h-2 w-full rounded-full bg-white/[0.06]" />
              <div className="h-2 w-5/6 rounded-full bg-white/[0.06]" />
              <div className="mt-4 h-2 w-2/3 rounded-full bg-white/[0.06]" />
              <div className="h-2 w-full rounded-full bg-white/[0.06]" />
              <div className="h-2 w-4/5 rounded-full bg-white/[0.06]" />

              {/* Scan line animation */}
              <motion.div
                className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ y: [-60, 60] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>

          {/* Right: Extracted data */}
          <div className="p-5">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-wider text-luvant-600">
              Datos extraídos
            </div>
            <div className="space-y-3">
              {[
                { label: "Proveedor", value: "TechCorp S.A.", delay: 0.5 },
                { label: "CUIT", value: "30-71234567-9", delay: 0.7 },
                { label: "Total", value: "$148.350,00", delay: 0.9 },
                { label: "Fecha", value: "16/02/2026", delay: 1.1 },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: item.delay, ease }}
                >
                  <div className="font-mono text-[10px] text-luvant-600">
                    {item.label}
                  </div>
                  <div className="font-mono text-xs text-white/80">
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="mt-4 flex items-center gap-1.5"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
              <span className="font-mono text-[10px] text-green-500/80">
                99.2% confianza
              </span>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar with metrics */}
        <div className="flex items-center justify-between border-t border-white/[0.06] px-4 py-2.5">
          <span className="font-mono text-[10px] text-luvant-600">
            OCR Engine v3.1
          </span>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-luvant-600">420ms</span>
            <div className="h-3 w-px bg-white/[0.06]" />
            <span className="font-mono text-[10px] text-luvant-400">
              1 de 47 docs
            </span>
          </div>
        </div>
      </div>

      {/* Floating badges around the card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        className="absolute -left-6 bottom-8 rounded-lg border border-white/[0.08] bg-luvant-950/90 px-3 py-2 backdrop-blur-sm"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white/70"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <span className="font-mono text-[11px] text-white/70">
            47 procesados
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="absolute -right-4 top-12 rounded-lg border border-white/[0.08] bg-luvant-950/90 px-3 py-2 backdrop-blur-sm"
      >
        <span className="font-mono text-[11px] text-white/70">⚡ API REST</span>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 dot-grid" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-white/[0.04] via-white/[0.01] to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-3xl" />
      <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <Container className="relative py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <Badge variant="outline" className="mb-6">
                Desarrollo de software a medida
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="text-[40px] font-semibold leading-[1.08] tracking-tight md:text-display"
            >
              El software que tu
              <br />
              negocio <span className="text-gradient-bright">necesita</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="mt-6 max-w-md text-body text-luvant-400 md:text-lg"
            >
              Desarrollo de software a medida, automatización de procesos e
              integración de sistemas. Construimos la tecnología que tu
              operación necesita para crecer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button as="a" href="/productos" size="lg">
                Ver soluciones
              </Button>
              <Button as="a" href="/contacto" variant="secondary" size="lg">
                Hablar con nosotros
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-12 flex items-center gap-6 border-t border-white/[0.06] pt-6"
            >
              {[
                { value: "100%", label: "Código propio" },
                { value: "24/7", label: "Soporte técnico" },
                { value: "API", label: "Integraciones" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-mono text-sm font-medium text-white">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[10px] text-luvant-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual */}
          <div className="hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
