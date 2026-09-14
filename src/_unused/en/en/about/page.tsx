"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import {
  Code,
  Target,
  Eye,
  Lightbulb,
  ArrowRight,
  Shield,
  Layers,
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

const VALUES = [
  {
    icon: <Target size={22} strokeWidth={1.5} />,
    title: "Obsession with quality",
    description:
      "Testing, code reviews and automated deployment in every project. We don't ship software we wouldn't use ourselves.",
  },
  {
    icon: <Eye size={22} strokeWidth={1.5} />,
    title: "Real transparency",
    description:
      "Repository access, demos every 2 weeks and direct communication. You always know where your project stands and why.",
  },
  {
    icon: <Lightbulb size={22} strokeWidth={1.5} />,
    title: "Results, not promises",
    description:
      "We define success metrics before we start. If we can't demonstrate concrete impact, we tell you upfront.",
  },
];

const NUMBERS = [
  { value: "2024", label: "Founded" },
  { value: "100%", label: "Remote" },
  { value: "100%", label: "Custom code" },
  { value: "API", label: "Fully integrated" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar locale="en" />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="pointer-events-none absolute inset-0 dot-grid" />
          <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-white/[0.02] blur-3xl" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-white/[0.03] blur-3xl" />

          <Container className="relative">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
              className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600"
            >
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="text-h1 md:text-display mb-6 max-w-3xl leading-[1.05]"
            >
              Software with{" "}
              <span className="text-gradient-bright">purpose</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="max-w-2xl text-lg leading-relaxed text-luvant-400"
            >
              Luvant was born from a simple conviction: whoever invests in
              software deserves solutions that solve real problems, not create
              new ones. We are a software development company focused on
              building technology that works from day one.
            </motion.p>
          </Container>
        </section>

        {/* Numbers */}
        <section className="py-16">
          <Container>
            <motion.div
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6 md:grid-cols-4"
            >
              {NUMBERS.map((item) => (
                <motion.div key={item.label} variants={itemVariants}>
                  <div className="rounded-xl border border-white/[0.06] bg-luvant-900/50 p-6 text-center transition-all duration-300 hover:border-white/10">
                    <div className="font-mono text-2xl font-semibold text-white">
                      {item.value}
                    </div>
                    <div className="mt-1 font-mono text-caption uppercase text-luvant-600">
                      {item.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* What we believe */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0 bg-luvant-900" />
          <div className="pointer-events-none absolute inset-0 cross-grid" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-full w-[600px] -translate-x-1/2 bg-gradient-to-b from-white/[0.02] via-transparent to-white/[0.01] blur-3xl" />

          <Container className="relative">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
                className="lg:sticky lg:top-32"
              >
                <span className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600">
                  Principles
                </span>
                <h2 className="text-h2 md:text-h1 mb-4">
                  How we <span className="text-gradient-bright">think</span>
                </h2>
                <p className="text-body text-luvant-400">
                  Three ideas that guide every decision we make, from which
                  technology to use to how we communicate progress.
                </p>
              </motion.div>

              <motion.div
                variants={{ show: { transition: { staggerChildren: 0.12 } } }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {VALUES.map((value, i) => (
                  <motion.div key={value.title} variants={itemVariants}>
                    <div className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-luvant-950/80 p-7 transition-all duration-300 hover:border-white/10">
                      <div
                        className="pointer-events-none absolute left-0 top-0 h-full w-px opacity-0 transition-opacity group-hover:opacity-100"
                        style={{
                          background: `linear-gradient(180deg, transparent, rgba(255,255,255,${0.1 + i * 0.05}), transparent)`,
                        }}
                      />
                      <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 bg-gradient-to-bl from-white/[0.02] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-luvant-300 ring-1 ring-white/[0.08] transition-colors group-hover:text-white">
                          {value.icon}
                        </div>
                        <div>
                          <h3 className="mb-2 text-lg font-medium">
                            {value.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-luvant-400">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Mission */}
        <section className="py-24 lg:py-32">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <div className="gradient-border relative overflow-hidden rounded-2xl glow-md">
                <div className="relative p-12 md:p-16">
                  <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 bg-gradient-to-bl from-white/[0.03] to-transparent" />
                  <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 bg-gradient-to-tr from-white/[0.02] to-transparent" />

                  <div className="relative">
                    <span className="mb-6 block font-mono text-caption uppercase tracking-widest text-luvant-600">
                      Mission
                    </span>
                    <p className="max-w-3xl text-h3 md:text-h2 leading-relaxed text-gradient">
                      Build software that eliminates operational friction and
                      allows every company to focus on what they do best —
                      without wasting time on processes that technology can
                      solve.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* How we work */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          <div className="pointer-events-none absolute inset-0 dot-grid opacity-30" />

          <Container className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="mb-12"
            >
              <span className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600">
                Work method
              </span>
              <h2 className="text-h2 text-gradient">How Luvant operates</h2>
            </motion.div>

            <motion.div
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-4 md:grid-cols-2"
            >
              {[
                {
                  icon: <Code size={20} strokeWidth={1.5} />,
                  title: "Technology chosen with purpose",
                  description:
                    "TypeScript, React, Next.js, Python, PostgreSQL. We choose the right tool for each problem, not the most popular one.",
                },
                {
                  icon: <Shield size={20} strokeWidth={1.5} />,
                  title: "Nothing ships without review",
                  description:
                    "Automated testing, code review and CI/CD. Every change goes through a complete pipeline before reaching production.",
                },
                {
                  title: "You see progress, not slides",
                  icon: <Layers size={20} strokeWidth={1.5} />,
                  description:
                    "Functional deliveries every 2 weeks. Demo, feedback, adjust. You never get a surprise at the end of the project.",
                },
                {
                  title: "Your team can maintain it",
                  icon: <Eye size={20} strokeWidth={1.5} />,
                  description:
                    "Every project includes complete technical documentation and knowledge transfer. We don't create dependency.",
                },
              ].map((item) => (
                <motion.div key={item.title} variants={itemVariants}>
                  <div className="group relative h-full overflow-hidden rounded-xl border border-luvant-800/60 bg-luvant-900/30 p-6 transition-all duration-300 hover:border-white/[0.08]">
                    <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 bg-gradient-to-bl from-white/[0.02] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-luvant-800 text-luvant-400 transition-colors group-hover:text-white">
                      {item.icon}
                    </div>
                    <h3 className="mb-2 text-base font-medium">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-luvant-500">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-luvant-black py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0 dot-grid opacity-50" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[100px]" />
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 bg-gradient-to-br from-white/[0.02] to-transparent" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 bg-gradient-to-tl from-white/[0.02] to-transparent" />

          <Container className="relative text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <h2 className="mx-auto max-w-xl text-h2 md:text-h1 text-gradient-bright">
                Have a project in mind?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-body text-luvant-400">
                Tell us what problem you want to solve and we'll show you how we
                can help.
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
