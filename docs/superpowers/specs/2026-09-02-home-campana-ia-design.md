# Home de Luvant como expediente, apuntada a la campaña de IA

Fecha: 2 de septiembre de 2026. Estado: **descartada por Facundo el mismo día** ("es igual que lo que ya veíamos"). Se conserva como referencia de copy y de estándares. En el mismo canvas se presentaron tres enfoques nuevos, fuera del lenguaje de papel: A "La lupa" (la IA leyendo una factura, scrollytelling), B "El diagnóstico" (cinco preguntas que devuelven un plano, la recomendada) y C "Precio a la vista" (precios publicados y calculadora). El enfoque elegido tendrá su propia spec.

Canvas con la propuesta visual (escritorio, móvil y dos alternativas de hero): ver el enlace en la conversación donde se presentó este documento.

## 1. Lectura de diseño

Rediseño de la home de luvant.com.ar en el lenguaje "El expediente" (dirección I, intensidad alta), compuesto para que funcione como página de aterrizaje de una campaña de inteligencia artificial para pymes y municipios de Argentina.

- Página: home de agencia de software, que además recibe tráfico pago.
- Audiencia: dueño o administrativo de una pyme, o responsable de área en un municipio, que busca "inteligencia artificial para empresas" y desconfía del humo.
- Lenguaje: papel, tipeado y a mano. Familjen Grotesk para lo dicho, Courier Prime para lo anotado, Caveat en birome para lo escrito a mano.
- Diales: variación 8, movimiento 5, densidad 4. Un solo tema (papel claro). No hay modo oscuro: la página emula un objeto impreso y el fondo cartón es la marca.

## 2. Decisiones

1. **La carátula es el hero y el formulario es la carátula.** Los campos tipeados sobre la foja son la conversión. No hay widget de formulario aparte ni captura de pantalla falsa.
2. **Un solo CTA en toda la página, con el mismo texto siempre:** "Probar con 5 documentos". La nav no lleva botón: "Contacto" ya es un enlace y un botón "Hablemos" duplicaría la intención.
3. **La oferta es la de /lp/facturas, generalizada:** mandá 5 documentos reales, te devolvemos los datos extraídos y un plano de dónde entra la IA en tu proceso. Califica sola al que tiene el problema.
4. **El sello dice "SIN HUMO".** Es el reclamo de campaña contra el discurso de IA. Si resulta poco serio, se vuelve a "SIN TRÁMITE" cambiando una prop.
5. **No se inventa escala.** Los números del Anexo I siguen siendo la cuenta a la vista (400 facturas × 4 min). Todo dato que no tenemos va entre corchetes para que Facundo lo complete.
6. **Seis tramos, cinco familias de layout.** Nada de pila de secciones del mismo peso: manda la carátula, después el plano, y el resto es anexo.
7. **La versión EN sigue congelada.** El copy nuevo vive en un módulo aparte para no tocar la interfaz `Dictionary`.

## 3. Estructura y copy final

### Nav
Una línea, 76 px, sobre el cartón, sin píldora ni desenfoque. Logo cuadrado + LUVANT a la izquierda. Enlaces a la derecha con las etiquetas actuales, sin cambios: Productos, Servicios, Nosotros, Blog, Contacto. Conmutador "EN" en Courier al final. Sin botón.

### Carátula (hero)
Grilla 236 px de marginalia + pila de tres fojas. La foja principal rota −0,35°, con fibra y una mancha de humedad. Clip metálico pisando el borde. El sello cae a los 1,15 s sobre la esquina inferior izquierda, pisando foja y cartón.

Marginalia (Courier):
- "IA aplicada a procesos administrativos. Córdoba, Argentina."
- "Esto no es un chat. Es el paso de tu proceso que hoy hace una persona, hecho por un programa que lee y entiende documentos."
- "Lo probás con tus papeles, no con un ejemplo nuestro."
- Birome: "sin humo, con tus papeles"
- Al pie, con filete: "Nuestro primer expediente fue la Municipalidad de Embalse, Córdoba."

