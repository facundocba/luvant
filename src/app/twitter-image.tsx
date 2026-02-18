import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Luvant - Desarrollo de software a medida y automatización";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#0a0a0a",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-2px",
          }}
        >
          luvant.
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#a3a3a3",
            maxWidth: "600px",
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Desarrollo de software a medida, automatización de procesos e
          integración de sistemas.
        </div>
        <div
          style={{
            marginTop: "16px",
            fontSize: "14px",
            color: "#525252",
            fontFamily: "monospace",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          luvant.com.ar
        </div>
      </div>
    </div>,
    { ...size },
  );
}
