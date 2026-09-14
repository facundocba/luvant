# Home de Luvant: estado al 5 de septiembre de 2026

Documento de estado, no de diseño final. Reemplaza al del 3 de septiembre (`2026-09-03-home-campana-ia-estado.md`), que quedó escrito sobre una premisa equivocada.

Canvas: https://claude.ai/code/artifact/4faeee19-59b5-4bf2-aefc-1cbce0bcc482 (abre en la página "El nivel: foto vs ilustración").
Boceto andando: `http://localhost:3000/preview/bandas` (con `npm run dev` levantado).

## 1. La corrección del brief

Facundo, 4 de septiembre: **"nunca dije campaña de IA, solo quería hacer publicidad"**. Todo lo explorado del 2 al 4 de septiembre (expediente, A/B/C, D/E/F, D2/E2, el hilo, el índice) estaba apuntado a una campaña de inteligencia artificial que no existía como pedido.

Lo que sí quiere: hacer publicidad. **Qué se anuncia sigue sin definirse** y es la decisión que manda sobre lo demás. Lo único ya trabajado con landing propia es la carga automática de facturas (`/lp/facturas`).

Esquema propuesto: la home vende Luvant entero (software a medida para negocios, estudios y municipios); cada oferta que se publicite lleva su propia landing. La IA es una de las cosas que hace, no el título.

## 2. Qué se aprendió de las rondas de diseño

1. **Lo genérico y lo pulido no son lo mismo.** Facundo rechazó como "hecho con IA" tanto los patrones de plantilla como mis propuestas austeras. Lo que aprobó siempre fue lo de más producción: escena ilustrada (D), cronómetro (E), foto a sangre (1), collage (3), bandas (5).
2. **El cuello de botella era de material, no de concepto.** Sin una sola imagen real y en mockups estáticos, todo salía austero. Se resolvió bajando fotos de Unsplash por HTTP (ver §7) y pasándolas todas por el mismo tratamiento.
3. **El movimiento no se juzga en un mockup.** Por eso la dirección elegida se levantó en el repo con framer-motion.
4. **Tiene que ser un sitio.** "El hilo" (la home como conversación) murió por eso: sin nav, sin decir qué vende, sin lugar para servicios ni productos.

## 3. Qué está en el canvas, página "El nivel"

Mismo esqueleto (la cuadra: nav, hero, cuatro ofertas, Embalse, tres preguntas, cierre), distinto material o estructura. De izquierda a derecha:

| # | Nombre | Qué es | Estado |
|---|---|---|---|
| 1 | La cuadra con fotografía | Foto a sangre oscura + grilla de tarjetas | Viva |
| 3 | La cuadra en collage | Fotos recortadas en arcos y círculos sobre bloques de color | Viva |
| 5 | **La cuadra en bandas** | Un rubro por pantalla, foto a ancho completo con texto adentro | **Elegida. Está en el repo.** |
| 6 | Las pantallas | El software como hero: tres pantallas encimadas, recortes de interfaz en cada oferta | Nueva, a validar |
| 7 | Antes / después | Cada oferta es un par foto-apagada vs pantalla, con manija arrastrable | Nueva, a validar |
| 4 | La cuadra en mosaico | Grilla gapless como hero | Descartada |
| 2 | La cuadra con ilustración | La cuadra dibujada en vectores | Descartada |

Páginas anteriores del canvas (el índice, el hilo, D2/E2, A/B/C, expediente) quedan como archivo.

Recomendación dada: la **6** como home (es la única que hace que Luvant se vea como alguien que construye software) y la **7** como landing de campaña (cada par es un anuncio). No compiten.

## 4. Qué está en el repo, sin commitear

Grupo de rutas aparte, con `noindex`, que no toca la home actual:

- `src/app/(preview)/layout.tsx` — carga Familjen Grotesk y Courier Prime.
- `src/app/(preview)/preview/bandas/page.tsx` — la ruta.
- `src/components/preview/BandasHome.tsx` — la dirección 5 con movimiento: parallax de la foto del hero y de cada banda (la imagen se mueve más lento que la página), texto que entra de costado según el lado, nav que pasa de transparente a sólida a los 120 px, hover que aclara la foto, todo con la misma curva `[0.16, 1, 0.3, 1]`, y respetando `prefers-reduced-motion`. En móvil las bandas cambian solas: texto abajo, velo vertical.
- `src/components/preview/textos.ts` — dos tandas de texto (`mrk` y `sobrio`) para comparar en vivo.
- `public/preview/*.jpg` — 24 fotos: 4 candidatas por ranura (cuadra, panadería, consultorio, estudio, ferretería, municipio).
- Un panel flotante en el boceto permite cambiar la foto de cada ranura y alternar el tono del texto.

