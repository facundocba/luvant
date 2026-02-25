import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "OCR para documentos argentinos: desafíos y soluciones";
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
          Blog &middot; Producto
        </div>
        <div
          style={{
            fontSize: "48px",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            letterSpacing: "-1px",
            maxWidth: "900px",
          }}
        >
          OCR para documentos argentinos: desaf&iacute;os y soluciones
        </div>
        <div
          style={{
            fontSize: "20px",
            color: "#a3a3a3",
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          C&oacute;mo procesar facturas AFIP, remitos y comprobantes con las
          particularidades del mercado argentino.
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
