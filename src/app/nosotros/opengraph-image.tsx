import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Luvant - Empresa de desarrollo de software en Argentina";
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
          Nosotros
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
          Software con criterio
        </div>
        <div
          style={{
            fontSize: "20px",
            color: "#a3a3a3",
            lineHeight: 1.5,
            maxWidth: "680px",
          }}
        >
          Empresa de desarrollo de software en Argentina. Calidad técnica,
          transparencia total e impacto medible en cada proyecto.
        </div>
        <div
          style={{
            display: "flex",
            gap: "32px",
            marginTop: "16px",
          }}
        >
          {[
            { value: "2024", label: "Fundada" },
            { value: "100%", label: "Código propio" },
            { value: "AR", label: "Argentina" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  color: "#ffffff",
                  fontFamily: "monospace",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#525252",
                  fontFamily: "monospace",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
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
