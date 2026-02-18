import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Luvant Lens - OCR inteligente para documentos empresariales";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
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
            Producto
          </div>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.2,
              letterSpacing: "-1px",
            }}
          >
            Luvant Lens
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "#a3a3a3",
              lineHeight: 1.5,
              maxWidth: "700px",
            }}
          >
            OCR inteligente para documentos empresariales. +99% de
            precisi&oacute;n, &lt;500ms de latencia. API REST lista para integrar.
          </div>
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "8px",
            }}
          >
            {["OCR", "Machine Learning", "API REST", "Facturas AFIP"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    padding: "6px 16px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "8px",
                    fontSize: "14px",
                    color: "#a3a3a3",
                  }}
                >
                  {tag}
                </div>
              )
            )}
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
      </div>
    ),
    { ...size }
  );
}
