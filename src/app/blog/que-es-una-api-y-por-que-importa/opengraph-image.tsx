import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Qué es una API y por qué le importa a tu negocio";
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
          Blog &middot; Conceptos
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
          Qu&eacute; es una API y por qu&eacute; le importa a tu negocio
        </div>
        <div
          style={{
            fontSize: "20px",
            color: "#a3a3a3",
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          Explicaci&oacute;n pr&aacute;ctica de APIs para due&ntilde;os de
          empresa. Qu&eacute; son, para qu&eacute; sirven y c&oacute;mo conectan
          tus sistemas.
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
