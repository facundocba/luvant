import Link from "next/link";
import LuvantLogo from "@/components/brand/LuvantLogo";
import Container from "@/components/ui/Container";
import { FOOTER_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-luvant-800 bg-luvant-black">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <LuvantLogo variant="horizontal" size={28} className="mb-4" />
            <p className="max-w-xs text-sm leading-relaxed text-luvant-600">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Productos */}
          <div>
            <h4 className="mb-4 font-mono text-caption uppercase tracking-wider text-luvant-600">
              Productos
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.productos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-luvant-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="mb-4 font-mono text-caption uppercase tracking-wider text-luvant-600">
              Servicios
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.servicios.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-luvant-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="mb-4 font-mono text-caption uppercase tracking-wider text-luvant-600">
              Empresa
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-luvant-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-luvant-800 pt-8 md:flex-row">
          <p className="text-caption text-luvant-600">
            &copy; {currentYear} Luvant. Todos los derechos reservados.
          </p>
          <span className="font-mono text-caption text-luvant-600">
            luvant.
          </span>
        </div>
      </Container>
    </footer>
  );
}
