import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cómo dejar de cargar facturas a mano",
  description:
    "Tu equipo pierde horas por semana tipeando datos de facturas en el sistema. Hay una forma mejor: extracción automática con OCR que se integra con tu software contable.",
  alternates: {
    canonical: "/blog/automatizar-carga-facturas",
  },
  openGraph: {
    title: "Cómo dejar de cargar facturas a mano",
    description:
      "Extracción automática de datos de facturas con OCR. Cómo funciona y qué resultados esperar.",
    type: "article",
    publishedTime: "2026-02-10T00:00:00-03:00",
    authors: ["Luvant"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo dejar de cargar facturas a mano",
    description:
      "Extracción automática de datos de facturas con OCR. Cómo funciona y qué resultados esperar.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo dejar de cargar facturas a mano",
  description:
    "Tu equipo pierde horas por semana tipeando datos de facturas en el sistema. Hay una forma mejor: extracción automática con OCR.",
  image:
    "https://luvant.com.ar/blog/automatizar-carga-facturas/opengraph-image",
  datePublished: "2026-02-10T00:00:00-03:00",
  dateModified: "2026-02-10T00:00:00-03:00",
  author: {
    "@type": "Organization",
    name: "Luvant",
    url: "https://luvant.com.ar",
  },
  publisher: {
    "@type": "Organization",
    name: "Luvant",
    url: "https://luvant.com.ar",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://luvant.com.ar/blog/automatizar-carga-facturas",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://luvant.com.ar",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://luvant.com.ar/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Cómo dejar de cargar facturas a mano",
      item: "https://luvant.com.ar/blog/automatizar-carga-facturas",
    },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />
      <main id="main-content">
        {/* Header */}
        <section className="relative overflow-hidden pt-32 pb-12 lg:pt-40 lg:pb-16">
          <div className="pointer-events-none absolute inset-0 dot-grid" />
          <div className="pointer-events-none absolute -right-40 -top-20 h-[400px] w-[400px] rounded-full bg-white/[0.03] blur-3xl" />

          <Container className="relative">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-1.5 font-mono text-xs text-luvant-500 transition-colors hover:text-white"
            >
              <ArrowLeft size={12} />
              Volver al blog
            </Link>

            <div className="mb-4 flex items-center gap-3">
              <Badge variant="outline">Guía práctica</Badge>
              <span className="font-mono text-[11px] text-luvant-600">
                Febrero 2026 &middot; 7 min de lectura
              </span>
            </div>

            <h1 className="text-h2 md:text-h1 max-w-3xl leading-[1.1]">
              Cómo dejar de cargar facturas a mano
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-luvant-400">
              Tu equipo pierde horas por semana tipeando datos de facturas en el
              sistema. Hay una forma mejor: extracción automática con OCR que se
              integra con tu software contable.
            </p>
          </Container>
        </section>

        {/* Article body */}
        <section className="pb-24 lg:pb-32">
          <Container>
            <article className="prose-luvant mx-auto max-w-3xl">
              <p>
                Si alguien de tu equipo recibe una factura en PDF, la abre, mira
                los datos y los tipea uno por uno en el sistema contable, este
                artículo es para vos. Porque ese proceso, que parece inofensivo,
                tiene un costo real que se acumula cada semana.
              </p>

              <h2>El costo oculto de la carga manual</h2>

              <p>
                Hagamos un cálculo rápido. Si tu equipo procesa 30 facturas por
                día y cada una toma 3 minutos de carga manual, son 90 minutos
                diarios. Eso es <strong>7.5 horas por semana</strong> dedicadas
                exclusivamente a tipear datos que ya existen en un documento.
              </p>

              <p>
                Pero el costo no es solo tiempo. La carga manual introduce
                errores: un CUIT mal tipeado, un importe con una coma de más,
                una fecha invertida. Cada error genera trabajo adicional para
                detectarlo y corregirlo. Y si no se detecta, genera problemas
                contables que pueden aparecer semanas después.
              </p>

              <p>
                La pregunta no es si podés vivir con eso. La pregunta es por qué
                deberías, cuando la tecnología para resolverlo ya existe.
              </p>

              <h2>Qué es OCR y cómo funciona</h2>

              <p>
                OCR (Optical Character Recognition) es la tecnología que
                convierte texto dentro de imágenes o PDFs en datos estructurados
                que una computadora puede leer. En términos simples: le das un
                documento y te devuelve los datos listos para usar.
              </p>

              <p>
                El OCR moderno no es simplemente &ldquo;leer letras&rdquo;. Usa
                inteligencia artificial para entender la estructura del
                documento: dónde está el total, cuál es el número de factura,
                quién es el emisor, cuál es la fecha. No importa si el formato
                cambia entre proveedores, el sistema aprende a encontrar lo que
                necesita.
              </p>

              <p>
                Para facturas argentinas, esto incluye entender campos
                específicos como CUIT, punto de venta, tipo de factura (A, B,
                C), CAE y fecha de vencimiento del CAE, datos que los OCR
                genéricos muchas veces no capturan correctamente.
              </p>

              <h2>Cómo se ve el proceso automatizado</h2>

              <p>
                El flujo con extracción automática reemplaza la carga manual por
                un proceso que funciona así:
              </p>

              <ol>
                <li>
                  <strong>Recepción</strong>: las facturas llegan por email, se
                  escanean o se suben a una carpeta. No cambia cómo las recibís.
                </li>
                <li>
                  <strong>Procesamiento</strong>: el sistema de OCR lee cada
                  documento y extrae los datos relevantes: proveedor, CUIT,
                  importes, fecha, número de factura, condición de IVA.
                </li>
                <li>
                  <strong>Validación</strong>: los datos extraídos se verifican
                  automáticamente (formato de CUIT válido, importes coherentes)
                  y se presentan para revisión rápida si algo no coincide.
                </li>
                <li>
                  <strong>Integración</strong>: los datos validados se envían
                  directamente al sistema contable, ERP o planilla que uses. Sin
                  intervención manual.
                </li>
              </ol>

              <p>
                El resultado: lo que antes tomaba 3 minutos por factura ahora
                toma segundos. Tu equipo pasa de tipear datos a revisar que todo
                esté correcto, algo que pueden hacer a un ritmo mucho más
                rápido.
              </p>

              <h2>Qué resultados esperar</h2>

              <p>
                Seamos claros con las expectativas, porque hay mucho marketing
                inflado alrededor de la automatización:
              </p>

              <ul>
                <li>
                  <strong>Precisión del 95-99%</strong> en facturas con formato
                  estándar (facturas electrónicas AFIP, facturas de proveedores
                  con formato consistente). Los documentos con formato libre o
                  muy deteriorados pueden tener menor precisión.
                </li>
                <li>
                  <strong>Reducción del 70-80% del tiempo</strong> dedicado a
                  carga de datos. No es 100% porque la revisión humana sigue
                  siendo importante, especialmente al principio mientras el
                  sistema se ajusta.
                </li>
                <li>
                  <strong>Eliminación casi total de errores de tipeo</strong>.
                  Los errores que quedan son del documento original (datos
                  incorrectos en la factura misma), no de la carga.
                </li>
              </ul>

              <p>
                No prometemos que el sistema va a funcionar perfecto desde el
                día uno con el 100% de tus documentos. Lo que sí garantizamos es
                que mejora con el uso y que el impacto en tiempo se nota desde
                la primera semana.
              </p>

              <h2>Qué necesitás para implementarlo</h2>

              <p>
                La implementación de OCR para facturas no requiere cambiar toda
                tu infraestructura tecnológica. Lo que sí necesitás:
              </p>

              <h3>1. Definir el flujo actual</h3>

              <p>
                ¿Cómo recibís las facturas? ¿En qué sistema las cargás? ¿Quién
                las procesa? ¿Cuántas por día? Entender el flujo actual es el
                primer paso para diseñar la automatización.
              </p>

              <h3>2. Identificar las integraciones</h3>

              <p>
                ¿Tu sistema contable tiene API o permite importar datos? ¿Usás
                un ERP como SAP, Tango, o una plataforma web? La integración es
                lo que hace que los datos extraídos lleguen donde los necesitás
                sin pasos manuales intermedios.
              </p>

              <h3>3. Muestras de documentos</h3>

              <p>
                Para que el OCR funcione bien con tus facturas específicas,
                necesitamos ejemplos representativos. No hace falta cientos: con
                10-20 facturas de tus principales proveedores podemos calibrar
                el sistema.
              </p>

              <h3>4. Un período de ajuste</h3>

              <p>
                Las primeras semanas son de calibración. El equipo usa el
                sistema y marca las correcciones necesarias. Cada corrección
                mejora el modelo. Después de ese período, el sistema funciona
                con supervisión mínima.
              </p>

              <h2>
                Luvant Lens: nuestra solución de procesamiento de documentos
              </h2>

              <p>
                <Link
                  href="/productos/lens"
                  className="text-white underline decoration-luvant-700 underline-offset-4 transition-colors hover:decoration-white"
                >
                  Luvant Lens
                </Link>{" "}
                es el producto que desarrollamos para resolver exactamente este
                problema. Es una plataforma de OCR diseñada para documentos en
                español, con soporte específico para formatos argentinos
                (facturas AFIP, remitos, recibos).
              </p>

              <p>
                Se integra mediante API REST, lo que significa que puede
                conectarse con prácticamente cualquier sistema que use tu
                empresa. Si tu software contable permite importar datos, Lens
                puede enviarlos directamente.
              </p>

              <p>
                No es la única solución en el mercado, pero es la que
                construimos porque las alternativas genéricas no resolvían bien
                las particularidades de los documentos que manejan las empresas
                en Argentina.
              </p>

              <h2>Primeros pasos</h2>

              <p>
                Si estás considerando automatizar la carga de facturas, el
                camino más directo es:
              </p>

              <ol>
                <li>
                  Contá cuántas facturas procesa tu equipo por semana y cuánto
                  tiempo dedican. Eso te da el baseline para medir el impacto.
                </li>
                <li>
                  Identificá de qué proveedores vienen la mayoría de las
                  facturas. No necesitás resolver el 100% de los formatos el
                  primer día, empezá por los que más volumen tienen.
                </li>
                <li>
                  Hablá con nosotros. Te mostramos cómo funciona Lens con tus
                  documentos reales, sin costo ni compromiso.
                </li>
              </ol>

              <p>
                La carga manual de facturas es uno de esos problemas que todas
                las empresas tienen y pocas resuelven porque &ldquo;siempre se
                hizo así&rdquo;. Pero el hecho de que sea común no significa que
                sea eficiente. Y hoy, resolverlo es más accesible de lo que
                pensás.
              </p>

              <p>
                <Link
                  href="/contacto"
                  className="text-white underline decoration-luvant-700 underline-offset-4 transition-colors hover:decoration-white"
                >
                  Escribinos
                </Link>{" "}
                y te mostramos cómo funciona con tus facturas.
              </p>
            </article>

            {/* Article footer */}
            <div className="mx-auto mt-16 max-w-3xl border-t border-white/[0.06] pt-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href="/blog/por-que-tu-empresa-necesita-software-a-medida"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-luvant-500 transition-colors hover:text-white"
                >
                  <ArrowLeft size={12} />
                  Anterior: Por qué tu empresa necesita software a medida
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-luvant-500 transition-colors hover:text-white"
                >
                  Volver al blog
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="mx-auto mt-16 max-w-3xl">
              <div className="gradient-border relative overflow-hidden rounded-2xl">
                <div className="relative p-10 text-center md:p-14">
                  <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-gradient-to-bl from-white/[0.02] to-transparent" />
                  <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 bg-gradient-to-tr from-white/[0.02] to-transparent" />

                  <div className="relative">
                    <h3 className="mx-auto mb-3 max-w-md text-h3 text-gradient-bright">
                      ¿Querés ver Luvant Lens en acción?
                    </h3>
                    <p className="mx-auto max-w-sm text-sm text-luvant-400">
                      Te mostramos cómo procesa tus facturas reales, sin
                      compromiso.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                      <Link
                        href="/contacto"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-luvant-200"
                      >
                        Agendar demo
                        <ArrowRight size={14} />
                      </Link>
                      <Link
                        href="/productos/lens"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/40"
                      >
                        Conocer Luvant Lens
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
