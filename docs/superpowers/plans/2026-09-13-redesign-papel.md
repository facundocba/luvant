# Rediseño papel de luvant.com.ar — Plan de implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reemplazar el sitio oscuro actual por el rediseño "papel" aprobado en `docs/superpowers/specs/2026-09-13-redesign-papel-design.md`: home nueva, cinco fichas de servicio, página de Luvant Lens, contacto, blog re-vestido y SEO completo, todo en español y sin cifras ni promesas.

**Architecture:** Next.js 14 App Router con `output: "export"` (HTML estático servido por Apache/PHP en Ferozo). Los textos viven en `src/content/*.ts` como objetos tipados; las páginas son server components que componen componentes de `src/components/paper/` (todos en inglés, la spec los nombra en español: Ventana→`Window`, Ficha→`PaperCard`, Subrayado→`Underline`, Escritorio→`Desk`, Mesa→`Table`, BandaCarton→`CardboardBand`, Preguntas→`Questions`, Cierre→`Closing`, OtrasFichas→`OtherCards`, Entrada→`Reveal`, Objeto→`Sketch`). Lo que se mueve es framer-motion en componentes cliente chicos. Las imágenes OG y los íconos son PNG estáticos generados una vez con Edge headless (`scripts/og.mjs`), porque el export estático no los sirve hoy (los `/opengraph-image` y `/icon` actuales dan 404 en producción).

**Tech Stack:** Next 14.2, React 18, TypeScript strict, Tailwind 3.4, framer-motion 12, `next/font/google` (Familjen Grotesk, Courier Prime), `geist` (solo dentro de las ventanas), PHP `api/contact.php` existente, Edge headless para capturas.

**Reglas del repo que mandan sobre este plan:** nunca `git commit` ni `git push` (los pasos terminan con `git add` acotado y `git status --short`, y se espera el "commiteá" de Facundo); sin comentarios en el código; nombres de archivos, componentes, funciones y variables en inglés, textos en español; código mínimo, sin validaciones ni helpers extra.

**Verificación en cada tarea:** `npm run build` y `npm run lint` limpios. Las tareas visuales terminan con una captura headless (Edge) para mirar; el comando está en la tarea 1.

---

## Estructura de archivos

Nuevos:

```
src/content/types.ts                      tipos de contenido (Service, WindowSpec, Question…)
src/content/shared.ts                     botón, cierre, "cómo trabajamos", "qué incluye" 2–5
src/content/home.ts                       textos de la home
src/content/lens.ts                       textos de Lens
src/content/contact.ts                    textos de contacto y gracias
src/content/services/index.ts             lista ordenada de los cinco servicios + entrada de Lens para nav/pie/fichas
src/content/services/software-a-medida.ts
src/content/services/automatizacion-con-ia.ts
src/content/services/datos-y-tableros.ts
src/content/services/integracion-de-sistemas.ts
src/content/services/web-ecommerce-y-apps.ts
src/lib/site.ts                           SITE_URL, SITE_NAME, EMAIL
src/lib/seo.tsx                           metadata y JSON-LD por tipo de página, <JsonLd />
src/components/paper/Mark.tsx             símbolo del logo (delta con círculo) en tinta o foja
src/components/paper/Eyebrow.tsx
src/components/paper/Underline.tsx        el botón de subrayado rojo
src/components/paper/Reveal.tsx           entrada al scroll (cliente)
src/components/paper/Sticker.tsx
src/components/paper/Chips.tsx
src/components/paper/Questions.tsx
src/components/paper/Closing.tsx
src/components/paper/CardboardBand.tsx
src/components/paper/Window.tsx           ventana oscura + contenidos por `kind`
src/components/paper/Sketch.tsx           objetos dibujados de las fichas
src/components/paper/PaperCard.tsx        ficha de papel
src/components/paper/Table.tsx            las seis fichas sobre la mesa
src/components/paper/Desk.tsx             escritorio con ventanas y sticker (cliente, parallax)
src/components/paper/OtherCards.tsx
src/components/paper/Nav.tsx              (cliente: menú móvil)
src/components/paper/Footer.tsx
src/components/paper/ServicePage.tsx      plantilla de ficha
src/components/paper/ContactForm.tsx      (cliente)
src/components/paper/Article.tsx          marco de artículo del blog
src/app/(es)/servicios/automatizacion-con-ia/page.tsx
src/app/(es)/servicios/datos-y-tableros/page.tsx
src/app/(es)/servicios/web-ecommerce-y-apps/page.tsx
src/app/(es)/contacto/gracias/page.tsx
scripts/og.mjs, scripts/og.html, scripts/og-pages.json   generación de OG e íconos
scripts/check-out.mjs                     verificación del export
public/og/*.png, public/icon.png, public/apple-icon.png, public/favicon-32.png
```

Modificados: `src/app/(es)/layout.tsx`, `src/app/globals.css`, `tailwind.config.ts`, `tsconfig.json`, `.gitignore`, `src/app/(es)/page.tsx`, `src/app/(es)/servicios/desarrollo-software-a-medida/page.tsx`, `src/app/(es)/servicios/integracion-de-sistemas/page.tsx`, `src/app/(es)/productos/lens/page.tsx`, `src/app/(es)/contacto/page.tsx`, `src/app/(es)/blog/page.tsx`, los seis `src/app/(es)/blog/*/page.tsx`, `src/app/(es)/not-found.tsx`, `src/app/sitemap.ts`, `src/app/manifest.ts`, `.htaccess`, `.github/workflows/deploy.yml`.

Eliminados (tarea 13 y 14): `src/app/(es)/servicios/{automatizacion-de-procesos,consultoria-tecnica}/`, `src/app/(es)/servicios/layout.tsx`, los `layout.tsx` y `opengraph-image.tsx` de las rutas que quedan, `src/app/(es)/productos/{page,layout,opengraph-image}.tsx`, `src/app/(es)/nosotros/`, `src/app/(es)/contacto/layout.tsx`, `src/app/(es)/{opengraph-image,twitter-image}.tsx`, `src/app/{icon,apple-icon}.tsx`, `src/app/favicon.ico`, `src/app/(preview)/`, `src/components/{preview,sections,layout,ui,animations}/`, `src/lib/constants.ts`, `public/preview/`. `src/app/(en)/` y `src/lib/i18n/` se mueven a `src/_unused/`.

---

### Task 1: Build verde de base

Hoy `npm run build` falla por lint en `src/app/(en)/en/about/page.tsx` y por `require()` en `src/lib/i18n/index.ts`. Primero se saca el inglés del build y se arregla el import; recién después se construye.

**Files:**
- Move: `src/app/(en)/` → `src/_unused/en/`
- Modify: `tsconfig.json`
- Modify: `src/lib/i18n/index.ts`
- Modify: `.gitignore`

- [ ] **Step 1: Mover el grupo `(en)` fuera de `app/`**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web
mkdir -p src/_unused
git mv -k "src/app/(en)" src/_unused/en 2>/dev/null || mv "src/app/(en)" src/_unused/en
ls src/_unused/en
```

Esperado: `layout.tsx  en`.

- [ ] **Step 2: Excluir `src/_unused` del type-check**

En `tsconfig.json` reemplazar la línea `"exclude": ["node_modules"]` por:

```json
  "exclude": ["node_modules", "src/_unused"]
```

- [ ] **Step 3: Reemplazar los `require()` de `src/lib/i18n/index.ts`**

Contenido completo del archivo:

```ts
import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/es";
import { es } from "./dictionaries/es";
import { en } from "./dictionaries/en";

export type { Locale, Dictionary };
export {
  defaultLocale,
  locales,
  pathMap,
  getAlternatePath,
  getLocalePath,
} from "./config";

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
```

- [ ] **Step 4: Ignorar los bocetos del brainstorming**

Agregar al final de `.gitignore`:

```
# brainstorming mockups
/.superpowers/
```

- [ ] **Step 5: Build y lint**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && npm run lint && npm run build 2>&1 | tail -25
```

Esperado: lint sin errores; build termina con la tabla de rutas (`○ /`, `○ /blog`, …) y `out/` regenerado. Si aparece un error de tipos dentro de `src/_unused`, revisar que el `exclude` del paso 2 quedó bien.

- [ ] **Step 6: Guardar el comando de captura para las tareas visuales**

Se usa en todas las tareas con "captura". Chromium headless no achica la ventana por debajo de ~500 px, así que la captura móvil se hace a través de un `iframe` de 390 px (`.superpowers/shots/frame.html`, ya creado; si falta, su contenido es: `<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0;background:#888}iframe{display:block;width:390px;height:4200px;border:0}</style></head><body><iframe id="f"></iframe><script>document.getElementById("f").src="http://localhost:3999/"+(location.search.slice(1)||"");</script></body></html>`). El servidor estático se levanta y se mata por PID en el mismo bloque:

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && mkdir -p .superpowers/shots && (npx --yes serve -l 3999 out >/dev/null 2>&1 & echo $! > .superpowers/serve.pid); sleep 3
EDGE="/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"; [ -f "$EDGE" ] || EDGE="/c/Program Files/Microsoft/Edge/Application/msedge.exe"
R="RUTA"; N="NOMBRE"
"$EDGE" --headless=new --disable-gpu --hide-scrollbars --window-size=1280,4200 --virtual-time-budget=6000 --screenshot="C:\wamp64\www\luvant.com.ar\luvant-web\.superpowers\shots\$N-1280.png" "http://localhost:3999/$R" 2>/dev/null
"$EDGE" --headless=new --disable-gpu --hide-scrollbars --window-size=390,4200 --virtual-time-budget=8000 --screenshot="C:\wamp64\www\luvant.com.ar\luvant-web\.superpowers\shots\$N-390.png" "file:///C:/wamp64/www/luvant.com.ar/luvant-web/.superpowers/shots/frame.html?$R" 2>/dev/null
kill $(cat .superpowers/serve.pid); ls -la .superpowers/shots/
```

Reemplazar `RUTA` por la ruta sin barra inicial (vacío para la home; `servicios/automatizacion-con-ia`, `productos/lens`, etc.; `serve` sirve `x.html` como `/x`) y `NOMBRE` por el nombre del archivo (`home`, `ficha-ia`, `lens`…). Después, abrir los PNG con la herramienta Read para mirarlos.

- [ ] **Step 7: Stage**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && git add tsconfig.json src/lib/i18n/index.ts .gitignore src/_unused && git status --short | head -20
```

Mostrar lo staged y esperar el "commiteá".

---

### Task 2: Fuentes, tokens y CSS base

**Files:**
- Modify: `src/app/(es)/layout.tsx`
- Modify: `tailwind.config.ts`
- Modify: `src/app/globals.css`
- Create: `src/lib/site.ts`

- [ ] **Step 1: `src/lib/site.ts`**

```ts
export const SITE_URL = "https://luvant.com.ar";
export const SITE_NAME = "Luvant";
export const EMAIL = "hola@luvant.com.ar";
```

- [ ] **Step 2: Layout raíz con las fuentes nuevas y sin el JSON-LD viejo**

Contenido completo de `src/app/(es)/layout.tsx` (reemplaza todo el archivo; los IDs de GTM y GA4 son los que ya estaban):

```tsx
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Familjen_Grotesk, Courier_Prime } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { JsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import "../globals.css";

const familjen = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-familjen",
  display: "swap",
});

const courier = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courier",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#fdfcf7",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Luvant: software a medida y automatización con IA para tu negocio · Córdoba",
  description:
    "Dejá de perder horas en lo mismo de todos los días. Software a medida, automatizaciones con IA, tableros, integraciones y Luvant Lens. Precio cerrado antes de empezar.",
  openGraph: { type: "website", locale: "es_AR", siteName: "Luvant" },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${familjen.variable} ${courier.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
      </head>
      <body className="bg-papel-foja font-sans text-papel-tinta antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N86HLLWQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N86HLLWQ');`,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YS1TSMR4NJ"
          strategy="afterInteractive"
        />
        <Script
          id="ga4"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-YS1TSMR4NJ');`,
          }}
        />
      </body>
    </html>
  );
}
```

`@/lib/seo` se crea en el paso 5 de esta misma tarea (mínimo, para que el build pase); la tarea 3 lo completa.

- [ ] **Step 3: Tailwind: fuentes y animación del subrayado**

En `tailwind.config.ts`, reemplazar el bloque `fontFamily` por:

```ts
      fontFamily: {
        sans: ["var(--font-familjen)", "system-ui", "sans-serif"],
        mono: ["var(--font-courier)", "ui-monospace", "monospace"],
        geist: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        geistmono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        familjen: ["var(--font-familjen)", "system-ui", "sans-serif"],
        courier: ["var(--font-courier)", "ui-monospace", "monospace"],
        caveat: ["var(--font-caveat)", "cursive"],
      },
      keyframes: {
        underline: {
          "0%": { transform: "scaleX(1)", transformOrigin: "right" },
          "50%": { transform: "scaleX(0)", transformOrigin: "right" },
          "51%": { transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
      },
      animation: {
        underline: "underline .5s cubic-bezier(.16,1,.3,1)",
      },
```

(`keyframes` y `animation` van dentro de `extend`, al mismo nivel que `fontFamily`.) Borrar también el comentario de tres líneas que hay arriba de `papel:` y el de dos líneas arriba de `familjen:`.

- [ ] **Step 4: CSS base sobre papel**

En `src/app/globals.css` reemplazar el bloque `@layer base { … }` completo por:

```css
@layer base {
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background-color: rgba(176, 39, 28, 0.18);
    color: var(--pp-tinta);
  }

  :focus-visible {
    outline: 2px solid var(--pp-tinta);
    outline-offset: 3px;
  }

  body:has([data-tema="papel"]) {
    background-color: var(--pp-carton);
  }
}
```

Reemplazar también el bloque `.prose-luvant …` (desde `/* Blog article prose */` hasta `.prose-luvant h2:first-child { … }`) por:

```css
  .prose-paper {
    @apply text-[18px] leading-[1.6] text-papel-tinta;
  }

  .prose-paper p {
    @apply mb-6;
  }

  .prose-paper h2 {
    @apply mb-4 mt-12 text-[30px] font-bold leading-[1.05] tracking-[-0.025em];
  }

  .prose-paper h3 {
    @apply mb-3 mt-8 text-[22px] font-semibold leading-[1.15] tracking-[-0.02em];
  }

  .prose-paper strong {
    @apply font-semibold;
  }

  .prose-paper ul,
  .prose-paper ol {
    @apply mb-6 ml-6 space-y-3;
  }

  .prose-paper ul {
    @apply list-disc;
  }

  .prose-paper ol {
    @apply list-decimal;
  }

  .prose-paper li {
    @apply pl-1;
  }

  .prose-paper a {
    @apply underline decoration-papel-rojo decoration-2 underline-offset-4;
  }

  .prose-paper h2:first-child {
    @apply mt-0;
  }
```

Los bloques `.gradient-border`, `.noise-bg`, `.glow-*`, `.dot-grid`, `.cross-grid`, `.text-gradient*` y `.section-padding`/`.container-main` quedan hasta la tarea 14 (los usan las páginas viejas mientras se reemplazan). Todo el bloque "SISTEMA EL EXPEDIENTE" (`.pp-*`, keyframes `pp-*`) queda: lo usa `/lp`.

- [ ] **Step 5: `src/lib/seo.tsx` mínimo**

```tsx
import { EMAIL, SITE_NAME, SITE_URL } from "./site";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#org`,
    name: SITE_NAME,
    url: SITE_URL,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Córdoba",
      addressCountry: "AR",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "es-AR",
    publisher: { "@id": `${SITE_URL}/#org` },
  };
}
```

- [ ] **Step 6: Build y lint**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && npm run lint && npm run build 2>&1 | tail -15
```

Esperado: limpio. Las páginas viejas se ven raras (fondo claro con textos blancos): es transitorio hasta que cada una se reemplace.

- [ ] **Step 7: Stage**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && git add "src/app/(es)/layout.tsx" tailwind.config.ts src/app/globals.css src/lib/site.ts src/lib/seo.tsx && git status --short | head
```

---

### Task 3: Tipos y contenido compartido

**Files:**
- Create: `src/content/types.ts`
- Create: `src/content/shared.ts`
- Create: `src/content/services/index.ts`
- Modify: `src/lib/seo.tsx`

- [ ] **Step 1: `src/content/types.ts`**

```ts
export type Question = { q: string; a: string };

export type Chip = { label: string; on?: boolean };

export type Row = { title: string; sub: string; chip?: string; chipOn?: boolean };

export type FlowStep = { text: string; time?: string; state: "ok" | "run" };

export type NormPart = { text: string; kind?: "del" | "ins" | "note" };

export type NormParagraph = { article: string; parts: NormPart[] };

export type WindowSpec =
  | {
      kind: "search";
      title: string;
      query: string;
      total: string;
      facets: Chip[];
      rows: Row[];
    }
  | {
      kind: "norm";
      title: string;
      name: string;
      meta: string;
      chip: string;
      tabs: string[];
      activeTab: number;
      paragraphs: NormParagraph[];
    }
  | { kind: "flow"; title: string; steps: FlowStep[] }
  | {
      kind: "dashboard";
      title: string;
      kpis: { value: string; label: string }[];
      bars: number[];
    }
  | { kind: "code"; title: string; lines: string[] }
  | { kind: "list"; title: string; rows: Row[] }
  | {
      kind: "shop";
      title: string;
      items: { name: string; stock: string; out?: boolean }[];
    }
  | { kind: "task"; title: string; question: string; meta: string };

export type SketchKind = "lines" | "nodes" | "bars" | "systems" | "shop" | "code";

export type Situation = {
  when: string;
  tag: string;
  title: string;
  text: string;
  window: WindowSpec;
};

export type Service = {
  slug: string;
  number: string;
  name: string;
  tag: string;
  path: string;
  title: string;
  description: string;
  updatedAt: string;
  h1: string;
  h1Accent: string;
  intro: string;
  windows: [WindowSpec, WindowSpec];
  situations: [Situation, Situation, Situation];
  includesFirst: { title: string; text: string };
  connections: string[];
  questions: [Question, Question, Question];
  card: { sketch: SketchKind; text: string };
};
```

- [ ] **Step 2: `src/content/shared.ts`**

```ts
import type { Question } from "./types";

export const cta = {
  label: "Pedí tu presupuesto",
  href: "/contacto",
  note: ["Gratis, quince minutos.", "Salís sabiendo cuánto sale."],
};

export const closing = {
  eyebrow: "Tu caso",
  title: "¿Qué es lo que hacés todos los días a mano?",
  text: "Contá qué es eso que hacés todos los días a mano. Salís sabiendo si se puede, cuánto sale y en cuánto lo tenés andando. Y si no te conviene, te lo decimos ahí mismo.",
  note: "Gratis · Quince minutos · Te escribimos para coordinar",
};

export const howWeWork = [
  {
    label: "Quince minutos",
    title: "Nos contás qué hacés a mano y qué usás hoy.",
    text: "Salís sabiendo si se puede, cuánto sale y cuánto tarda.",
  },
  {
    label: "Precio cerrado",
    title: "Lo escribimos y lo probamos con tus datos reales.",
    text: "Ves cómo anda antes de que quede andando.",
  },
  {
    label: "Desde ahí",
    title: "Queda andando y lo seguimos.",
    text: "Los primeros días lo miramos juntos.",
  },
];

export const includesRest = [
  {
    title: "Conectado a lo que ya usás.",
    text: "Tu correo, tu WhatsApp, tu planilla o tu sistema contable. Nada nuevo que aprender.",
  },
  {
    title: "Lo dudoso te lo pregunta.",
    text: "Cuando no está seguro, no inventa: lo deja marcado para que alguien lo mire.",
  },
  {
    title: "Precio cerrado y fecha.",
    text: "Antes de empezar sabés cuánto sale y cuándo está andando.",
  },
  {
    title: "Se queda andando.",
    text: "Si algo cambia (un proveedor nuevo, otro formato), se ajusta.",
  },
];

