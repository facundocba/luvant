"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { ArrowRight, ScanLine, Workflow, RefreshCw } from "lucide-react";

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
          <h2 className="text-h2 md:text-h1 text-gradient max-w-lg">
            Herramientas construidas para escalar
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
                  Procesamiento inteligente de documentos. Extraé datos de
                  facturas, recetas, formularios y más con precisión mediante
                  OCR avanzado y machine learning.
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

        {/* Secondary products */}
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {[
            {
              name: "Luvant Flow",
              icon: <Workflow size={20} strokeWidth={1.5} />,
              badge: "Automatización",
              description:
                "Automatización de procesos empresariales. Conectá tus sistemas y eliminá tareas manuales con flujos inteligentes.",
            },
            {
              name: "Luvant Sync",
              icon: <RefreshCw size={20} strokeWidth={1.5} />,
              badge: "Integración",
              description:
                "Integración de datos en tiempo real entre tus plataformas. Sincronizá información sin fricciones ni duplicados.",
            },
          ].map((product) => (
            <motion.div
              key={product.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
              }}
            >
              <div className="group rounded-xl border border-luvant-800/60 bg-luvant-900/50 p-6 transition-all duration-300 hover:border-white/[0.08]">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-luvant-800 text-luvant-400">
                      {product.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-medium">{product.name}</h3>
                    </div>
                  </div>
                  <Badge variant="outline">Próximamente</Badge>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-luvant-500">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
