import type { Metadata } from "next";
import Link from "next/link";
import Article from "@/components/paper/Article";
import { JsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Cómo elegir un proveedor de desarrollo de software",
  description:
    "Qué preguntar, qué pedir como prueba y qué señales de alerta buscar antes de contratar a alguien para construir software para tu empresa.",
  alternates: {
    canonical: "/blog/elegir-proveedor-desarrollo-software",
  },
  openGraph: {
    title: "Cómo elegir un proveedor de desarrollo de software",
    description:
      "Guía práctica para evaluar y contratar proveedores de desarrollo. Qué preguntar y qué señales de alerta buscar.",
    type: "article",
    publishedTime: "2026-02-25T00:00:00-03:00",
    authors: ["Luvant"],
    images: [{ url: "/og/blog.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo elegir un proveedor de desarrollo de software",
    description:
      "Guía práctica para evaluar y contratar proveedores de desarrollo. Qué preguntar y qué señales de alerta buscar.",
    images: ["/og/blog.png"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cómo elegir un proveedor de desarrollo de software",
  description:
    "Qué preguntar, qué pedir como prueba y qué señales de alerta buscar antes de contratar a alguien para construir software para tu empresa.",
  image: "https://luvant.com.ar/og/blog.png",
  datePublished: "2026-02-25T00:00:00-03:00",
  dateModified: "2026-02-25T00:00:00-03:00",
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
    "@id": "https://luvant.com.ar/blog/elegir-proveedor-desarrollo-software",
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
      name: "Cómo elegir un proveedor de desarrollo de software",
      item: "https://luvant.com.ar/blog/elegir-proveedor-desarrollo-software",
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
        title="Cómo elegir un proveedor de desarrollo de software"
        intro="Qué preguntar, qué pedir como prueba y qué señales de alerta buscar antes de contratar a alguien para construir software para tu empresa."
        related={{
          label: "Software a medida",
          href: "/servicios/desarrollo-software-a-medida",
          text: "Si ya sabés qué necesitás y estás eligiendo a quién pedírselo, es la ficha 01.",
        }}
      >
        <p>
          Elegir quién va a construir software para tu empresa es una
          decisión importante. No es como comprar un producto terminado:
          estás eligiendo a alguien que va a entender tu problema, diseñar
          una solución y construirla. Si la elección es mala, el resultado
          puede ser meses de trabajo perdido y un sistema que no resuelve
          lo que necesitás.
        </p>

        <p>
          Este artículo es una guía práctica de qué evaluar, qué preguntar
          y qué señales de alerta buscar. Aplica tanto si estás
          contratando un freelancer como una empresa de desarrollo.
        </p>

        <h2>Antes de buscar: definí qué necesitás</h2>

        <p>
          El error más común no es elegir mal al proveedor, sino empezar a
          buscar sin tener claro qué necesitás. No hace falta que tengas
          un documento de requerimientos de 50 páginas, pero sí que puedas
          responder estas preguntas:
        </p>

        <ul>
          <li>
            <strong>¿Qué problema estás resolviendo?</strong> No
            &ldquo;necesito una app&rdquo;, sino &ldquo;mi equipo pierde 3
            horas por día cargando datos manualmente&rdquo;.
          </li>
          <li>
            <strong>¿Quién va a usar el sistema?</strong> ¿Empleados
            internos? ¿Clientes? ¿Ambos? El usuario final define muchas
            decisiones de diseño.
          </li>
          <li>
            <strong>
              ¿Con qué sistemas existentes tiene que funcionar?
            </strong>{" "}
            Si necesitás que se integre con tu ERP o tu sistema contable,
            eso hay que saberlo desde el inicio.
          </li>
          <li>
            <strong>¿Cuál es tu presupuesto aproximado?</strong> No
            necesitás un número exacto, pero saber si tu presupuesto es de
            $5.000 o de $50.000 USD cambia completamente el alcance
            posible.
          </li>
        </ul>

        <p>
          Si no tenés respuestas claras para esto, considerá primero una{" "}
          <Link
            href="/servicios/desarrollo-software-a-medida"
          >
            consultoría técnica
          </Link>{" "}
          antes de arrancar con el desarrollo. Es mejor invertir en
          entender bien el problema que construir la solución equivocada.
        </p>

        <h2>Qué preguntar en las primeras conversaciones</h2>

        <p>
          Cuando ya tenés candidatos, estas preguntas te van a ayudar a
          evaluar si son la opción correcta:
        </p>

        <h3>Sobre su experiencia</h3>

        <ul>
          <li>
            <strong>&ldquo;¿Hicieron algo similar antes?&rdquo;</strong>{" "}
            No necesitan haber hecho exactamente lo mismo, pero
            experiencia en el dominio (tu industria o tipo de problema) es
            un gran plus.
          </li>
          <li>
            <strong>
              &ldquo;¿Puedo ver ejemplos de proyectos anteriores?&rdquo;
            </strong>{" "}
            Un proveedor serio tiene un portfolio o, como mínimo, puede
            describir casos de uso (aunque no pueda mostrar el código por
            confidencialidad).
          </li>
          <li>
            <strong>
              &ldquo;¿Puedo hablar con un cliente anterior?&rdquo;
            </strong>{" "}
            Esta es la mejor referencia posible. Si se niegan o no tienen
            a quién ofrecer, es una señal de alerta.
          </li>
        </ul>

        <h3>Sobre su proceso</h3>

        <ul>
          <li>
            <strong>&ldquo;¿Cómo trabajan?&rdquo;</strong> Buscá que
            puedan explicar su proceso en términos simples. Si usan
            metodologías ágiles, tiene que haber entregas parciales que
            puedas ver y probar, no un &ldquo;gran reveal&rdquo; al final.
          </li>
          <li>
            <strong>&ldquo;¿Cada cuánto voy a ver avances?&rdquo;</strong>{" "}
            Una buena respuesta es cada 1-2 semanas. Si te dicen &ldquo;en
            3 meses te mostramos el producto terminado&rdquo;, desconfiá.
          </li>
          <li>
            <strong>
              &ldquo;¿Qué pasa si a mitad de camino necesito cambiar
              algo?&rdquo;
            </strong>{" "}
            Los cambios son inevitables. Buscá un proveedor que los maneje
            con naturalidad, no que te cobre extra por cada modificación
            menor.
          </li>
        </ul>

        <h3>Sobre la propiedad y el mantenimiento</h3>

        <ul>
          <li>
            <strong>&ldquo;¿El código es mío?&rdquo;</strong> La respuesta
            tiene que ser sí, sin ambigüedades. Vos pagás por el
            desarrollo, el código fuente es tuyo.
          </li>
          <li>
            <strong>
              &ldquo;¿Qué pasa si después quiero que otra persona lo
              mantenga?&rdquo;
            </strong>{" "}
            Un proveedor de confianza no genera dependencia. El código
            debería estar documentado y usar tecnologías estándar que
            cualquier equipo competente pueda mantener.
          </li>
          <li>
            <strong>&ldquo;¿Ofrecen soporte post-entrega?&rdquo;</strong>{" "}
            Los primeros meses después de lanzar son críticos. Saber qué
            tipo de soporte incluye (y cuánto cuesta si es adicional) es
            importante.
          </li>
        </ul>

        <h2>Señales de alerta</h2>

        <p>
          En nuestra experiencia, estos son los red flags más confiables:
        </p>

        <ul>
          <li>
            <strong>
              Te dan un presupuesto fijo sin haber entendido bien el
              problema
            </strong>
            . Si en la primera reunión ya tienen un precio cerrado,
            probablemente no estén siendo serios con la estimación. Un
            buen proveedor necesita entender el alcance antes de
            comprometerse con un número.
          </li>
          <li>
            <strong>No hacen preguntas sobre tu negocio</strong>. Si solo
            preguntan por features y pantallas pero no por el problema que
            estás resolviendo ni quién va a usar el sistema, van a
            construir algo técnicamente funcional pero que no resuelve tu
            necesidad.
          </li>
          <li>
            <strong>Prometen plazos demasiado cortos</strong>. Si otro
            proveedor estimó 4 meses y este promete 6 semanas, no es que
            sea más rápido: es que está subestimando la complejidad o
            planea entregar algo incompleto.
          </li>
          <li>
            <strong>No tienen presencia digital verificable</strong>.
            Sitio web, LinkedIn de los fundadores, algún historial online.
            Si no encontrás nada, es difícil evaluar si son reales.
          </li>
          <li>
            <strong>Usan tecnología propietaria</strong>. Si el proveedor
            usa un framework propio o una plataforma de la que no podés
            salir, estás generando una dependencia innecesaria. Preferí
            tecnologías estándar y open source.
          </li>
        </ul>

        <h2>El precio justo</h2>

        <p>
          El costo de desarrollo de software varía enormemente según el
          alcance, la complejidad y quién lo hace. Pero hay algunos
          principios que aplican siempre:
        </p>

        <ul>
          <li>
            <strong>
              Lo más barato rara vez es lo más barato a largo plazo
            </strong>
            . Un desarrollo mal hecho genera costos de mantenimiento,
            bugs, y eventualmente la necesidad de rehacerlo desde cero.
          </li>
          <li>
            <strong>
              Un buen proveedor te ayuda a reducir el alcance
            </strong>
            . En vez de decirte &ldquo;sí a todo&rdquo;, te sugiere
            empezar por lo más importante y agregar funcionalidades
            después. Eso reduce el riesgo y el costo inicial.
          </li>
          <li>
            <strong>Pedí un desglose</strong>. Si el presupuesto es un
            solo número sin detalle, no podés evaluar si es razonable. Un
            buen presupuesto desglosa por módulo o funcionalidad.
          </li>
        </ul>

        <p>
          Desconfiá de quien te dice un precio sin haber hecho preguntas
          detalladas, y de quien acepta todo sin empujar hacia atrás en
          nada.
        </p>

        <h2>El contrato</h2>

        <p>
          Sin importar el tamaño del proyecto, tené un acuerdo escrito que
          cubra como mínimo:
        </p>

        <ol>
          <li>
            <strong>Alcance</strong>: qué se va a construir, descrito con
            suficiente detalle para que ambas partes sepan cuándo el
            trabajo está terminado.
          </li>
          <li>
            <strong>Cronograma</strong>: entregas parciales con fechas
            estimadas. No tiene que ser rígido, pero tiene que existir.
          </li>
          <li>
            <strong>Propiedad intelectual</strong>: que el código fuente y
            todos los entregables son de tu propiedad una vez pagados.
          </li>
          <li>
            <strong>Confidencialidad</strong>: especialmente si el
            proveedor va a manejar datos de tus clientes o información
            sensible de tu negocio.
          </li>
          <li>
            <strong>Condiciones de pago</strong>: pagos atados a
            entregables es lo más sano para ambas partes. Evitá pagar todo
            por adelantado.
          </li>
          <li>
            <strong>Garantía y soporte</strong>: qué pasa después de la
            entrega. Un período de garantía para corrección de bugs es
            estándar en la industria.
          </li>
        </ol>

        <h2>En resumen</h2>

        <p>
          Elegir un proveedor de desarrollo de software es elegir un socio
          para resolver un problema. El mejor proveedor no es el más
          barato ni el que tiene el sitio web más lindo: es el que
          entiende tu problema, tiene experiencia relevante, trabaja con
          transparencia y te genera confianza.
        </p>

        <p>
          Hacé las preguntas incómodas. Pedí referencias. Empezá con un
          alcance acotado. Y si algo no te cierra, confía en tu instinto.
        </p>

        <p>
          Si estás evaluando proveedores y querés una segunda opinión
          técnica,{" "}
          <Link
            href="/contacto"
          >
            escribinos
          </Link>
          . Podemos ayudarte a evaluar propuestas o a definir mejor lo que
          necesitás antes de salir a buscar.
        </p>
      </Article>
    </>
  );
}