export const homeQuestions: Question[] = [
  {
    q: "«¿Y si lo mío es un caso raro?»",
    a: "Mejor. Las seis fichas de arriba no se parecen entre sí y ninguna le sirve a otro. La tuya tampoco se va a parecer.",
  },
  {
    q: "«¿Tengo que cambiar lo que ya uso?»",
    a: "No cambiás nada. Se enchufa a tu WhatsApp, a tu planilla o a tu sistema contable. Nadie aprende un programa nuevo.",
  },
  {
    q: "«¿Cuánto sale y cuánto tarda?»",
    a: "Te lo decimos en la primera llamada, cerrado, antes de escribir una línea. Si se complica en el medio, no lo pagás vos.",
  },
];

export const situationsHeading = {
  eyebrow: "Tres situaciones",
  title: "Si te pasa alguna de estas, es para vos.",
  text: "Son ejemplos, no casos: lo que te haríamos según lo que te llega y adónde va.",
};

export const footer = {
  blurb: "Software a medida, automatizaciones con IA y Luvant Lens. Córdoba, Argentina.",
  madeIn: "Hecho en Córdoba",
};
```

- [ ] **Step 3: `src/content/services/index.ts`**

Solo los datos que necesitan el nav, el pie, las fichas de la home y "otras fichas". Los cinco archivos de servicio completos se crean en la tarea 9; este índice los importa recién ahí (por ahora es una lista plana para no romper el build).

```ts
export type ServiceLink = {
  slug: string;
  number: string;
  name: string;
  tag: string;
  path: string;
};

export const serviceLinks: ServiceLink[] = [
  {
    slug: "desarrollo-software-a-medida",
    number: "01",
    name: "Software a medida",
    tag: "a medida",
    path: "/servicios/desarrollo-software-a-medida",
  },
  {
    slug: "automatizacion-con-ia",
    number: "02",
    name: "Automatización con IA",
    tag: "IA",
    path: "/servicios/automatizacion-con-ia",
  },
  {
    slug: "datos-y-tableros",
    number: "03",
    name: "Datos y tableros",
    tag: "datos",
    path: "/servicios/datos-y-tableros",
  },
  {
    slug: "integracion-de-sistemas",
    number: "04",
    name: "Integración de sistemas",
    tag: "integración",
    path: "/servicios/integracion-de-sistemas",
  },
  {
    slug: "web-ecommerce-y-apps",
    number: "05",
    name: "Web, e-commerce y apps",
    tag: "web",
    path: "/servicios/web-ecommerce-y-apps",
  },
];

export const lensLink: ServiceLink = {
  slug: "lens",
  number: "06",
  name: "Luvant Lens",
  tag: "lens",
  path: "/productos/lens",
};
```

- [ ] **Step 4: Completar `src/lib/seo.tsx`**

Agregar al final del archivo (los imports nuevos van arriba, junto a los existentes):

```tsx
import type { Metadata } from "next";
import type { Question, Service } from "@/content/types";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  ogSlug: string;
  noindex?: boolean;
};

export function pageMetadata(m: PageMeta): Metadata {
  const image = { url: `/og/${m.ogSlug}.png`, width: 1200, height: 630 };
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: m.path },
    openGraph: {
      title: m.title,
      description: m.description,
      url: m.path,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: [image.url],
    },
    robots: m.noindex ? { index: false, follow: false } : undefined,
  };
}

export function faqJsonLd(questions: Question[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.q.replace(/^«|»$/g, ""),
      acceptedAnswer: { "@type": "Answer", text: q.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function serviceJsonLd(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.description,
    url: `${SITE_URL}${s.path}`,
    provider: { "@id": `${SITE_URL}/#org` },
    areaServed: { "@type": "Country", name: "Argentina" },
  };
}

export function serviceMetadata(s: Service): Metadata {
  return pageMetadata({
    title: s.title,
    description: s.description,
    path: s.path,
    ogSlug: s.slug,
  });
}
```

- [ ] **Step 5: Build y lint**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && npm run lint && npm run build 2>&1 | tail -8
```

Esperado: limpio.

- [ ] **Step 6: Stage**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && git add src/content src/lib/seo.tsx && git status --short | head
```

---

### Task 4: Componentes base de papel

**Files:**
- Create: `src/components/paper/Mark.tsx`, `Eyebrow.tsx`, `Underline.tsx`, `Reveal.tsx`, `Sticker.tsx`, `Chips.tsx`, `Questions.tsx`, `Closing.tsx`, `CardboardBand.tsx`

- [ ] **Step 1: `Mark.tsx`** (el símbolo: delta con círculo en el vértice)

```tsx
type Props = { size?: number; tone?: "ink" | "paper"; className?: string };

export default function Mark({ size = 26, tone = "ink", className }: Props) {
  const bg = tone === "ink" ? "#1e2a23" : "#fdfcf7";
  const fg = tone === "ink" ? "#fdfcf7" : "#1e2a23";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect width="56" height="56" rx="12" fill={bg} />
      <path
        d="M14 40L28 16L42 40"
        stroke={fg}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="16" r="4" fill={fg} />
    </svg>
  );
}
```

- [ ] **Step 2: `Eyebrow.tsx`**

```tsx
import { cn } from "@/lib/utils";

export default function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "font-mono text-[12px] uppercase tracking-[.2em] text-papel-tinta-2",
        className,
      )}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 3: `Underline.tsx`**

```tsx
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  children: React.ReactNode;
  size?: "sm" | "lg" | "xl";
  tone?: "ink" | "light";
  className?: string;
  event?: string;
};

const sizes = {
  sm: "text-[15px] font-medium pb-0.5 after:h-[2px]",
  lg: "text-[21px] font-semibold pb-[3px] after:h-[3px]",
  xl: "text-[26px] md:text-[30px] font-semibold pb-[3px] after:h-[3px]",
};

export default function Underline({
  href,
  children,
  size = "lg",
  tone = "ink",
  className,
  event,
}: Props) {
  const classes = cn(
    "group relative inline-block whitespace-nowrap leading-none tracking-[-.01em]",
    "after:absolute after:bottom-0 after:left-0 after:w-full hover:after:animate-underline",
    tone === "ink" ? "text-papel-tinta after:bg-papel-rojo" : "text-white after:bg-white",
    sizes[size],
    className,
  );
  const arrow = (
    <span
      className={cn(
        "ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1",
        tone === "ink" ? "text-papel-rojo" : "text-white",
      )}
    >
      →
    </span>
  );
  if (!href) {
    return (
      <button type="submit" className={classes}>
        {children}
        {arrow}
      </button>
    );
  }
  return (
    <Link href={href} className={classes} data-event={event}>
      {children}
      {arrow}
    </Link>
  );
}
```

