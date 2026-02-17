"use client";

import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import {
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
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

const SERVICE_OPTIONS = [
  "Procesamiento de documentos",
  "Automatización",
  "Integración de sistemas",
  "Desarrollo a medida",
  "Consultoría",
  "Otro",
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactoPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  function toggleService(service: string) {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setErrorMsg("");

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      services: selectedServices,
      message: formData.get("message") as string,
      company_fax: formData.get("company_fax") as string, // honeypot
    };

    try {
      const res = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus("success");
        form.reset();
        setSelectedServices([]);
      } else {
        setStatus("error");
        setErrorMsg(
          data.error || "Hubo un error al enviar el mensaje. Intentá de nuevo.",
        );
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        "No se pudo conectar con el servidor. Intentá de nuevo o escribí a hola@luvant.com.ar",
      );
    }
  }

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

                    {status === "success" ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative flex flex-col items-center py-12 text-center"
                      >
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 text-green-400 ring-1 ring-green-500/20">
                          <CheckCircle2 size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="mb-2 text-xl font-medium">
                          Mensaje enviado
                        </h3>
                        <p className="max-w-sm text-sm text-luvant-400">
                          Recibimos tu consulta. Te respondemos dentro de las
                          próximas 24 horas hábiles.
                        </p>
                        <button
                          onClick={() => setStatus("idle")}
                          className="mt-6 font-mono text-xs text-luvant-500 transition-colors hover:text-white"
                        >
                          Enviar otro mensaje
                        </button>
                      </motion.div>
                    ) : (
                      <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="relative space-y-6"
                      >
                        {/* Honeypot — hidden from users, bots fill it */}
                        <div
                          aria-hidden="true"
                          className="absolute -left-[9999px] -top-[9999px]"
                        >
                          <input
                            type="text"
                            name="company_fax"
                            tabIndex={-1}
                            autoComplete="nope"
                          />
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <Input
                            label="Nombre"
                            name="name"
                            placeholder="Tu nombre"
                            required
                          />
                          <Input
                            label="Empresa"
                            name="company"
                            placeholder="Nombre de tu empresa"
                          />
                        </div>
                        <Input
                          label="Email"
                          name="email"
                          type="email"
                          placeholder="tu@empresa.com"
                          required
                        />
                        <Input
                          label="Teléfono"
                          name="phone"
                          type="tel"
                          placeholder="+54 9 11 1234 5678"
                        />

                        <div className="space-y-2">
                          <label className="block text-caption uppercase text-luvant-600">
                            ¿Qué necesitás?
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {SERVICE_OPTIONS.map((option) => (
                              <button
                                key={option}
                                type="button"
                                onClick={() => toggleService(option)}
                                className={`rounded-lg border px-3 py-2 font-mono text-xs transition-all ${
                                  selectedServices.includes(option)
                                    ? "border-white/20 bg-white/[0.05] text-white"
                                    : "border-luvant-800/60 bg-luvant-950/50 text-luvant-400 hover:border-white/10 hover:text-white"
                                }`}
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>

                        <Textarea
                          label="Mensaje"
                          name="message"
                          placeholder="Contanos sobre tu proyecto, el problema que querés resolver, o cualquier duda que tengas..."
                          rows={5}
                          required
                        />

                        {status === "error" && (
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-start gap-3 rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-3"
                          >
                            <AlertCircle
                              size={18}
                              className="mt-0.5 shrink-0 text-red-400"
                            />
                            <p className="text-sm text-red-300">{errorMsg}</p>
                          </motion.div>
                        )}

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full"
                          disabled={status === "loading"}
                        >
                          {status === "loading" ? (
                            <>
                              <Loader2
                                size={16}
                                className="mr-2 animate-spin"
                              />
                              Enviando...
                            </>
                          ) : (
                            <>
                              Enviar mensaje
                              <ArrowRight size={16} className="ml-1.5" />
                            </>
                          )}
                        </Button>
                      </form>
                    )}
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
