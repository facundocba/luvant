import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Qué es una API y por qué le importa a tu negocio",
  description:
    "Una explicación sin tecnicismos de qué son las APIs, por qué tus sistemas necesitan hablar entre sí, y cómo una buena integración puede ahorrarte horas de trabajo manual.",
  alternates: {
    canonical: "/blog/que-es-una-api-y-por-que-importa",
    languages: {
      "es-AR": "https://luvant.com.ar/blog/que-es-una-api-y-por-que-importa",
      "x-default":
        "https://luvant.com.ar/blog/que-es-una-api-y-por-que-importa",
    },
  },
  openGraph: {
    title: "Qué es una API y por qué le importa a tu negocio",
    description:
      "Explicación práctica de APIs para dueños de empresa. Qué son, para qué sirven y cómo conectan tus sistemas.",
    type: "article",
    publishedTime: "2026-02-20T00:00:00-03:00",
    authors: ["Luvant"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qué es una API y por qué le importa a tu negocio",
    description:
      "Explicación práctica de APIs para dueños de empresa. Qué son, para qué sirven y cómo conectan tus sistemas.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Qué es una API y por qué le importa a tu negocio",
  description:
    "Una explicación sin tecnicismos de qué son las APIs, por qué tus sistemas necesitan hablar entre sí, y cómo una buena integración puede ahorrarte horas de trabajo manual.",
  image:
    "https://luvant.com.ar/blog/que-es-una-api-y-por-que-importa/opengraph-image",
  datePublished: "2026-02-20T00:00:00-03:00",
  dateModified: "2026-02-20T00:00:00-03:00",
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
    "@id": "https://luvant.com.ar/blog/que-es-una-api-y-por-que-importa",
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
      name: "Qué es una API y por qué le importa a tu negocio",
      item: "https://luvant.com.ar/blog/que-es-una-api-y-por-que-importa",
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
              <Badge variant="outline">Conceptos</Badge>
              <span className="font-mono text-[11px] text-luvant-600">
                Febrero 2026 &middot; 6 min de lectura
              </span>
            </div>

            <h1 className="text-h2 md:text-h1 max-w-3xl leading-[1.1]">
              Qué es una API y por qué le importa a tu negocio
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-luvant-400">
              Una explicación sin tecnicismos de qué son las APIs, por qué tus
              sistemas necesitan hablar entre sí, y cómo una buena integración
              puede ahorrarte horas de trabajo manual.
            </p>
          </Container>
        </section>

        {/* Article body */}
        <section className="pb-24 lg:pb-32">
          <Container>
            <article className="prose-luvant mx-auto max-w-3xl">
              <p>
                Si alguna vez escuchaste a alguien de sistemas decir &ldquo;lo
                conectamos por API&rdquo; y asentiste sin entender del todo,
                este artículo es para vos. Porque las APIs son una de esas cosas
                que afectan directamente tu operación, aunque nadie te las haya
                explicado en un lenguaje que tenga sentido.
              </p>

              <h2>La explicación simple</h2>

              <p>
                Una API (Application Programming Interface) es un mecanismo que
                permite que dos programas se comuniquen entre sí. Pensalo como
                un mozo en un restaurante: vos no entrás a la cocina a buscar tu
                comida, le pedís al mozo, y él se encarga de llevar tu pedido y
                traerte lo que necesitás.
              </p>

              <p>
                En el mundo del software, la API es ese intermediario. Cuando tu
                sistema contable necesita datos de tu sistema de facturación, no
                accede directamente a la base de datos del otro. Le pide los
                datos a través de la API, que los entrega en un formato que
                ambos entienden.
              </p>

              <p>
                Lo importante no es que entiendas cómo funciona técnicamente. Lo
                importante es que entiendas qué significa para tu empresa:
                <strong>
                  {" "}
                  que tus sistemas puedan pasarse datos sin que alguien lo haga
                  a mano.
                </strong>
              </p>

              <h2>Por qué te debería importar</h2>

              <p>
                Si tu empresa usa más de un sistema (un CRM, un ERP, una
                plataforma de e-commerce, un sistema contable, planillas de
                Excel), probablemente alguien de tu equipo está haciendo de
                &ldquo;puente humano&rdquo; entre ellos. Exportando datos de un
                lado, importándolos en el otro, o directamente tipeando la misma
                información dos veces.
              </p>

              <p>
                Eso funciona cuando la empresa es chica y el volumen es bajo.
                Pero a medida que crece, ese trabajo manual se convierte en un
                cuello de botella: es lento, propenso a errores, y depende de
                personas que podrían estar haciendo cosas más valiosas.
              </p>

              <p>
                Las APIs eliminan ese cuello de botella. Cuando dos sistemas
                están conectados por API, los datos fluyen automáticamente. Un
                nuevo pedido en tu e-commerce puede generar automáticamente una
                factura en tu sistema contable, actualizar el stock en tu ERP y
                enviar un email de confirmación al cliente. Todo sin
                intervención humana.
              </p>

              <h2>Ejemplos concretos para tu día a día</h2>

              <p>
                Para bajar esto a tierra, acá van situaciones que probablemente
                te resulten familiares:
              </p>

              <ul>
                <li>
                  <strong>Facturación y contabilidad</strong>: en vez de
                  exportar facturas de un sistema e importarlas en otro, la API
                  las envía automáticamente ni bien se generan.
                </li>
                <li>
                  <strong>E-commerce y stock</strong>: cuando alguien compra en
                  tu tienda online, el stock se actualiza en tu sistema de
                  gestión en tiempo real. No hay riesgo de vender algo que ya no
                  tenés.
                </li>
                <li>
                  <strong>CRM y email marketing</strong>: cuando un vendedor
                  marca un contacto como cliente en el CRM, automáticamente se
                  lo agrega a la lista de emails correspondiente.
                </li>
                <li>
                  <strong>Procesamiento de documentos</strong>: un servicio de
                  OCR como{" "}
                  <Link
                    href="/productos/lens"
                    className="text-white underline decoration-luvant-700 underline-offset-4 transition-colors hover:decoration-white"
                  >
                    Luvant Lens
                  </Link>{" "}
                  recibe un documento por API y devuelve los datos extraídos
                  listos para cargar en tu sistema.
                </li>
              </ul>

              <p>
                En todos estos casos, la magia no está en la API en sí, sino en
                lo que deja de pasar: personas copiando datos entre sistemas.
              </p>

              <h2>API pública vs. API privada</h2>

              <p>
                No todas las APIs son iguales, y esta distinción importa cuando
                evaluás conectar sistemas:
              </p>

              <ul>
                <li>
                  <strong>API pública (o abierta)</strong>: el proveedor del
                  software la pone a disposición para que cualquiera pueda
                  integrarse. MercadoLibre, Google, y la mayoría de las
                  plataformas SaaS tienen APIs públicas. Si tu sistema tiene API
                  pública, integrarlo es más rápido y barato.
                </li>
                <li>
                  <strong>API privada (o interna)</strong>: existe pero no está
                  documentada públicamente. Algunos ERPs y sistemas legacy
                  tienen APIs que solo se acceden con acuerdo comercial. La
                  integración es posible pero requiere más trabajo.
                </li>
                <li>
                  <strong>Sin API</strong>: el sistema no tiene forma
                  programática de conectarse. En estos casos hay alternativas
                  (exportación de archivos, scraping, RPA), pero son menos
                  eficientes.
                </li>
              </ul>

              <p>
                Cuando estés evaluando un software nuevo para tu empresa,
                preguntá siempre: <strong>&ldquo;¿Tiene API?&rdquo;</strong>.
                Esa sola pregunta te puede ahorrar dolores de cabeza en el
                futuro.
              </p>

              <h2>Qué pasa cuando las APIs fallan</h2>

              <p>
                Sería irresponsable hablar de APIs sin mencionar que no son
                infalibles. Las integraciones pueden fallar por múltiples
                razones: un servicio se cae, los datos vienen en un formato
                inesperado, hay un cambio de versión que rompe la
                compatibilidad.
              </p>

              <p>
                Por eso, una buena integración no es solo &ldquo;conectar dos
                cosas&rdquo;. Incluye:
              </p>

              <ul>
                <li>
                  <strong>Manejo de errores</strong>: si algo falla, que el
                  sistema reintente o avise, en lugar de perder datos
                  silenciosamente.
                </li>
                <li>
                  <strong>Monitoreo</strong>: saber en tiempo real si las
                  integraciones están funcionando o si algo se detuvo.
                </li>
                <li>
                  <strong>Documentación</strong>: tener claro qué hace cada
                  integración, para que no dependa del conocimiento de una sola
                  persona.
                </li>
              </ul>

              <p>
                La diferencia entre una integración bien hecha y una improvisada
                no se nota el primer día. Se nota cuando algo se rompe y alguien
                tiene que arreglarlo.
              </p>

              <h2>Cómo saber si necesitás integrar tus sistemas</h2>

              <p>
                Hay señales claras de que tus sistemas necesitan conectarse:
              </p>

              <ol>
                <li>
                  <strong>
                    Alguien exporta un Excel de un sistema para importarlo en
                    otro
                  </strong>
                  . Eso es una integración manual. Y toda integración manual es
                  candidata a automatizarse.
                </li>
                <li>
                  <strong>
                    Los mismos datos están en dos lugares y no siempre coinciden
                  </strong>
                  . Cuando actualizás el precio de un producto en el ERP pero
                  tenés que actualizarlo también en la tienda online, es
                  cuestión de tiempo hasta que se desincronicen.
                </li>
                <li>
                  <strong>
                    Un proceso depende de que alguien se acuerde de hacerlo
                  </strong>
                  . Si cada vez que llega un pedido grande hay que avisar
                  manualmente al depósito, tarde o temprano alguien se va a
                  olvidar.
                </li>
                <li>
                  <strong>Tenés datos valiosos que no podés cruzar</strong>. Tu
                  CRM tiene datos de clientes y tu sistema contable tiene datos
                  de facturación, pero no podés ver fácilmente cuánto compró
                  cada cliente.
                </li>
              </ol>

              <p>
                Si te sentiste identificado con alguno de estos puntos, una
                buena integración vía API probablemente te pueda ayudar.
              </p>

              <h2>Primeros pasos</h2>

              <p>
                No hace falta integrar todo de una vez. De hecho, no conviene.
                El mejor enfoque es:
              </p>

              <ol>
                <li>
                  Identificá el proceso manual que más tiempo consume o más
                  errores genera. Ese es el primer candidato.
                </li>
                <li>
                  Verificá que los sistemas involucrados tengan API. Si uno de
                  ellos no tiene, evaluá si hay alternativas o si conviene
                  cambiar de sistema.
                </li>
                <li>
                  Buscá un equipo con experiencia en{" "}
                  <Link
                    href="/servicios/integracion-de-sistemas"
                    className="text-white underline decoration-luvant-700 underline-offset-4 transition-colors hover:decoration-white"
                  >
                    integración de sistemas
                  </Link>
                  . La conexión técnica es solo una parte; entender tu proceso
                  de negocio es igual de importante.
                </li>
              </ol>

              <p>
                Las APIs no son un tema técnico que solo le importa a sistemas.
                Son la infraestructura que permite que tu empresa escale sin
                multiplicar el trabajo manual. Entenderlas, aunque sea a nivel
                conceptual, te da mejor criterio para tomar decisiones
                tecnológicas.
              </p>

              <p>
                Si tenés sistemas que no se hablan entre sí y querés explorar
                cómo conectarlos,{" "}
                <Link
                  href="/contacto"
                  className="text-white underline decoration-luvant-700 underline-offset-4 transition-colors hover:decoration-white"
                >
                  hablemos
                </Link>
                . Podemos evaluar tu caso sin compromiso.
              </p>
            </article>

            {/* Article footer */}
            <div className="mx-auto mt-16 max-w-3xl border-t border-white/[0.06] pt-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href="/blog/automatizar-carga-facturas"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-luvant-500 transition-colors hover:text-white"
                >
                  <ArrowLeft size={12} />
                  Anterior: Cómo dejar de cargar facturas a mano
                </Link>
                <Link
                  href="/blog/ocr-documentos-argentina"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-luvant-500 transition-colors hover:text-white"
                >
                  Siguiente: OCR para documentos argentinos
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
                      ¿Necesitás conectar tus sistemas?
                    </h3>
                    <p className="mx-auto max-w-sm text-sm text-luvant-400">
                      Evaluamos tu caso y te proponemos una integración que
                      funcione. Sin compromiso.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                      <Link
                        href="/contacto"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-luvant-200"
                      >
                        Contactar
                        <ArrowRight size={14} />
                      </Link>
                      <Link
                        href="/servicios/integracion-de-sistemas"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/40"
                      >
                        Ver servicio de integración
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
