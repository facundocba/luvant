# Rediseño de luvant.com.ar: papel, fichas y Luvant Lens

Spec de diseño, 13 de septiembre de 2026. Reemplaza al estado del 5 de septiembre (`2026-09-05-home-estado.md`): las decisiones que ahí quedaban abiertas están tomadas acá.

Bocetos aprobados (HTML, en `.superpowers/brainstorm/943-1789315814/content/`): `home-final-v2.html` (home), `lens-papel-v2.html` (Lens), `ficha-page.html` (plantilla de las fichas, ejemplo Automatización con IA), `contacto-v2.html` (contacto y gracias). Son la referencia visual; ante duda entre este documento y el boceto, manda el boceto.

## 1. Qué vende el sitio

- La home vende Luvant entero: software a medida, automatización con IA, datos y tableros, integración de sistemas, web/e-commerce/apps, y el producto Luvant Lens. Cada cosa tiene su página propia.
- Lens se presenta como plataforma de lectura de documentos: el caso completo es la normativa de organismos (ordenanzas, decretos, resoluciones con vigencia y texto al día); la API de documentos se ofrece a integradores. Facturas y otros tipos concretos no se prometen.
- Todo en español. La versión en inglés (`src/app/(en)`) sale del build y no se publica.

## 2. Reglas de texto (no negociables)

1. Voz "nosotros". Registro de resultado: verbo en imperativo, beneficio antes que mecanismo, sin palabras de folleto ("potenciá", "solución integral", "transformá").
2. Ninguna cifra que sea una promesa de Luvant: ni propias (precio, semanas, horas ahorradas, tiempo de respuesta) ni de producto (precisión, latencia, tipos de documento). Se permiten los datos de muestra dentro de las ventanas, los números que describen la situación del cliente en las ofertas ("setenta pedidos por día", "dos días por mes cargando facturas") y "quince minutos" como duración de la llamada.
3. Las ofertas se escriben en condicional ("Si te llegan facturas… te haríamos…"), nunca como caso. El único cliente nombrado es la Municipalidad de Embalse, y solo en el sticker del hero: "Cliente · Municipalidad de Embalse · Córdoba". Sin cita, sin datos, sin foto.
4. No se usa la palabra "digesto". Se dice "normativa", "ordenanzas, decretos y resoluciones", "texto al día", "texto ordenado".
5. No se compromete canal ni plazo de respuesta: el contacto es por correo, "te escribimos para coordinar". WhatsApp aparece solo como sistema del cliente al que nos conectamos.
6. "Hablás con quien lo programa", sin nombre propio.
7. Datos de muestra en las ventanas: normas inventadas pero verosímiles (Ordenanza 1.234/2019, Decreto 456/2021, Ordenanza 1.402/2022, Ordenanza 987/2015), "tu organismo" en lugar de un nombre, "Proveedor S.A." y "Distribuidora Norte" como proveedores.

## 3. Estructura y URLs

Las URLs indexadas se conservan; lo que desaparece se redirige con 301 en `.htaccess`, antes de las reglas que sirven `out/`.

| Página | URL | Acción |
|---|---|---|
| Home | `/` | Rediseño completo |
| Software a medida | `/servicios/desarrollo-software-a-medida` | Se conserva; plantilla de ficha |
| Automatización con IA | `/servicios/automatizacion-con-ia` | Nueva; `/servicios/automatizacion-de-procesos` → 301 |
| Datos y tableros | `/servicios/datos-y-tableros` | Nueva |
| Integración de sistemas | `/servicios/integracion-de-sistemas` | Se conserva; plantilla de ficha |
| Web, e-commerce y apps | `/servicios/web-ecommerce-y-apps` | Nueva |
| Consultoría técnica | `/servicios/consultoria-tecnica` | 301 → software a medida |
| Luvant Lens | `/productos/lens` | Se conserva; página nueva |
| Productos | `/productos` | 301 → `/productos/lens` |
| Nosotros | `/nosotros` | 301 → `/` |
| Contacto | `/contacto`, `/contacto/gracias` | Formulario nuevo; gracias nueva |
| Blog | `/blog`, `/blog/<slug>` | Se conservan los seis artículos; piel nueva; correcciones (§7.6) |
| Landing facturas | `/lp/facturas`, `/lp/gracias` | Sin cambios; sigue `noindex` |

Se eliminan del repo: `src/app/(preview)/`, `src/components/preview/`, `public/preview/` (24 fotos), `src/app/(en)/` (se mueve a `src/_unused/en/` fuera de `app/` y esa carpeta se agrega a `exclude` en `tsconfig.json` para que el build no la compile; `src/lib/i18n/` queda intacto; si en un mes nadie lo pide, se borra).

Nav: **Qué hacemos** (desplegable: las cinco fichas y Lens) · **Luvant Lens** · **Blog** · **Contacto** · botón "Pedí tu presupuesto →". En móvil, menú de pantalla completa sobre foja con la misma lista.

Pie (cuatro columnas): marca + "Software a medida, automatizaciones con IA y Luvant Lens. Córdoba, Argentina." · Qué hacemos (cinco) · Luvant Lens (Normativa para organismos, API de documentos) · Luvant (Blog, Contacto). Línea legal: "© {año} Luvant · hola@luvant.com.ar" y "Hecho en Córdoba".

