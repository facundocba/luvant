# Home para la campaña de IA: estado al 3 de septiembre de 2026

Documento de estado, no de diseño final. Resume qué se decidió, qué está en el canvas y qué falta para pasar a la spec del enfoque elegido y al plan de implementación.

Canvas: https://claude.ai/code/artifact/4faeee19-59b5-4bf2-aefc-1cbce0bcc482 (abre en la página "D2 · E2 con el contenido de campaña").

## 1. El brief, tal como lo dijo Facundo

- La campaña vende **IA a medida, de todo, tanto B2B como B2C**: negocios, profesionales, municipios y personas.
- La acción del que llega a la home es **agendar una reunión o llamada**.
- El **canal no está definido**.
- El pedido original: nuevo rediseño de la home, con todos los estándares de diseño, enfocado en la campaña de IA.

## 2. Qué se descartó y por qué

1. **La home como expediente** (dirección I, papel, traza roja y verde). Descartada: "es igual que lo que ya veíamos". Spec archivada en `2026-09-02-home-campana-ia-design.md`; sirve como referencia de copy y de la auditoría de estándares.
2. **A "La lupa", B "El diagnóstico", C "Precio a la vista"**. Descartadas: "sigue siendo bastante similar" en los cuatro ejes (visual, contenido, estructura, tono). Lección: el lenguaje de título grande en grotesca más mono más superficies planas más estructura de landing también lee como plantilla de IA, aunque el concepto cambie.
3. **F "Embalse"** (documental del primer caso). No elegida; queda como recurso para la credencial dentro de cualquier enfoque.

## 3. Qué está aprobado

- **Dirección D "La oficina"** y **dirección E "¿Le ganás a la IA?"**: "mejoró bastante". Aprobadas en forma, estructura y tono.
- El contenido de esa primera versión (factura, documentos, tipeo) **no servía para la campaña**. Se rehicieron con el brief corregido como D2 y E2.

## 4. Lo que hay en el canvas para validar

### D2 · La cuadra
- Escena ilustrada a pantalla completa: seis frentes (panadería, consultorio, estudio contable, inmobiliaria, ferretería, municipalidad), un punto para tocar en cada uno y una tarjeta que dice qué haría la IA ahí. Sobre la calle: "IA a medida para lo que hacés todos los días" y el botón "Agendá 15 minutos".
- Debajo: los seis en texto más "el tuyo"; la definición de a medida en tres frases (se construye para tu caso, se conecta con lo que ya usás, precio cerrado en semanas); la credencial de Embalse; la agenda con turnos.
- Estilo: ilustración plana de trazo, Outfit, teal, madera, mostaza, rojo. Lo que hay es boceto de composición; la ilustración final se dibuja después.

### E2 · La carrera, en tu propio trabajo
- Elegís un desafío de treinta segundos de tu rubro (responder 10 pedidos por WhatsApp, dar 8 turnos, clasificar 20 reclamos, encontrar una cláusula en 40 páginas). La IA corre de verdad contra vos. Al final, tu tiempo contra el suyo, el mensaje de a medida y "Agendá 15 minutos".
- Estilo: cronómetro deportivo, Barlow y Barlow Condensed, blanco, negro y rojo.
- Hay que construir los mini desafíos (se puede arrancar con dos).

### Común a las dos
- Un solo pedido en toda la página, siempre con el mismo texto: "Agendá 15 minutos".
- Mensaje: IA a medida; un programa para cómo trabajás vos, conectado a lo que ya usás, con precio cerrado antes de empezar. Para un negocio, un estudio, un municipio, o para vos solo.
- Cero números inventados: los tiempos de la carrera y los horarios de la agenda son de muestra y están marcados como tales.

## 5. Propuesta de canal (a confirmar)

1. **Meta (Instagram y Facebook)** como canal principal: la oferta es amplia y visual, y nadie busca "IA a medida". Cada local de la cuadra es un anuncio; la carrera es un video de 15 segundos. Público: dueños, profesionales y funcionarios, Córdoba primero.
2. **Google Search chica**, sólo intenciones concretas: agente de IA para mi negocio, chatbot whatsapp con IA, automatizar con inteligencia artificial, desarrollo de IA a medida, implementar IA en mi empresa. Negativas: curso, gratis, chatgpt, qué es, carrera, empleo, imágenes, generar.
3. **LinkedIn** después, para municipios y empresas medianas.
4. Conversión a medir: el turno agendado, no el click al botón.

## 6. Decisiones pendientes de Facundo

- Elegir D2, E2 o la mezcla (por ejemplo, la cuadra como home y la carrera como pieza de campaña).
- Confirmar el canal.
- Elegir la herramienta de agenda (Cal.com o Google Calendar) y si la llamada es por Meet o teléfono.
- Definir un ticket mínimo para B2C, para que las llamadas de personas no sean tiempo perdido.
- Confirmar los seis rubros de la cuadra y los cuatro desafíos de la carrera, o cambiarlos por los que más se acerquen a sus clientes reales.

## 7. Datos que faltan (siguen entre corchetes en los artboards)

- Plazo real de puesta en marcha en semanas.
- Qué se automatizó en la Municipalidad de Embalse, desde cuándo y qué volumen.
- Número de WhatsApp, si se quiere sumar como salida secundaria.
- Foto real del trabajo, si se usa la credencial de Embalse con imagen.

## 8. Lo que ya se sabe del código y hay que hacer sí o sí al implementar

De la auditoría contra las Web Interface Guidelines (detalle en la spec archivada, sección 7): animaciones de framer-motion bajo `prefers-reduced-motion`, `scroll-behavior: smooth` condicionado, `color-scheme` declarado, skip-link, menú móvil con Escape y foco, reemplazo del listener de scroll de la nav, `:focus-visible` en los campos, `aria-current` en el idioma activo, títulos del footer sin saltar niveles.

Restricciones que no cambian: rutas, sitemap, JSON-LD y opengraph se conservan; la versión EN sigue congelada; el copy nuevo va en un módulo aparte de `Dictionary`.

## 9. Próximo paso

Cuando Facundo elija el enfoque y confirme canal y agenda: escribir la spec de ese enfoque (estructura, copy final, componentes, móvil, eventos de conversión) y el plan de implementación por tareas.
