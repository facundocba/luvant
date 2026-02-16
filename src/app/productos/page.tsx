import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { PRODUCTS } from "@/lib/constants";
import { ArrowRight, ScanLine, Workflow, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Conocé los productos de Luvant: soluciones de software B2B para procesamiento de documentos, automatización e integración.",
};

const ICONS: Record<string, React.ReactNode> = {
  lens: <ScanLine size={28} strokeWidth={1.5} />,
  flow: <Workflow size={28} strokeWidth={1.5} />,
  sync: <RefreshCw size={28} strokeWidth={1.5} />,
};

export default function ProductosPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-32 pb-24">
        <Container>
          <span className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600">
            Productos
          </span>
          <h1 className="text-h1 md:text-display mb-4">Nuestras soluciones</h1>
          <p className="mb-16 max-w-2xl text-lg text-luvant-400">
            Cada producto resuelve un problema real del mundo empresarial con
            tecnología moderna y soporte dedicado.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => (
              <Card key={product.slug} hover className="flex flex-col">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-luvant-black text-white">
                  {ICONS[product.slug]}
                </div>
                <h2 className="text-h3 mb-2">{product.name}</h2>
                <Badge
                  variant={product.status === "active" ? "default" : "outline"}
                  className="mb-4 self-start"
                >
                  {product.status === "coming-soon"
                    ? "Próximamente"
                    : product.badge}
                </Badge>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-luvant-400">
                  {product.description}
                </p>
                {product.status === "active" && (
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-1 text-sm text-white transition-colors hover:text-luvant-300"
                  >
                    Conocer más <ArrowRight size={14} />
                  </Link>
                )}
              </Card>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