## 4. Sistema visual

**Paleta**: la `papel` de `tailwind.config.ts`: `foja #fdfcf7` (fondo), `foja-2 #f6f2e6` (fichas y bandas suaves), `carton #e7dfc9` (banda de Lens, banda de situaciones), `tinta #1e2a23` (texto, pie), `tinta-2 #4a554d` (texto secundario), `tinta-3 #8a8272` (pies en Courier), `borde #c6bda2` / `borde-suave #cfc5a8`, `rojo #b0271c`, `verde #3e6e63`. Los tokens oscuros (`#0a0a0a`, `#111`, grises) se usan solo dentro de las ventanas y la ficha de Lens.

**Reglas de color**: el rojo nunca es relleno de botón; es subrayado, número de ficha activo o la palabra final del titular. El verde es el sticker y las etiquetas. El negro existe solo como ventana del producto o ficha de Lens.

**Tipografía** (`next/font/google`, `display: swap`, ya configuradas en `src/app/(lp)/layout.tsx`; se mueven al layout raíz): Familjen Grotesk 400/500/600/700 para titulares y texto; Courier Prime 400/700 para eyebrows, pestañas, pies, migas y chips; Geist y Geist Mono solo dentro de las ventanas. Caveat se deja de cargar.

Escala en desktop: h1 home 92px / `-0.035em` / `line-height .96`; h1 fichas y Lens 76–80px; h2 40px; titulares de ficha 22px; texto 15–18px; eyebrow Courier 12px, `letter-spacing .2em`, mayúsculas. Móvil: h1 46px, h2 30px.

**Textura**: `FiltrosPapel` de `src/components/papel/Materia.tsx` se reutiliza a intensidad baja (fibra apenas visible sobre foja, sin manchas). Opcional; si cuesta rendimiento, se saca.

## 5. Componentes (`src/components/papel/`)

Todos con props tipadas; sin comentarios en el código.

- `Nav`, `Footer`: reemplazan a `layout/Navbar`, `MobileMenu` y `Footer`.
- `Subrayado`: enlace o botón con subrayado rojo (3px en `lg`/`xl`, 2px en `sm`) y flecha "→" en rojo. Prop `tone="light"` para blanco sobre negro. Hover: el subrayado se retrae y vuelve desde la izquierda.
- `Ventana`: marco negro `#0a0a0a`, radio 10px, sombra `0 30px 70px rgba(30,42,35,.30)` + borde `0 0 0 1px rgba(30,42,35,.18)`, barra con tres puntos y título en Geist Mono. Contenido: subcomponentes en `papel/ventanas/`: `Buscador` (campo, facetas, filas con chip de estado), `Norma` (ficha con pestañas y texto ordenado con `<del>`/`<ins>`), `Flujo` (pasos con check, en curso, hora), `Tablero` (KPIs + barras), `Codigo` (request/response), `Pedidos`, `Tienda`, `Sync`. Todo HTML/CSS; ninguna imagen.
- `Ficha`: papel foja con borde, pestaña superior en Courier ("Ficha 02" con el número en rojo, y un descriptor a la derecha), objeto (una `Ventana` chica o un `Objeto` dibujado), título, bajada y "ver más →". Props `rotate` (grados), `dark` (Lens: fondo negro, Geist). Hover: rotación a 0 y `translateY(-4px)`, 200ms.
- `Objeto`: los dibujos chicos de las fichas (líneas, nodos correo→lee→sistema, barras, ERP⇄WhatsApp, grilla de tienda, código). Un componente con prop `kind`.
- `Escritorio`: contenedor `relative` con altura fija en desktop; las ventanas y el sticker se posicionan por props (`left/top/width/rotate`). En `< md` se convierte en una sola ventana (la primera) que asoma por el borde derecho con el sticker encima; las demás no se renderizan.
- `Sticker`: etiqueta verde rotada `-3deg`, Courier, con línea principal en Familjen 600.
- `BandaCarton`: sección a todo el ancho sobre `carton`, con borde superior en tinta.
- `Preguntas`: tres columnas, número Courier, pregunta entre comillas angulares, respuesta.
- `Cierre`: eyebrow "Tu caso", h2, párrafo, `Subrayado xl` y pie Courier.
- `OtrasFichas`: fila de cinco tarjetas chicas (las demás fichas y Lens), rotación alternada.
- `Mesa`: la disposición de las seis fichas de la home (posiciones absolutas en desktop, columna con rotación alternada en móvil).

Lo de `src/components/sections/`, `ui/` y `animations/` que quede sin uso se borra al final (paso 8 de §12).

## 6. Movimiento

framer-motion, curva `[0.16, 1, 0.3, 1]`. Entrada: ventanas con `opacity 0→1` y `y 12→0`, escalonadas 80ms, `whileInView` con `once`. Fichas: hover enderezan y suben (§5). Subrayado: hover. Parallax: ventanas del hero se mueven a la mitad de la velocidad del scroll, amplitud máxima 24px; nada más se mueve con el scroll. Todo desactivado con `prefers-reduced-motion`. Los componentes con movimiento son `"use client"` chicos; las páginas siguen siendo server components.

## 7. Páginas y textos

Los textos viven en `src/content/` (`home.ts`, `shared.ts`, `lens.ts`, `contacto.ts`, `services/<slug>.ts`) como objetos tipados; las páginas los consumen. `src/lib/constants.ts` y `src/lib/i18n/dictionaries/es.ts` dejan de usarse para el sitio (quedan para `/lp`).