Foja:
- Encabezado: "Carátula" / "Fs. 1".
- H1 (60 px, tres líneas fijas): "Inteligencia artificial / para lo que hoy / se tipea a mano."
- Bajada (Courier 13,5 px, 18 palabras): "Lee tus documentos, carga los datos en el sistema que ya usás y avisa cuando algo no cierra."
- Nota: "Facturas de proveedores, remitos, formularios, reclamos, mails con la misma pregunta de siempre. Todo lo que hoy alguien lee y tipea."
- Formulario (400 px a la derecha): Nombre, Email de trabajo, "Qué entra hoy a mano" (select: Facturas de proveedores / Remitos y órdenes / Formularios o expedientes / Consultas por mail o WhatsApp / Otra cosa). Botón tinta "Probar con 5 documentos". Nota al pie: "Sin costo. Te escribimos para que nos pases los documentos; se usan sólo para la prueba y se borran al terminar."

### Anexo I: la traza
Marginalia + foja con el componente `Traza` existente. Cambia sólo el rótulo del paso automatizado: "LA IA LEE Y VALIDA". Título de foja sin raya: "Anexo I · Recorrido de una factura de proveedor".

Marginalia: las tres notas de la landing, más la frase grande "Acá es donde entra la IA." y la nota "No en un chat: en el paso que hoy te cuesta horas. Lee, valida contra tu sistema y carga. Si algo no cierra, lo marca y sigue."

### Anexo II: tres recorridos
Foja ancha, rotada 0,25°. H2: "Tres lugares donde la IA hace el trabajo pesado." Bajada: "La línea verde es lo que hace el programa. La punteada roja, lo único que sigue pasando por una persona."

Tres filas (título + Courier a la izquierda, traza corta a la derecha), sin filetes entre filas:
1. **Documentos que entran.** "Facturas, remitos, formularios, notas. La IA los lee, valida contra tu sistema y carga los datos. Una persona revisa sólo lo que quedó marcado como dudoso." Traza: recta verde con nodo "LA IA LEE Y VALIDA" y rama roja punteada a "una persona revisa sólo lo dudoso".
2. **Consultas que se repiten.** "Mails y WhatsApp con la misma pregunta: en qué está mi pedido, mi trámite, mi factura. La IA responde con datos de tu sistema y deriva lo que no sabe." Traza: recta verde con un lazo hacia "consulta tu sistema" y rama roja "lo que no sabe, a una persona".
3. **Expedientes que hay que clasificar y derivar.** "Reclamos, notas, solicitudes. La IA lee de qué se trata, completa los datos y lo manda al área que corresponde. Lo que no entiende, lo deja para alguien." Traza: nodo "LA IA CLASIFICA" que se abre en tres ramas verdes (Obras, Rentas, Mesa de entradas) y una roja "lo que no entiende, a una persona".

La forma de cada traza describe el problema: una recta, un ida y vuelta, una derivación.

### Antecedentes: el caso
Foto adjunta al expediente (rotada −2°, con clip) a la izquierda; a la derecha el H2 "Nuestro primer expediente fue la Municipalidad de Embalse, Córdoba." con dos líneas en corchetes para completar, la birome "hablás con el que lo construyó" y el enlace "Más sobre Luvant" a /nosotros.

### Constancia: antes de que preguntes
H2 "Antes de que preguntes." y un acta de cinco cláusulas numeradas (numeral 56 px en tinta apagada, afirmación 19 px, letra chica en Courier):
1. Precio cerrado antes de empezar. No cobramos por hora. Si el alcance cambia, lo hablamos antes, no en la factura.
2. Andando en [N] semanas. Primero una prueba con tus documentos reales, después la puesta en marcha con tu equipo.
3. Funciona con el sistema que ya usás. Tango, Xubio, Colppy, Bejerman, una planilla. Si no se puede conectar, te lo decimos antes de cobrarte nada.
4. Hablás directo con el que lo construye. Sin gerente de cuenta en el medio. La persona que te responde el mail es la que escribe el código.
5. Tus documentos no salen de donde vos decidas. Los de la prueba se borran cuando termina. En producción, todo corre donde vos elijas y nadie más accede.

### Cierre
Bloque en tinta (única inversión de color de la página, la misma que usa /lp/facturas). H2 "Mandá 5 documentos y mirá qué hace." Bajada: "Sin costo, sin reunión previa, sin compromiso. Te devolvemos los datos extraídos y un plano de dónde entra la IA en tu proceso." Botón cartón "Probar con 5 documentos" que ancla al formulario de la carátula, botón "Escribir por WhatsApp" (sólo si hay número) y el mail. A la derecha, la firma en birome "F. Córdoba" con "Facundo Córdoba · Luvant" tipeado debajo. La firma es opcional: cierra el expediente una persona.

