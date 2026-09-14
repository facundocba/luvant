"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import {
  ArrowRight,
  Lightbulb,
  Search,
  FileCheck,
  Target,
  Users,
  Map,
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

const SERVICES = [
  {
    icon: <Search size={22} strokeWidth={1.5} />,
    title: "Code audit",
    description:
      "We review quality, architecture, security and performance of your existing code. Detailed report with prioritized recommendations.",
  },
  {
    icon: <Map size={22} strokeWidth={1.5} />,
    title: "Software architecture",
    description:
      "We design the technical architecture for your next project or redesign your existing one so it scales.",
  },
  {
    icon: <Target size={22} strokeWidth={1.5} />,
    title: "Technology selection",
    description:
      "We help you choose the right stack for your project based on your real needs, not trends.",
  },
  {
    icon: <FileCheck size={22} strokeWidth={1.5} />,
    title: "Technical planning",
    description:
      "Technical roadmap with clear milestones, realistic estimates and identified dependencies.",
  },
  {
    icon: <Users size={22} strokeWidth={1.5} />,
    title: "CTO as a service",
    description:
      "Technical leadership for companies without an in-house development team. Informed decisions without hiring full-time.",
  },
  {
    icon: <Lightbulb size={22} strokeWidth={1.5} />,
    title: "Vendor evaluation",
    description:
      "We analyze proposals from other software vendors so you make decisions with real technical information.",
  },
];

const FAQS = [
  {
    q: "What does a technical consulting engagement include?",
    a: "Analysis of your current stack, identification of technical issues, architecture recommendations, technology selection and a concrete action plan.",
  },
  {
    q: "Do I need a technical team to hire consulting?",
    a: "No. Consulting is ideal for companies without a CTO or development team that need to make informed technology decisions.",
  },
  {
    q: "Can you audit code from another team?",
    a: "Yes. We review quality, architecture, security, performance and technical debt. We deliver a report with prioritized, actionable recommendations.",
  },
];

export default function TechnicalConsultingPage() {
  return (
    <>
      <Navbar locale="en" />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="pointer-events-none absolute inset-0 dot-grid" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-white/[0.03] blur-3xl" />

          <Container className="relative">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
              className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600"
            >
              Technical Consulting
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="text-h1 md:text-display mb-6 max-w-3xl leading-[1.05]"
            >
              The <span className="text-gradient-bright">right</span> technology
              decision
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="max-w-2xl text-lg leading-relaxed text-luvant-400"
            >
              We evaluate your current stack, audit existing code and help you
              plan your next technology step. You talk directly to engineers,
              not salespeople.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button as="a" href="/en/contact" size="lg">
                Schedule a consultation
                <ArrowRight size={16} className="ml-1.5" />
              </Button>
              <Button
                as="a"
                href="/en/services/custom-software"
                variant="secondary"
                size="lg"
              >
                We also build software
              </Button>
            </motion.div>
          </Container>
        </section>

        {/* Services */}
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
                Services
              </span>
              <h2 className="text-h2 md:text-h1 mb-4">
                How we can <span className="text-gradient-bright">help</span>{" "}
                you
              </h2>
              <p className="max-w-xl text-body text-luvant-400">
                From a second technical opinion to leading your entire
                technology strategy.
              </p>
            </motion.div>

            <motion.div
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {SERVICES.map((svc) => (
                <motion.div key={svc.title} variants={itemVariants}>
                  <div className="group relative h-full overflow-hidden rounded-xl border border-white/[0.06] bg-luvant-950/80 p-6 transition-all duration-300 hover:border-white/10">
                    <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 bg-gradient-to-bl from-white/[0.02] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.05] text-luvant-300 ring-1 ring-white/[0.08] transition-colors group-hover:text-white">
                      {svc.icon}
                    </div>
                    <h3 className="mb-2 text-base font-medium">{svc.title}</h3>
                    <p className="text-sm leading-relaxed text-luvant-500">
                      {svc.description}
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
                Need a technical perspective?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-body text-luvant-400">
                Tell us your situation and we&apos;ll help you make the right
                decision.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button as="a" href="/en/contact" size="lg">
                  Schedule a consultation
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