- [ ] **Step 4: `Reveal.tsx`**

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export default function Reveal({ children, delay = 0, className }: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 5: `Sticker.tsx`**

```tsx
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type Props = {
  cap?: string;
  main: string;
  sub?: string;
  className?: string;
  style?: CSSProperties;
};

export default function Sticker({ cap, main, sub, className, style }: Props) {
  return (
    <div
      style={style}
      className={cn(
        "inline-block -rotate-3 rounded bg-papel-verde px-3.5 py-2.5 font-mono text-[11.5px] leading-tight text-papel-foja shadow-[0_8px_20px_rgba(30,42,35,.28)]",
        className,
      )}
    >
      {cap && <div>{cap}</div>}
      <div className="my-0.5 font-sans text-[15px] font-semibold">{main}</div>
      {sub && <div>{sub}</div>}
    </div>
  );
}
```

- [ ] **Step 6: `Chips.tsx`**

```tsx
import { cn } from "@/lib/utils";

export default function Chips({
  items,
  last,
  className,
}: {
  items: string[];
  last?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {items.map((it) => (
        <span
          key={it}
          className="rounded-full border border-papel-borde bg-papel-foja px-3 py-1.5 font-mono text-[12px] text-papel-tinta"
        >
          {it}
        </span>
      ))}
      {last && (
        <span className="rounded-full border border-dashed border-papel-borde px-3 py-1.5 font-mono text-[12px] text-papel-tinta-3">
          {last}
        </span>
      )}
    </div>
  );
}
```

- [ ] **Step 7: `Questions.tsx`**

```tsx
import type { Question } from "@/content/types";
import Reveal from "./Reveal";

export default function Questions({ items }: { items: Question[] }) {
  return (
    <section className="grid gap-10 px-5 py-16 md:grid-cols-3 md:px-16">
      {items.map((q, i) => (
        <Reveal key={q.q} delay={i * 0.08}>
          <div className="mb-3.5 border-t border-papel-tinta pt-3 font-mono text-[12px] text-papel-tinta-3">
            0{i + 1}
          </div>
          <h3 className="mb-2.5 text-[21px] font-semibold leading-[1.15] tracking-[-.02em]">
            {q.q}
          </h3>
          <p className="text-[15px] text-papel-tinta-2">{q.a}</p>
        </Reveal>
      ))}
    </section>
  );
}
```

- [ ] **Step 8: `Closing.tsx`**

```tsx
import Eyebrow from "./Eyebrow";
import Underline from "./Underline";

type Props = {
  eyebrow: string;
  title: string;
  text: string;
  cta: { label: string; href: string };
  note: string;
};

export default function Closing({ eyebrow, title, text, cta, note }: Props) {
  return (
    <section className="mx-5 grid items-end gap-10 border-t border-papel-tinta py-16 md:mx-16 md:grid-cols-[1.3fr_1fr] md:gap-14 md:py-20">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-3 max-w-[640px] text-[40px] font-bold leading-[1] tracking-[-.03em] md:text-[54px]">
          {title}
        </h2>
        <p className="mt-4 max-w-[520px] text-[17px] text-papel-tinta-2">{text}</p>
      </div>
      <div className="flex flex-col items-start gap-3.5">
        <Underline href={cta.href} size="xl" event="cta_click">
          {cta.label}
        </Underline>
        <div className="font-mono text-[12px] leading-[1.45] text-papel-tinta-3">{note}</div>
      </div>
    </section>
  );
}
```

- [ ] **Step 9: `CardboardBand.tsx`**

```tsx
import { cn } from "@/lib/utils";

export default function CardboardBand({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "border-t border-papel-tinta bg-papel-carton px-5 py-14 md:px-16 md:py-16",
        className,
      )}
    >
      {children}
    </section>
  );
}
```

- [ ] **Step 10: Build y lint, stage**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && npm run lint && npm run build 2>&1 | tail -5 && git add src/components/paper && git status --short | head
```

---

### Task 5: Ventana y objetos

**Files:**
- Create: `src/components/paper/Window.tsx`
- Create: `src/components/paper/Sketch.tsx`

- [ ] **Step 1: `Window.tsx`**

```tsx
import type { Row, WindowSpec } from "@/content/types";
import { cn } from "@/lib/utils";

function Chip({ label, on }: { label: string; on?: boolean }) {
  return (
    <span
      className={cn(
        "h-fit whitespace-nowrap rounded border px-1.5 py-[3px] font-geistmono text-[9px]",
        on
          ? "border-luvant-200 bg-luvant-200 text-luvant-950"
          : "border-white/15 text-luvant-400",
      )}
    >
      {label}
    </span>
  );
}

function Rows({ rows }: { rows: Row[] }) {
  return (
    <>
      {rows.map((r) => (
        <div
          key={r.title}
          className="grid grid-cols-[1fr_auto] gap-2.5 border-t border-white/[.06] px-3.5 py-2.5"
        >
          <div>
            <b className="block font-medium">{r.title}</b>
            <small className="mt-0.5 block text-[10px] text-luvant-500">{r.sub}</small>
          </div>
          {r.chip && <Chip label={r.chip} on={r.chipOn} />}
        </div>
      ))}
    </>
  );
}

const mono = "font-geistmono text-[9.5px] not-italic text-luvant-500";

function Body({ spec }: { spec: WindowSpec }) {
  switch (spec.kind) {
    case "search":
      return (
        <>
          <div className="mx-3.5 mb-2 mt-3 flex justify-between rounded-lg border border-white/15 px-3 py-2 text-[12px] text-luvant-200">
            {spec.query}
            <span className="font-geistmono text-[10px] text-luvant-500">{spec.total}</span>
          </div>
          <div className="flex flex-wrap gap-1.5 px-3.5 pb-2.5">
            {spec.facets.map((f) => (
              <span
                key={f.label}
                className={cn(
                  "rounded-full border px-2 py-[3px] font-geistmono text-[9.5px]",
                  f.on
                    ? "border-luvant-200 bg-luvant-200 text-luvant-950"
                    : "border-white/10 text-luvant-400",
                )}
              >
                {f.label}
              </span>
            ))}
          </div>
          <Rows rows={spec.rows} />
        </>
      );
    case "norm":
      return (
        <>
          <div className="flex items-start justify-between gap-2.5 px-3.5 pb-1.5 pt-3 text-[13px] font-medium">
            <div>
              {spec.name}
              <small className="mt-1 block font-geistmono text-[9.5px] font-normal text-luvant-500">
                {spec.meta}
              </small>
            </div>
            <Chip label={spec.chip} on />
          </div>
          <div className="flex gap-3.5 border-b border-white/[.06] px-3.5 pt-1.5 text-[11px] text-luvant-500">
            {spec.tabs.map((t, i) => (
              <span
                key={t}
                className={cn(
                  "pb-1.5",
                  i === spec.activeTab && "border-b border-white font-medium text-white",
                )}
              >
                {t}
              </span>
            ))}
          </div>
          <div className="px-3.5 pb-3.5 pt-2.5 text-[11px] leading-[1.5] text-luvant-300">
            {spec.paragraphs.map((p) => (
              <p key={p.article}>
                <em className={mono}>{p.article}</em>
                {" — "}
                {p.parts.map((part, i) =>
                  part.kind === "del" ? (
                    <del key={i} className="text-luvant-600">{part.text}</del>
                  ) : part.kind === "ins" ? (
                    <ins key={i} className="rounded-sm bg-white/15 no-underline">{part.text}</ins>
                  ) : part.kind === "note" ? (
                    <em key={i} className={mono}> {part.text}</em>
                  ) : (
                    <span key={i}>{part.text}</span>
                  ),
                )}
              </p>
            ))}
          </div>
        </>
      );
    case "flow":
      return (
        <div className="px-3.5 pb-3 pt-1.5 text-[11px]">
          {spec.steps.map((s, i) => (
            <div
              key={s.text}
              className={cn("flex items-center gap-2.5 py-2", i > 0 && "border-t border-white/[.06]")}
            >
              <i
                className={cn(
                  "relative inline-block h-3.5 w-3.5 shrink-0 rounded-full border",
                  s.state === "ok"
                    ? "border-luvant-200 bg-luvant-200 after:absolute after:left-[4px] after:top-[1.5px] after:h-[7px] after:w-[3px] after:rotate-45 after:border-b-[1.5px] after:border-r-[1.5px] after:border-luvant-950"
                    : "border-luvant-200 border-t-transparent",
                )}
              />
              <span className="text-luvant-300">{s.text}</span>
              {s.time && (
                <small className="ml-auto font-geistmono text-[9px] text-luvant-500">{s.time}</small>
              )}
            </div>
          ))}
        </div>
      );
    case "dashboard":
      return (
        <>
          <div className="flex gap-3.5 px-3.5 pt-2.5 font-geistmono text-[10px] text-luvant-500">
            {spec.kpis.map((k) => (
              <div key={k.label}>
                <b className="block font-geist text-[16px] font-medium tracking-[-.02em] text-white">
                  {k.value}
                </b>
                {k.label}
              </div>
            ))}
          </div>
          <div className="flex h-16 items-end gap-1.5 p-3">
            {spec.bars.map((h, i) => (
              <i key={i} className="flex-1 rounded-t-[3px] bg-white/20" style={{ height: `${h}%` }} />
            ))}
          </div>
        </>
      );
    case "code":
      return (
        <div className="px-3.5 py-3 font-geistmono text-[10.5px] leading-[1.65] text-luvant-400">
          {spec.lines.map((l) => (
            <div key={l}>{l}</div>
          ))}
        </div>
      );
    case "list":
      return <Rows rows={spec.rows} />;
    case "shop":
      return (
        <div className="grid grid-cols-4 gap-2 p-3">
          {spec.items.map((it) => (
            <div key={it.name} className="rounded border border-white/10 p-2">
              <div className={cn("mb-2 h-10 rounded-sm", it.out ? "bg-white/5" : "bg-papel-carton/80")} />
              <div className="truncate text-[10px] font-medium">{it.name}</div>
              <div className={cn("font-geistmono text-[9px]", it.out ? "text-luvant-600" : "text-luvant-500")}>
                {it.stock}
              </div>
            </div>
          ))}
        </div>
      );
    case "task":
      return (
        <div className="grid grid-cols-[1fr_auto] items-center gap-2.5 px-3.5 py-3 text-[11px]">
          <div>
            <b className="block font-medium">{spec.question}</b>
            <small className="mt-0.5 block text-[10px] text-luvant-500">{spec.meta}</small>
          </div>
          <div className="flex gap-1.5 font-geistmono text-[9px]">
            <span className="rounded border border-luvant-200 bg-luvant-200 px-2 py-1 text-luvant-950">Sí</span>
            <span className="rounded border border-white/20 px-2 py-1 text-luvant-200">No</span>
          </div>
        </div>
      );
  }
}

export default function Window({ spec, className }: { spec: WindowSpec; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "overflow-hidden rounded-[10px] bg-luvant-950 font-geist text-[11.5px] text-white shadow-[0_30px_70px_rgba(30,42,35,.30),0_0_0_1px_rgba(30,42,35,.18)]",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-white/[.06] px-3 py-2 font-geistmono text-[10px] text-luvant-500">
        <i className="h-2 w-2 rounded-full bg-white/10" />
        <i className="h-2 w-2 rounded-full bg-white/10" />
        <i className="h-2 w-2 rounded-full bg-white/10" />
        <span className="ml-1.5">{spec.title}</span>
      </div>
      <Body spec={spec} />
    </div>
  );
}
```

- [ ] **Step 2: `Sketch.tsx`**

```tsx
import type { SketchKind } from "@/content/types";
import { cn } from "@/lib/utils";

const box = "relative overflow-hidden rounded-md border border-papel-borde bg-papel-foja";
const node = "rounded border border-papel-borde px-2 py-1";

export default function Sketch({ kind, className }: { kind: SketchKind; className?: string }) {
  switch (kind) {
    case "lines":
      return (
        <div className={cn(box, className)}>
          <div className="absolute left-3 top-4 h-[7px] w-3/5 rounded bg-papel-carton" />
          <div className="absolute left-3 right-3 top-9 h-[7px] rounded bg-papel-carton" />
          <div className="absolute left-3 top-14 h-[7px] w-4/5 rounded bg-papel-carton" />
        </div>
      );
    case "nodes":
      return (
        <div className={cn(box, "flex items-center justify-center gap-2.5 font-mono text-[11px] text-papel-tinta-2", className)}>
          <span className={node}>correo</span>
          <b className="font-normal text-papel-tinta-3">→</b>
          <span className="rounded bg-papel-tinta px-2 py-1 text-papel-foja">lee</span>
          <b className="font-normal text-papel-tinta-3">→</b>
          <span className={node}>sistema</span>
        </div>
      );
    case "bars":
      return (
        <div className={cn(box, "flex items-end gap-1.5 px-3 pb-2.5 pt-3.5", className)}>
          {[40, 65, 50, 90, 70, 100, 80].map((h, i) => (
            <i key={i} className="flex-1 rounded-t-sm bg-papel-verde/85" style={{ height: `${h}%` }} />
          ))}
        </div>
      );
    case "systems":
      return (
        <div className={cn(box, "flex items-center justify-center font-mono text-[11px] text-papel-tinta-2", className)}>
          <span className={cn(node, "py-1.5")}>ERP</span>
          <span className="relative inline-block w-8 border-t border-dashed border-papel-tinta-3 after:absolute after:-top-[9px] after:left-2.5 after:bg-papel-foja after:text-[12px] after:text-papel-rojo after:content-['⇄']" />
          <span className={cn(node, "py-1.5")}>WhatsApp</span>
        </div>
      );
    case "shop":
      return (
        <div className={cn(box, "grid grid-cols-4 gap-1.5 p-2.5", className)}>
          {Array.from({ length: 8 }).map((_, i) => (
            <i key={i} className={cn("rounded-sm", i === 0 ? "bg-papel-rojo" : "bg-papel-carton")} />
          ))}
        </div>
      );
    case "code":
      return (
        <div className={cn("relative overflow-hidden rounded-md bg-luvant-950 p-3 font-geistmono text-[9.5px] leading-[1.5] text-luvant-400", className)}>
          <b className="font-normal text-white">POST</b> /api/v1/documents
          <br />
          {'{ "status": "ocr_done",'}
          <br />
          {'  "norms": 3, "pages": 12 }'}
        </div>
      );
  }
}
```

- [ ] **Step 3: Build y lint, stage**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && npm run lint && npm run build 2>&1 | tail -5 && git add src/components/paper && git status --short | head
```

---

### Task 6: Ficha, mesa, escritorio y "otras fichas"

**Files:**
- Create: `src/components/paper/PaperCard.tsx`, `Table.tsx`, `Desk.tsx`, `OtherCards.tsx`

- [ ] **Step 1: `PaperCard.tsx`**

```tsx
import Link from "next/link";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export type PaperCardProps = {
  number: string;
  tag: string;
  title: string;
  text: string;
  href: string;
  cta?: string;
  dark?: boolean;
  rotate?: number;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
};

export default function PaperCard({
  number,
  tag,
  title,
  text,
  href,
  cta,
  dark,
  rotate = 0,
  className,
  style,
  children,
}: PaperCardProps) {
  return (
    <Link
      href={href}
      style={{ ...style, "--r": `${rotate}deg` } as CSSProperties}
      className={cn(
        "block rotate-[var(--r)] rounded border pb-4 shadow-[0_14px_34px_rgba(30,42,35,.16)] transition-transform duration-200 hover:-translate-y-1 hover:rotate-0",
        dark
          ? "border-luvant-950 bg-luvant-950 text-white"
          : "border-papel-borde bg-papel-foja text-papel-tinta",
        className,
      )}
    >
      <div
        className={cn(
          "flex justify-between border-b px-4 py-2 text-[11px] uppercase tracking-[.1em]",
          dark
            ? "border-white/10 font-geistmono text-luvant-400"
            : "border-papel-borde font-mono text-papel-tinta-2",
        )}
      >
        <span>
          {dark ? "Producto" : "Ficha"}{" "}
          <b className={dark ? "text-white" : "text-papel-rojo"}>{number}</b>
        </span>
        <span>{tag}</span>
      </div>
      {children && <div className="mx-4 my-3 h-[84px] [&>*]:h-full">{children}</div>}
      <div
        className={cn(
          "mx-4 mb-1.5 text-[22px] font-semibold leading-[1.05] tracking-[-.02em]",
          dark && "font-geist",
        )}
      >
        {title}
      </div>
      <p className={cn("mx-4 text-[13.5px]", dark ? "text-luvant-400" : "text-papel-tinta-2")}>
        {text}
      </p>
      <div
        className={cn(
          "mx-4 mt-3 text-[11px]",
          dark ? "font-geistmono text-white" : "font-mono text-papel-rojo",
        )}
      >
        {cta ?? "ver más →"}
      </div>
    </Link>
  );
}
```

- [ ] **Step 2: `Table.tsx`** (las seis fichas de la home)

```tsx
import type { CSSProperties } from "react";
import PaperCard, { type PaperCardProps } from "./PaperCard";

const spots = [
  { l: "0%", t: "0px", r: -2 },
  { l: "25.7%", t: "40px", r: 1.2, z: 2 },
  { l: "53.2%", t: "8px", r: -1 },
  { l: "5.7%", t: "272px", r: 1.5 },
  { l: "34.2%", t: "300px", r: -1.8, z: 3 },
  { l: "65.6%", t: "260px", r: 2, z: 2 },
];

export default function Table({ cards }: { cards: Omit<PaperCardProps, "rotate">[] }) {
  return (
    <div className="flex flex-col gap-4 lg:relative lg:block lg:h-[540px]">
      {cards.map((c, i) => (
        <PaperCard
          key={c.href}
          {...c}
          rotate={spots[i].r}
          style={{ "--l": spots[i].l, "--t": spots[i].t, zIndex: spots[i].z } as CSSProperties}
          className="lg:absolute lg:left-[var(--l)] lg:top-[var(--t)] lg:w-[28.5%]"
        />
      ))}
    </div>
  );
}
```

- [ ] **Step 3: `Desk.tsx`**

```tsx
"use client";

import { useRef, type CSSProperties } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { WindowSpec } from "@/content/types";
import { cn } from "@/lib/utils";
import Sticker from "./Sticker";
import Window from "./Window";

export type DeskWindow = {
  spec: WindowSpec;
  left?: string;
  right?: string;
  top: string;
  width: string;
  rotate: number;
  z?: number;
};

type Props = {
  windows: DeskWindow[];
  sticker?: { cap?: string; main: string; sub?: string; left: string; bottom: string };
  height: number;
  className?: string;
};

const ease = [0.16, 1, 0.3, 1] as const;

export default function Desk({ windows, sticker, height, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [12, -12]);

  return (
    <div
      ref={ref}
      style={{ "--h": `${height}px` } as CSSProperties}
      className={cn(
        "relative -mx-5 mt-7 h-[220px] overflow-hidden lg:mx-0 lg:mt-11 lg:h-[var(--h)] lg:overflow-visible",
        className,
      )}
    >
      {windows.map((w, i) => (
        <motion.div
          key={i}
          style={
            {
              y,
              "--l": w.left ?? "auto",
              "--rt": w.right ?? "auto",
              "--t": w.top,
              "--w": w.width,
              "--r": `${w.rotate}deg`,
              zIndex: w.z,
            } as CSSProperties
          }
          className={cn(
            "absolute lg:left-[var(--l)] lg:right-[var(--rt)] lg:top-[var(--t)] lg:w-[var(--w)]",
            i === 0 ? "left-5 right-[-40px] top-2.5" : "hidden lg:block",
          )}
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: i * 0.08 }}
            className={i === 0 ? "-rotate-[1.5deg] lg:rotate-[var(--r)]" : "rotate-[var(--r)]"}
          >
            <Window spec={w.spec} />
          </motion.div>
        </motion.div>
      ))}
      {sticker && (
        <Sticker
          cap={sticker.cap}
          main={sticker.main}
          sub={sticker.sub}
          style={{ "--sl": sticker.left, "--sb": sticker.bottom } as CSSProperties}
          className="absolute bottom-3.5 left-8 z-10 lg:bottom-[var(--sb)] lg:left-[var(--sl)]"
        />
      )}
    </div>
  );
}
```

- [ ] **Step 4: `OtherCards.tsx`**

```tsx
import Link from "next/link";
import { lensLink, serviceLinks } from "@/content/services";
import { cn } from "@/lib/utils";
import Eyebrow from "./Eyebrow";

export default function OtherCards({ exclude }: { exclude: string }) {
  const items = [...serviceLinks, lensLink].filter((s) => s.slug !== exclude);
  return (
    <section className="px-5 pb-14 pt-12 md:px-16">
      <Eyebrow>Otras fichas</Eyebrow>
      <div className="mt-7 grid grid-cols-2 gap-3.5 md:grid-cols-5">
        {items.map((s, i) => {
          const dark = s.slug === "lens";
          return (
            <Link
              key={s.slug}
              href={s.path}
              className={cn(
                "rounded border px-3.5 pb-3.5 pt-3 shadow-[0_8px_20px_rgba(30,42,35,.08)] transition-transform duration-200 hover:-translate-y-1 hover:rotate-0",
                i % 2 ? "rotate-[.6deg]" : "-rotate-[.6deg]",
                dark ? "border-luvant-950 bg-luvant-950 text-white" : "border-papel-borde bg-papel-foja",
              )}
            >
              <small
                className={cn(
                  "mb-1.5 block text-[10.5px] uppercase tracking-[.1em]",
                  dark ? "font-geistmono text-luvant-400" : "font-mono text-papel-tinta-3",
                )}
              >
                {dark ? "Producto" : "Ficha"}{" "}
                <b className={dark ? "text-white" : "text-papel-rojo"}>{s.number}</b>
              </small>
              <b className="text-[15px] font-semibold tracking-[-.01em]">{s.name}</b>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Build y lint, stage**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && npm run lint && npm run build 2>&1 | tail -5 && git add src/components/paper && git status --short | head
```

---

### Task 7: Nav y pie

**Files:**
- Create: `src/components/paper/Nav.tsx`, `src/components/paper/Footer.tsx`

- [ ] **Step 1: `Nav.tsx`**

```tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { lensLink, serviceLinks } from "@/content/services";
import { cta } from "@/content/shared";
import { cn } from "@/lib/utils";
import Mark from "./Mark";
import Underline from "./Underline";

const links = [
  { label: "Qué hacemos", href: serviceLinks[0].path, prefix: "/servicios" },
  { label: "Luvant Lens", href: lensLink.path, prefix: "/productos" },
  { label: "Blog", href: "/blog", prefix: "/blog" },
  { label: "Contacto", href: "/contacto", prefix: "/contacto" },
];

const all = [...serviceLinks, lensLink];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="relative z-40 border-b border-papel-borde-suave bg-papel-foja">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-papel-foja focus:px-3 focus:py-2"
      >
        Ir al contenido
      </a>
      <div className="flex items-center justify-between px-5 py-4 md:px-16 md:py-5">
        <Link
          href="/"
          aria-label="Luvant, inicio"
          className="flex items-center gap-2 text-[21px] font-bold tracking-[-.02em]"
        >
          <Mark />
          Luvant
        </Link>
        <nav className="hidden items-center gap-7 text-[15px] text-papel-tinta-2 md:flex">
          {links.map((l) => (
            <div key={l.href} className="group relative">
              <Link
                href={l.href}
                className={cn(
                  "py-2 hover:text-papel-tinta",
                  pathname.startsWith(l.prefix) && "font-medium text-papel-tinta",
                )}
              >
                {l.label}
              </Link>
              {l.prefix === "/servicios" && (
                <div className="absolute left-0 top-full hidden w-64 pt-3 group-focus-within:block group-hover:block">
                  <div className="rounded border border-papel-borde bg-papel-foja py-2 shadow-[0_14px_34px_rgba(30,42,35,.16)]">
                    {all.map((s) => (
                      <Link
                        key={s.slug}
                        href={s.path}
                        className="flex items-baseline gap-3 px-4 py-2 text-[14px] text-papel-tinta hover:bg-papel-foja-2"
                      >
                        <small className="w-5 font-mono text-[11px] text-papel-tinta-3">{s.number}</small>
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="hidden md:block">
          <Underline href={cta.href} size="sm" event="cta_click">
            {cta.label}
          </Underline>
        </div>
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="h-3.5 w-[22px] border-y-2 border-papel-tinta md:hidden"
        />
      </div>
      {open && (
        <div className="absolute inset-x-0 top-full border-b border-papel-borde bg-papel-foja px-5 pb-8 pt-2 md:hidden">
          {all.map((s) => (
            <Link
              key={s.slug}
              href={s.path}
              className="flex items-baseline gap-3 border-b border-papel-borde-suave py-3 text-[17px]"
            >
              <small className="w-6 font-mono text-[11px] text-papel-tinta-3">{s.number}</small>
              {s.name}
            </Link>
          ))}
          <Link href="/blog" className="block border-b border-papel-borde-suave py-3 text-[17px]">
            Blog
          </Link>
          <Link href="/contacto" className="block border-b border-papel-borde-suave py-3 text-[17px]">
            Contacto
          </Link>
          <div className="pt-6">
            <Underline href={cta.href} size="lg" event="cta_click">
              {cta.label}
            </Underline>
          </div>
        </div>
      )}
    </header>
  );
}
```

- [ ] **Step 2: `Footer.tsx`**

```tsx
import Link from "next/link";
import { lensLink, serviceLinks } from "@/content/services";
import { footer } from "@/content/shared";
import { EMAIL } from "@/lib/site";
import Mark from "./Mark";

const cap = "mb-3 font-mono text-[11px] uppercase tracking-[.15em] text-papel-tinta-3";
const item = "mb-2 block text-[13.5px] hover:underline";

export default function Footer() {
  return (
    <footer className="grid gap-10 bg-papel-tinta px-5 pb-8 pt-12 text-papel-carton md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-16">
      <div>
        <div className="flex items-center gap-2 text-[21px] font-bold tracking-[-.02em] text-papel-foja">
          <Mark tone="paper" />
          Luvant
        </div>
        <p className="mt-3 max-w-[260px] text-[13.5px]">{footer.blurb}</p>
      </div>
      <div>
        <div className={cap}>Qué hacemos</div>
        {serviceLinks.map((s) => (
          <Link key={s.slug} href={s.path} className={item}>
            {s.name}
          </Link>
        ))}
      </div>
      <div>
        <div className={cap}>Luvant Lens</div>
        <Link href={lensLink.path} className={item}>
          Normativa para organismos
        </Link>
        <Link href={`${lensLink.path}#integradores`} className={item}>
          API de documentos
        </Link>
      </div>
      <div>
        <div className={cap}>Luvant</div>
        <Link href="/blog" className={item}>
          Blog
        </Link>
        <Link href="/contacto" className={item}>
          Contacto
        </Link>
      </div>
      <div className="col-span-full mt-3 flex flex-col gap-2 border-t border-papel-carton/20 pt-4 font-mono text-[11px] text-papel-tinta-3 md:flex-row md:justify-between">
        <span>
          © {new Date().getFullYear()} Luvant · {EMAIL}
        </span>
        <span>{footer.madeIn}</span>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Build y lint, stage**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && npm run lint && npm run build 2>&1 | tail -5 && git add src/components/paper && git status --short | head
```

---

### Task 8: Home

**Files:**
- Create: `src/content/home.ts`
- Modify: `src/app/(es)/page.tsx` (reemplazo completo)

- [ ] **Step 1: `src/content/home.ts`**

```ts
import type { SketchKind, WindowSpec } from "./types";

export const home = {
  title: "Luvant: software a medida y automatización con IA para tu negocio · Córdoba",
  description:
    "Dejá de perder horas en lo mismo de todos los días. Software a medida, automatizaciones con IA, tableros, integraciones y Luvant Lens. Precio cerrado antes de empezar.",
  updatedAt: "2026-09-13",
  h1: "Dejá de perder horas en lo mismo de ",
  h1Accent: "todos los días.",
  intro:
    "Software a medida y automatizaciones con IA para tu empresa, tu estudio o tu organismo. Precio cerrado antes de empezar.",
  sticker: { cap: "Cliente", main: "Municipalidad de Embalse", sub: "Córdoba" },
  cards: {
    eyebrow: "Qué hacemos",
    title: "Seis maneras de sacarte trabajo de encima.",
    text: "Cada una se escribe para tu operación y se enchufa a lo que ya usás.",
    items: [
      { sketch: "lines", text: "El sistema que necesitás y no existe: pedidos, turnos, stock, expedientes." },
      { sketch: "nodes", text: "Correos, facturas y documentos que se leen y se cargan solos. Nadie transcribe." },
      { sketch: "bars", text: "Todas tus planillas en un tablero que se entiende de un vistazo." },
      { sketch: "systems", text: "Tu facturación, tu ERP y tu WhatsApp hablando entre sí. Nada cargado dos veces." },
      { sketch: "shop", text: "Tu sitio, tu tienda o tu app, conectados a tu stock y tu cobro." },
    ] as { sketch: SketchKind; text: string }[],
    lens: { text: "Miles de documentos leídos y buscables. Para organismos e integradores.", cta: "ver Lens →" },
  },
  lens: {
    eyebrow: "Producto · Luvant Lens",
    title: "Miles de documentos leídos, ordenados y buscables.",
    text: "OCR, extracción, texto ordenado con cada modificación aplicada, buscador y panel de revisión. Lo que un organismo tarda años en ordenar a mano, en semanas.",
    columns: [
      { title: "Para organismos", text: "Ordenanzas, decretos y resoluciones con su vigencia y el texto al día." },
      { title: "Para integradores", text: "API de documentos: subís un PDF, recibís los datos por webhook." },
    ],
    cta: { label: "Ver Luvant Lens", href: "/productos/lens" },
    tag: "Normativa al día",
  },
};

export const normWindow: WindowSpec = {
  kind: "norm",
  title: "luvant lens · ficha de norma",
  name: "Ordenanza 1.234/2019 · Habilitaciones comerciales",
  meta: "Concejo Deliberante · 4 relaciones",
  chip: "Vigente",
  tabs: ["Texto original", "Relaciones", "Texto ordenado"],
  activeTab: 2,
  paragraphs: [
    {
      article: "Art. 3º",
      parts: [
        { text: "El plazo de la habilitación será de " },
        { text: "dos años", kind: "del" },
        { text: " " },
        { text: "cinco años", kind: "ins" },
        { text: ", renovable." },
        { text: "· sust. por Ord. 1.402/2022", kind: "note" },
      ],
    },
  ],
};

export const salesWindow: WindowSpec = {
  kind: "flow",
  title: "tablero · ventas",
  steps: [
    { text: "Planilla de caja leída", time: "08:00", state: "ok" },
    { text: "Stock actualizado", time: "08:00", state: "ok" },
    { text: "Resumen al dueño", time: "…", state: "run" },
  ],
};

export const invoicesWindow: WindowSpec = {
  kind: "flow",
  title: "automatización · facturas",
  steps: [
    { text: "Correo recibido de Proveedor S.A.", time: "09:41", state: "ok" },
    { text: "Factura A leída · CUIT, total", time: "09:41", state: "ok" },
    { text: "Cargada en el sistema contable", time: "09:42", state: "ok" },
    { text: "Aviso por WhatsApp", time: "…", state: "run" },
  ],
};

export const searchWindow: WindowSpec = {
  kind: "search",
  title: "normativa · tu organismo",
  query: "habilitación comercial 2019",
  total: "3.412 normas",
  facets: [
    { label: "Todas", on: true },
    { label: "Ordenanzas" },
    { label: "Decretos" },
    { label: "Vigentes" },
    { label: "2015–2024" },
  ],
  rows: [
    { title: "Ordenanza 1.234/2019", sub: "Régimen de habilitaciones comerciales · Concejo Deliberante", chip: "Vigente", chipOn: true },
    { title: "Decreto 456/2021", sub: "Reglamenta la Ord. 1.234/2019 · Departamento Ejecutivo", chip: "Reglamenta" },
    { title: "Ordenanza 1.402/2022", sub: "Modifica el art. 3º de la Ord. 1.234/2019", chip: "Modifica" },
  ],
};
```

- [ ] **Step 2: `src/app/(es)/page.tsx`** (reemplazo completo)

```tsx
import type { Metadata } from "next";
import CardboardBand from "@/components/paper/CardboardBand";
import Closing from "@/components/paper/Closing";
import Desk from "@/components/paper/Desk";
import Eyebrow from "@/components/paper/Eyebrow";
import Footer from "@/components/paper/Footer";
import Nav from "@/components/paper/Nav";
import Questions from "@/components/paper/Questions";
import Reveal from "@/components/paper/Reveal";
import Sketch from "@/components/paper/Sketch";
import Sticker from "@/components/paper/Sticker";
import Table from "@/components/paper/Table";
import Underline from "@/components/paper/Underline";
import Window from "@/components/paper/Window";
import { home, invoicesWindow, normWindow, salesWindow, searchWindow } from "@/content/home";
import { lensLink, serviceLinks } from "@/content/services";
import { closing, cta, homeQuestions } from "@/content/shared";
import { faqJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: home.title,
  description: home.description,
  path: "/",
  ogSlug: "home",
});

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeQuestions)} />
      <Nav />
      <main id="main-content">
        <section className="px-5 pt-12 md:px-16 md:pt-[72px]">
          <h1 className="max-w-[1000px] text-[46px] font-bold leading-[.96] tracking-[-.035em] md:text-[92px]">
            {home.h1}
            <span className="text-papel-rojo">{home.h1Accent}</span>
          </h1>
          <div className="mt-6 flex flex-col gap-6 md:mt-8 md:flex-row md:items-end md:justify-between md:gap-10">
            <p className="max-w-[560px] text-[16px] leading-[1.4] text-papel-tinta-2 md:text-[18px]">
              {home.intro}
            </p>
            <div className="flex flex-col gap-3 md:items-end md:text-right">
              <Underline href={cta.href} size="lg" event="cta_click">
                {cta.label}
              </Underline>
              <div className="font-mono text-[12px] leading-[1.45] text-papel-tinta-3">
                {cta.note[0]}
                <br />
                {cta.note[1]}
              </div>
            </div>
          </div>
          <Desk
            height={330}
            windows={[
              { spec: normWindow, left: "0%", top: "30px", width: "46%", rotate: -1, z: 2 },
              { spec: salesWindow, left: "39%", top: "0px", width: "30%", rotate: 1.2, z: 1 },
              { spec: invoicesWindow, right: "0%", top: "46px", width: "34%", rotate: -0.6, z: 3 },
            ]}
            sticker={{ ...home.sticker, left: "33%", bottom: "20px" }}
          />
        </section>

        <section className="border-t border-papel-tinta bg-papel-foja-2 px-5 py-14 md:px-16 md:py-16">
          <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
            <div>
              <Eyebrow>{home.cards.eyebrow}</Eyebrow>
              <h2 className="mt-3 max-w-[620px] text-[30px] font-bold leading-[1] tracking-[-.03em] md:text-[40px]">
                {home.cards.title}
              </h2>
            </div>
            <p className="max-w-[380px] text-[16px] text-papel-tinta-2">{home.cards.text}</p>
          </div>
          <Table
            cards={[
              ...serviceLinks.map((s, i) => ({
                number: s.number,
                tag: s.tag,
                title: s.name,
                text: home.cards.items[i].text,
                href: s.path,
                children: <Sketch kind={home.cards.items[i].sketch} />,
              })),
              {
                number: lensLink.number,
                tag: lensLink.tag,
                title: lensLink.name,
                text: home.cards.lens.text,
                href: lensLink.path,
                cta: home.cards.lens.cta,
                dark: true,
                children: <Sketch kind="code" />,
              },
            ]}
          />
        </section>

        <CardboardBand className="grid items-center gap-10 md:grid-cols-[1fr_1.15fr] md:gap-14">
          <div>
            <Eyebrow>{home.lens.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-[30px] font-bold leading-[1] tracking-[-.03em] md:text-[40px]">
              {home.lens.title}
            </h2>
            <p className="my-4 max-w-[460px] text-[17px] leading-[1.45] text-papel-tinta-2">{home.lens.text}</p>
            <div className="mb-6 grid max-w-[480px] grid-cols-2 gap-4">
              {home.lens.columns.map((c) => (
                <div key={c.title} className="border-t border-papel-tinta pt-2.5 text-[13.5px] text-papel-tinta-2">
                  <b className="mb-1 block text-[14.5px] font-semibold text-papel-tinta">{c.title}</b>
                  {c.text}
                </div>
              ))}
            </div>
            <Underline href={home.lens.cta.href} size="lg">
              {home.lens.cta.label}
            </Underline>
          </div>
          <Reveal className="relative">
            <Window spec={searchWindow} />
            <Sticker main={home.lens.tag} className="absolute -bottom-3 -left-3.5 rotate-2 text-[11px] uppercase tracking-[.1em] [&>div]:my-0 [&>div]:font-mono [&>div]:text-[11px] [&>div]:font-normal" />
          </Reveal>
        </CardboardBand>

        <Questions items={homeQuestions} />
        <Closing eyebrow={closing.eyebrow} title={closing.title} text={closing.text} cta={cta} note={closing.note} />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 3: Build, lint y captura**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && npm run lint && npm run build 2>&1 | tail -8
```

Después, el comando de captura de la tarea 1 con `RUTA` vacío, y mirar `.superpowers/shots/-1280.png` y `-390.png`. Comparar contra `.superpowers/brainstorm/943-1789315814/content/home-final-v2.html` (abrirlo en el navegador): mismo orden de secciones, tres ventanas y sticker en el escritorio, seis fichas desparramadas en desktop y apiladas en móvil, banda cartón con la ventana del buscador y la etiqueta verde. El botón "Pedí tu presupuesto" es texto con subrayado rojo, no un relleno.

- [ ] **Step 4: Stage**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && git add src/content/home.ts "src/app/(es)/page.tsx" && git status --short | head
```

---

### Task 9: Plantilla de ficha y las cinco rutas de servicio

**Files:**
- Create: `src/components/paper/ServicePage.tsx`
- Create: `src/content/services/{desarrollo-software-a-medida,automatizacion-con-ia,datos-y-tableros,integracion-de-sistemas,web-ecommerce-y-apps}.ts` (contenido en la tarea 10)
- Create: `src/app/(es)/servicios/{automatizacion-con-ia,datos-y-tableros,web-ecommerce-y-apps}/page.tsx`
- Modify: `src/app/(es)/servicios/{desarrollo-software-a-medida,integracion-de-sistemas}/page.tsx` (reemplazo completo)
- Delete: `src/app/(es)/servicios/{desarrollo-software-a-medida,integracion-de-sistemas}/{layout,opengraph-image}.tsx`, `src/app/(es)/servicios/{automatizacion-de-procesos,consultoria-tecnica}/`, `src/app/(es)/servicios/layout.tsx`

Esta tarea deja la plantilla y las cinco rutas apuntando a archivos de contenido; la tarea 10 escribe el contenido. Para que el build pase entre las dos, en esta tarea cada archivo de contenido se crea con el contenido completo de la tarea 10 — es decir, **las tareas 9 y 10 se ejecutan juntas** (una sola vuelta de build). Si se ejecutan por separado, hacer primero la 10 y después la 9.

- [ ] **Step 1: `ServicePage.tsx`**

```tsx
import Link from "next/link";
import Chips from "./Chips";
import Closing from "./Closing";
import Desk from "./Desk";
import Eyebrow from "./Eyebrow";
import Footer from "./Footer";
import Nav from "./Nav";
import OtherCards from "./OtherCards";
import Questions from "./Questions";
import Reveal from "./Reveal";
import Underline from "./Underline";
import Window from "./Window";
import type { Service } from "@/content/types";
import { closing, cta, howWeWork, includesRest, situationsHeading } from "@/content/shared";
import { breadcrumbJsonLd, faqJsonLd, JsonLd, serviceJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

const rotations = ["-rotate-1", "rotate-[.8deg] md:mt-4", "-rotate-[.6deg]"];

export default function ServicePage({ service: s }: { service: Service }) {
  const includes = [s.includesFirst, ...includesRest];
  return (
    <>
      <JsonLd data={serviceJsonLd(s)} />
      <JsonLd data={faqJsonLd(s.questions)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Luvant", path: "/" },
          { name: "Qué hacemos", path: "/servicios/desarrollo-software-a-medida" },
          { name: s.name, path: s.path },
        ])}
      />
      <Nav />
      <main id="main-content">
        <div className="px-5 pt-3.5 font-mono text-[11.5px] text-papel-tinta-3 md:px-16">
          <Link href="/">Luvant</Link> / <Link href="/servicios/desarrollo-software-a-medida">Qué hacemos</Link> /{" "}
          <span className="text-papel-tinta">{s.name}</span>
        </div>
        <section className="px-5 pt-8 md:px-16 md:pt-10">
          <Eyebrow>
            Ficha <b className="font-bold text-papel-rojo">{s.number}</b> · {s.name}
          </Eyebrow>
          <h1 className="mt-4 max-w-[980px] text-[42px] font-bold leading-[.96] tracking-[-.035em] md:text-[76px]">
            {s.h1}
            <span className="text-papel-rojo">{s.h1Accent}</span>
          </h1>
          <div className="mt-6 flex flex-col gap-6 md:mt-8 md:flex-row md:items-end md:justify-between md:gap-10">
            <p className="max-w-[600px] text-[16px] leading-[1.4] text-papel-tinta-2 md:text-[18px]">{s.intro}</p>
            <div className="flex flex-col gap-3 md:items-end md:text-right">
              <Underline href={cta.href} size="lg" event="cta_click">
                {cta.label}
              </Underline>
              <div className="font-mono text-[12px] leading-[1.45] text-papel-tinta-3">
                {cta.note[0]}
                <br />
                {cta.note[1]}
              </div>
            </div>
          </div>
          <Desk
            height={300}
            windows={[
              { spec: s.windows[0], left: "0%", top: "0px", width: "58%", rotate: -1, z: 2 },
              { spec: s.windows[1], right: "0%", top: "30px", width: "44%", rotate: 1.2, z: 1 },
            ]}
            sticker={{ main: "Precio cerrado", left: "50%", bottom: "20px" }}
          />
        </section>

        <section className="border-t border-papel-tinta bg-papel-carton px-5 py-14 md:px-16 md:py-16">
          <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
            <div>
              <Eyebrow>{situationsHeading.eyebrow}</Eyebrow>
              <h2 className="mt-3 max-w-[620px] text-[30px] font-bold leading-[1] tracking-[-.03em] md:text-[40px]">
                {situationsHeading.title}
              </h2>
            </div>
            <p className="max-w-[400px] text-[16px] text-papel-tinta-2">{situationsHeading.text}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {s.situations.map((sit, i) => (
              <Reveal key={sit.title} delay={i * 0.08} className={cn("rounded border border-papel-borde bg-papel-foja pb-[18px] shadow-[0_14px_34px_rgba(30,42,35,.12)]", rotations[i])}>
                <div className="flex justify-between border-b border-papel-borde px-4 py-2 font-mono text-[11px] uppercase tracking-[.1em] text-papel-tinta-2">
                  <span>
                    Si <b className="font-bold text-papel-rojo">{sit.when}</b>
                  </span>
                  <span>{sit.tag}</span>
                </div>
                <Window spec={sit.window} className="mx-4 my-3.5 text-[10.5px] shadow-[0_10px_24px_rgba(30,42,35,.2)]" />
                <h3 className="mx-4 mb-2 text-[22px] font-semibold leading-[1.05] tracking-[-.02em]">{sit.title}</h3>
                <p className="mx-4 text-[14px] text-papel-tinta-2">{sit.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="grid gap-12 border-t border-papel-tinta px-5 py-14 md:grid-cols-2 md:gap-14 md:px-16 md:py-16">
          <div>
            <Eyebrow>Qué incluye</Eyebrow>
            <div className="mt-4 border-t border-papel-tinta">
              {includes.map((it, i) => (
                <div key={it.title} className="flex gap-4 border-b border-papel-borde-suave py-3 text-[16px]">
                  <small className="w-6 shrink-0 font-mono text-[11px] text-papel-tinta-3">0{i + 1}</small>
                  <div>
                    <b className="font-medium">{it.title}</b> <span className="text-papel-tinta-2">{it.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Eyebrow>Con qué se conecta</Eyebrow>
            <p className="mt-4 max-w-[420px] text-[16px] text-papel-tinta-2">
              Lo que ya tenés. Si tu sistema no está en la lista, casi seguro que también.
            </p>
            <Chips items={s.connections} last="+ el tuyo" className="mt-5" />
            <Eyebrow className="mt-9">Cómo trabajamos</Eyebrow>
            <div className="mt-4 grid gap-6">
              {howWeWork.map((st, i) => (
                <div key={st.label} className="border-t border-papel-tinta pt-3.5">
                  <div className="mb-2.5 font-mono text-[12px] text-papel-rojo">
                    0{i + 1} · {st.label}
                  </div>
                  <b className="mb-2 block text-[22px] font-semibold leading-[1.1] tracking-[-.02em]">{st.title}</b>
                  <p className="text-[15px] text-papel-tinta-2">{st.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-papel-tinta bg-papel-foja-2">
          <Questions items={s.questions} />
        </div>
        <Closing eyebrow={closing.eyebrow} title={closing.title} text={closing.text} cta={cta} note={closing.note} />
        <OtherCards exclude={s.slug} />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Borrar las rutas y layouts viejos de servicios**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web
git rm -r -q "src/app/(es)/servicios/automatizacion-de-procesos" "src/app/(es)/servicios/consultoria-tecnica" "src/app/(es)/servicios/layout.tsx" \
  "src/app/(es)/servicios/desarrollo-software-a-medida/layout.tsx" "src/app/(es)/servicios/desarrollo-software-a-medida/opengraph-image.tsx" \
  "src/app/(es)/servicios/integracion-de-sistemas/layout.tsx" "src/app/(es)/servicios/integracion-de-sistemas/opengraph-image.tsx"
ls "src/app/(es)/servicios"
```

Si `git rm` falla porque algún archivo no está trackeado (los del grupo `(es)` son nuevos), usar `rm -r` para esos. Esperado: `desarrollo-software-a-medida  integracion-de-sistemas`.

- [ ] **Step 3: Las cinco `page.tsx`**

Todas iguales salvo el import. Crear las carpetas que falten (`automatizacion-con-ia`, `datos-y-tableros`, `web-ecommerce-y-apps`) y escribir en cada una de las cinco `src/app/(es)/servicios/<slug>/page.tsx`:

```tsx
import type { Metadata } from "next";
import ServicePage from "@/components/paper/ServicePage";
import { service } from "@/content/services/<slug>";
import { serviceMetadata } from "@/lib/seo";

export const metadata: Metadata = serviceMetadata(service);

export default function Page() {
  return <ServicePage service={service} />;
}
```

Con `<slug>` = `desarrollo-software-a-medida`, `automatizacion-con-ia`, `datos-y-tableros`, `integracion-de-sistemas`, `web-ecommerce-y-apps`.

- [ ] **Step 4: Build, lint, capturas** (después de la tarea 10)

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && npm run lint && npm run build 2>&1 | grep -E "servicios|error" 
```

Esperado: cinco líneas `○ /servicios/<slug>` y ningún `error`. Captura de `servicios/automatizacion-con-ia` a 1280 y 390; comparar con `ficha-page.html` del brainstorming.

- [ ] **Step 5: Stage**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && git add src/components/paper/ServicePage.tsx "src/app/(es)/servicios" src/content/services && git status --short | head -20
```

---

### Task 10: Contenido de las cinco fichas

**Files:**
- Create: `src/content/services/desarrollo-software-a-medida.ts`, `automatizacion-con-ia.ts`, `datos-y-tableros.ts`, `integracion-de-sistemas.ts`, `web-ecommerce-y-apps.ts`

Los textos son los de la spec §7.3, sin cambios. Cada archivo exporta `service: Service`.

- [ ] **Step 1: `desarrollo-software-a-medida.ts`**

```ts
import type { Service } from "../types";

export const service: Service = {
  slug: "desarrollo-software-a-medida",
  number: "01",
  name: "Software a medida",
  tag: "a medida",
  path: "/servicios/desarrollo-software-a-medida",
  title: "Software a medida para negocios, estudios y organismos | Luvant",
  description:
    "Sistemas de pedidos, turnos, stock y expedientes escritos para cómo trabaja tu negocio. Precio cerrado antes de empezar. Córdoba, Argentina.",
  updatedAt: "2026-09-13",
  h1: "El sistema que tu negocio necesita ",
  h1Accent: "y no existe.",
  intro:
    "Pedidos, turnos, stock, expedientes: lo que hoy llevás en papel, en planillas o en la cabeza. Un programa escrito para cómo trabajás vos, no una plantilla que te obliga a trabajar como ella.",
  windows: [
    {
      kind: "list",
      title: "sistema de pedidos · panadería",
      rows: [
        { title: "#1041 · Retira 12:30", sub: "2 kg pan, 6 medialunas · WhatsApp", chip: "Listo", chipOn: true },
        { title: "#1042 · Retira 12:45", sub: "1 torta 20 personas · mostrador", chip: "En horno" },
        { title: "#1043 · Envío 13:00", sub: "4 kg pan · WhatsApp", chip: "Pendiente" },
        { title: "#1044 · Retira 13:15", sub: "12 facturas, 1 kg pan · teléfono", chip: "Pendiente" },
      ],
    },
    {
      kind: "dashboard",
      title: "resumen · hoy",
      kpis: [
        { value: "38", label: "pedidos hoy" },
        { value: "29", label: "listos" },
        { value: "3", label: "sin retirar" },
      ],
      bars: [30, 55, 80, 100, 70, 40, 25],
    },
  ],
  situations: [
    {
      when: "tomás pedidos por WhatsApp o teléfono",
      tag: "pedidos",
      title: "Setenta pedidos por día, y ninguno se pierde.",
      text: "Los lee, arma el pedido y lo deja en pantalla ordenado por hora de retiro. Sobre el mismo WhatsApp que ya usás.",
      window: {
        kind: "flow",
        title: "pedidos",
        steps: [
          { text: "\"2 kg de pan y 6 medialunas\"", state: "ok" },
          { text: "Pedido armado · retira 12:30", state: "ok" },
          { text: "En pantalla del local", state: "run" },
        ],
      },
    },
    {
      when: "atendés con turnos",
      tag: "turnos",
      title: "Los turnos se dan solos. El mostrador sigue atendiendo.",
      text: "Da el turno, lo confirma y lo recuerda el día anterior, contra tu Google Calendar de siempre.",
      window: {
        kind: "flow",
        title: "turnos",
        steps: [
          { text: "Turno pedido · jueves 16:30", state: "ok" },
          { text: "Confirmado en Google Calendar", state: "ok" },
          { text: "Recordatorio el miércoles", state: "run" },
        ],
      },
    },
    {
      when: "llevás expedientes o trámites",
      tag: "expedientes",
      title: "Cada trámite con su estado, sin preguntar en qué oficina quedó.",
      text: "Quién lo tiene, qué falta y desde cuándo, en una pantalla que ve todo el equipo.",
      window: {
        kind: "list",
        title: "trámites",
        rows: [
          { title: "Exp. 2026-0412", sub: "Habilitación · Comercio · 3 días", chip: "En curso", chipOn: true },
          { title: "Exp. 2026-0409", sub: "Falta plano · Obras", chip: "Falta" },
        ],
      },
    },
  ],
  includesFirst: {
    title: "El programa, escrito para lo tuyo.",
    text: "No es una plantilla configurada: se escribe para cómo trabajás.",
  },
  connections: [
    "Google Sheets",
    "Excel",
    "Google Calendar",
    "WhatsApp Business",
    "AFIP",
    "Mercado Pago",
    "impresora de tickets",
    "lector de códigos",
    "tu sistema contable",
  ],
  questions: [
    {
      q: "«¿No me conviene comprar un sistema hecho?»",
      a: "Si hay uno que hace exactamente lo tuyo, sí, y te lo decimos. Los sistemas hechos sirven cuando tu negocio trabaja como ellos; cuando no, terminás trabajando para el sistema.",
    },
    {
      q: "«¿Quién lo mantiene después?»",
      a: "Nosotros. Y el código es tuyo: si algún día querés que lo siga otro, puede.",
    },
    {
      q: "«¿Necesito servidores o licencias?»",
      a: "No. Corre donde convenga (tu PC, un servidor chico, la nube) y no hay licencias por usuario.",
    },
  ],
  card: { sketch: "lines", text: "El sistema que necesitás y no existe: pedidos, turnos, stock, expedientes." },
};
```

- [ ] **Step 2: `automatizacion-con-ia.ts`**

```ts
import type { Service } from "../types";

export const service: Service = {
  slug: "automatizacion-con-ia",
  number: "02",
  name: "Automatización con IA",
  tag: "IA",
  path: "/servicios/automatizacion-con-ia",
  title: "Automatización con IA: facturas, pedidos y documentos que se cargan solos | Luvant",
  description:
    "Programas que leen correos, facturas, pedidos de WhatsApp y PDFs y los cargan en tu sistema. Con IA donde hace falta leer y reglas donde no. Precio cerrado.",
  updatedAt: "2026-09-13",
  h1: "Que los correos, las facturas y los pedidos se carguen ",
  h1Accent: "solos.",
  intro:
    "Un programa que lee lo que te llega (correo, WhatsApp, PDF, foto), saca los datos y los carga donde vos los cargás hoy a mano. Con inteligencia artificial donde hace falta leer, y reglas fijas donde no.",
  windows: [
    {
      kind: "flow",
      title: "automatización · facturas de proveedores · hoy",
      steps: [
        { text: "Correo recibido de Proveedor S.A. · factura-0001-00012345.pdf", time: "09:41", state: "ok" },
        { text: "Factura A leída · CUIT 30-71234567-9 · $148.350 · vence 30/09", time: "09:41", state: "ok" },
        { text: "Proveedor encontrado en el sistema contable · asiento creado", time: "09:42", state: "ok" },
        { text: "Aviso por WhatsApp a quien aprueba · aprobado", time: "09:58", state: "ok" },
        { text: "Correo recibido de Distribuidora Norte · remito-4471.jpg", time: "10:03", state: "run" },
      ],
    },
    {
      kind: "code",
      title: "resumen · esta semana",
      lines: [
        "documentos leídos: 212",
        "cargados sin tocar: 197",
        "a revisar por alguien: 15",
        "errores de tipeo: 0",
      ],
    },
  ],
  situations: [
    {
      when: "te llegan facturas",
      tag: "correo",
      title: "Dos días por mes cargando facturas. Que sean cero.",
      text: "Lee cada factura que llega por correo y la carga en tu sistema contable como la cargarías vos. Sin errores de tipeo.",
      window: {
        kind: "flow",
        title: "facturas",
        steps: [
          { text: "PDF en el correo", state: "ok" },
          { text: "Factura leída", state: "ok" },
          { text: "Cargada en contable", state: "ok" },
        ],
      },
    },
    {
      when: "te piden por WhatsApp",
      tag: "pedidos",
      title: "Setenta pedidos por WhatsApp, y ninguno se pierde.",
      text: "Lee los mensajes, arma el pedido solo y lo deja en pantalla ordenado por hora. Tu WhatsApp sigue siendo tu WhatsApp.",
      window: {
        kind: "flow",
        title: "pedidos",
        steps: [
          { text: "\"2 kg de pan y 6 medialunas\"", state: "ok" },
          { text: "Pedido armado · retira 12:30", state: "ok" },
          { text: "En pantalla del local", state: "run" },
        ],
      },
    },
    {
      when: "clasificás papeles",
      tag: "expedientes",
      title: "Cada papel a la oficina que corresponde, sin que nadie lo lea antes.",
      text: "Lee lo que entra, dice qué es y de quién es, y lo deja en la bandeja correcta con sus datos cargados.",
      window: {
        kind: "flow",
        title: "mesa de entradas",
        steps: [
          { text: "Escaneo recibido", state: "ok" },
          { text: "Es un reclamo · Obras · zona norte", state: "ok" },
          { text: "Derivado a la oficina", state: "ok" },
        ],
      },
    },
  ],
  includesFirst: {
    title: "El programa, escrito para tus documentos.",
    text: "No es una plantilla configurada: se escribe para tus documentos y tu sistema.",
  },
  connections: [
    "Gmail",
    "Outlook",
    "WhatsApp Business",
    "Google Sheets",
    "Excel",
    "Google Drive",
    "AFIP",
    "Tango",
    "Colppy",
    "Xubio",
    "Mercado Pago",
    "Tienda Nube",
    "Google Calendar",
    "tu sistema a medida",
  ],
  questions: [
    {
      q: "«¿Se equivoca?»",
      a: "A veces, como una persona. La diferencia es que cuando no está seguro no adivina: lo deja marcado. Vos decidís cuánta duda tolerás.",
    },
    {
      q: "«¿Mis datos van a parar a la IA?»",
      a: "Solo el texto del documento que hay que leer, en el momento de leerlo, a un proveedor que no lo usa para entrenar ni lo guarda. Nada queda afuera.",
    },
    {
      q: "«¿Y si cambia el formato de un proveedor?»",
      a: "Lee el contenido, no la posición en la hoja: un formato nuevo casi siempre entra solo. Si no, se ajusta y listo.",
    },
  ],
  card: { sketch: "nodes", text: "Correos, facturas y documentos que se leen y se cargan solos. Nadie transcribe." },
};
```

- [ ] **Step 3: `datos-y-tableros.ts`**

```ts
import type { Service } from "../types";

export const service: Service = {
  slug: "datos-y-tableros",
  number: "03",
  name: "Datos y tableros",
  tag: "datos",
  path: "/servicios/datos-y-tableros",
  title: "Tableros de control para pymes: todos tus números en una pantalla | Luvant",
  description:
    "Unificamos planillas, sistema contable y tienda en un tablero que se actualiza solo. Ventas, stock, caja y cobranzas de un vistazo. Precio cerrado.",
  updatedAt: "2026-09-13",
  h1: "Todos tus números en una pantalla ",
  h1Accent: "que se entiende.",
  intro:
    "Ventas, stock, caja, cobranzas: lo que hoy está repartido en planillas, en el sistema contable y en la cabeza de alguien, junto y actualizado solo. Para mirar a la mañana y saber cómo venís.",
  windows: [
    {
      kind: "dashboard",
      title: "tablero · septiembre",
      kpis: [
        { value: "$4,2 M", label: "ventas del mes" },
        { value: "$3,1 M", label: "cobrado" },
        { value: "3", label: "productos críticos" },
      ],
      bars: [40, 55, 45, 70, 65, 90, 75, 60, 85, 100],
    },
    {
      kind: "flow",
      title: "avisos · hoy",
      steps: [
        { text: "3 productos por debajo del mínimo", time: "07:30", state: "ok" },
        { text: "12 facturas vencen esta semana", time: "07:30", state: "ok" },
        { text: "Cierre de caja de ayer cuadró", time: "07:31", state: "ok" },
      ],
    },
  ],
  situations: [
    {
      when: "tenés varias planillas que no cierran entre sí",
      tag: "planillas",
      title: "Una sola verdad, y que se arme sola.",
      text: "Lee todas, las cruza y te muestra dónde no cuadran en vez de esconderlo.",
      window: {
        kind: "flow",
        title: "cruce",
        steps: [
          { text: "Ventas.xlsx leída", state: "ok" },
          { text: "Caja.xlsx leída", state: "ok" },
          { text: "2 diferencias marcadas", state: "run" },
        ],
      },
    },
    {
      when: "querés saber cómo viene el mes sin pedirlo",
      tag: "resumen",
      title: "El resumen llega solo, todas las mañanas.",
      text: "Ventas de ayer, caja, lo que vence hoy. Por correo o en una pantalla en el local.",
      window: {
        kind: "code",
        title: "resumen · lunes 07:30",
        lines: ["ventas ayer: $182.400", "caja: cuadró", "vence hoy: 4 facturas"],
      },
    },
    {
      when: "tenés sucursales o vendedores",
      tag: "sucursales",
      title: "Cada uno con lo suyo, vos con el total.",
      text: "Cada sucursal ve su tablero; vos ves todas juntas y comparadas.",
      window: {
        kind: "dashboard",
        title: "sucursales",
        kpis: [
          { value: "Centro", label: "$1,9 M" },
          { value: "Norte", label: "$1,4 M" },
          { value: "Online", label: "$0,9 M" },
        ],
        bars: [80, 60, 40],
      },
    },
  ],
  includesFirst: {
    title: "El tablero, armado con tus datos de verdad.",
    text: "Lee de donde ya están: planillas, sistema, tienda.",
  },
  connections: [
    "Google Sheets",
    "Excel",
    "Tango",
    "Colppy",
    "Xubio",
    "Mercado Pago",
    "Tienda Nube",
    "MercadoLibre",
    "AFIP",
    "tu base de datos",
    "tu sistema a medida",
  ],
  questions: [
    {
      q: "«¿Tengo que cargar datos en otro lado?»",
      a: "No. El tablero lee de donde ya están. Si algo no está en ningún lado, lo hablamos.",
    },
    {
      q: "«¿Es Power BI o algo así?»",
      a: "Puede serlo si ya lo usás. Si no, es una página tuya, sin licencias, que abre en cualquier celular.",
    },
    {
      q: "«¿Y si los datos están sucios?»",
      a: "Casi siempre lo están. Parte del trabajo es ordenarlos, y el tablero te muestra qué quedó dudoso en vez de esconderlo.",
    },
  ],
  card: { sketch: "bars", text: "Todas tus planillas en un tablero que se entiende de un vistazo." },
};
```

- [ ] **Step 4: `integracion-de-sistemas.ts`**

```ts
import type { Service } from "../types";

export const service: Service = {
  slug: "integracion-de-sistemas",
  number: "04",
  name: "Integración de sistemas",
  tag: "integración",
  path: "/servicios/integracion-de-sistemas",
  title: "Integración de sistemas: Tienda Nube, AFIP, contable y WhatsApp conectados | Luvant",
  description:
    "Conectamos tu tienda, tu facturación, tu stock y tu WhatsApp para que los datos pasen solos, sin cargar nada dos veces. Precio cerrado.",
  updatedAt: "2026-09-13",
  h1: "Tus sistemas hablando entre sí. ",
  h1Accent: "Nada cargado dos veces.",
  intro:
    "Tu tienda, tu facturación, tu WhatsApp, tu planilla: hoy alguien copia datos de uno al otro. Los conectamos para que pase solo, en el momento, sin errores de tipeo.",
  windows: [
    {
      kind: "flow",
      title: "integración · tienda → facturación",
      steps: [
        { text: "Pedido #4471 en Tienda Nube · $23.900", time: "11:02", state: "ok" },
        { text: "Factura B emitida en AFIP · CAE recibido", time: "11:02", state: "ok" },
        { text: "Remito generado · stock descontado", time: "11:02", state: "ok" },
        { text: "Factura enviada al cliente por correo", time: "11:03", state: "ok" },
        { text: "Pedido #4472 en Tienda Nube", time: "11:09", state: "run" },
      ],
    },
    {
      kind: "code",
      title: "hoy",
      lines: ["pedidos: 84", "facturados: 84", "cargados a mano: 0", "stock desfasado: 0"],
    },
  ],
  situations: [
    {
      when: "vendés online y facturás aparte",
      tag: "facturación",
      title: "Cada venta, facturada sola.",
      text: "El pedido entra, la factura sale en AFIP y el cliente la recibe, sin que nadie tipee un CUIT.",
      window: {
        kind: "flow",
        title: "venta → factura",
        steps: [
          { text: "Pedido en la tienda", state: "ok" },
          { text: "Factura en AFIP", state: "ok" },
          { text: "Enviada al cliente", state: "ok" },
        ],
      },
    },
    {
      when: "tu stock vive en dos lugares",
      tag: "stock",
      title: "Un stock, todas las bocas.",
      text: "Lo que se vende en el local se descuenta en la tienda, y al revés.",
      window: {
        kind: "flow",
        title: "stock",
        steps: [
          { text: "Venta en el local · 2 unidades", state: "ok" },
          { text: "Tienda Nube: 7 → 5", state: "ok" },
          { text: "MercadoLibre: 7 → 5", state: "run" },
        ],
      },
    },
    {
      when: "pasás datos de un sistema a otro a mano",
      tag: "datos",
      title: "Lo que entra por un lado, sale por el otro.",
      text: "Del formulario al CRM, del CRM a la planilla, de la planilla al contable. Solo.",
      window: {
        kind: "flow",
        title: "formulario → CRM",
        steps: [
          { text: "Consulta desde el sitio", state: "ok" },
          { text: "Contacto creado en el CRM", state: "ok" },
          { text: "Fila agregada en la planilla", state: "ok" },
        ],
      },
    },
  ],
  includesFirst: {
    title: "La conexión, escrita para tus dos sistemas.",
    text: "No un conector genérico: lo que tu operación necesita que pase entre ellos.",
  },
  connections: [
    "Tienda Nube",
    "MercadoLibre",
    "Mercado Pago",
    "AFIP",
    "Tango",
    "Colppy",
    "Xubio",
    "WhatsApp Business",
    "Google Sheets",
    "Gmail",
    "APIs propias",
  ],
  questions: [
    {
      q: "«¿Mi sistema tiene API?»",
      a: "Casi todos los conocidos sí. Si el tuyo no, hay otras formas (archivos, base de datos, la misma pantalla) y te decimos cuál conviene.",
    },
    {
      q: "«¿Se rompe si uno de los sistemas cambia?»",
      a: "Puede pasar; por eso avisa cuando algo no cuadra en vez de seguir de largo, y lo ajustamos.",
    },
    {
      q: "«¿Reemplaza a lo que uso?»",
      a: "No. Conecta lo que ya usás; nadie cambia de sistema.",
    },
  ],
  card: { sketch: "systems", text: "Tu facturación, tu ERP y tu WhatsApp hablando entre sí. Nada cargado dos veces." },
};
```

- [ ] **Step 5: `web-ecommerce-y-apps.ts`**

```ts
import type { Service } from "../types";

export const service: Service = {
  slug: "web-ecommerce-y-apps",
  number: "05",
  name: "Web, e-commerce y apps",
  tag: "web",
  path: "/servicios/web-ecommerce-y-apps",
  title: "Sitios web, tiendas online y apps a medida, conectados a tu stock y tu cobro | Luvant",
  description:
    "Sitios, e-commerce y apps internas que leen tu stock, cobran con Mercado Pago, facturan en AFIP y te avisan. Rápidos y hechos para Google. Precio cerrado.",
  updatedAt: "2026-09-13",
  h1: "Tu sitio, tu tienda o tu app, ",
  h1Accent: "conectados a tu negocio.",
  intro:
    "No una página que después nadie actualiza: un sitio o una tienda que lee tu stock, cobra, factura y te avisa. O una app interna para tu gente, que hace una sola cosa bien.",
  windows: [
    {
      kind: "shop",
      title: "tienda · stock real",
      items: [
        { name: "Remera básica", stock: "12 en stock" },
        { name: "Buzo capucha", stock: "4 en stock" },
        { name: "Gorra", stock: "sin stock", out: true },
        { name: "Campera", stock: "7 en stock" },
        { name: "Pantalón", stock: "9 en stock" },
        { name: "Zapatillas", stock: "2 en stock" },
        { name: "Medias x3", stock: "31 en stock" },
        { name: "Cinturón", stock: "sin stock", out: true },
      ],
    },
    {
      kind: "flow",
      title: "pedidos · hoy",
      steps: [
        { text: "#2210 cobrado con Mercado Pago", time: "10:12", state: "ok" },
        { text: "Facturado en AFIP", time: "10:12", state: "ok" },
        { text: "A preparar · aviso al depósito", time: "10:12", state: "run" },
      ],
    },
  ],
  situations: [
    {
      when: "vendés y todavía no tenés tienda",
      tag: "tienda",
      title: "Vendé mientras dormís, con el stock de verdad.",
      text: "Tienda conectada a tu stock y a tu cobro; lo que se vende se descuenta y se factura.",
      window: {
        kind: "flow",
        title: "tienda",
        steps: [
          { text: "Compra a las 23:40", state: "ok" },
          { text: "Cobrada · stock descontado", state: "ok" },
          { text: "Facturada", state: "ok" },
        ],
      },
    },
    {
      when: "tu equipo carga cosas desde el celular",
      tag: "app",
      title: "Una app que hace eso, y nada más.",
      text: "Pedidos, visitas, lecturas, fotos: una pantalla por tarea, sin menús que nadie usa.",
      window: {
        kind: "list",
        title: "app · visitas",
        rows: [
          { title: "Cliente Norte S.A.", sub: "Visita cargada · 2 fotos", chip: "Hecho", chipOn: true },
          { title: "Distribuidora Sur", sub: "Pendiente · 14:00", chip: "Hoy" },
        ],
      },
    },
    {
      when: "tu sitio es de hace años",
      tag: "sitio",
      title: "Que aparezca en Google y que cargue rápido.",
      text: "Textos, estructura y velocidad hechos para que Google lo entienda y la gente no se vaya.",
      window: {
        kind: "code",
        title: "sitio",
        lines: ["carga: rápida", "móvil: sí", "textos: para lo que buscan"],
      },
    },
  ],
  includesFirst: {
    title: "El sitio, la tienda o la app, hechos para lo tuyo.",
    text: "Con un panel simple para que cambies precios y textos sin depender de nadie.",
  },
  connections: [
    "Mercado Pago",
    "Tienda Nube",
    "AFIP",
    "Google Sheets",
    "Google Maps",
    "Instagram",
    "WhatsApp Business",
    "tu sistema de stock",
  ],
  questions: [
    {
      q: "«¿Es WordPress o Tienda Nube?»",
      a: "Si te alcanza con eso, te lo decimos y te lo armamos. Si necesitás que hable con tu stock o tu facturación, es a medida.",
    },
    {
      q: "«¿Quién lo actualiza?»",
      a: "Vos, desde un panel simple, o nosotros. Sin depender de nadie para cambiar un precio.",
    },
    {
      q: "«¿Sale en Google?»",
      a: "Se hace para eso: rápido, con los textos y la estructura que Google entiende. Lo que después aparezca depende del rubro y la competencia, y te lo decimos antes.",
    },
  ],
  card: { sketch: "shop", text: "Tu sitio, tu tienda o tu app, conectados a tu stock y tu cobro." },
};
```

- [ ] **Step 6: Build, lint, capturas y stage** — son los pasos 4 y 5 de la tarea 9.

---

### Task 11: Luvant Lens

**Files:**
- Create: `src/content/lens.ts`
- Modify: `src/app/(es)/productos/lens/page.tsx` (reemplazo completo)
- Delete: `src/app/(es)/productos/lens/{layout,opengraph-image}.tsx`, `src/app/(es)/productos/{page,layout,opengraph-image}.tsx`

- [ ] **Step 1: `src/content/lens.ts`**

```ts
import type { Question, WindowSpec } from "./types";
import { searchWindow } from "./home";

export const lens = {
  title: "Luvant Lens: miles de documentos leídos, ordenados y buscables",
  description:
    "Lens lee los documentos de tu organismo o tu empresa (ordenanzas, decretos, resoluciones, contratos), saca lo importante y los deja buscables con el texto al día. API para integradores.",
  path: "/productos/lens",
  updatedAt: "2026-09-13",
  eyebrow: "Producto · Luvant Lens",
  h1: "Dejá de buscar a mano en miles de PDFs. ",
  h1Accent: "Lens los lee por vos.",
  intro:
    "Lee los documentos de tu organismo o tu empresa, saca lo importante y los deja buscables, con el texto al día. Lo que hoy hacés abriendo uno por uno.",
  cta: { label: "Pedí una demo", href: "/contacto?tema=lens" },
  note: ["Con tus propios documentos.", "Sin cargo."],
  tag: "Normativa al día",
  how: {
    eyebrow: "Cómo funciona",
    title: "De una carpeta de PDFs a un buscador con el texto al día.",
    steps: [
      {
        tag: "subir",
        title: "Subís los documentos",
        text: "Una carpeta, un disco, o directo por API. Escaneados o nativos.",
        window: { kind: "code", title: "api", lines: ["POST /api/v1/documents", "→ { \"status\": \"queued\" }"] } as WindowSpec,
      },
      {
        tag: "leer",
        title: "Lens los lee",
        text: "OCR si hace falta; después saca número, fecha, órgano, tema y qué modifica o deroga.",
        window: { kind: "code", title: "extracción", lines: ["Ordenanza 1.234/2019", "órgano: Concejo Deliberante", "modifica: Ord. 987/2015 · 0.94"] } as WindowSpec,
      },
      {
        tag: "revisar",
        title: "Tu equipo revisa lo dudoso",
        text: "Solo lo que Lens no está seguro llega al panel. Se confirma con un clic.",
        window: { kind: "task", title: "panel · tarea", question: "¿1.402/2022 modifica a 1.234/2019?", meta: "art. 1º · confianza 0.71" } as WindowSpec,
      },
      {
        tag: "publicar",
        title: "Queda publicado y buscable",
        text: "Buscador para tu gente o para el público, con el texto ordenado al día.",
        window: {
          kind: "search",
          title: "buscador",
          query: "licencia de conducir",
          total: "12",
          facets: [],
          rows: [{ title: "Ord. 2.011/2023", sub: "Licencias · vigente", chip: "Vigente", chipOn: true }],
        } as WindowSpec,
      },
    ],
  },
  who: {
    eyebrow: "Para quién",
    columns: [
      {
        id: "organismos",
        title: "Organismos y empresas con normativa propia",
        text: "Ordenanzas, decretos, resoluciones, reglamentos internos, contratos con adendas: todo lo que se modifica con el tiempo y hay que saber qué está vigente.",
        chips: ["vigencia", "texto al día", "buscador público", "panel de revisión", "historial"],
      },
      {
        id: "integradores",
        title: "Integradores y sistemas de gestión",
        text: "Lens como pieza de tu sistema: mandás PDFs, recibís los datos por webhook, exportás todo cuando quieras.",
        chips: ["API REST", "webhooks firmados", "keys con permisos", "export completo"],
      },
    ],
  },
  questions: [
    {
      q: "«¿Sirve para documentos que no son normativa?»",
      a: "Sí. Reglamentos internos, contratos con adendas, convenios: cualquier cosa que se modifique con el tiempo y haya que saber qué versión vale.",
    },
    {
      q: "«¿Y si son escaneos viejos?»",
      a: "Lens los pasa por OCR primero. Si una página sale mal, lo marca para que alguien la mire; no inventa.",
    },
    {
      q: "«¿Dónde quedan mis documentos?»",
      a: "Donde vos digas: en tu servidor o en el nuestro. Podés exportar todo, cuando quieras, en un solo archivo.",
    },
  ] as Question[],
  closing: {
    eyebrow: "Tu caso",
    title: "¿Cuántos documentos tenés sin leer?",
    text: "Mandanos una muestra. Te mostramos cómo quedan leídos, ordenados y buscables, y te decimos cuánto sale para el total.",
    note: "Con tus propios documentos · Sin cargo · Te escribimos para coordinar",
  },
};

export const lensSearchWindow: WindowSpec = {
  ...searchWindow,
  title: "buscador · normativa · tu organismo",
  facets: [{ label: "Todas", on: true }, { label: "Ordenanzas" }, { label: "Decretos" }, { label: "Vigentes" }],
};

export const lensNormWindow: WindowSpec = {
  kind: "norm",
  title: "ficha · texto ordenado",
  name: "Ordenanza 1.234/2019",
  meta: "Habilitaciones comerciales · 4 relaciones · 12 págs.",
  chip: "Vigente",
  tabs: ["Original", "Relaciones", "Texto ordenado", "Historial"],
  activeTab: 2,
  paragraphs: [
    {
      article: "Art. 3º",
      parts: [
        { text: "El plazo de la habilitación será de " },
        { text: "dos años", kind: "del" },
        { text: " " },
        { text: "cinco años", kind: "ins" },
        { text: ", renovable por períodos iguales." },
        { text: "· sustituido por Ord. 1.402/2022, art. 1º", kind: "note" },
      ],
    },
    {
      article: "Art. 4º",
      parts: [{ text: "La solicitud se presentará ante la Dirección de Comercio con la documentación del Anexo I." }],
    },
  ],
};
```

- [ ] **Step 2: Borrar los archivos viejos de productos**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web
rm -f "src/app/(es)/productos/lens/layout.tsx" "src/app/(es)/productos/lens/opengraph-image.tsx" \
      "src/app/(es)/productos/page.tsx" "src/app/(es)/productos/layout.tsx" "src/app/(es)/productos/opengraph-image.tsx"
git rm -q --cached -r "src/app/(es)/productos" 2>/dev/null; ls -R "src/app/(es)/productos"
```

Esperado: solo `lens/page.tsx`.

- [ ] **Step 3: `src/app/(es)/productos/lens/page.tsx`** (reemplazo completo)

```tsx
import type { Metadata } from "next";
import CardboardBand from "@/components/paper/CardboardBand";
import Chips from "@/components/paper/Chips";
import Closing from "@/components/paper/Closing";
import Desk from "@/components/paper/Desk";
import Eyebrow from "@/components/paper/Eyebrow";
import Footer from "@/components/paper/Footer";
import Nav from "@/components/paper/Nav";
import OtherCards from "@/components/paper/OtherCards";
import Questions from "@/components/paper/Questions";
import Reveal from "@/components/paper/Reveal";
import Underline from "@/components/paper/Underline";
import Window from "@/components/paper/Window";
import { lens, lensNormWindow, lensSearchWindow } from "@/content/lens";
import { breadcrumbJsonLd, faqJsonLd, JsonLd, pageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: lens.title,
  description: lens.description,
  path: lens.path,
  ogSlug: "lens",
});

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Luvant Lens",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: lens.description,
  url: `${SITE_URL}${lens.path}`,
  author: { "@id": `${SITE_URL}/#org` },
  offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
};

