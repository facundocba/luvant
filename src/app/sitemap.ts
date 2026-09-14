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
