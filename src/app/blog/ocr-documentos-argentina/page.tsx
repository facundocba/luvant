import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "OCR para documentos argentinos: desafíos y soluciones",
  description:
    "Procesar facturas AFIP, remitos con formato libre y comprobantes con CUIT requiere OCR entrenado para las particularidades locales. Así lo resolvemos con Luvant Lens.",
  alternates: {
    canonical: "/blog/ocr-documentos-argentina",
    languages: {
      "es-AR": "https://luvant.com.ar/blog/ocr-documentos-argentina",
      "x-default": "https://luvant.com.ar/blog/ocr-documentos-argentina",
    },
  },
  openGraph: {
    title: "OCR para documentos argentinos: desafíos y soluciones",
    description:
      "Cómo procesar facturas AFIP, remitos y comprobantes con las particularidades del mercado argentino.",
    type: "article",
    publishedTime: "2026-02-22T00:00:00-03:00",
    authors: ["Luvant"],
  },
  twitter: {
    card: "summary_large_image",
    title: "OCR para documentos argentinos: desafíos y soluciones",
    description:
      "Cómo procesar facturas AFIP, remitos y comprobantes con las particularidades del mercado argentino.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "OCR para documentos argentinos: desafíos y soluciones",
  description:
    "Procesar facturas AFIP, remitos con formato libre y comprobantes con CUIT requiere OCR entrenado para las particularidades locales.",
  image: "https://luvant.com.ar/blog/ocr-documentos-argentina/opengraph-image",
  datePublished: "2026-02-22T00:00:00-03:00",
  dateModified: "2026-02-22T00:00:00-03:00",
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
    "@id": "https://luvant.com.ar/blog/ocr-documentos-argentina",
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
      name: "OCR para documentos argentinos: desafíos y soluciones",
      item: "https://luvant.com.ar/blog/ocr-documentos-argentina",
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
              <Badge variant="outline">Producto</Badge>
              <span className="font-mono text-[11px] text-luvant-600">
                Febrero 2026 &middot; 8 min de lectura
              </span>
            </div>

            <h1 className="text-h2 md:text-h1 max-w-3xl leading-[1.1]">
              OCR para documentos argentinos: desafíos y soluciones
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-luvant-400">
              Procesar facturas AFIP, remitos con formato libre y comprobantes
              con CUIT requiere OCR entrenado para las particularidades locales.
              Así lo resolvemos con Luvant Lens.
            </p>
          </Container>
        </section>

        {/* Article body */}
        <section className="pb-24 lg:pb-32">
          <Container>
            <article className="prose-luvant mx-auto max-w-3xl">
              <p>
                El OCR (reconocimiento óptico de caracteres) existe hace
                décadas. Pero si alguna vez intentaste usar un servicio genérico
                para procesar facturas argentinas, probablemente te hayas
                encontrado con resultados mediocres. No es casualidad: los
                documentos argentinos tienen particularidades que la mayoría de
                las soluciones internacionales no manejan bien.
              </p>

              <p>
                En este artículo vamos a hablar de cuáles son esos desafíos
                específicos y cómo los resolvemos con{" "}
                <Link
                  href="/productos/lens"
                  className="text-white underline decoration-luvant-700 underline-offset-4 transition-colors hover:decoration-white"
                >
                  Luvant Lens
                </Link>
                .
              </p>

              <h2>Los desafíos específicos de Argentina</h2>

              <h3>1. Facturas electrónicas AFIP</h3>

              <p>
                Las facturas electrónicas argentinas tienen un formato regulado
                por AFIP, pero eso no significa que sean uniformes. Cada
                software de facturación genera un PDF con diseño propio. Lo que
                sí comparten son campos obligatorios: CUIT del emisor y
                receptor, tipo de comprobante (A, B, C, M, E), punto de venta,
                número de comprobante, CAE, fecha de vencimiento del CAE,
                condición frente al IVA, y el detalle de conceptos con sus
                alícuotas.
              </p>

              <p>
                El problema para un OCR genérico es que estos campos pueden
                aparecer en cualquier posición del documento, con distintas
                etiquetas (&ldquo;CUIT&rdquo;, &ldquo;C.U.I.T.&rdquo;,
                &ldquo;CUIT/CUIL&rdquo;) y en formatos variables (20-12345678-9
                vs 20123456789). Un sistema que no fue entrenado con documentos
                argentinos no entiende estas variaciones.
              </p>

              <h3>2. Remitos y notas de entrega</h3>

              <p>
                A diferencia de las facturas electrónicas, los remitos no tienen
                un formato regulado. Cada empresa diseña el suyo. Algunos son
                impresos, otros manuscritos, y muchos son una combinación de
                ambos. Extraer datos de un remito manuscrito escaneado es un
                desafío significativamente mayor que procesar una factura
                electrónica.
              </p>

              <p>
                Lo que buscamos extraer de un remito suele ser: número de
                remito, fecha, productos o ítems entregados con cantidades,
                destinatario y firma de conformidad. Cuando el documento es
                manuscrito o tiene baja calidad de escaneo, la precisión depende
                directamente de la calidad del modelo de OCR.
              </p>

              <h3>3. Recibos y comprobantes varios</h3>

              <p>
                Tickets de caja, recibos de pago, comprobantes de transferencia
                bancaria, comprobantes de tarjeta. Cada uno tiene su propia
                estructura y nivel de complejidad. Los tickets térmicos, por
                ejemplo, suelen tener baja resolución y se degradan con el
                tiempo, lo que hace que el procesamiento sea más difícil cuanto
                más viejo es el documento.
              </p>

              <h3>4. El idioma y las convenciones locales</h3>

              <p>
                Puede parecer menor, pero el idioma importa. Los OCR entrenados
                con documentos en inglés pueden tener problemas con:
              </p>

              <ul>
                <li>
                  <strong>Acentos y eñes</strong>: &ldquo;facturación&rdquo;
                  puede leerse como &ldquo;facturacion&rdquo; o
                  &ldquo;facturaci6n&rdquo;.
                </li>
                <li>
                  <strong>Formato de números</strong>: en Argentina usamos punto
                  como separador de miles y coma para decimales (1.234,56), al
                  revés que en EEUU. Un OCR que no distingue esto puede
                  interpretar $1.234,56 como $1234.56 o como $1.234.
                </li>
                <li>
                  <strong>Formato de fechas</strong>: DD/MM/AAAA vs MM/DD/YYYY.
                  Una fecha como 03/02/2026 puede ser 3 de febrero o 2 de marzo,
                  dependiendo de la convención que asuma el sistema.
                </li>
                <li>
                  <strong>Direcciones</strong>: el formato de direcciones
                  argentinas (calle + número + piso + depto + localidad +
                  provincia + CP) no se parece al formato norteamericano.
                </li>
              </ul>

              <h2>Cómo funciona un OCR especializado</h2>

              <p>
                Un OCR moderno no es solo &ldquo;leer texto de una
                imagen&rdquo;. Es un proceso de múltiples etapas:
              </p>

              <ol>
                <li>
                  <strong>Pre-procesamiento</strong>: el documento se limpia
                  digitalmente. Se corrige la rotación, se mejora el contraste,
                  se eliminan sombras y artefactos del escaneo.
                </li>
                <li>
                  <strong>Detección de texto</strong>: se identifican las
                  regiones del documento que contienen texto, separándolas de
                  logos, firmas, sellos y espacios vacíos.
                </li>
                <li>
                  <strong>Reconocimiento</strong>: se convierte cada región de
                  texto en caracteres digitales. Acá es donde la calidad del
                  modelo marca la diferencia.
                </li>
                <li>
                  <strong>Extracción estructurada</strong>: no alcanza con leer
                  el texto; hay que entender qué significa. El sistema
                  identifica que &ldquo;20-12345678-9&rdquo; al lado de
                  &ldquo;CUIT&rdquo; es un número de identificación fiscal, no
                  un número de teléfono.
                </li>
                <li>
                  <strong>Validación</strong>: los datos extraídos se verifican
                  contra reglas de negocio. ¿El CUIT tiene el dígito verificador
                  correcto? ¿El CAE tiene el formato válido? ¿Los importes suman
                  correctamente?
                </li>
              </ol>

              <p>
                La diferencia entre un OCR genérico y uno especializado está
                principalmente en las etapas 4 y 5. Un OCR genérico te da texto
                plano. Uno especializado te da datos estructurados y validados.
              </p>

              <h2>Qué hace Luvant Lens diferente</h2>

              <p>
                <Link
                  href="/productos/lens"
                  className="text-white underline decoration-luvant-700 underline-offset-4 transition-colors hover:decoration-white"
                >
                  Luvant Lens
                </Link>{" "}
                es nuestra plataforma de procesamiento de documentos, diseñada
                desde el inicio para documentos en español y con foco en el
                mercado argentino. Estas son las decisiones técnicas que tomamos
                para resolver los desafíos que describimos:
              </p>

              <ul>
                <li>
                  <strong>Modelos entrenados con documentos locales</strong>:
                  nuestros modelos fueron entrenados con miles de facturas AFIP,
                  remitos y comprobantes argentinos. Reconocen las convenciones
                  locales de formato de números, fechas y direcciones.
                </li>
                <li>
                  <strong>Diccionario de campos AFIP</strong>: el sistema conoce
                  la estructura de una factura electrónica argentina y sabe
                  buscar los campos obligatorios aunque cambien de posición
                  entre un proveedor y otro.
                </li>
                <li>
                  <strong>Validación integrada</strong>: cada CUIT extraído se
                  valida con el algoritmo de dígito verificador. Cada CAE se
                  verifica en formato y longitud. Los importes se cruzan para
                  detectar inconsistencias.
                </li>
                <li>
                  <strong>API REST simple</strong>: Lens se integra con
                  cualquier sistema mediante una API REST estándar. Enviás el
                  documento, recibís los datos estructurados en JSON. Sin SDKs
                  complicados ni dependencias pesadas.
                </li>
                <li>
                  <strong>Mejora continua</strong>: el sistema aprende de las
                  correcciones. Cuando un operador marca un campo como
                  incorrecto, esa corrección se usa para mejorar el modelo en
                  futuras ejecuciones.
                </li>
              </ul>

              <h2>Resultados reales</h2>

              <p>Seamos transparentes con lo que podés esperar:</p>

              <ul>
                <li>
                  <strong>Facturas electrónicas AFIP</strong>: precisión
                  superior al 97% en campos estructurados (CUIT, importes,
                  fechas, CAE). El 3% restante suele ser por PDFs con problemas
                  de generación o formatos muy atípicos.
                </li>
                <li>
                  <strong>Remitos impresos</strong>: precisión del 90-95% en
                  campos principales. Los remitos manuscritos o de muy baja
                  calidad de escaneo tienen menor precisión.
                </li>
                <li>
                  <strong>Tickets térmicos</strong>: precisión del 85-95%,
                  dependiendo del estado del ticket y la resolución del escaneo.
                </li>
              </ul>

              <p>
                Estos números no son del primer día. Son los que se alcanzan
                después del período de calibración inicial, donde el sistema se
                ajusta a los documentos específicos de cada cliente.
              </p>

              <h2>Cuándo tiene sentido usar OCR especializado</h2>

              <p>
                No toda empresa necesita OCR. Tiene sentido invertir en
                procesamiento automático de documentos cuando:
              </p>

              <ul>
                <li>Procesás más de 20-30 documentos por día manualmente.</li>
                <li>
                  Los errores de carga manual te generan problemas contables o
                  de gestión.
                </li>
                <li>
                  Necesitás que los datos estén en tu sistema en tiempo real, no
                  al final del día.
                </li>
                <li>
                  Tu equipo administrativo dedica una parte significativa de su
                  tiempo a carga de datos.
                </li>
              </ul>

              <p>
                Si procesás menos de 10 documentos por día, la carga manual
                probablemente sea suficiente. El ROI de automatizar aparece
                cuando el volumen justifica la inversión inicial en integración
                y calibración.
              </p>

              <h2>Cómo empezar</h2>

              <p>
                Si querés evaluar cómo funcionaría Lens con tus documentos, el
                proceso es simple:
              </p>

              <ol>
                <li>
                  Nos enviás 10-20 documentos representativos (facturas de tus
                  principales proveedores, remitos que recibís habitualmente).
                </li>
                <li>
                  Los procesamos con Lens y te mostramos los resultados: qué
                  datos extrajo, con qué precisión, y dónde hay oportunidades de
                  mejora.
                </li>
                <li>
                  Si los resultados tienen sentido para tu operación, diseñamos
                  la integración con tus sistemas existentes.
                </li>
              </ol>

              <p>
                No hay compromiso en la evaluación inicial. Si los resultados no
                te convencen, no avanzamos.{" "}
                <Link
                  href="/contacto"
                  className="text-white underline decoration-luvant-700 underline-offset-4 transition-colors hover:decoration-white"
                >
                  Escribinos
                </Link>{" "}
                y coordinamos una prueba con tus documentos.
              </p>
            </article>

            {/* Article footer */}
            <div className="mx-auto mt-16 max-w-3xl border-t border-white/[0.06] pt-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href="/blog/que-es-una-api-y-por-que-importa"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-luvant-500 transition-colors hover:text-white"
                >
                  <ArrowLeft size={12} />
                  Anterior: Qué es una API y por qué le importa a tu negocio
                </Link>
                <Link
                  href="/blog/senales-de-que-necesitas-automatizar"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-luvant-500 transition-colors hover:text-white"
                >
                  Siguiente: 5 señales de que necesitás automatizar
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
                      Te mostramos cómo procesa tus documentos reales, sin
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