### Pie
Sobre el cartón, con filete superior: logo y una línea en Courier; los cinco enlaces de la nav; abajo el copyright y el mail. Los grupos de enlaces del footer actual se conservan en el componente compartido; en la home se muestran compactados en una fila.

## 4. Móvil (menos de 1024 px)

- Se apagan: margen de encuadernación, perforaciones, pila de fojas, rotaciones y líneas de llamada.
- La foja va de borde a borde con 16 px de aire; la marginalia baja debajo de la carátula como tres notas cortas.
- H1 a 38 px sin cortes fijos; formulario apilado con campos de 46 px y botón de 52 px; el sello queda, más chico, pisando la esquina.
- La traza escala por viewBox; los rótulos suben a 13 px para leerse sin zoom.
- Anexo II: título, texto y traza apilados, una foja por recorrido.

## 5. Componentes

Se reutilizan sin cambios: `FiltrosPapel`, `Fibra`, `Manchas`, `Clip`, `Perforaciones`, `MargenEncuadernado` (Materia), `Traza` y `Sello`, y las clases `pp-*` de globals.css.

Nuevos, todos en `src/components/papel/` salvo indicación:
- `NavPapel` y `FooterPapel`: variantes de Navbar y Footer para `data-tema="papel"`. Mismas etiquetas y rutas; sin botón en la nav. Se puede resolver como rama dentro de los componentes actuales leyendo un prop `tema`.
- `FormPrueba`: generalización de `FormFacturas` (campos Nombre, Email, "Qué entra hoy a mano"). POST al mismo `/api/contact.php`, `services: ["IA aplicada (home)"]`, evento `lead_ia` al dataLayer con la dimensión `entra_a_mano`, redirección a `/lp/gracias`. Honeypot, estados de carga y error como en el original, más foco al error y `spellCheck={false}` en el email.
- `TrazaCorta`: tres formas (`recta`, `idaVuelta`, `derivacion`) con etiquetas por props. SVG con `role="img"` y `aria-label`.
- `FotoAdjunta`: montura de papel con clip; recibe la imagen o muestra el hueco con el rótulo entre corchetes.
- `Acta`: lista numerada de cláusulas.
- `Cierre`: bloque en tinta con CTA, WhatsApp condicional, mail y firma.

Copy: `src/lib/copy/home-ia.ts`, módulo propio con los textos y el bloque `DATOS` (semanas, WhatsApp, email), sin tocar `Dictionary`.

## 6. Implementación técnica

- La ruta sigue siendo `/` en `src/app/(es)/page.tsx`. Se conservan metadata, `alternates`, JSON-LD de Organization, ProfessionalService y WebSite, sitemap y opengraph. Único cambio de SEO propuesto, a confirmar: sumar "inteligencia artificial aplicada" al `title` y `description` de la home.
- El layout `(es)` hoy sólo carga Geist. Hay que cargar Familjen Grotesk, Courier Prime y Caveat con `next/font/google` (como en el layout `(lp)`) y agregar sus variables al `<html>`. El resto de las páginas oscuras no se ven afectadas: los tokens `papel` sólo actúan bajo `data-tema="papel"`.
- La home marca `<main data-tema="papel">`. `themeColor` de la home pasa a `#e7dfc9`.
- La animación del sello y de la traza se dispara con `useInView` (ya resuelto en `Traza` y `Sello`). La foja del hero se asienta con un keyframe CSS de 0,7 s al cargar. Todo bajo `prefers-reduced-motion`.
- Sin dependencias nuevas. `framer-motion` ya está; no se agregan GSAP ni librerías de íconos: los tres íconos de la página (flecha, caret, menú) son trazos de 2 px inline, como en la landing.

## 7. Estándares que la home tiene que cumplir

