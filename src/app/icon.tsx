import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        background: "#0a0a0a",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "6px",
      }}
    >
      <svg width="20" height="20" viewBox="0 0 56 56" fill="none">
        <path
          d="M14 40L28 16L42 40"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle cx="28" cy="16" r="4" fill="white" />
      </svg>
    </div>,
    { ...size },
  );
}
