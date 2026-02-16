"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-luvant-black py-24 lg:py-32">
      {/* Multi-layer gradient background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Central orb */}
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[100px]" />
        {/* Top edge gradient */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        {/* Corner accents */}
        <div className="absolute left-0 top-0 h-40 w-40 bg-gradient-to-br from-white/[0.02] to-transparent" />
        <div className="absolute bottom-0 right-0 h-40 w-40 bg-gradient-to-tl from-white/[0.02] to-transparent" />
      </div>

      {/* Dot grid overlay */}
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-50" />

      <Container className="relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const }}
        >
          <h2 className="mx-auto max-w-2xl text-h2 md:text-h1 text-gradient-bright">
            ¿Listo para optimizar tus procesos?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-body text-luvant-400">
            Contanos sobre tu proyecto y diseñamos juntos la solución ideal para
            tu empresa.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button as="a" href="/contacto" size="lg">
              Agendar una reunión
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
  );
}
