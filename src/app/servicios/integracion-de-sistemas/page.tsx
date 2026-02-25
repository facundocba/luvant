"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import {
  ArrowRight,
  RefreshCw,
  Database,
  Globe,
  Shield,
  Plug,
  Activity,
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
    icon: <Plug size={22} strokeWidth={1.5} />,
    title: "APIs personalizadas",
    description:
      "Desarrollamos APIs REST y webhooks para conectar sistemas que no fueron diseñados para hablar entre sí.",
  },
  {
    icon: <RefreshCw size={22} strokeWidth={1.5} />,
    title: "Sincronización en tiempo real",
    description:
      "Datos actualizados al instante entre todas tus plataformas. Sin imports manuales ni archivos CSV.",
  },
  {
    icon: <Database size={22} strokeWidth={1.5} />,
    title: "Middleware empresarial",
    description:
      "Capa intermedia que traduce y transforma datos entre sistemas con formatos diferentes.",
  },
  {
    icon: <Shield size={22} strokeWidth={1.5} />,
    title: "Seguridad y autenticación",
    description:
      "OAuth, API keys, encriptación end-to-end. Cada integración cumple estándares de seguridad enterprise.",
  },
  {
    icon: <Activity size={22} strokeWidth={1.5} />,
    title: "Monitoreo y alertas",
    description:
      "Dashboard de estado de integraciones, logs detallados y alertas automáticas si algo falla.",
  },
  {
    icon: <Globe size={22} strokeWidth={1.5} />,
    title: "Cualquier plataforma",
    description:
      "ERPs, CRMs, e-commerce, sistemas contables, herramientas de gestión. Si tiene API o base de datos, lo conectamos.",
  },
];

const FAQS = [
  {
    q: "¿Qué sistemas se pueden integrar?",
    a: "Cualquier sistema con API o acceso a base de datos: ERPs (SAP, Odoo, Tango), CRMs (Salesforce, HubSpot), e-commerce, sistemas contables y software interno.",
  },
  {
    q: "¿Qué pasa si mi sistema no tiene API?",
    a: "Desarrollamos APIs y middlewares personalizados para conectar sistemas legacy. También podemos trabajar con bases de datos directamente si es necesario.",
  },
  {
    q: "¿Cómo se manejan los errores?",
    a: "Reintentos automáticos, colas de mensajes, logs detallados y alertas en tiempo real. Si algo falla, el sistema reintenta y te notifica.",
  },
];

export default function IntegracionPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="pointer-events-none absolute inset-0 dot-grid" />
          <div className="pointer-events-none absolute -right-20 top-20 h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-3xl" />

          <Container className="relative">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
              className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600"
            >
              Integración de sistemas
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="text-h1 md:text-display mb-6 max-w-3xl leading-[1.05]"
            >
              Que tus sistemas{" "}
              <span className="text-gradient-bright">hablen entre sí</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="max-w-2xl text-lg leading-relaxed text-luvant-400"
            >
              Tu ERP, CRM y herramientas internas operando como un solo sistema.
              Conectamos tus plataformas con APIs para que la información fluya
              en tiempo real, sin duplicados ni inconsistencias.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button as="a" href="/contacto" size="lg">
                Consultanos
                <ArrowRight size={16} className="ml-1.5" />
              </Button>
              <Button as="a" href="/productos" variant="secondary" size="lg">
                Ver productos
              </Button>
            </motion.div>
          </Container>
        </section>

        {/* Capacidades */}
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
                Cómo <span className="text-gradient-bright">conectamos</span>{" "}
                todo
              </h2>
              <p className="max-w-xl text-body text-luvant-400">
                No importa cuán distintos sean tus sistemas. Si tienen datos,
                los hacemos fluir.
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

        {/* FAQ */}
        <section className="py-24 lg:py-32">
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

            <div className="mx-auto max-w-2xl space-y-4">
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
                ¿Necesitás conectar tus sistemas?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-body text-luvant-400">
                Contanos qué plataformas usás y te mostramos cómo hacerlas
                trabajar juntas.
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
