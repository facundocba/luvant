"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { STEPS } from "@/lib/constants";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as const },
  },
};

export default function HowItWorks() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Top separator */}
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
            Proceso
          </span>
          <h2 className="text-h2 md:text-h1 text-gradient">Cómo trabajamos</h2>
        </motion.div>

        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Desktop connecting line with gradient */}
          <div className="absolute left-0 right-0 top-[22px] hidden h-px md:block">
            <div className="h-full w-full bg-gradient-to-r from-white/10 via-white/[0.06] to-white/10" />
          </div>

          {/* Mobile vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/[0.04] to-transparent md:hidden" />

          <div className="grid gap-12 md:grid-cols-4 md:gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="relative pl-14 md:pl-0"
              >
                {/* Step number circle */}
                <div className="absolute left-0 top-0 md:relative md:mb-6">
                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-luvant-950 font-mono text-sm ring-1 ring-white/10">
                    <span
                      className="text-gradient-bright"
                      style={{ WebkitTextFillColor: "inherit" }}
                    >
                      {step.number}
                    </span>
                  </div>
                  {/* Glow behind active steps */}
                  {i === 0 && (
                    <div className="absolute inset-0 rounded-full bg-white/5 blur-md" />
                  )}
                </div>

                <h3 className="mb-2 text-lg font-medium">{step.title}</h3>
                <p className="text-sm leading-relaxed text-luvant-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