### 7.1 Bloques compartidos (`shared.ts`)

**Botón principal**: "Pedí tu presupuesto →". Pie: "Gratis, quince minutos. Salís sabiendo cuánto sale."

**Cierre** (home, fichas): eyebrow "Tu caso" · h2 "¿Qué es lo que hacés todos los días a mano?" · "Contá qué es eso que hacés todos los días a mano. Salís sabiendo si se puede, cuánto sale y en cuánto lo tenés andando. Y si no te conviene, te lo decimos ahí mismo." · botón · pie "Gratis · Quince minutos · Hablás con quien lo programa".

**Cómo trabajamos** (fichas):
1. "Quince minutos" · "Nos contás qué hacés a mano y qué usás hoy." · "Salís sabiendo si se puede, cuánto sale y cuánto tarda."
2. "Precio cerrado" · "Lo escribimos y lo probamos con tus datos reales." · "Ves cómo anda antes de que quede andando."
3. "Desde ahí" · "Queda andando y lo seguimos." · "Los primeros días lo miramos juntos."

**Qué incluye** (fichas; el primer punto cambia por página, ver cada una):
1. (propio de la página)
2. "Conectado a lo que ya usás." · "Tu correo, tu WhatsApp, tu planilla o tu sistema contable. Nada nuevo que aprender."
3. "Lo dudoso te lo pregunta." · "Cuando no está seguro, no inventa: lo deja marcado para que alguien lo mire."
4. "Precio cerrado y fecha." · "Antes de empezar sabés cuánto sale y cuándo está andando."
5. "Se queda andando." · "Si algo cambia (un proveedor nuevo, otro formato), se ajusta."

### 7.2 Home (`/`)

- Hero: h1 "Dejá de perder horas en lo mismo de **todos los días.**" (lo resaltado en rojo). Bajada: "Software a medida y automatizaciones con IA para tu empresa, tu estudio o tu organismo. Precio cerrado antes de empezar." Botón y pie compartidos, alineados a la derecha. Escritorio con tres ventanas: `Norma` (ficha de norma, 46 %, izquierda), `Flujo` "tablero · ventas" (30 %, centro, detrás), `Flujo` "automatización · facturas" (34 %, derecha); sticker "Cliente / Municipalidad de Embalse / Córdoba".
- Fichas (sobre `foja-2`): eyebrow "Qué hacemos" · h2 "Seis maneras de sacarte trabajo de encima." · "Cada una se escribe para tu operación y se enchufa a lo que ya usás." Seis fichas:
  1. "Software a medida" · "El sistema que necesitás y no existe: pedidos, turnos, stock, expedientes."
  2. "Automatización con IA" · "Correos, facturas y documentos que se leen y se cargan solos. Nadie transcribe."
  3. "Datos y tableros" · "Todas tus planillas en un tablero que se entiende de un vistazo."
  4. "Integración de sistemas" · "Tu facturación, tu ERP y tu WhatsApp hablando entre sí. Nada cargado dos veces."
  5. "Web, e-commerce y apps" · "Tu sitio, tu tienda o tu app, conectados a tu stock y tu cobro."
  6. (oscura) "Luvant Lens" · "Miles de documentos leídos y buscables. Para organismos e integradores." · "ver Lens →"
- Banda cartón de Lens: eyebrow "Producto · Luvant Lens" · h2 "Miles de documentos leídos, ordenados y buscables." · "OCR, extracción, texto ordenado con cada modificación aplicada, buscador y panel de revisión. Lo que un organismo tarda años en ordenar a mano, en semanas." · dos columnas: "Para organismos: Ordenanzas, decretos y resoluciones con su vigencia y el texto al día." / "Para integradores: API de documentos: subís un PDF, recibís los datos por webhook." · "Ver Luvant Lens →" · `Buscador` "Normativa · tu organismo" con etiqueta "Normativa al día".
- Preguntas: «¿Y si lo mío es un caso raro?» "Mejor. Las seis fichas de arriba no se parecen entre sí y ninguna le sirve a otro. La tuya tampoco se va a parecer." · «¿Tengo que cambiar lo que ya uso?» "No cambiás nada. Se enchufa a tu WhatsApp, a tu planilla o a tu sistema contable. Nadie aprende un programa nuevo." · «¿Cuánto sale y cuánto tarda?» "Te lo decimos en la primera llamada, cerrado, antes de escribir una línea. Si se complica en el medio, no lo pagás vos."
- Cierre compartido. Pie.

### 7.3 Plantilla de ficha (cinco páginas)

Orden: miga de pan (Courier: "Luvant / Qué hacemos / Nombre") · eyebrow "Ficha 0N · Nombre" · h1 · bajada · botón y pie · escritorio (ventana grande 58 % izquierda, ventana chica de resumen 44 % derecha, sticker "Precio cerrado") · **Tres situaciones** sobre cartón (eyebrow "Tres situaciones", h2 "Si te pasa alguna de estas, es para vos.", "Son ejemplos, no casos: lo que te haríamos según lo que te llega y adónde va.", tres fichas con pestaña "Si …", ventanita, título, texto) · **Qué incluye** y **Con qué se conecta** (chips Courier, la última "+ el tuyo" punteada) y **Cómo trabajamos** en dos columnas · **Tres preguntas** sobre `foja-2` · Cierre · Otras fichas · Pie.

