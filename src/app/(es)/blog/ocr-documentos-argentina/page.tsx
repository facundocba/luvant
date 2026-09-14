import type { Metadata } from "next";
import Link from "next/link";
import Article from "@/components/paper/Article";
import { JsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "OCR para documentos argentinos: desafíos y soluciones",
  description:
    "Procesar facturas AFIP, remitos con formato libre y comprobantes con CUIT requiere OCR entrenado para las particularidades locales. Así lo resolvemos.",
  alternates: {
    canonical: "/blog/ocr-documentos-argentina",
  },
  openGraph: {
    title: "OCR para documentos argentinos: desafíos y soluciones",
    description:
      "Cómo procesar facturas AFIP, remitos y comprobantes con las particularidades del mercado argentino.",
    type: "article",
    publishedTime: "2026-02-22T00:00:00-03:00",
    authors: ["Luvant"],
    images: [{ url: "/og/blog.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OCR para documentos argentinos: desafíos y soluciones",
    description:
      "Cómo procesar facturas AFIP, remitos y comprobantes con las particularidades del mercado argentino.",
    images: ["/og/blog.png"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "OCR para documentos argentinos: desafíos y soluciones",
  description:
    "Procesar facturas AFIP, remitos con formato libre y comprobantes con CUIT requiere OCR entrenado para las particularidades locales.",
  image: "https://luvant.com.ar/og/blog.png",
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
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Article
        category="Guía práctica"
        date="Febrero 2026"
        readTime="8 min de lectura"
        title="OCR para documentos argentinos: desafíos y soluciones"
        intro="Procesar facturas AFIP, remitos con formato libre y comprobantes con CUIT requiere OCR entrenado para las particularidades locales. Así lo resolvemos."
        related={{
          label: "Luvant Lens",
          href: "/productos/lens",
          text: "Si tenés miles de documentos que hay que leer, ordenar y buscar, es Luvant Lens.",
        }}
      >
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
          específicos y cómo los resolvemos cuando armamos una{" "}
          <Link href="/servicios/automatizacion-con-ia">
            automatización con IA
          </Link>{" "}
          que lee documentos.
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

        <h2>Cómo lo resolvemos</h2>

        <p>
          No con un OCR genérico ni con un modelo mágico: con tres cosas
          puestas en orden.
        </p>

        <ul>
          <li>
            <strong>OCR solo cuando hace falta.</strong> Si el PDF ya
            tiene texto, se usa ese texto. Si es un escaneo, pasa por OCR
            y se controla la calidad página por página.
          </li>
          <li>
            <strong>Lectura del contenido, no de la posición.</strong> Un
            modelo de lenguaje lee el documento como lo leería una
            persona: busca el CUIT, el total, la fecha y el CAE donde
            estén, aunque cada proveedor los ponga en otro lado.
          </li>
          <li>
            <strong>Validaciones que no dependen del modelo.</strong> El
            dígito verificador del CUIT, el formato del CAE y la suma de
            los importes se controlan con reglas fijas. Si algo no
            cierra, el documento queda marcado para revisar en vez de
            cargarse mal.
          </li>
          <li>
            <strong>Conectado a tu sistema.</strong> Lo leído se carga en
            el contable o la planilla que ya usás, y llega un aviso si
            quedó algo para mirar.
          </li>
        </ul>

        <h2>Qué esperar</h2>

        <p>
          Las facturas electrónicas y los documentos con formato estable
          se leen casi siempre completos. Los remitos impresos y los
          tickets térmicos dependen del estado del papel y del escaneo:
          lo que sale mal se marca, no se inventa. Las primeras semanas
          se revisa más; después, lo que llega a revisión es la
          excepción.
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
          Si querés evaluar cómo funcionaría con tus documentos, el
          proceso es simple:
        </p>

        <ol>
          <li>
            Nos enviás 10-20 documentos representativos (facturas de tus
            principales proveedores, remitos que recibís habitualmente).
          </li>
          <li>
            Los procesamos y te mostramos qué datos sacó, qué dejó para
            revisar y dónde hay oportunidades de mejora.
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
          >
            Escribinos
          </Link>{" "}
          y coordinamos una prueba con tus documentos.
        </p>
      </Article>
    </>
  );
}
