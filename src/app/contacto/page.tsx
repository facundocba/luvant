"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const ease = [0.25, 0.4, 0.25, 1] as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

const CONTACT_INFO = [
  {
    icon: <Mail size={18} strokeWidth={1.5} />,
    label: "Email",
    value: "hola@luvant.com.ar",
    href: "mailto:hola@luvant.com.ar",
  },
  {
    icon: <MapPin size={18} strokeWidth={1.5} />,
    label: "Ubicación",
    value: "Argentina",
    href: null,
  },
  {
    icon: <Clock size={18} strokeWidth={1.5} />,
    label: "Respuesta",
    value: "Dentro de 24hs hábiles",
    href: null,
  },
];

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="pointer-events-none absolute inset-0 dot-grid" />
          <div className="pointer-events-none absolute -right-20 top-20 h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-3xl" />

          <Container className="relative">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
              className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600"
            >
              Contacto
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="text-h1 md:text-display mb-6 max-w-lg leading-[1.05]"
            >
              Empecemos a <span className="text-gradient-bright">hablar</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="max-w-md text-lg text-luvant-400"
            >
              Contanos sobre tu proyecto y encontremos juntos la mejor solución
              para tu empresa.
            </motion.p>
          </Container>
        </section>

        {/* Form + Info */}
        <section className="pb-24 lg:pb-32">
          <Container>
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
              {/* Form: 3 cols */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="lg:col-span-3"
              >
                <div className="gradient-border relative overflow-hidden rounded-2xl glow-sm">
                  <div className="relative p-8 md:p-10">
                    <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-gradient-to-bl from-white/[0.02] to-transparent" />

                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="relative space-y-6"
                    >
                      <div className="grid gap-6 sm:grid-cols-2">
                        <Input
                          label="Nombre"
                          placeholder="Tu nombre"
                          required
                        />
                        <Input
                          label="Empresa"
                          placeholder="Nombre de tu empresa"
                        />
                      </div>
                      <Input
                        label="Email"
                        type="email"
                        placeholder="tu@empresa.com"
                        required
                      />
                      <Input
                        label="Teléfono"
                        type="tel"
                        placeholder="+54 9 11 1234 5678"
                      />

                      <div className="space-y-2">
                        <label className="block text-caption uppercase text-luvant-600">
                          ¿Qué necesitás?
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Procesamiento de documentos",
                            "Automatización",
                            "Integración de sistemas",
                            "Desarrollo a medida",
                            "Consultoría",
                            "Otro",
                          ].map((option) => (
                            <label
                              key={option}
                              className="cursor-pointer rounded-lg border border-luvant-800/60 bg-luvant-950/50 px-3 py-2 font-mono text-xs text-luvant-400 transition-all hover:border-white/10 hover:text-white has-[:checked]:border-white/20 has-[:checked]:bg-white/[0.05] has-[:checked]:text-white"
                            >
                              <input
                                type="checkbox"
                                name="services"
                                value={option}
                                className="sr-only"
                              />
                              {option}
                            </label>
                          ))}
                        </div>
                      </div>

                      <Textarea
                        label="Mensaje"
                        placeholder="Contanos sobre tu proyecto, el problema que querés resolver, o cualquier duda que tengas..."
                        rows={5}
                        required
                      />

                      <Button type="submit" size="lg" className="w-full">
                        Enviar mensaje
                        <ArrowRight size={16} className="ml-1.5" />
                      </Button>
                    </form>
                  </div>
                </div>
              </motion.div>

              {/* Info: 2 cols */}
              <div className="lg:col-span-2">
                <motion.div
                  variants={{
                    show: { transition: { staggerChildren: 0.1 } },
                  }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {CONTACT_INFO.map((item) => (
                    <motion.div key={item.label} variants={itemVariants}>
                      <div className="group flex items-start gap-4 rounded-xl border border-white/[0.06] bg-luvant-900/30 p-5 transition-all duration-300 hover:border-white/10">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-luvant-400 ring-1 ring-white/[0.08] transition-colors group-hover:text-white">
                          {item.icon}
                        </div>
                        <div>
                          <p className="mb-0.5 font-mono text-[11px] uppercase text-luvant-600">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-sm text-white transition-colors hover:text-luvant-300"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm text-white">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* FAQ mini */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3, ease }}
                  className="mt-10"
                >
                  <h3 className="mb-4 font-mono text-caption uppercase tracking-widest text-luvant-600">
                    Preguntas frecuentes
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        q: "¿Cuánto cuesta un proyecto?",
                        a: "Depende del alcance. Después de la primera reunión enviamos una estimación detallada sin compromiso.",
                      },
                      {
                        q: "¿Trabajan con empresas chicas?",
                        a: "Trabajamos con empresas de todos los tamaños que tengan un problema real que resolver con tecnología.",
                      },
                      {
                        q: "¿Puedo ver una demo primero?",
                        a: "Sí. Agendamos una demo personalizada de Lens con documentos de tu industria.",
                      },
                    ].map((faq) => (
                      <div
                        key={faq.q}
                        className="group rounded-lg border border-luvant-800/40 p-4 transition-all duration-300 hover:border-white/[0.08]"
                      >
                        <p className="mb-1 text-sm font-medium text-white">
                          {faq.q}
                        </p>
                        <p className="text-sm leading-relaxed text-luvant-500">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