**01 Software a medida** (`/servicios/desarrollo-software-a-medida`)
- h1 "El sistema que tu negocio necesita **y no existe.**" · "Pedidos, turnos, stock, expedientes: lo que hoy llevás en papel, en planillas o en la cabeza. Un programa escrito para cómo trabajás vos, no una plantilla que te obliga a trabajar como ella."
- Ventanas: `Pedidos` (panadería: "#1041 · Retira 12:30 · 2 kg pan, 6 medialunas · WhatsApp · Listo", …) y resumen "pedidos hoy / listos / sin retirar".
- Situaciones: "Si tomás pedidos por WhatsApp o teléfono" · "Setenta pedidos por día, y ninguno se pierde." · "Los lee, arma el pedido y lo deja en pantalla ordenado por hora de retiro. Sobre el mismo WhatsApp que ya usás." / "Si atendés con turnos" · "Los turnos se dan solos. El mostrador sigue atendiendo." · "Da el turno, lo confirma y lo recuerda el día anterior, contra tu Google Calendar de siempre." / "Si llevás expedientes o trámites" · "Cada trámite con su estado, sin preguntar en qué oficina quedó." · "Quién lo tiene, qué falta y desde cuándo, en una pantalla que ve todo el equipo."
- Incluye #1: "El programa, escrito para lo tuyo." · "No es una plantilla configurada: se escribe para cómo trabajás."
- Conexiones: Google Sheets, Excel, Google Calendar, WhatsApp Business, AFIP, Mercado Pago, impresora de tickets, lector de códigos, tu sistema contable.
- Preguntas: «¿No me conviene comprar un sistema hecho?» "Si hay uno que hace exactamente lo tuyo, sí, y te lo decimos. Los sistemas hechos sirven cuando tu negocio trabaja como ellos; cuando no, terminás trabajando para el sistema." · «¿Quién lo mantiene después?» "Nosotros. Y el código es tuyo: si algún día querés que lo siga otro, puede." · «¿Necesito servidores o licencias?» "No. Corre donde convenga (tu PC, un servidor chico, la nube) y no hay licencias por usuario."

**02 Automatización con IA** (`/servicios/automatizacion-con-ia`)
- h1 "Que los correos, las facturas y los pedidos se carguen **solos.**" · "Un programa que lee lo que te llega (correo, WhatsApp, PDF, foto), saca los datos y los carga donde vos los cargás hoy a mano. Con inteligencia artificial donde hace falta leer, y reglas fijas donde no."
- Ventanas: `Flujo` "automatización · facturas de proveedores · hoy" (correo recibido → factura leída → proveedor encontrado, asiento creado → aviso aprobado → siguiente en curso) y `Codigo` "resumen · esta semana" (documentos leídos 212 · cargados sin tocar 197 · a revisar 15).
- Situaciones: "Si te llegan facturas" · "Dos días por mes cargando facturas. Que sean cero." · "Lee cada factura que llega por correo y la carga en tu sistema contable como la cargarías vos. Sin errores de tipeo." / "Si te piden por WhatsApp" · "Setenta pedidos por WhatsApp, y ninguno se pierde." · "Lee los mensajes, arma el pedido solo y lo deja en pantalla ordenado por hora. Tu WhatsApp sigue siendo tu WhatsApp." / "Si clasificás papeles" · "Cada papel a la oficina que corresponde, sin que nadie lo lea antes." · "Lee lo que entra, dice qué es y de quién es, y lo deja en la bandeja correcta con sus datos cargados."
- Incluye #1: "El programa, escrito para tus documentos." · "No es una plantilla configurada: se escribe para tus documentos y tu sistema."
- Conexiones: Gmail, Outlook, WhatsApp Business, Google Sheets, Excel, Google Drive, AFIP, Tango, Colppy, Xubio, Mercado Pago, Tienda Nube, Google Calendar, tu sistema a medida.
- Preguntas: «¿Se equivoca?» "A veces, como una persona. La diferencia es que cuando no está seguro no adivina: lo deja marcado. Vos decidís cuánta duda tolerás." · «¿Mis datos van a parar a la IA?» "Solo el texto del documento que hay que leer, en el momento de leerlo, a un proveedor que no lo usa para entrenar ni lo guarda. Nada queda afuera." · «¿Y si cambia el formato de un proveedor?» "Lee el contenido, no la posición en la hoja: un formato nuevo casi siempre entra solo. Si no, se ajusta y listo."

