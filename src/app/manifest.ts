import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Luvant: software a medida y automatización con IA",
    short_name: "Luvant",
    description: "Sistemas, automatizaciones y lectura de documentos, escritos para tu operación.",
    start_url: "/",
    display: "standalone",
    background_color: "#fdfcf7",
    theme_color: "#fdfcf7",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
