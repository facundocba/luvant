import type { MetadataRoute } from "next";

const BASE_URL = "https://luvant.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-02-15"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/productos`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/productos/lens`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/nosotros`,
      lastModified: new Date("2026-01-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date("2026-02-10"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/por-que-tu-empresa-necesita-software-a-medida`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/automatizar-carga-facturas`,
      lastModified: new Date("2026-02-10"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: new Date("2026-01-15"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/servicios/desarrollo-software-a-medida`,
      lastModified: new Date("2026-02-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/servicios/automatizacion-de-procesos`,
      lastModified: new Date("2026-02-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/servicios/integracion-de-sistemas`,
      lastModified: new Date("2026-02-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/servicios/consultoria-tecnica`,
      lastModified: new Date("2026-02-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
