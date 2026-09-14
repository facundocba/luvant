"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import {
  ArrowRight,
  Code,
  Layers,
  Smartphone,
  Globe,
  Database,
  Shield,
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
    icon: <Globe size={22} strokeWidth={1.5} />,
    title: "Web applications",
    description:
      "Platforms, dashboards and portals designed for your operations. Responsive, fast and secure.",
  },
  {
    icon: <Database size={22} strokeWidth={1.5} />,
    title: "APIs & backends",
    description:
      "Robust, documented and scalable services. REST or GraphQL, depending on what your project needs.",
  },
  {
    icon: <Smartphone size={22} strokeWidth={1.5} />,
    title: "Mobile apps",
    description:
      "Native or cross-platform applications for iOS and Android, integrated with your backend.",
  },
  {
    icon: <Layers size={22} strokeWidth={1.5} />,
    title: "Internal systems",
    description:
      "ERPs, CRMs and management tools adapted to the real processes of your company.",
  },
  {
    icon: <Code size={22} strokeWidth={1.5} />,
    title: "MVPs & prototypes",
    description:
      "Validate your business idea with a functional product in weeks, not months.",
  },
  {
    icon: <Shield size={22} strokeWidth={1.5} />,
    title: "Maintenance & evolution",
    description:
      "Ongoing support, new features and optimization of existing software.",
  },
];

const FAQS = [
  {
    q: "How long does it take to develop custom software?",
    a: "It depends on the scope. A functional MVP can be ready in 4-8 weeks. More complex projects are delivered in phases, with demos every 2 weeks.",
  },
  {
    q: "How much does custom development cost?",
    a: "The cost depends on the complexity and scope. After a free initial meeting, we send a detailed proposal with clear timelines and costs.",
  },
  {
    q: "What about changes after delivery?",
    a: "Every project includes complete technical documentation and knowledge transfer. Your team can maintain it, or we can support you with ongoing maintenance.",
  },
  {
    q: "What technologies do you use?",
    a: "TypeScript, React, Next.js, Python, Node.js and PostgreSQL among others. We choose the right tool for each problem.",
  },
];

export default function CustomSoftwarePage() {
  return (
    <>
      <Navbar locale="en" />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="pointer-events-none absolute inset-0 dot-grid" />
          <div className="pointer-events-none absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full bg-white/[0.03] blur-3xl" />

          <Container className="relative">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
              className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600"
            >
              Custom Development
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="text-h1 md:text-display mb-6 max-w-3xl leading-[1.05]"
            >
              Software designed for{" "}
              <span className="text-gradient-bright">your business</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="max-w-2xl text-lg leading-relaxed text-luvant-400"
            >
              We don&apos;t adapt templates. We design and build web
              applications, APIs and internal systems from scratch, built for
              how your business operates. Every line of code has a purpose.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button as="a" href="/en/contact" size="lg">
                Tell us about your project
                <ArrowRight size={16} className="ml-1.5" />
              </Button>
              <Button as="a" href="/en/products" variant="secondary" size="lg">
                View products
              </Button>
            </motion.div>
          </Container>
        </section>

        {/* What we build */}
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
                What we <span className="text-gradient-bright">build</span>
              </h2>
              <p className="max-w-xl text-body text-luvant-400">
                From an idea on a napkin to a production system with thousands
                of users.
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

        {/* Process */}
        <section className="py-24 lg:py-32">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="mb-16"
            >
              <span className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600">
                Process
              </span>
              <h2 className="text-h2 md:text-h1 text-gradient max-w-md">
                How we work
              </h2>
            </motion.div>

            <motion.div
              variants={{ show: { transition: { staggerChildren: 0.15 } } }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            >
              {[
                {
                  step: "01",
                  title: "We understand your problem",
                  description:
                    "We listen, analyze your processes and understand what your business needs before writing a single line of code.",
                },
                {
                  step: "02",
                  title: "We design the solution",
                  description:
                    "We define the architecture, integrations and user experience. You approve before we move forward.",
                },
                {
                  step: "03",
                  title: "We build and demo",
                  description:
                    "We develop in short sprints with demos every 2 weeks. You see real progress, not promises.",
                },
                {
                  step: "04",
                  title: "We deliver and support",
                  description:
                    "We deploy, train your team and remain available. Support doesn't end with delivery.",
                },
              ].map((item) => (
                <motion.div key={item.step} variants={itemVariants}>
                  <div className="relative">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-luvant-950 font-mono text-sm ring-1 ring-white/10">
                      <span className="text-gradient-bright">{item.step}</span>
                    </div>
                    <h3 className="mb-2 text-lg font-medium">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-luvant-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

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

            <div className="grid gap-4 md:grid-cols-2">
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
                Have a project in mind?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-body text-luvant-400">
                Tell us what problem you want to solve and we&apos;ll show you
                how we can help.
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