const rotations = ["-rotate-[.8deg]", "rotate-[.8deg]", "-rotate-[.8deg]", "rotate-[.8deg]"];

export default function LensPage() {
  return (
    <>
      <JsonLd data={appJsonLd} />
      <JsonLd data={faqJsonLd(lens.questions)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Luvant", path: "/" }, { name: "Luvant Lens", path: lens.path }])} />
      <Nav />
      <main id="main-content">
        <section className="px-5 pt-12 md:px-16 md:pt-[72px]">
          <Eyebrow>{lens.eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-[980px] text-[44px] font-bold leading-[.96] tracking-[-.035em] md:text-[80px]">
            {lens.h1}
            <span className="text-papel-rojo">{lens.h1Accent}</span>
          </h1>
          <div className="mt-6 flex flex-col gap-6 md:mt-8 md:flex-row md:items-end md:justify-between md:gap-10">
            <p className="max-w-[560px] text-[16px] leading-[1.4] text-papel-tinta-2 md:text-[18px]">{lens.intro}</p>
            <div className="flex flex-col gap-3 md:items-end md:text-right">
              <Underline href={lens.cta.href} size="lg" event="cta_click">
                {lens.cta.label}
              </Underline>
              <div className="font-mono text-[12px] leading-[1.45] text-papel-tinta-3">
                {lens.note[0]}
                <br />
                {lens.note[1]}
              </div>
            </div>
          </div>
          <Desk
            height={380}
            windows={[
              { spec: lensSearchWindow, left: "0%", top: "20px", width: "54%", rotate: -1, z: 1 },
              { spec: lensNormWindow, right: "0%", top: "0px", width: "50%", rotate: 1, z: 2 },
            ]}
            sticker={{ main: lens.tag, left: "46%", bottom: "40px" }}
          />
        </section>

        <CardboardBand>
          <Eyebrow>{lens.how.eyebrow}</Eyebrow>
          <h2 className="mt-3 text-[30px] font-bold leading-[1] tracking-[-.03em] md:text-[40px]">{lens.how.title}</h2>
          <div className="mt-9 grid gap-5 md:grid-cols-4">
            {lens.how.steps.map((st, i) => (
              <Reveal
                key={st.title}
                delay={i * 0.08}
                className={cn("rounded border border-papel-borde bg-papel-foja pb-4 shadow-[0_14px_34px_rgba(30,42,35,.12)]", rotations[i])}
              >
                <div className="flex justify-between border-b border-papel-borde px-3.5 py-2 font-mono text-[11px] uppercase tracking-[.1em] text-papel-tinta-2">
                  <span>
                    Paso <b className="font-bold text-papel-rojo">0{i + 1}</b>
                  </span>
                  <span>{st.tag}</span>
                </div>
                <Window spec={st.window} className="mx-3.5 my-3 text-[10.5px] shadow-[0_10px_24px_rgba(30,42,35,.2)]" />
                <h3 className="mx-3.5 mb-1 text-[18px] font-semibold tracking-[-.02em]">{st.title}</h3>
                <p className="mx-3.5 text-[13px] text-papel-tinta-2">{st.text}</p>
              </Reveal>
            ))}
          </div>
        </CardboardBand>

        <section className="border-t border-papel-tinta px-5 py-14 md:px-16 md:py-16">
          <Eyebrow>{lens.who.eyebrow}</Eyebrow>
          <div className="mt-9 grid gap-10 md:grid-cols-2">
            {lens.who.columns.map((c) => (
              <div key={c.id} id={c.id} className="border-t border-papel-tinta pt-4">
                <b className="mb-2 block text-[24px] font-semibold tracking-[-.02em]">{c.title}</b>
                <p className="mb-3 max-w-[440px] text-[15px] text-papel-tinta-2">{c.text}</p>
                <Chips items={c.chips} />
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-papel-tinta bg-papel-foja-2">
          <Questions items={lens.questions} />
        </div>
        <Closing
          eyebrow={lens.closing.eyebrow}
          title={lens.closing.title}
          text={lens.closing.text}
          cta={lens.cta}
          note={lens.closing.note}
        />
        <OtherCards exclude="lens" />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 4: Build, lint, captura y stage**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && npm run lint && npm run build 2>&1 | grep -E "productos|error"
```

Esperado: solo `○ /productos/lens`. Captura de `productos/lens` a 1280 y 390; comparar con `lens-papel-v2.html`. Luego:

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && git add src/content/lens.ts "src/app/(es)/productos" && git status --short | head
```

---

### Task 12: Contacto y gracias

**Files:**
- Create: `src/content/contact.ts`
- Create: `src/components/paper/ContactForm.tsx`
- Modify: `src/app/(es)/contacto/page.tsx` (reemplazo completo)
- Create: `src/app/(es)/contacto/gracias/page.tsx`
- Delete: `src/app/(es)/contacto/{layout,opengraph-image}.tsx`

- [ ] **Step 1: `src/content/contact.ts`**

```ts
export const contact = {
  title: "Pedí tu presupuesto: quince minutos, gratis | Luvant",
  description:
    "Contanos qué hacés todos los días a mano. Salís sabiendo si se puede, cuánto sale y cuánto tarda.",
  path: "/contacto",
  updatedAt: "2026-09-13",
  eyebrow: "Tu caso",
  h1: "¿Qué es lo que hacés todos los días ",
  h1Accent: "a mano?",
  intro:
    "Contalo con tus palabras, como se lo contarías a alguien en el mostrador. Con eso alcanza para decirte si se puede y cuánto sale.",
  steps: [
    { label: "Primero", title: "Te escribimos", text: "por correo para coordinar la llamada." },
    { label: "Quince minutos", title: "Hablamos", text: "de lo que hacés a mano, qué usás hoy y adónde tendría que ir." },
    {
      label: "Al colgar",
      title: "Sabés si se puede, cuánto sale y cuánto tarda.",
      text: "Y si no te conviene, te lo decimos ahí mismo.",
    },
  ],
  direct: "¿Preferís escribir directo?",
  form: {
    tab: "Formulario",
    tabRight: "Pedí tu presupuesto",
    sticker: "Gratis · 15 min",
    topics: [
      { id: "software", label: "Software a medida" },
      { id: "ia", label: "Automatización con IA" },
      { id: "datos", label: "Datos y tableros" },
      { id: "integracion", label: "Integración" },
      { id: "web", label: "Web y apps" },
      { id: "lens", label: "Luvant Lens" },
      { id: "nose", label: "No sé todavía" },
    ],
    topicLabel: "Sobre qué",
    caseLabel: "Qué hacés a mano hoy",
    casePlaceholder: 'Ej.: "Me llegan unas 200 facturas por mes por correo y las cargo una por una en Tango."',
    nameLabel: "Tu nombre",
    namePlaceholder: "Nombre y, si querés, el negocio",
    emailLabel: "Tu correo",
    emailPlaceholder: "nombre@empresa.com",
    submit: "Pedí tu presupuesto",
    note: ["Sin compromiso.", "No mandamos publicidad."],
    error: "Hubo un error al enviar. Probá de nuevo en un momento.",
  },
  thanks: {
    title: "Recibimos tu pedido | Luvant",
    eyebrow: "Después de mandar",
    h2: "Listo. Te escribimos para coordinar.",
    text: "Mientras tanto, si tenés un ejemplo a mano (una factura, un mensaje de pedido, una planilla), guardalo: en la llamada lo miramos juntos.",
    received: "Recibido",
    about: "Sobre",
    next: "Próximo paso",
    nextValue: "coordinar quince minutos",
  },
};
```

- [ ] **Step 2: `ContactForm.tsx`**

```tsx
"use client";

import { useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { contact } from "@/content/contact";
import { cn } from "@/lib/utils";
import Sticker from "./Sticker";
import Underline from "./Underline";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const f = contact.form;
const field =
  "w-full rounded border border-papel-borde bg-papel-foja px-3.5 py-3 text-[15px] text-papel-tinta placeholder:text-papel-tinta-3 focus:border-papel-tinta focus:outline-none";
const label = "mb-2 block font-mono text-[11.5px] uppercase tracking-[.08em] text-papel-tinta-2";

export default function ContactForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [topic, setTopic] = useState(params.get("tema") ?? "");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    const data = new FormData(e.currentTarget);
    const topicLabel = f.topics.find((t) => t.id === topic)?.label ?? "";
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
      company: "",
      phone: "",
      services: topicLabel ? [topicLabel] : [],
      company_fax: data.get("company_fax"),
    };
    try {
      const res = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        window.dataLayer?.push({ event: "form_submit", tema: topic });
        router.push(`/contacto/gracias?tema=${encodeURIComponent(topicLabel)}`);
        return;
      }
    } catch {}
    setStatus("error");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative rotate-[.6deg] rounded border border-papel-borde bg-papel-foja-2 px-5 pb-7 pt-0 shadow-[0_20px_50px_rgba(30,42,35,.14)] md:px-7"
    >
      <div className="-mx-5 mb-5 flex justify-between border-b border-papel-borde px-4 py-2.5 font-mono text-[11px] uppercase tracking-[.1em] text-papel-tinta-2 md:-mx-7">
        <span>
          {f.tab} <b className="font-bold text-papel-rojo">01</b>
        </span>
        <span>{f.tabRight}</span>
      </div>
      <Sticker main={f.sticker} className="absolute -right-3.5 top-14 rotate-[4deg] [&>div]:my-0 [&>div]:font-mono [&>div]:text-[11px] [&>div]:font-normal [&>div]:uppercase [&>div]:tracking-[.1em]" />
      <fieldset className="mb-4">
        <legend className={label}>{f.topicLabel}</legend>
        <div className="flex flex-wrap gap-2.5">
          {f.topics.map((t) => (
            <label
              key={t.id}
              className={cn(
                "cursor-pointer rounded-full border px-3 py-1.5 font-mono text-[12px]",
                topic === t.id
                  ? "border-papel-tinta bg-papel-tinta text-papel-foja"
                  : "border-papel-borde bg-papel-foja text-papel-tinta-2",
              )}
            >
              <input
                type="radio"
                name="topic"
                value={t.id}
                checked={topic === t.id}
                onChange={() => setTopic(t.id)}
                className="sr-only"
              />
              {t.label}
            </label>
          ))}
        </div>
      </fieldset>
      <label className={label} htmlFor="message">
        {f.caseLabel}
      </label>
      <textarea id="message" name="message" required rows={4} placeholder={f.casePlaceholder} className={cn(field, "mb-4")} />
      <label className={label} htmlFor="name">
        {f.nameLabel}
      </label>
      <input id="name" name="name" required placeholder={f.namePlaceholder} className={cn(field, "mb-4")} />
      <label className={label} htmlFor="email">
        {f.emailLabel}
      </label>
      <input id="email" name="email" type="email" required placeholder={f.emailPlaceholder} className={cn(field, "mb-5")} />
      <input type="text" name="company_fax" tabIndex={-1} autoComplete="off" className="hidden" />
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <Underline size="xl">{status === "loading" ? "Enviando…" : f.submit}</Underline>
        <div className="font-mono text-[12px] leading-[1.45] text-papel-tinta-3">
          {f.note[0]}
          <br />
          {f.note[1]}
        </div>
      </div>
      {status === "error" && <p className="mt-4 text-[14px] text-papel-rojo">{f.error}</p>}
    </form>
  );
}
```

- [ ] **Step 3: `src/app/(es)/contacto/page.tsx`** (reemplazo completo) y borrar `layout.tsx` y `opengraph-image.tsx` de la misma carpeta

```tsx
import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/paper/ContactForm";
import Eyebrow from "@/components/paper/Eyebrow";
import Footer from "@/components/paper/Footer";
import Nav from "@/components/paper/Nav";
import { contact } from "@/content/contact";
import { pageMetadata } from "@/lib/seo";
import { EMAIL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: contact.title,
  description: contact.description,
  path: contact.path,
  ogSlug: "contacto",
});

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="grid gap-12 px-5 py-14 md:grid-cols-[1.1fr_1fr] md:gap-16 md:px-16 md:py-16">
        <div>
          <Eyebrow>{contact.eyebrow}</Eyebrow>
          <h1 className="my-4 text-[44px] font-bold leading-[.96] tracking-[-.035em] md:text-[64px]">
            {contact.h1}
            <span className="text-papel-rojo">{contact.h1Accent}</span>
          </h1>
          <p className="max-w-[520px] text-[18px] leading-[1.4] text-papel-tinta-2">{contact.intro}</p>
          <div className="mt-10 border-t border-papel-tinta">
            {contact.steps.map((s) => (
              <div key={s.label} className="flex gap-4 border-b border-papel-borde-suave py-3.5">
                <small className="w-[110px] shrink-0 font-mono text-[11.5px] text-papel-rojo">{s.label}</small>
                <div className="text-[15px]">
                  <b className="font-medium text-papel-tinta">{s.title}</b>{" "}
                  <span className="text-papel-tinta-2">{s.text}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-9 text-[15px] text-papel-tinta-2">
            {contact.direct}{" "}
            <a href={`mailto:${EMAIL}`} className="border-b border-papel-tinta text-papel-tinta">
              {EMAIL}
            </a>
          </p>
        </div>
        <Suspense>
          <ContactForm />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
```

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && rm -f "src/app/(es)/contacto/layout.tsx" "src/app/(es)/contacto/opengraph-image.tsx"
```

- [ ] **Step 4: `src/app/(es)/contacto/gracias/page.tsx`**

`useSearchParams` obliga a un componente cliente; la tarjeta es cliente y la página es servidor.

`src/components/paper/ThanksCard.tsx`:

```tsx
"use client";

import { useSearchParams } from "next/navigation";
import { contact } from "@/content/contact";

export default function ThanksCard() {
  const topic = useSearchParams().get("tema");
  if (!topic) return null;
  const t = contact.thanks;
  return (
    <div className="-rotate-1 rounded border border-papel-borde bg-papel-foja px-5 py-5 font-mono text-[12.5px] leading-[1.7] text-papel-tinta-2 shadow-[0_14px_34px_rgba(30,42,35,.14)]">
      <b className="text-papel-tinta">{t.received}</b> · {new Date().toLocaleDateString("es-AR")}
      <br />
      {t.about}: <b className="text-papel-tinta">{topic}</b>
      <br />
      {t.next}: <b className="text-papel-tinta">{t.nextValue}</b>
    </div>
  );
}
```

`src/app/(es)/contacto/gracias/page.tsx`:

```tsx
import type { Metadata } from "next";
import { Suspense } from "react";
import CardboardBand from "@/components/paper/CardboardBand";
import Eyebrow from "@/components/paper/Eyebrow";
import Footer from "@/components/paper/Footer";
import Nav from "@/components/paper/Nav";
import ThanksCard from "@/components/paper/ThanksCard";
import { contact } from "@/content/contact";

export const metadata: Metadata = {
  title: contact.thanks.title,
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  const t = contact.thanks;
  return (
    <>
      <Nav />
      <main id="main-content" className="min-h-[60vh]">
        <CardboardBand className="grid items-center gap-10 border-t-0 md:grid-cols-2 md:gap-14">
          <div>
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h1 className="my-3.5 text-[36px] font-bold leading-[1] tracking-[-.03em] md:text-[46px]">{t.h2}</h1>
            <p className="max-w-[460px] text-[16px] text-papel-tinta-2">{t.text}</p>
          </div>
          <Suspense>
            <ThanksCard />
          </Suspense>
        </CardboardBand>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 5: Build, lint, captura y prueba del formulario**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && npm run lint && npm run build 2>&1 | grep -E "contacto|error"
```

Esperado: `○ /contacto` y `○ /contacto/gracias`. Captura de `contacto` a 1280 y 390; comparar con `contacto-v2.html`. El envío real depende de `api/config.php` (SMTP, no está en el repo): se prueba en producción; localmente alcanza con ver que al enviar sin backend aparece el mensaje de error en rojo y no rompe.

- [ ] **Step 6: Stage**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && git add src/content/contact.ts src/components/paper/ContactForm.tsx src/components/paper/ThanksCard.tsx "src/app/(es)/contacto" && git status --short | head
```

---

### Task 13: Blog: piel nueva y correcciones

**Files:**
- Create: `src/components/paper/Article.tsx`
- Modify: `src/app/(es)/blog/layout.tsx`, `src/app/(es)/blog/page.tsx` (reemplazo completo)
- Modify: los seis `src/app/(es)/blog/<slug>/page.tsx`
- Delete: `src/app/(es)/blog/opengraph-image.tsx` y los seis `src/app/(es)/blog/<slug>/opengraph-image.tsx`

- [ ] **Step 1: `Article.tsx`**

```tsx
import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Footer from "./Footer";
import Nav from "./Nav";
import Underline from "./Underline";

type Props = {
  category: string;
  date: string;
  readTime: string;
  title: string;
  intro: string;
  related: { label: string; href: string; text: string };
  children: React.ReactNode;
};

export default function Article({ category, date, readTime, title, intro, related, children }: Props) {
  return (
    <>
      <Nav />
      <main id="main-content">
        <section className="px-5 pb-10 pt-10 md:px-16 md:pb-14 md:pt-14">
          <Link href="/blog" className="font-mono text-[12px] text-papel-tinta-3 hover:text-papel-tinta">
            ← Volver al blog
          </Link>
          <Eyebrow className="mt-8">
            {category} · {date} · {readTime}
          </Eyebrow>
          <h1 className="mt-4 max-w-[900px] text-[38px] font-bold leading-[1] tracking-[-.03em] md:text-[60px]">
            {title}
          </h1>
          <p className="mt-6 max-w-[680px] text-[18px] leading-[1.45] text-papel-tinta-2 md:text-[20px]">{intro}</p>
        </section>
        <section className="px-5 pb-16 md:px-16">
          <article className="prose-paper max-w-[680px]">{children}</article>
          <aside className="mt-14 max-w-[680px] -rotate-[.6deg] rounded border border-papel-borde bg-papel-foja-2 px-6 py-6 shadow-[0_14px_34px_rgba(30,42,35,.12)]">
            <Eyebrow>Si te pasa esto</Eyebrow>
            <p className="my-3 text-[17px] text-papel-tinta-2">{related.text}</p>
            <Underline href={related.href} size="lg">
              {related.label}
            </Underline>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: `blog/layout.tsx`**

Reemplazar el objeto `metadata` completo por:

```tsx
export const metadata: Metadata = {
  title: "Blog | Luvant",
  description:
    "Artículos sobre software a medida, automatización con IA, lectura de documentos e integraciones, escritos desde Córdoba, Argentina.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Luvant",
    description: "Ideas y guías sobre software a medida, automatización con IA y lectura de documentos.",
    images: [{ url: "/og/blog.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Luvant",
    description: "Ideas y guías sobre software a medida, automatización con IA y lectura de documentos.",
    images: ["/og/blog.png"],
  },
};
```

El `breadcrumbJsonLd` y el componente quedan como están.

- [ ] **Step 3: `blog/page.tsx`** (reemplazo completo)

```tsx
import Link from "next/link";
import Eyebrow from "@/components/paper/Eyebrow";
import Footer from "@/components/paper/Footer";
import Nav from "@/components/paper/Nav";
import { cn } from "@/lib/utils";

const ARTICLES = [
  {
    slug: "por-que-tu-empresa-necesita-software-a-medida",
    category: "Estrategia",
    title: "Por qué tu empresa necesita software a medida (y cuándo no)",
    excerpt:
      "No toda empresa necesita desarrollo custom. Cuándo tiene sentido invertir en software propio, cuándo conviene uno hecho, y qué preguntarte antes de decidir.",
    date: "Febrero 2026",
  },
  {
    slug: "automatizar-carga-facturas",
    category: "Guía práctica",
    title: "Cómo dejar de cargar facturas a mano",
    excerpt:
      "Tu equipo pierde horas por semana tipeando datos de facturas en el sistema. Cómo se lee una factura sola, qué necesitás y qué esperar.",
    date: "Febrero 2026",
  },
  {
    slug: "que-es-una-api-y-por-que-importa",
    category: "Conceptos",
    title: "Qué es una API y por qué le importa a tu negocio",
    excerpt:
      "Una explicación sin tecnicismos de qué son las APIs, por qué tus sistemas necesitan hablar entre sí, y cómo una buena integración te ahorra horas de trabajo manual.",
    date: "Febrero 2026",
  },
  {
    slug: "ocr-documentos-argentina",
    category: "Guía práctica",
    title: "OCR para documentos argentinos: desafíos y soluciones",
    excerpt:
      "Facturas AFIP, remitos con formato libre, comprobantes con CUIT: por qué los servicios genéricos fallan y cómo se lee bien un documento argentino.",
    date: "Febrero 2026",
  },
  {
    slug: "senales-de-que-necesitas-automatizar",
    category: "Estrategia",
    title: "Señales de que necesitás automatizar (antes de que sea tarde)",
    excerpt:
      "Las cosas que pasan en una empresa cuando un proceso manual ya no da más, y cómo saber cuál automatizar primero.",
    date: "Febrero 2026",
  },
  {
    slug: "elegir-proveedor-desarrollo-software",
    category: "Guía práctica",
    title: "Cómo elegir un proveedor de desarrollo de software",
    excerpt:
      "Qué preguntar, qué mirar y qué señales de alarma tener en cuenta antes de contratar a alguien para que te haga un sistema.",
    date: "Febrero 2026",
  },
];

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <section className="px-5 pb-8 pt-12 md:px-16 md:pt-[72px]">
          <Eyebrow>Blog</Eyebrow>
          <h1 className="mt-4 max-w-[900px] text-[42px] font-bold leading-[.96] tracking-[-.035em] md:text-[72px]">
            Lo que aprendimos haciendo software para otros.
          </h1>
        </section>
        <section className="px-5 pb-20 md:px-16">
          <div className="border-t border-papel-tinta">
            {ARTICLES.map((a, i) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="group grid gap-3 border-b border-papel-borde-suave py-7 md:grid-cols-[180px_1fr] md:gap-10"
              >
                <div className="font-mono text-[12px] uppercase tracking-[.12em] text-papel-tinta-3">
                  <span className="text-papel-rojo">0{i + 1}</span> · {a.category}
                  <br />
                  {a.date}
                </div>
                <div>
                  <h2 className={cn("text-[24px] font-semibold leading-[1.1] tracking-[-.02em] md:text-[30px]", "group-hover:underline group-hover:decoration-papel-rojo group-hover:decoration-2 group-hover:underline-offset-4")}>
                    {a.title}
                  </h2>
                  <p className="mt-2 max-w-[640px] text-[16px] text-papel-tinta-2">{a.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

Los títulos y extractos de los seis artículos que ya existen en el archivo actual mandan sobre los de arriba si difieren: antes de escribir, copiar `title` y `slug` desde el `ARTICLES` viejo (los `excerpt` sí cambian a los de arriba, que ya no mencionan OCR ni Lens).

- [ ] **Step 4: Transformar los seis artículos**

En cada `src/app/(es)/blog/<slug>/page.tsx`, en este orden:

1. Imports: borrar las líneas de `Navbar`, `Footer`, `Container`, `Badge` y `lucide-react`; dejar `import type { Metadata } from "next";` e `import Link from "next/link";`; agregar `import Article from "@/components/paper/Article";` e `import { JsonLd } from "@/lib/seo";`.
2. En `metadata.alternates`, borrar la propiedad `languages: { … }` completa (queda `alternates: { canonical: "/blog/<slug>" }`). En `openGraph` agregar `images: [{ url: "/og/blog.png", width: 1200, height: 630 }],` y en `twitter` agregar `images: ["/og/blog.png"],`.
3. En `articleJsonLd`: `"@type": "Article"` → `"@type": "BlogPosting"`; el valor de `image` → `"https://luvant.com.ar/og/blog.png"`.
4. Borrar los dos `<script type="application/ld+json" …/>` del JSX y reemplazarlos por `<JsonLd data={articleJsonLd} />` y `<JsonLd data={breadcrumbJsonLd} />`.
5. Reemplazar todo el JSX desde `<Navbar />` hasta `<Footer />` (inclusive) por:

```tsx
      <Article
        category="CATEGORÍA"
        date="Febrero 2026"
        readTime="N min de lectura"
        title="TÍTULO"
        intro="INTRO"
        related={{ label: "LABEL", href: "HREF", text: "TEXT" }}
      >
        …contenido que estaba dentro de <article className="prose-luvant …">…</article>, sin el <article> ni el bloque final del CTA ("¿Querés ver Luvant Lens en acción?" / "¿Listo para…") que venía después…
      </Article>
```

   con estos valores (los de `category`, `readTime`, `title` e `intro` están en el header viejo de cada archivo, en el `<Badge>`, el `<span>` de lectura, el `<h1>` y el `<p>` siguiente):

| slug | related.label | related.href | related.text |
|---|---|---|---|
| automatizar-carga-facturas | Automatización con IA | /servicios/automatizacion-con-ia | Si te llegan facturas por correo y alguien las carga a mano, es la ficha 02. |
| ocr-documentos-argentina | Luvant Lens | /productos/lens | Si tenés miles de documentos que hay que leer, ordenar y buscar, es Luvant Lens. |
| que-es-una-api-y-por-que-importa | Integración de sistemas | /servicios/integracion-de-sistemas | Si hoy alguien copia datos de un sistema a otro, es la ficha 04. |
| por-que-tu-empresa-necesita-software-a-medida | Software a medida | /servicios/desarrollo-software-a-medida | Si el sistema que necesitás no existe, es la ficha 01. |
| senales-de-que-necesitas-automatizar | Automatización con IA | /servicios/automatizacion-con-ia | Si te reconociste en más de una señal, es la ficha 02. |
| elegir-proveedor-desarrollo-software | Software a medida | /servicios/desarrollo-software-a-medida | Si ya sabés qué necesitás y estás eligiendo a quién pedírselo, es la ficha 01. |

6. Quitar las clases inline de los enlaces del cuerpo (el estilo lo da `.prose-paper a`):

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && sed -i 's/ className="text-white underline decoration-luvant-700 underline-offset-4 transition-colors hover:decoration-white"//g' "src/app/(es)/blog"/*/page.tsx && grep -c "decoration-luvant-700" "src/app/(es)/blog"/*/page.tsx
```

   Esperado: `0` en los seis.

7. Borrar `src/app/(es)/blog/<slug>/opengraph-image.tsx` y `src/app/(es)/blog/opengraph-image.tsx`.

- [ ] **Step 5: Correcciones de contenido en `automatizar-carga-facturas`**

a) Reemplazar la lista y el párrafo que siguen al `<h2>Qué resultados esperar</h2>` (desde `<ul>` hasta el `</p>` que termina en "desde la primera semana.") por:

```tsx
              <ul>
                <li>
                  <strong>Facturas con formato estándar</strong> (electrónicas
                  AFIP, proveedores con formato consistente) se leen casi
                  siempre enteras y sin intervención. Las de formato libre o
                  muy deterioradas se marcan para que alguien las mire.
                </li>
                <li>
                  <strong>El tiempo de carga desaparece</strong>, y queda el de
                  revisar lo que el sistema dejó marcado, que al principio es
                  más y después es poco.
                </li>
                <li>
                  <strong>Los errores de tipeo desaparecen</strong>. Los que
                  quedan son del documento original (datos incorrectos en la
                  factura misma), no de la carga.
                </li>
              </ul>

              <p>
                No prometemos que el sistema funcione perfecto desde el día uno
                con todos tus documentos. Lo que sí: cuando no está seguro, no
                inventa, y lo que dejó marcado se ve de un vistazo.
              </p>
```

b) Reemplazar la sección `<h2>Luvant Lens: nuestra solución de procesamiento de documentos</h2>` y sus tres párrafos (hasta el que termina en "las empresas en Argentina.") por:

```tsx
              <h2>Cómo lo hacemos nosotros</h2>

              <p>
                Es lo que llamamos{" "}
                <Link href="/servicios/automatizacion-con-ia">
                  automatización con IA
                </Link>
                : un programa escrito para tus facturas y tu sistema, que lee lo
                que llega por correo, saca los datos, los carga donde vos los
                cargás hoy y avisa cuando algo no le cierra. Se conecta al
                sistema contable que ya usás; nadie aprende una herramienta
                nueva.
              </p>

              <p>
                Cuando el problema no son facturas sino miles de documentos que
                hay que leer, ordenar y buscar (ordenanzas, resoluciones,
                contratos), para eso está{" "}
                <Link href="/productos/lens">Luvant Lens</Link>.
              </p>
```

c) En la lista de "Primeros pasos": `No necesitás resolver el 100% de los formatos el primer día` → `No necesitás resolver todos los formatos el primer día`; y `Te mostramos cómo funciona Lens con tus documentos reales, sin costo ni compromiso.` → `Te mostramos cómo quedaría con tus documentos reales, sin costo ni compromiso.`

d) Verificar: `grep -n "%\|Lens" "src/app/(es)/blog/automatizar-carga-facturas/page.tsx"` debe devolver solo el enlace a `/productos/lens` del párrafo b) y ningún porcentaje.

- [ ] **Step 6: Correcciones de contenido en `ocr-documentos-argentina`**

a) En `metadata.description`, en `openGraph.description`/`twitter.description` si repiten la frase, y en el `intro` que se pasa a `<Article>`: `Así lo resolvemos con Luvant Lens.` → `Así lo resolvemos.`

b) El párrafo `En este artículo vamos a hablar de cuáles son esos desafíos específicos y cómo los resolvemos con{" "}<Link href="/productos/lens">Luvant Lens</Link>.` → 

```tsx
              <p>
                En este artículo vamos a hablar de cuáles son esos desafíos
                específicos y cómo los resolvemos cuando armamos una{" "}
                <Link href="/servicios/automatizacion-con-ia">
                  automatización con IA
                </Link>{" "}
                que lee documentos.
              </p>
```

c) Reemplazar desde `<h2>Qué hace Luvant Lens diferente</h2>` hasta el `</ul>` que cierra la lista de cinco puntos ("Mejora continua…") por:

```tsx
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
```

d) Reemplazar desde `<h2>Resultados reales</h2>` hasta el `</p>` del párrafo que termina en "y calibración." por:

```tsx
              <h2>Qué esperar</h2>

              <p>
                Las facturas electrónicas y los documentos con formato estable
                se leen casi siempre completos. Los remitos impresos y los
                tickets térmicos dependen del estado del papel y del escaneo:
                lo que sale mal se marca, no se inventa. Las primeras semanas
                se revisa más; después, lo que llega a revisión es la
                excepción.
              </p>
```

e) En "Cómo empezar": `Si querés evaluar cómo funcionaría Lens con tus documentos` → `Si querés evaluar cómo funcionaría con tus documentos`; y el segundo ítem de la lista → `Los procesamos y te mostramos qué datos sacó, qué dejó para revisar y dónde hay oportunidades de mejora.`

f) Verificar: `grep -n "%\|Lens\|entrenad" "src/app/(es)/blog/ocr-documentos-argentina/page.tsx"` no devuelve porcentajes ni "entrenados"; "Lens" solo aparece en el `related` y en el enlace del cierre si quedó alguno.

- [ ] **Step 7: Corrección en `que-es-una-api-y-por-que-importa`**

El ítem `<strong>Procesamiento de documentos</strong>: un servicio de OCR como{" "}<Link href="/productos/lens">Luvant Lens</Link>{" "}recibe un documento por API y devuelve los datos extraídos listos para cargar en tu sistema.` → 

```tsx
                <li>
                  <strong>Lectura de documentos</strong>:{" "}
                  <Link href="/productos/lens">Luvant Lens</Link> recibe un PDF
                  por API y devuelve los datos leídos, listos para cargar en tu
                  sistema.
                </li>
```

- [ ] **Step 8: Build, lint, capturas y stage**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && npm run lint && npm run build 2>&1 | grep -E "blog|error"
```

Esperado: `/blog` y seis `/blog/<slug>`, sin `error`. Capturas de `blog` y `blog/automatizar-carga-facturas` a 1280 y 390. Luego:

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && git add src/components/paper/Article.tsx "src/app/(es)/blog" && git status --short | head -20
```

---

### Task 14: SEO: sitemap, robots, imágenes OG, íconos, manifest y redirecciones

**Files:**
- Create: `scripts/og.html`, `scripts/og-pages.json`, `scripts/og.mjs`
- Create (generados): `public/og/{home,desarrollo-software-a-medida,automatizacion-con-ia,datos-y-tableros,integracion-de-sistemas,web-ecommerce-y-apps,lens,contacto,blog}.png`, `public/icon.png`, `public/apple-icon.png`, `public/favicon-32.png`
- Modify: `src/app/sitemap.ts`, `src/app/manifest.ts`, `.htaccess`, `package.json` (script `og`)
- Delete: `src/app/(es)/opengraph-image.tsx`, `src/app/(es)/twitter-image.tsx`, `src/app/icon.tsx`, `src/app/apple-icon.tsx`, `src/app/favicon.ico`, `src/app/(es)/nosotros/`

- [ ] **Step 1: `scripts/og.html`** (plantilla que Edge captura; los textos entran por query string)

```html
<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@700&family=Courier+Prime:wght@400&display=swap">
<style>
  html, body { margin: 0; width: 1200px; height: 630px; overflow: hidden; }
  body { background: #fdfcf7; color: #1e2a23; font-family: "Familjen Grotesk", sans-serif; position: relative; }
  .eyebrow { position: absolute; left: 72px; top: 72px; font-family: "Courier Prime", monospace; font-size: 22px; letter-spacing: .2em; text-transform: uppercase; color: #4a554d; }
  h1 { position: absolute; left: 72px; top: 150px; width: 1000px; margin: 0; font-size: 84px; line-height: .96; letter-spacing: -.035em; font-weight: 700; }
  h1 span { color: #b0271c; }
  .wm { position: absolute; left: 72px; bottom: 64px; display: flex; align-items: center; gap: 14px; font-size: 34px; font-weight: 700; letter-spacing: -.02em; }
  .sticker { position: absolute; right: 72px; bottom: 60px; background: #3e6e63; color: #fdfcf7; font-family: "Courier Prime", monospace; font-size: 20px; letter-spacing: .1em; text-transform: uppercase; padding: 14px 20px; border-radius: 6px; transform: rotate(-3deg); }
  .icon body { background: #1e2a23; }
</style>
</head>
<body>
<div class="eyebrow" id="eyebrow"></div>
<h1 id="title"></h1>
<div class="wm"><svg width="44" height="44" viewBox="0 0 56 56" fill="none"><rect width="56" height="56" rx="12" fill="#1e2a23"/><path d="M14 40L28 16L42 40" stroke="#fdfcf7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="28" cy="16" r="4" fill="#fdfcf7"/></svg>Luvant</div>
<div class="sticker" id="sticker">luvant.com.ar</div>
<script>
  const q = new URLSearchParams(location.search);
  document.getElementById("eyebrow").textContent = q.get("eyebrow") || "";
  const t = q.get("title") || "";
  const a = q.get("accent") || "";
  document.getElementById("title").innerHTML = t.replace(/</g, "&lt;") + (a ? '<span>' + a.replace(/</g, "&lt;") + '</span>' : "");
  if (q.get("sticker")) document.getElementById("sticker").textContent = q.get("sticker");
  if (q.get("icon")) {
    const s = Number(q.get("icon"));
    document.documentElement.style.width = document.body.style.width = s + "px";
    document.documentElement.style.height = document.body.style.height = s + "px";
    document.body.innerHTML = '<svg width="' + s + '" height="' + s + '" viewBox="0 0 56 56" fill="none"><rect width="56" height="56" fill="#fdfcf7"/><rect x="6" y="6" width="44" height="44" rx="10" fill="#1e2a23"/><path d="M17 37L28 19L39 37" stroke="#fdfcf7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="28" cy="19" r="3.5" fill="#fdfcf7"/></svg>';
  }
</script>
</body>
</html>
```

- [ ] **Step 2: `scripts/og-pages.json`**

```json
[
  { "slug": "home", "eyebrow": "Software a medida · Córdoba", "title": "Dejá de perder horas en lo mismo de ", "accent": "todos los días." },
  { "slug": "desarrollo-software-a-medida", "eyebrow": "Ficha 01 · Software a medida", "title": "El sistema que tu negocio necesita ", "accent": "y no existe." },
  { "slug": "automatizacion-con-ia", "eyebrow": "Ficha 02 · Automatización con IA", "title": "Que los correos, las facturas y los pedidos se carguen ", "accent": "solos." },
  { "slug": "datos-y-tableros", "eyebrow": "Ficha 03 · Datos y tableros", "title": "Todos tus números en una pantalla ", "accent": "que se entiende." },
  { "slug": "integracion-de-sistemas", "eyebrow": "Ficha 04 · Integración de sistemas", "title": "Tus sistemas hablando entre sí. ", "accent": "Nada cargado dos veces." },
  { "slug": "web-ecommerce-y-apps", "eyebrow": "Ficha 05 · Web, e-commerce y apps", "title": "Tu sitio, tu tienda o tu app, ", "accent": "conectados a tu negocio." },
  { "slug": "lens", "eyebrow": "Producto · Luvant Lens", "title": "Dejá de buscar a mano en miles de PDFs. ", "accent": "Lens los lee por vos.", "sticker": "Normativa al día" },
  { "slug": "contacto", "eyebrow": "Tu caso", "title": "¿Qué es lo que hacés todos los días ", "accent": "a mano?", "sticker": "Gratis · 15 min" },
  { "slug": "blog", "eyebrow": "Blog", "title": "Lo que aprendimos haciendo software ", "accent": "para otros." }
]
```

- [ ] **Step 3: `scripts/og.mjs`**

```js
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const edge = [
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
].find(existsSync);
const html = pathToFileURL(resolve("scripts/og.html")).href;
const pages = JSON.parse(readFileSync("scripts/og-pages.json", "utf8"));
mkdirSync("public/og", { recursive: true });

function shoot(out, size, params) {
  const url = `${html}?${new URLSearchParams(params)}`;
  execFileSync(edge, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    `--window-size=${size}`,
    "--virtual-time-budget=4000",
    `--screenshot=${resolve(out)}`,
    url,
  ]);
  console.log(out);
}

for (const p of pages) {
  const { slug, ...params } = p;
  shoot(`public/og/${slug}.png`, "1200,630", params);
}
shoot("public/icon.png", "512,512", { icon: "512" });
shoot("public/apple-icon.png", "180,180", { icon: "180" });
shoot("public/favicon-32.png", "32,32", { icon: "32" });
```

Agregar a `package.json`, en `scripts`: `"og": "node scripts/og.mjs"`.

- [ ] **Step 4: Generar las imágenes**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && npm run og && ls -la public/og public/icon.png public/apple-icon.png public/favicon-32.png
```

Esperado: nueve PNG en `public/og/` de ~50–150 KB y los tres íconos. Abrir `public/og/home.png` con Read: titular grande sobre foja con "todos los días." en rojo, wordmark abajo a la izquierda, sticker verde abajo a la derecha. Si Edge escribe la captura con un tamaño distinto al pedido (barra de scroll), agregar `--force-device-scale-factor=1` a los argumentos.

- [ ] **Step 5: Borrar las rutas de imagen que el export no sirve, y `nosotros`**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web
rm -f "src/app/(es)/opengraph-image.tsx" "src/app/(es)/twitter-image.tsx" src/app/icon.tsx src/app/apple-icon.tsx src/app/favicon.ico
rm -rf "src/app/(es)/nosotros"
git rm -q --cached src/app/icon.tsx src/app/apple-icon.tsx src/app/favicon.ico 2>/dev/null; ls src/app
```

Esperado: `(es)  (lp)  fonts  globals.css  manifest.ts  robots.ts  sitemap.ts` (y `(preview)` hasta la tarea 15). Copiar el favicon viejo por si alguien lo pide por `/favicon.ico`: `cp out/favicon.ico public/favicon.ico` no: el nuevo es `public/favicon-32.png`; los navegadores que piden `/favicon.ico` reciben 404 y usan el `<link rel="icon">`. Aceptado.

- [ ] **Step 6: `src/app/sitemap.ts`** (reemplazo completo)

```ts
import type { MetadataRoute } from "next";
import { contact } from "@/content/contact";
import { home } from "@/content/home";
import { lens } from "@/content/lens";
import { service as s1 } from "@/content/services/desarrollo-software-a-medida";
import { service as s2 } from "@/content/services/automatizacion-con-ia";
import { service as s3 } from "@/content/services/datos-y-tableros";
import { service as s4 } from "@/content/services/integracion-de-sistemas";
import { service as s5 } from "@/content/services/web-ecommerce-y-apps";
import { SITE_URL } from "@/lib/site";

const posts: [string, string][] = [
  ["por-que-tu-empresa-necesita-software-a-medida", "2026-02-01"],
  ["automatizar-carga-facturas", "2026-09-13"],
  ["que-es-una-api-y-por-que-importa", "2026-09-13"],
  ["ocr-documentos-argentina", "2026-09-13"],
  ["senales-de-que-necesitas-automatizar", "2026-02-24"],
  ["elegir-proveedor-desarrollo-software", "2026-02-25"],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (path: string, date: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(date),
    priority,
  });
  return [
    entry("/", home.updatedAt, 1),
    ...[s1, s2, s3, s4, s5].map((s) => entry(s.path, s.updatedAt, 0.9)),
    entry(lens.path, lens.updatedAt, 0.9),
    entry(contact.path, contact.updatedAt, 0.6),
    entry("/blog", "2026-09-13", 0.7),
    ...posts.map(([slug, date]) => entry(`/blog/${slug}`, date, 0.6)),
  ];
}
```

`robots.ts` queda como está.

- [ ] **Step 7: `src/app/manifest.ts`** (reemplazo completo)

```ts
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Luvant: software a medida y automatización con IA",
    short_name: "Luvant",
    description: "Software a medida, automatizaciones con IA y Luvant Lens. Córdoba, Argentina.",
    start_url: "/",
    display: "standalone",
    background_color: "#fdfcf7",
    theme_color: "#fdfcf7",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
```

- [ ] **Step 8: Redirecciones 301 en `.htaccess`**

Insertar justo después de la línea `RewriteBase /`:

```apache
# Redirecciones del rediseño (septiembre 2026)
RedirectMatch 301 ^/servicios/automatizacion-de-procesos/?$ /servicios/automatizacion-con-ia
RedirectMatch 301 ^/servicios/consultoria-tecnica/?$ /servicios/desarrollo-software-a-medida
RedirectMatch 301 ^/productos/?$ /productos/lens
RedirectMatch 301 ^/nosotros/?$ /
```

(`RedirectMatch` con `^…$` en vez de `Redirect`, porque `Redirect 301 /productos …` también capturaría `/productos/lens` y haría un bucle.) `.htaccess` no pasa por el build; se verifica en producción con `curl -sI https://luvant.com.ar/nosotros | head -3` después del deploy.

- [ ] **Step 9: Build, lint y verificación de metadata**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && npm run lint && npm run build 2>&1 | tail -30
```

Esperado: la tabla de rutas sin `/nosotros`, `/productos`, `/servicios/automatizacion-de-procesos`, `/servicios/consultoria-tecnica`, `/en/*`, `/opengraph-image`, `/icon`. Después:

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && grep -o '<meta property="og:image" content="[^"]*"' out/index.html out/productos/lens.html out/servicios/datos-y-tableros.html && grep -o '<link rel="canonical" href="[^"]*"' out/index.html out/servicios/datos-y-tableros.html && grep -c "hreflang" out/index.html && grep -o "<loc>[^<]*</loc>" out/sitemap.xml
```

Esperado: `og:image` apunta a `https://luvant.com.ar/og/<slug>.png` en cada una; canonical absoluto por página; `0` hreflang; el sitemap lista exactamente las 15 URLs (home, 5 fichas, lens, contacto, blog, 6 artículos).

- [ ] **Step 10: Stage**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && git add scripts public/og public/icon.png public/apple-icon.png public/favicon-32.png src/app/sitemap.ts src/app/manifest.ts .htaccess package.json "src/app/(es)" src/app && git status --short | head -30
```

---

### Task 15: Limpieza, script de verificación y verificación final

**Files:**
- Delete: `src/app/(preview)/`, `src/components/preview/`, `public/preview/`, `src/components/sections/`, `src/components/layout/`, `src/components/ui/`, `src/components/animations/`, `src/lib/constants.ts`, `src/components/brand/LuvantLogo.tsx`
- Move: `src/lib/i18n/` → `src/_unused/i18n/`
- Modify: `src/app/(es)/not-found.tsx` (reemplazo completo), `src/app/globals.css`, `.github/workflows/deploy.yml`
- Create: `scripts/check-out.mjs`; `package.json` script `check`

- [ ] **Step 1: Confirmar que nada vivo importa lo que se va a borrar**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && grep -rln "components/sections\|components/layout\|components/ui\|components/animations\|components/brand\|lib/constants\|lib/i18n\|components/preview" src --include=*.tsx --include=*.ts | grep -v "src/_unused\|src/components/sections\|src/components/layout\|src/components/ui\|src/components/animations\|src/components/preview\|src/app/(preview)"
```

Esperado: solo `src/app/(es)/not-found.tsx` (se reescribe en el paso 3). Si aparece otro archivo, es una página vieja que quedó sin migrar: revisar antes de seguir.

- [ ] **Step 2: Borrar y mover**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web
rm -rf "src/app/(preview)" src/components/preview public/preview src/components/sections src/components/layout src/components/ui src/components/animations src/components/brand src/lib/constants.ts
mv src/lib/i18n src/_unused/i18n
git rm -q -r --cached src/components/sections src/components/layout src/components/ui src/components/animations src/components/brand src/lib/constants.ts src/lib/i18n 2>/dev/null
ls src/components src/lib
```

Esperado: `src/components`: `lp  paper  papel`; `src/lib`: `seo.tsx  site.ts  utils.ts`.

- [ ] **Step 3: `src/app/(es)/not-found.tsx`** (reemplazo completo)

```tsx
import type { Metadata } from "next";
import Eyebrow from "@/components/paper/Eyebrow";
import Footer from "@/components/paper/Footer";
import Nav from "@/components/paper/Nav";
import Underline from "@/components/paper/Underline";

export const metadata: Metadata = {
  title: "Página no encontrada | Luvant",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main-content" className="min-h-[60vh] px-5 py-20 md:px-16">
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-4 max-w-[800px] text-[42px] font-bold leading-[.96] tracking-[-.035em] md:text-[72px]">
          Esta página no existe. <span className="text-papel-rojo">La home, sí.</span>
        </h1>
        <div className="mt-8">
          <Underline href="/" size="lg">
            Volver al inicio
          </Underline>
        </div>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 4: Sacar de `globals.css` lo que ya no usa nadie**

Borrar del bloque `@layer components` las reglas `.section-padding`, `.container-main`, `.gradient-border` (y `::before`, `:hover::before`), `.noise-bg::after`, `.glow-sm`, `.glow-md`, `.dot-grid`, `.cross-grid`; y el bloque `@layer utilities` con `.text-gradient` y `.text-gradient-bright` completo. Del `:root` borrar las variables `--luvant-*` (quedan las `--pp-*`). Verificar que no queden usos:

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && grep -rn "gradient-border\|noise-bg\|glow-\|dot-grid\|cross-grid\|text-gradient\|section-padding\|container-main\|--luvant-" src | grep -v _unused
```

Esperado: sin resultados.

- [ ] **Step 5: `deploy.yml`**

En `.github/workflows/deploy.yml`, `branches: [main]` → `branches: [master]`.

- [ ] **Step 6: `scripts/check-out.mjs`**

```js
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = "out";
const problems = [];

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith(".html") ? [p] : [];
  });
}

function exists(href) {
  const path = href.split(/[?#]/)[0].replace(/\/$/, "");
  if (path === "" || path === "/") return true;
  return (
    existsSync(join(root, path)) ||
    existsSync(join(root, `${path}.html`)) ||
    existsSync(join(root, path, "index.html"))
  );
}

for (const file of walk(root)) {
  const html = readFileSync(file, "utf8");
  const page = relative(root, file);
  if (page === "404.html") continue;
  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1 !== 1) problems.push(`${page}: ${h1} h1`);
  if (!/<title>[^<]+<\/title>/.test(html)) problems.push(`${page}: sin title`);
  if (!/<meta name="description" content="[^"]+"/.test(html)) problems.push(`${page}: sin description`);
  if (!/<link rel="canonical" href="https:\/\/luvant\.com\.ar/.test(html)) problems.push(`${page}: sin canonical`);
  if (/hreflang=/.test(html)) problems.push(`${page}: hreflang`);
  for (const m of html.matchAll(/href="(\/[^"]*)"/g)) {
    if (m[1].startsWith("/_next/") || m[1].startsWith("/api/")) continue;
    if (!exists(m[1])) problems.push(`${page}: enlace roto ${m[1]}`);
  }
  for (const m of html.matchAll(/(?:src|content)="(\/og\/[^"]+|\/icon\.png|\/apple-icon\.png|\/favicon-32\.png)"/g)) {
    if (!exists(m[1])) problems.push(`${page}: imagen faltante ${m[1]}`);
  }
  if (/digesto/i.test(html) && !page.startsWith("blog")) problems.push(`${page}: dice "digesto"`);
}

if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log("out/ ok");
```

Agregar a `package.json`, en `scripts`: `"check": "node scripts/check-out.mjs"`.

- [ ] **Step 7: Build, lint, check**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && npm run lint && npm run build 2>&1 | tail -30 && npm run check
```

Esperado: tabla de rutas final (home, 5 fichas, lens, contacto, contacto/gracias, blog, 6 artículos, lp/facturas, lp/gracias, sitemap, robots, manifest) y `out/ ok`. Si `check` lista enlaces rotos, arreglarlos en la página que los tiene (normalmente un `href` viejo en un artículo del blog).

- [ ] **Step 8: Capturas de todas las plantillas**

Con el comando de la tarea 1, capturar a 1280 y 390: `` (home), `servicios/automatizacion-con-ia`, `productos/lens`, `contacto`, `contacto/gracias?tema=Luvant%20Lens`, `blog`, `blog/ocr-documentos-argentina`, `noexiste` (404). Mirar cada PNG con Read y comparar con los bocetos de `.superpowers/brainstorm/943-1789315814/content/`. Lo que difiera del boceto se ajusta en el componente que corresponda y se vuelve a capturar.

- [ ] **Step 9: JSON-LD y Lighthouse**

JSON-LD: abrir `https://validator.schema.org/`, pegar el contenido de `out/servicios/automatizacion-con-ia.html` y de `out/productos/lens.html`; esperado: `Service` + `FAQPage` + `BreadcrumbList` + `Organization` + `WebSite` sin errores, y `SoftwareApplication` en Lens.

Lighthouse (móvil), con el servidor estático levantado como en la captura:

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && npx --yes serve -l 3999 out >/dev/null 2>&1 & sleep 2
npx --yes lighthouse http://localhost:3999/ --preset=perf --form-factor=mobile --screenEmulation.mobile --only-categories=performance,accessibility,best-practices,seo --output=json --output-path=./.superpowers/lh-home.json --chrome-flags="--headless=new" --quiet
node -e "const r=require('./.superpowers/lh-home.json').categories;console.log(Object.values(r).map(c=>c.id+': '+Math.round(c.score*100)).join('\n'))"
```

Esperado: las cuatro ≥ 95. Repetir con `/servicios/automatizacion-con-ia` y `/productos/lens`. Si performance baja de 95, lo primero que se mira es el peso de framer-motion en la página (que `Desk`, `Reveal` y `Nav` sean los únicos `"use client"`) y que las fuentes se sirvan desde `/_next/static/media` (autoalojadas).

- [ ] **Step 10: Stage final**

```bash
cd /c/wamp64/www/luvant.com.ar/luvant-web && git add -u src public .github scripts package.json && git add src/_unused scripts "src/app/(es)/not-found.tsx" && git status --short | wc -l && git status --short | head -40
```

Mostrar lo staged (van a ser muchos archivos: los nuevos de `paper/` y `content/`, las páginas, los borrados) y esperar el "commiteá". No deployar: el deploy sale solo cuando se pushee a `master`, y eso lo decide Facundo.

---

## Después del plan

Pendientes que quedan fuera y se anotan en la spec (§13): contenido nuevo del blog, inglés, `/lp/facturas`, cualquier dato de Embalse. Al terminar, actualizar `docs/superpowers/specs/2026-09-13-redesign-papel-design.md` con una sección "Estado" que diga qué se implementó y qué difirió del boceto.