**03 Datos y tableros** (`/servicios/datos-y-tableros`)
- h1 "Todos tus números en una pantalla **que se entiende.**" · "Ventas, stock, caja, cobranzas: lo que hoy está repartido en planillas, en el sistema contable y en la cabeza de alguien, junto y actualizado solo. Para mirar a la mañana y saber cómo venís."
- Ventanas: `Tablero` (ventas del mes, cobrado, stock crítico + barras por día) y `Flujo` "avisos · hoy" (3 productos bajo el mínimo · 12 facturas vencen esta semana · cierre de caja cuadró).
- Situaciones: "Si tenés varias planillas que no cierran entre sí" · "Una sola verdad, y que se arme sola." · "Lee todas, las cruza y te muestra dónde no cuadran en vez de esconderlo." / "Si querés saber cómo viene el mes sin pedirlo" · "El resumen llega solo, todas las mañanas." · "Ventas de ayer, caja, lo que vence hoy. Por correo o en una pantalla en el local." / "Si tenés sucursales o vendedores" · "Cada uno con lo suyo, vos con el total." · "Cada sucursal ve su tablero; vos ves todas juntas y comparadas."
- Incluye #1: "El tablero, armado con tus datos de verdad." · "Lee de donde ya están: planillas, sistema, tienda."
- Conexiones: Google Sheets, Excel, Tango, Colppy, Xubio, Mercado Pago, Tienda Nube, MercadoLibre, AFIP, tu base de datos, tu sistema a medida.
- Preguntas: «¿Tengo que cargar datos en otro lado?» "No. El tablero lee de donde ya están. Si algo no está en ningún lado, lo hablamos." · «¿Es Power BI o algo así?» "Puede serlo si ya lo usás. Si no, es una página tuya, sin licencias, que abre en cualquier celular." · «¿Y si los datos están sucios?» "Casi siempre lo están. Parte del trabajo es ordenarlos, y el tablero te muestra qué quedó dudoso en vez de esconderlo."

