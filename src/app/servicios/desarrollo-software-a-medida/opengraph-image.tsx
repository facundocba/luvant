import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Luvant - Desarrollo de software a medida";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#0a0a0a",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div
          style={{
            fontSize: "14px",
            color: "#525252",
            fontFamily: "monospace",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Servicios
        </div>
        <div
          style={{
            fontSize: "52px",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.15,
            letterSpacing: "-1px",
            maxWidth: "800px",
          }}
        >
          Desarrollo de software a medida
        </div>
        <div
          style={{
            fontSize: "20px",
            color: "#a3a3a3",
            lineHeight: 1.5,
            maxWidth: "680px",
          }}
        >
          Aplicaciones web, APIs y sistemas internos diseñados para cómo opera
          tu negocio. Sin plantillas, sin limitaciones.
        </div>
      </div>
      <div
        style={{
          fontSize: "20px",
          fontWeight: 700,
          color: "#ffffff",
          letterSpacing: "-0.5px",
        }}
      >
        luvant.
      </div>
    </div>,
    { ...size },
  );
}