Pendiente técnico antes de que sea real: pasar `<img>` a `next/image`, y decidir si la ruta se vuelve la home o una landing.

## 5. Reglas de texto que quedaron fijadas

- **Las ofertas no son casos.** Facundo no tiene clientes en panadería, consultorio, estudio ni ferretería: esas bandas van en condicional y futuro ("Si tenés una panadería… te escribo un programa que…"). El único caso real es la **Municipalidad de Embalse**, y es la única banda en pasado, con cita y marcada "Caso real".
- Los rubros se escriben como situaciones, no como negocios: "Si atendés con turnos" le habla al consultorio, a la peluquería y al taller a la vez.
- **El botón nombra el resultado, no la duración.** "Pedí tu presupuesto", no "Agendá 15 minutos". Los quince minutos van en letra chica: tranquilizan, no venden. El cierre dice "Salís de la llamada sabiendo cuánto te sale".
- Registro marketinero: verbo en imperativo al principio, el número adelante y en cifra, el beneficio en vez del mecanismo, quita-fricción (gratis, sin compromiso). Sin palabras de folleto ("potenciá", "revolucioná", "solución integral").
- **Ninguna cifra inventada.** Precio, semanas, año y datos de Embalse siguen entre corchetes.
- Las pantallas de 6 y 7 dicen en letra chica que son bocetos con datos de muestra.

## 6. El brandkit

Está en el repo, no en Canva: paleta `papel` de `tailwind.config.ts` (`tinta #1e2a23`, `foja #fdfcf7`, `foja-2 #f6f2e6`, `carton #e7dfc9`, `rojo #b0271c`, `verde #3e6e63`, `birome #2a4b9b`), tipografías Familjen Grotesk / Courier Prime / Caveat, logo en `src/components/brand/LuvantLogo.tsx`. Reglas de uso: el rojo es relleno, no texto chico; las etiquetas sobre oscuro van en cartón; un velo de tinta en `mix-blend-multiply` al 25-30 % sobre cada foto las unifica.

## 7. Cómo se bajaron las fotos

No hay generación de imágenes ni ImageMagick en la máquina. Funciona: `curl` a `https://unsplash.com/napi/photos/<id>` devuelve la URL real, y los parámetros `?w=&q=&fm=jpg&fit=crop` hacen que el CDN de Unsplash las achique. Para el canvas hay que dejarlas bajo ~70 KB; para `public/` no importa. Licencia Unsplash, uso libre. Ojo: la foto del hero actual (`cuadra.jpg`) es una ferretería colombiana; para publicar hay que reemplazarla por fotos de Córdoba, idealmente sacadas por Facundo.

## 8. Decisiones y datos que faltan de Facundo

Decisiones:
1. Cuál va como home: 5 (bandas, ya en el repo), 6 (pantallas) o 7 (antes/después). O la mezcla 6 home + 7 landing.
2. Qué se anuncia. Candidatas: facturas (ya tiene landing), turnos, reclamos vecinales, lectura de documentos con Lens.
3. Qué fotos de las 4 por ranura quedan.
4. Tono del texto: marketinero o sobrio (el boceto arranca en marketinero).
5. Herramienta de agenda para el botón (Cal.com o Google Calendar) y canal de la publicidad.

Datos:
- Casos reales además de Embalse, si los hay: rubro y qué se resolvió. Un caso real vale más que las cuatro ofertas juntas.
- Precio "desde" y plazo en semanas.
- Embalse: qué se automatizó, desde cuándo, qué volumen por mes, una frase real con nombre y cargo, y una pantalla real del sistema.
- Fotos propias de Córdoba, si va a sacarlas.

## 9. Próximo paso

Cuando elija dirección y pase los datos: cerrar el texto, fijar las fotos, escribir la spec (estructura, móvil, eventos de conversión, `next/image`, SEO conservado) y el plan de implementación para pasarla de `/preview/bandas` a la ruta definitiva.
