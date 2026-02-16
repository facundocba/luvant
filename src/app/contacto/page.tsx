"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { Mail, MapPin } from "lucide-react";

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-32 pb-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Info */}
            <div>
              <span className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600">
                Contacto
              </span>
              <h1 className="text-h1 md:text-display mb-6">Hablemos</h1>
              <p className="mb-12 max-w-md text-lg text-luvant-400">
                Contanos sobre tu proyecto y encontremos juntos la mejor
                solución para tu empresa.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-luvant-800 text-luvant-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-luvant-600">Email</p>
                    <a
                      href="mailto:hola@luvant.com.ar"
                      className="text-sm text-white hover:text-luvant-300"
                    >
                      hola@luvant.com.ar
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-luvant-800 text-luvant-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-luvant-600">Ubicación</p>
                    <p className="text-sm text-white">Argentina</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-xl border border-luvant-800 bg-luvant-900 p-8">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Input label="Nombre" placeholder="Tu nombre" required />
                  <Input label="Empresa" placeholder="Tu empresa" />
                </div>
                <Input
                  label="Email"
                  type="email"
                  placeholder="tu@empresa.com"
                  required
                />
                <Textarea
                  label="Mensaje"
                  placeholder="Contanos sobre tu proyecto..."
                  rows={5}
                  required
                />
                <Button type="submit" size="lg" className="w-full">
                  Enviar mensaje
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
