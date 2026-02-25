"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  ScanLine,
  Workflow,
  RefreshCw,
  Code,
  Lightbulb,
} from "lucide-react";

const ease = [0.25, 0.4, 0.25, 1] as const;

function LensMiniDemo() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-luvant-950/60">
      {/* Mini top bar */}
      <div className="flex items-center gap-1.5 border-b border-white/[0.04] px-3 py-2">
        <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
        <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
        <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
      </div>
      <div className="p-4">
        <div className="space-y-2 mb-3">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500/60" />
            <div className="h-1.5 w-20 rounded-full bg-white/[0.08]" />
            <div className="h-1.5 w-28 rounded-full bg-white/[0.15]" />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500/60" />
            <div className="h-1.5 w-16 rounded-full bg-white/[0.08]" />
            <div className="h-1.5 w-24 rounded-full bg-white/[0.15]" />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500/60" />
            <div className="h-1.5 w-12 rounded-full bg-white/[0.08]" />
            <div className="h-1.5 w-20 rounded-full bg-white/[0.15]" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] text-luvant-600">
            3 campos extraídos
          </span>
          <span className="font-mono text-[9px] text-green-500/60">98.7%</span>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600">
            Productos
          </span>
          <h2 className="text-h2 md:text-h1 text-gradient">
            Tecnología que resuelve problemas reales
          </h2>
        </motion.div>

        {/* Featured: Luvant Lens */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-6"
        >
          <div className="gradient-border group relative overflow-hidden rounded-xl glow-md">
            <div className="relative grid gap-8 p-8 md:grid-cols-5 md:p-10">
              {/* Accent glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/[0.03] blur-3xl transition-all duration-700 group-hover:bg-white/[0.05]" />

              {/* Content: 3 cols */}
              <div className="relative md:col-span-3">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/10">
                    <ScanLine size={20} strokeWidth={1.5} />
                  </div>
                  <Badge variant="accent">OCR &middot; Documentos</Badge>
                </div>

                <h3 className="text-h2 mb-3">Luvant Lens</h3>
                <p className="mb-6 max-w-md text-body leading-relaxed text-luvant-400">
                  Extraé datos de facturas, remitos, recetas y formularios de
                  forma automática. OCR avanzado con machine learning entrenado
                  para documentos en español.
                </p>

                <div className="mb-8 grid grid-cols-3 gap-4">
                  {[
                    { value: "99.2%", label: "Precisión" },
                    { value: "<500ms", label: "Latencia" },
                    { value: "15+", label: "Tipos de doc" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5"
                    >
                      <div className="font-mono text-sm font-medium text-white">
                        {stat.value}
                      </div>
                      <div className="font-mono text-[10px] text-luvant-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Button as="a" href="/productos/lens" size="md">
                  Conocer Lens
                  <ArrowRight size={14} className="ml-1.5" />
                </Button>
              </div>

              {/* Visual: 2 cols */}
              <div className="relative hidden md:col-span-2 md:flex md:items-center">
                <LensMiniDemo />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <span className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600">
            Soluciones
          </span>
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
              href: "/servicios/automatizacion-de-procesos",
              icon: <Workflow size={20} strokeWidth={1.5} />,
              description:
                "Eliminá horas de trabajo manual. Conectamos tus sistemas con flujos que se ejecutan solos.",
            },
            {
              title: "Integración de sistemas",
              href: "/servicios/integracion-de-sistemas",
              icon: <RefreshCw size={20} strokeWidth={1.5} />,
              description:
                "Tu ERP, CRM y herramientas internas hablando entre sí. Datos sincronizados en tiempo real.",
            },
            {
              title: "Software a medida",
              href: "/servicios/desarrollo-software-a-medida",
              icon: <Code size={20} strokeWidth={1.5} />,
              description:
                "Plataformas, dashboards y APIs diseñadas exclusivamente para tu operación.",
            },
            {
              title: "Consultoría técnica",
              href: "/servicios/consultoria-tecnica",
              icon: <Lightbulb size={20} strokeWidth={1.5} />,
              description:
                "Evaluamos tu stack actual y te ayudamos a tomar la decisión tecnológica correcta.",
            },
          ].map((solution) => (
            <motion.div
              key={solution.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
              }}
            >
              <Link href={solution.href} className="block h-full">
                <div className="group h-full rounded-xl border border-luvant-800/60 bg-luvant-900/50 p-5 transition-all duration-300 hover:border-white/[0.08]">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-luvant-800 text-luvant-400 transition-colors group-hover:text-white">
                    {solution.icon}
                  </div>
                  <h3 className="mb-2 text-sm font-medium">{solution.title}</h3>
                  <p className="text-xs leading-relaxed text-luvant-500">
                    {solution.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
