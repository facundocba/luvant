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
    title: "Custom APIs",
    description:
      "We develop REST APIs and webhooks to connect systems that weren't designed to talk to each other.",
  },
  {
    icon: <RefreshCw size={22} strokeWidth={1.5} />,
    title: "Real-time synchronization",
    description:
      "Data updated instantly across all your platforms. No manual imports or CSV files.",
  },
  {
    icon: <Database size={22} strokeWidth={1.5} />,
    title: "Enterprise middleware",
    description:
      "An intermediary layer that translates and transforms data between systems with different formats.",
  },
  {
    icon: <Shield size={22} strokeWidth={1.5} />,
    title: "Security & authentication",
    description:
      "OAuth, API keys, end-to-end encryption. Every integration meets enterprise security standards.",
  },
  {
    icon: <Activity size={22} strokeWidth={1.5} />,
    title: "Monitoring & alerts",
    description:
      "Integration status dashboard, detailed logs and automatic alerts if something fails.",
  },
  {
    icon: <Globe size={22} strokeWidth={1.5} />,
    title: "Any platform",
    description:
      "ERPs, CRMs, e-commerce, accounting systems, management tools. If it has an API or database, we connect it.",
  },
];

const FAQS = [
  {
    q: "What systems can be integrated?",
    a: "Any system with an API or database access: ERPs (SAP, Odoo, Tango), CRMs (Salesforce, HubSpot), e-commerce, accounting systems and internal software.",
  },
  {
    q: "What if my system doesn't have an API?",
    a: "We develop custom APIs and middleware to connect legacy systems. We can also work directly with databases if necessary.",
  },
  {
    q: "How are errors handled?",
    a: "Automatic retries, message queues, detailed logs and real-time alerts. If something fails, the system retries and notifies you.",
  },
];

export default function SystemsIntegrationPage() {
  return (
    <>
      <Navbar locale="en" />
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
              Systems Integration
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="text-h1 md:text-display mb-6 max-w-3xl leading-[1.05]"
            >
              Make your systems{" "}
              <span className="text-gradient-bright">talk to each other</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="max-w-2xl text-lg leading-relaxed text-luvant-400"
            >
              Your ERP, CRM and internal tools operating as a single system. We
              connect your platforms with APIs so information flows in real
              time, without duplicates or inconsistencies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button as="a" href="/en/contact" size="lg">
                Get in touch
                <ArrowRight size={16} className="ml-1.5" />
              </Button>
              <Button as="a" href="/en/products" variant="secondary" size="lg">
                View products
              </Button>
            </motion.div>
          </Container>
        </section>

        {/* Capabilities */}
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
                Capabilities
              </span>
              <h2 className="text-h2 md:text-h1 mb-4">
                How we <span className="text-gradient-bright">connect</span>{" "}
                everything
              </h2>
              <p className="max-w-xl text-body text-luvant-400">
                No matter how different your systems are. If they have data, we
                make it flow.
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
              <h2 className="text-h2 text-gradient">
                Frequently asked questions
              </h2>
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
                Need to connect your systems?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-body text-luvant-400">
                Tell us what platforms you use and we&apos;ll show you how to
                make them work together.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button as="a" href="/en/contact" size="lg">
                  Start a conversation
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
      <Footer locale="en" />
    </>
  );
}