Del pre-vuelo de las guías de diseño aplicadas a esta propuesta:
- Hero dentro del viewport: H1 de tres líneas, bajada de 18 palabras, CTA visible sin scroll a 1440×900.
- Cero rayas largas ("—") en todo el texto visible. Punto medio racionado a uno por línea, salvo los rótulos de la traza que ya existen.
- Una sola etiqueta mono en mayúsculas por foja (el título del anexo), ninguna arriba de secciones sin foja.
- Un solo CTA de la misma intención en toda la página; el texto del botón entra en una línea.
- Contraste: tinta `#1e2a23` sobre foja `#fdfcf7` y sobre cartón `#e7dfc9`, cartón sobre tinta en el cierre. El gris de las anotaciones `#4a554d` sobre foja supera 7:1; el `#8a8272` se usa sólo en rótulos de 9,5 px en mayúsculas y en el numeral decorativo del acta, nunca en texto que haya que leer.
- Formularios con label arriba, sin placeholder como label, error debajo del campo, botón habilitado hasta enviar.
- Ninguna sección de layout repetido: carátula con formulario, margen y plano, foja ancha con filas, foto y constancia, acta numerada, cierre en tinta.
- Sin capturas falsas, sin tarjetas de tres columnas, sin píldoras, sin eyebrow sobre cada sección, sin números redondos inventados.

De la auditoría del código actual contra las Web Interface Guidelines de Vercel, lo que hay que corregir en componentes compartidos al implementar la home:
- `globals.css:37` `scroll-behavior: smooth` sólo bajo `prefers-reduced-motion: no-preference`.
- `globals.css` declarar `color-scheme: dark` en `body` y `color-scheme: light` bajo `body:has([data-tema="papel"])`.
- `globals.css:293` `.pp-campo:focus` pasa a `:focus-visible`.
- `globals.css` `touch-action: manipulation` y `-webkit-tap-highlight-color` en `a, button`.
- `(es)/page.tsx` skip-link "Saltar al contenido" antes de la nav, visible sólo con foco.
- `MobileMenu.tsx` cerrar con Escape, mover el foco al abrir y cerrar, `overscroll-behavior: contain`, `env(safe-area-inset-*)`.
- `Navbar.tsx:25-29` reemplazar el listener de scroll por `useScroll` de framer-motion o un `IntersectionObserver`.
- Toda animación de framer-motion bajo `MotionConfig reducedMotion="user"` en el layout.
- `Footer.tsx:29,48,67` los títulos de grupo bajan de `h4` a `h3` o dejan de ser heading.
- `LanguageSwitcher.tsx` `aria-current` en el idioma activo.
- `FormFacturas.tsx` `spellCheck={false}` en email, `autoComplete` en "sistema", foco al mensaje de error, indicador de carga junto a "Enviando…".
- Nombres de sistemas (Tango, Xubio, Colppy, Bejerman) con `translate="no"`.

Lo que ya está bien y no se toca: la secuencia `pp-*` bajo reduced motion, los SVG decorativos con `aria-hidden`, los diagramas con `role="img"` y `aria-label`, inputs no controlados con `FormData`, honeypot, mensajes de error con paso siguiente.

## 8. Ajuste a la campaña

- Búsquedas objetivo: "inteligencia artificial para empresas", "automatizar con inteligencia artificial", "implementar IA en mi empresa", "IA para pymes", "consultoría inteligencia artificial argentina".
- Message match: el H1 repite "inteligencia artificial" y le pega el dolor concreto ("lo que hoy se tipea a mano"). El anuncio tiene que decir lo mismo.
- Negativas mínimas: curso, gratis, chatgpt, qué es, imágenes, generar, carrera, empleo, prompt.
- Conversión: evento `lead_ia` al dataLayer. Falta configurar el tag de conversión en GTM antes de gastar, igual que con `lead_facturas`.
- Si la campaña lo justifica, se deriva una landing sin salidas `/lp/ia` (noindex) con carátula, Anexo I y cierre: es recortar esta home, no diseñar otra.

## 9. Datos que Facundo tiene que dar

- Semanas reales de puesta en marcha (cláusula 2 del acta).
- Qué se automatizó en Embalse, desde cuándo y qué volumen (Antecedentes).
- Una foto real (la Municipalidad de Embalse u otra del trabajo).
- Número de WhatsApp. Sin número, el botón del cierre no se renderiza.
- Si firma como F. Córdoba o cierra con Luvant a secas.
- Si el sello dice "SIN HUMO" o "SIN TRÁMITE".

## 10. Fuera de alcance

Las demás páginas (servicios, productos, nosotros, blog, contacto) siguen en oscuro hasta la próxima tanda. La versión EN no cambia. No se tocan rutas, sitemap ni datos estructurados.

## 11. Próximo paso

Con la propuesta aprobada (y la alternativa de hero elegida, si no es la principal), se escribe el plan de implementación por tareas: fuentes en el layout, componentes nuevos, formulario y evento, correcciones de estándares en componentes compartidos, y verificación en escritorio y móvil.
