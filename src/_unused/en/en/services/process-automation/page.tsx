"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import {
  ArrowRight,
  Workflow,
  FileText,
  Bell,
  BarChart3,
  RefreshCw,
  Zap,
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

const USE_CASES = [
  {
    icon: <FileText size={22} strokeWidth={1.5} />,
    title: "Automatic document processing",
    description:
      "Invoices, receipts and vouchers processed automatically. Data goes straight to your accounting system without manual intervention.",
  },
  {
    icon: <RefreshCw size={22} strokeWidth={1.5} />,
    title: "System synchronization",
    description:
      "Data updated in real time between your ERP, CRM, e-commerce and management tools. No duplicates.",
  },
  {
    icon: <Bell size={22} strokeWidth={1.5} />,
    title: "Alerts & notifications",
    description:
      "Automatic notifications when an order changes status, a payment clears or a task requires attention.",
  },
  {
    icon: <BarChart3 size={22} strokeWidth={1.5} />,
    title: "Automated reports",
    description:
      "Generation and delivery of periodic reports with the data you need, when you need it.",
  },
  {
    icon: <Workflow size={22} strokeWidth={1.5} />,
    title: "Approval workflows",
    description:
      "Digital approval circuits for purchase orders, expenses, time off or any internal process.",
  },
  {
    icon: <Zap size={22} strokeWidth={1.5} />,
    title: "Batch processing",
    description:
      "Bulk tasks that run on their own: data imports, price updates, email sends.",
  },
];

const FAQS = [
  {
    q: "What processes can be automated?",
    a: "Data entry, billing, reports, notifications, inventory synchronization, document processing, and any repetitive manual task that follows defined rules.",
  },
  {
    q: "Does automation replace my team?",
    a: "No. It frees your team from repetitive tasks so they can focus on higher-value work. It's a tool that amplifies capabilities.",
  },
  {
    q: "How long does it take to implement an automation?",
    a: "A simple automation can be up and running in 1-2 weeks. More complex workflows with multiple systems can take 4-6 weeks.",
  },
];

export default function ProcessAutomationPage() {
  return (
    <>
      <Navbar locale="en" />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="pointer-events-none absolute inset-0 dot-grid" />
          <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-white/[0.02] blur-3xl" />

          <Container className="relative">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
              className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600"
            >
              Automation
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="text-h1 md:text-display mb-6 max-w-3xl leading-[1.05]"
            >
              Let technology handle the{" "}
              <span className="text-gradient-bright">repetitive work</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="max-w-2xl text-lg leading-relaxed text-luvant-400"
            >
              Your team loses hours every week on tasks a machine can do in
              seconds. We design automated workflows that connect your systems,
              eliminate errors and free up time for what matters.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button as="a" href="/en/contact" size="lg">
                I want to automate
                <ArrowRight size={16} className="ml-1.5" />
              </Button>
              <Button
                as="a"
                href="/en/products/lens"
                variant="secondary"
                size="lg"
              >
                View Luvant Lens
              </Button>
            </motion.div>
          </Container>
        </section>

        {/* Impact */}
        <section className="py-16">
          <Container>
            <motion.div
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6 md:grid-cols-4"
            >
              {[
                { value: "-80%", label: "Manual data entry time" },
                { value: "-95%", label: "Typing errors" },
                { value: "24/7", label: "Continuous operation" },
                { value: "ROI", label: "In weeks, not months" },
              ].map((item) => (
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

        {/* Use cases */}
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
                Use cases
              </span>
              <h2 className="text-h2 md:text-h1 mb-4">
                What you can{" "}
                <span className="text-gradient-bright">automate</span>
              </h2>
              <p className="max-w-xl text-body text-luvant-400">
                These are some of the processes we transform for companies like
                yours.
              </p>
            </motion.div>

            <motion.div
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {USE_CASES.map((uc) => (
                <motion.div key={uc.title} variants={itemVariants}>
                  <div className="group relative h-full overflow-hidden rounded-xl border border-white/[0.06] bg-luvant-950/80 p-6 transition-all duration-300 hover:border-white/10">
                    <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 bg-gradient-to-bl from-white/[0.02] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.05] text-luvant-300 ring-1 ring-white/[0.08] transition-colors group-hover:text-white">
                      {uc.icon}
                    </div>
                    <h3 className="mb-2 text-base font-medium">{uc.title}</h3>
                    <p className="text-sm leading-relaxed text-luvant-500">
                      {uc.description}
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
                What process do you want to automate?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-body text-luvant-400">
                Tell us what manual tasks are eating up your time and we&apos;ll
                show you how to solve it.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button as="a" href="/en/contact" size="lg">
                  Get started
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
