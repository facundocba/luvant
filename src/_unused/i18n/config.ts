export type Locale = "es" | "en";

export const defaultLocale: Locale = "es";

export const locales: Locale[] = ["es", "en"];

/** Maps Spanish paths to English paths and vice versa */
export const pathMap: Record<string, Record<Locale, string>> = {
  home: { es: "/", en: "/en" },
  products: { es: "/productos", en: "/en/products" },
  "products/lens": { es: "/productos/lens", en: "/en/products/lens" },
  "services/custom-software": {
    es: "/servicios/desarrollo-software-a-medida",
    en: "/en/services/custom-software",
  },
  "services/process-automation": {
    es: "/servicios/automatizacion-de-procesos",
    en: "/en/services/process-automation",
  },
  "services/systems-integration": {
    es: "/servicios/integracion-de-sistemas",
    en: "/en/services/systems-integration",
  },
  "services/technical-consulting": {
    es: "/servicios/consultoria-tecnica",
    en: "/en/services/technical-consulting",
  },
  about: { es: "/nosotros", en: "/en/about" },
  blog: { es: "/blog", en: "/en/blog" },
  contact: { es: "/contacto", en: "/en/contact" },
  "blog/why-your-business-needs-custom-software": {
    es: "/blog/por-que-tu-empresa-necesita-software-a-medida",
    en: "/en/blog/why-your-business-needs-custom-software",
  },
  "blog/automate-invoice-processing": {
    es: "/blog/automatizar-carga-facturas",
    en: "/en/blog/automate-invoice-processing",
  },
  "blog/what-is-an-api-and-why-it-matters": {
    es: "/blog/que-es-una-api-y-por-que-importa",
    en: "/en/blog/what-is-an-api-and-why-it-matters",
  },
  "blog/ocr-documents-argentina": {
    es: "/blog/ocr-documentos-argentina",
    en: "/en/blog/ocr-documents-argentina",
  },
  "blog/signs-you-need-process-automation": {
    es: "/blog/senales-de-que-necesitas-automatizar",
    en: "/en/blog/signs-you-need-process-automation",
  },
  "blog/how-to-choose-a-software-provider": {
    es: "/blog/elegir-proveedor-desarrollo-software",
    en: "/en/blog/how-to-choose-a-software-provider",
  },
};

/** Reverse lookup: given a pathname, find the same page in the other locale */
export function getAlternatePath(
  currentPath: string,
  targetLocale: Locale,
): string {
  for (const entry of Object.values(pathMap)) {
    if (entry.es === currentPath || entry.en === currentPath) {
      return entry[targetLocale];
    }
  }
  // Fallback: if path not found, return home for target locale
  return targetLocale === "en" ? "/en" : "/";
}

/** Get the prefix for links in a given locale */
export function getLocalePath(locale: Locale): string {
  return locale === "en" ? "/en" : "";
}