**04 Integración de sistemas** (`/servicios/integracion-de-sistemas`)
- h1 "Tus sistemas hablando entre sí. **Nada cargado dos veces.**" · "Tu tienda, tu facturación, tu WhatsApp, tu planilla: hoy alguien copia datos de uno al otro. Los conectamos para que pase solo, en el momento, sin errores de tipeo."
- Ventanas: `Sync` (Pedido #4471 Tienda Nube → factura AFIP → remito → aviso al cliente) y `Codigo` "hoy" (84 pedidos · 84 facturados · 0 a mano).
- Situaciones: "Si vendés online y facturás aparte" · "Cada venta, facturada sola." · "El pedido entra, la factura sale en AFIP y el cliente la recibe, sin que nadie tipee un CUIT." / "Si tu stock vive en dos lugares" · "Un stock, todas las bocas." · "Lo que se vende en el local se descuenta en la tienda, y al revés." / "Si pasás datos de un sistema a otro a mano" · "Lo que entra por un lado, sale por el otro." · "Del formulario al CRM, del CRM a la planilla, de la planilla al contable. Solo."
- Incluye #1: "La conexión, escrita para tus dos sistemas." · "No un conector genérico: lo que tu operación necesita que pase entre ellos."
- Conexiones: Tienda Nube, MercadoLibre, Mercado Pago, AFIP, Tango, Colppy, Xubio, WhatsApp Business, Google Sheets, Gmail, APIs propias.
- Preguntas: «¿Mi sistema tiene API?» "Casi todos los conocidos sí. Si el tuyo no, hay otras formas (archivos, base de datos, la misma pantalla) y te decimos cuál conviene." · «¿Se rompe si uno de los sistemas cambia?» "Puede pasar; por eso avisa cuando algo no cuadra en vez de seguir de largo, y lo ajustamos." · «¿Reemplaza a lo que uso?» "No. Conecta lo que ya usás; nadie cambia de sistema."

**05 Web, e-commerce y apps** (`/servicios/web-ecommerce-y-apps`)
- h1 "Tu sitio, tu tienda o tu app, **conectados a tu negocio.**" · "No una página que después nadie actualiza: un sitio o una tienda que lee tu stock, cobra, factura y te avisa. O una app interna para tu gente, que hace una sola cosa bien."
- Ventanas: `Tienda` (grilla de productos con stock real y un "sin stock" gris) y `Flujo` "pedidos · hoy" (cobrado con Mercado Pago → facturado → a preparar).
- Situaciones: "Si vendés y todavía no tenés tienda" · "Vendé mientras dormís, con el stock de verdad." · "Tienda conectada a tu stock y a tu cobro; lo que se vende se descuenta y se factura." / "Si tu equipo carga cosas desde el celular" · "Una app que hace eso, y nada más." · "Pedidos, visitas, lecturas, fotos: una pantalla por tarea, sin menús que nadie usa." / "Si tu sitio es de hace años" · "Que aparezca en Google y que cargue rápido." · "Textos, estructura y velocidad hechos para que Google lo entienda y la gente no se vaya."
- Incluye #1: "El sitio, la tienda o la app, hechos para lo tuyo." · "Con un panel simple para que cambies precios y textos sin depender de nadie."
- Conexiones: Mercado Pago, Tienda Nube, AFIP, Google Sheets, Google Maps, Instagram, WhatsApp Business, tu sistema de stock.
- Preguntas: «¿Es WordPress o Tienda Nube?» "Si te alcanza con eso, te lo decimos y te lo armamos. Si necesitás que hable con tu stock o tu facturación, es a medida." · «¿Quién lo actualiza?» "Vos, desde un panel simple, o nosotros. Sin depender de nadie para cambiar un precio." · «¿Sale en Google?» "Se hace para eso: rápido, con los textos y la estructura que Google entiende. Lo que después aparezca depende del rubro y la competencia, y te lo decimos antes."

### 7.4 Luvant Lens (`/productos/lens`)

Según `lens-papel-v2.html`.
- Eyebrow "Producto · Luvant Lens" · h1 "Dejá de buscar a mano en miles de PDFs. **Lens los lee por vos.**" · "Lee los documentos de tu organismo o tu empresa, saca lo importante y los deja buscables, con el texto al día. Lo que hoy hacés abriendo uno por uno." · botón "Pedí una demo →" · pie "Con tus propios documentos. Sin cargo." · escritorio: `Buscador` (54 %, izquierda) y `Norma` (50 %, derecha), etiqueta "Normativa al día".
- Cómo funciona (sobre cartón; h2 "De una carpeta de PDFs a un buscador con el texto al día."), cuatro fichas: "Subís los documentos" · "Una carpeta, un disco, o directo por API. Escaneados o nativos." (`Codigo`: POST /api/v1/documents) / "Lens los lee" · "OCR si hace falta; después saca número, fecha, órgano, tema y qué modifica o deroga." (`Codigo`: campos extraídos) / "Tu equipo revisa lo dudoso" · "Solo lo que Lens no está seguro llega al panel. Se confirma con un clic." (tarea Sí/No) / "Queda publicado y buscable" · "Buscador para tu gente o para el público, con el texto ordenado al día." (`Buscador` chico).
- Para quién: "Organismos y empresas con normativa propia" · "Ordenanzas, decretos, resoluciones, reglamentos internos, contratos con adendas: todo lo que se modifica con el tiempo y hay que saber qué está vigente." · chips: vigencia, texto al día, buscador público, panel de revisión, historial. / "Integradores y sistemas de gestión" · "Lens como pieza de tu sistema: mandás PDFs, recibís los datos por webhook, exportás todo cuando quieras." · chips: API REST, webhooks firmados, keys con permisos, export completo.
- Preguntas: «¿Sirve para documentos que no son normativa?» "Sí. Reglamentos internos, contratos con adendas, convenios: cualquier cosa que se modifique con el tiempo y haya que saber qué versión vale." · «¿Y si son escaneos viejos?» "Lens los pasa por OCR primero. Si una página sale mal, lo marca para que alguien la mire; no inventa." · «¿Dónde quedan mis documentos?» "Donde vos digas: en tu servidor o en el nuestro. Podés exportar todo, cuando quieras, en un solo archivo."
- Cierre: eyebrow "Tu caso" · h2 "¿Cuántos documentos tenés sin leer?" · "Mandanos una muestra. Te mostramos cómo quedan leídos, ordenados y buscables, y te decimos cuánto sale para el total." · "Pedí una demo →" (lleva a `/contacto?tema=lens`) · pie "Con tus propios documentos · Sin cargo · Hablás con quien lo programa".

### 7.5 Contacto (`/contacto`) y gracias (`/contacto/gracias`)

Según `contacto-v2.html`. Izquierda: eyebrow "Tu caso" · h1 "¿Qué es lo que hacés todos los días **a mano?**" · "Contalo con tus palabras, como se lo contarías a alguien en el mostrador. Con eso alcanza para decirte si se puede y cuánto sale." · tres pasos ("Primero" · "Te escribimos por correo para coordinar la llamada." / "Quince minutos" · "Hablamos de lo que hacés a mano, qué usás hoy y adónde tendría que ir." / "Al colgar" · "Sabés si se puede, cuánto sale y cuánto tarda. Y si no te conviene, te lo decimos ahí mismo.") · "¿Preferís escribir directo? hola@luvant.com.ar".

Derecha, la ficha "Formulario 01 · Pedí tu presupuesto" con sticker "Gratis · 15 min": chips "Sobre qué" (Software a medida, Automatización con IA, Datos y tableros, Integración, Web y apps, Luvant Lens, No sé todavía; preseleccionado por `?tema=`), textarea "Qué hacés a mano hoy" (placeholder: Ej.: "Me llegan unas 200 facturas por mes por correo y las cargo una por una en Tango."), "Tu nombre" (placeholder "Nombre y, si querés, el negocio"), "Tu correo", botón "Pedí tu presupuesto →", pie "Sin compromiso. No mandamos publicidad." Campo honeypot `company_fax` oculto. Envío a `api/contact.php` con `name`, `email`, `message` (el caso), `services: [tema]`; `company` y `phone` vacíos. El PHP no cambia.

Gracias (sobre cartón): eyebrow "Después de mandar" · h2 "Listo. Te escribimos para coordinar." · "Mientras tanto, si tenés un ejemplo a mano (una factura, un mensaje de pedido, una planilla), guardalo: en la llamada lo miramos juntos." · tarjeta Courier "Recibido · {fecha} / Sobre: {tema} / Próximo paso: coordinar quince minutos" (`tema` viene por query string desde el envío; el correo no viaja en la URL; si falta el tema, la tarjeta no se muestra). `noindex`.

### 7.6 Blog

`/blog` y los seis artículos conservan slug, título y estructura; se les aplica Nav, Footer y tipografía nuevos, con el cuerpo en Familjen a 18px sobre foja y ancho de lectura de 680px. Correcciones de contenido:
- `automatizar-carga-facturas`, `ocr-documentos-argentina`, `que-es-una-api-y-por-que-importa`: se reescriben los párrafos que presentan a Lens como OCR de facturas y se eliminan todas las cifras (99 %, 97 %, 95 %, 80 % del tiempo, "100 % porque…"). Lens se menciona como lectura de documentos y normativa; el ejemplo de facturas pasa a la ficha de Automatización con IA, enlazada.
- Los otros tres no cambian de texto.
- Todos ganan un bloque final "Si te pasa esto" con el enlace a la ficha que corresponde.

## 8. Metadata por página

`title` y `description` escritos a mano en cada `layout.tsx`/`page.tsx`; se saca la plantilla `%s | Luvant` del layout raíz.

| Página | title | description |
|---|---|---|
| Home | Luvant: software a medida y automatización con IA para tu negocio · Córdoba | Dejá de perder horas en lo mismo de todos los días. Software a medida, automatizaciones con IA, tableros, integraciones y Luvant Lens. Precio cerrado antes de empezar. |
| Software a medida | Software a medida para negocios, estudios y organismos \| Luvant | Sistemas de pedidos, turnos, stock y expedientes escritos para cómo trabaja tu negocio. Precio cerrado antes de empezar. Córdoba, Argentina. |
| Automatización con IA | Automatización con IA: facturas, pedidos y documentos que se cargan solos \| Luvant | Programas que leen correos, facturas, pedidos de WhatsApp y PDFs y los cargan en tu sistema. Con IA donde hace falta leer y reglas donde no. Precio cerrado. |
| Datos y tableros | Tableros de control para pymes: todos tus números en una pantalla \| Luvant | Unificamos planillas, sistema contable y tienda en un tablero que se actualiza solo. Ventas, stock, caja y cobranzas de un vistazo. Precio cerrado. |
| Integración | Integración de sistemas: Tienda Nube, AFIP, contable y WhatsApp conectados \| Luvant | Conectamos tu tienda, tu facturación, tu stock y tu WhatsApp para que los datos pasen solos, sin cargar nada dos veces. Precio cerrado. |
| Web y apps | Sitios web, tiendas online y apps a medida, conectados a tu stock y tu cobro \| Luvant | Sitios, e-commerce y apps internas que leen tu stock, cobran con Mercado Pago, facturan en AFIP y te avisan. Rápidos y hechos para Google. Precio cerrado. |
| Lens | Luvant Lens: miles de documentos leídos, ordenados y buscables | Lens lee los documentos de tu organismo o tu empresa (ordenanzas, decretos, resoluciones, contratos), saca lo importante y los deja buscables con el texto al día. API para integradores. |
| Contacto | Pedí tu presupuesto: quince minutos, gratis \| Luvant | Contanos qué hacés todos los días a mano. Salís sabiendo si se puede, cuánto sale y cuánto tarda. |
| Blog | Blog \| Luvant | (se conserva la actual) |

Canonical absoluto en todas. Sin `alternates.languages`. `robots` por defecto `index, follow`; `noindex` en `/contacto/gracias` y `/lp/*`.

## 9. Datos estructurados

Se eliminan: `ProfessionalService` con el catálogo viejo, el `SearchAction` del `WebSite`, el `SoftwareApplication` de Lens con `featureList` inventada y el `FAQPage` viejo de Lens.

Se agregan (JSON-LD en `<head>` de cada página):
- Layout raíz: `Organization` (nombre, url, email, `address.addressLocality` "Córdoba", `addressCountry` "AR", `sameAs` vacío) y `WebSite` sin `potentialAction`.
- Cada ficha: `Service` (`name`, `description`, `provider` → Organization, `areaServed` Argentina), `FAQPage` con sus tres preguntas, `BreadcrumbList` (Luvant › Qué hacemos › Nombre).
- Lens: `SoftwareApplication` (`applicationCategory` "BusinessApplication", `operatingSystem` "Web", descripción de §8, `offers` con `availability` InStock y sin `price`), `FAQPage`, `BreadcrumbList`.
- Home: `FAQPage` con sus tres preguntas.
- Artículos: `BlogPosting` (headline, datePublished, dateModified, author Organization).

## 10. Sitemap, robots, OG, íconos, redirecciones

- `sitemap.ts`: las URLs de §3 que se indexan; `lastModified` = fecha de la última edición real del contenido (se fija en el archivo de contenido de cada página como `updatedAt`); sin `/en`.
- `robots.ts`: sin cambios salvo el sitemap.
- `opengraph-image.tsx` y `twitter-image.tsx` de cada ruta se rehacen con la piel nueva: titular de la página en Familjen sobre foja, sticker verde con el eyebrow, wordmark abajo. Las fuentes se cargan en el generador con `fetch` de Google Fonts como hace Next en su ejemplo.
- `icon.tsx`, `apple-icon.tsx`, `manifest.ts`: símbolo tinta sobre foja; `theme_color` `#fdfcf7`; `viewport.themeColor` igual.
- `.htaccess`: bloque de `Redirect 301` para las cinco URLs de §3, antes del rewrite a `out/`.

## 11. Rendimiento y accesibilidad

Objetivo Lighthouse ≥ 95 en las cuatro categorías, en móvil, sobre `out/` servido localmente. Sin imágenes en el hero; LCP es el h1. Fuentes autoalojadas por `next/font`. framer-motion solo en componentes cliente chicos. Contraste AA en todo (tinta-3 `#8a8272` sobre foja solo en texto ≥ 12px Courier, que es decorativo; el texto informativo va en tinta-2 o tinta). Foco visible (anillo tinta 2px). `skip link` conservado. Un solo `h1` por página. Las ventanas llevan `aria-hidden` (son ilustración) y las fichas son enlaces completos.

## 12. Orden de implementación y verificación

Cada paso deja `npm run build` y `npm run lint` limpios.

1. Base: fuentes en el layout raíz, tokens, `Nav`, `Footer`, `Subrayado`, `Ventana` + ventanas, `Ficha`, `Objeto`, `Sticker`, `Escritorio`, `BandaCarton`, `Preguntas`, `Cierre`, `OtrasFichas`, `Mesa`; `src/content/shared.ts`.
2. Home.
3. Plantilla de ficha y las cinco páginas (con su contenido en `src/content/services/`).
4. Lens.
5. Contacto y gracias.
6. Blog: piel y correcciones.
7. SEO: metadata, JSON-LD, OG, íconos, sitemap, `.htaccess`.
8. Limpieza: `(en)` fuera de `app/`, borrar `(preview)`, `components/preview`, `public/preview`, `sections/`, `ui/` y `animations/` sin uso; `deploy.yml` a `master`.
9. Verificación final: script `scripts/check-out.mjs` que recorre `out/**/*.html` y falla si un enlace interno no existe, si hay más o menos de un `h1`, o si faltan `title`, `description` o `canonical`; capturas headless (Edge) de cada plantilla a 1280 y 390 para revisar a ojo; JSON-LD validado con el validador de Schema.org sobre el HTML generado; Lighthouse sobre `out/`.

No se agregan tests unitarios: el repo no los tiene y lo que puede romperse (build, enlaces, metadata) lo cubre el script.

## 13. Fuera de alcance

- Cualquier dato o material de Embalse o de otros clientes.
- La versión en inglés.
- `/lp/facturas` y su formulario.
- Contenido nuevo del blog (se agenda aparte; la palabra "digesto" puede vivir en un artículo si algún día se quiere posicionar esa búsqueda, nunca en las páginas).
- Deploy: se hace cuando Facundo lo pida; hasta entonces nada se commitea.

## 14. Decisiones tomadas hoy (para no reabrir)

Home generalista con Lens como producto (no Lens como estrella, no "la cuadra" con fotos) · Lens = normativa para organismos + API para integradores, sin facturas · sistema papel para todo el sitio con ventanas oscuras del producto, Lens también en papel · hero D1 (titular a lo ancho, escritorio abajo) · fichas sobre la mesa para "Qué hacemos" · botón de subrayado rojo, nada de relleno rojo · banda cartón para Lens en la home · títulos: "Dejá de perder horas en lo mismo de todos los días." / "Seis maneras de sacarte trabajo de encima." / "¿Qué es lo que hacés todos los días a mano?" · voz nosotros, registro de resultado · sin cifras, sin "digesto", sin plazos ni WhatsApp como canal, sin datos de Embalse · inglés afuera · blog conservado y corregido · URLs viejas con 301.

## 15. Estado (13 de septiembre de 2026, fin del día)

Implementado completo según `docs/superpowers/plans/2026-09-13-redesign-papel.md`, en el working tree de `master`, **sin commit**. `npm run lint`, `npm run build` y `npm run check` limpios; capturas de todas las plantillas en `.superpowers/shots/final/` (ignorado por git).

Diferencias respecto de esta spec:
- Los componentes se llaman en inglés (`src/components/paper/`: `Window`, `PaperCard`, `Underline`, `Desk`, `Table`, `CardboardBand`, `Questions`, `Closing`, `OtherCards`, `Reveal`, `Sketch`, `Nav`, `Footer`, `ServicePage`, `ContactForm`, `ThanksCard`, `Article`), por la regla del repo; los textos viven en `src/content/`.
- Las imágenes OG y los íconos son PNG estáticos en `public/og/` y `public/` generados con `npm run og` (Edge headless), no rutas de Next: el export estático no las servía (daban 404 en producción). Los seis artículos del blog comparten `og/blog.png`.
- La 404 se genera copiando `/no-encontrado` a `out/404.html` en un paso post-build (`scripts/postbuild.mjs`): Next 14.2 no admite un `not-found` raíz sin layout raíz, y el sitio tiene dos layouts raíz (`(es)` y `(lp)`).
- Se corrigieron dos enlaces de artículos del blog que apuntaban a rutas eliminadas.
- `/contacto/gracias` y `/lp/gracias` llevan canonical (y description) para pasar `npm run check`.

Pendiente, a decidir:
- Lighthouse local: performance 79–86 (accesibilidad 95, mejores prácticas y SEO 100). El costo mayor es GTM + gtag.js, preexistentes; opción: cargar GA4 solo desde GTM.
- Pulido visual: la etiqueta "Normativa al día" tapa el subtítulo de la última fila del buscador (home y Lens); en móvil, el sticker "Cliente" pisa una línea de la ventana del hero. Ambos vienen del boceto aprobado.
- `out/` sigue trackeado en git y viejo (CI lo regenera y lo sube por FTP); conviene ignorarlo y sacarlo del repo.
- `/lp/facturas` nombra a Embalse fuera del sticker; está fuera del alcance de esta spec.
- Deploy: al pushear a `master` (`deploy.yml` corregido), CI construye y sube `out/` por FTP; las redirecciones 301 quedan en `.htaccess` y se verifican en producción.
