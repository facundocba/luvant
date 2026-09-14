import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luvant: {
          black: "#000000",
          white: "#ffffff",
          950: "#0a0a0a",
          900: "#111111",
          800: "#171717",
          700: "#262626",
          600: "#525252",
          500: "#737373",
          400: "#a3a3a3",
          300: "#d4d4d4",
          200: "#e5e5e5",
          100: "#f5f5f5",
        },
        papel: {
          carton: "#e7dfc9",
          foja: "#fdfcf7",
          "foja-2": "#f6f2e6",
          "foja-3": "#f0ebdc",
          tinta: "#1e2a23",
          "tinta-2": "#4a554d",
          "tinta-3": "#8a8272",
          borde: "#c6bda2",
          "borde-suave": "#cfc5a8",
          rojo: "#b0271c",
          verde: "#3e6e63",
          birome: "#2a4b9b",
        },
      },
      fontFamily: {
        sans: ["var(--font-familjen)", "system-ui", "sans-serif"],
        mono: ["var(--font-courier)", "ui-monospace", "monospace"],
        geist: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        geistmono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        familjen: ["var(--font-familjen)", "system-ui", "sans-serif"],
        courier: ["var(--font-courier)", "ui-monospace", "monospace"],
        caveat: ["var(--font-caveat)", "cursive"],
      },
      keyframes: {
        underline: {
          "0%": { transform: "scaleX(1)", transformOrigin: "right" },
          "50%": { transform: "scaleX(0)", transformOrigin: "right" },
          "51%": { transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
      },
      animation: {
        underline: "underline .5s cubic-bezier(.16,1,.3,1)",
      },
      fontSize: {
        display: [
          "64px",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        h1: [
          "48px",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        h2: [
          "32px",
          { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "500" },
        ],
        h3: [
          "24px",
          { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "500" },
        ],
        body: ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        small: ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        caption: [
          "12px",
          {
            lineHeight: "1.5",
            letterSpacing: "0.04em",
            fontWeight: "400",
          },
        ],
        mono: [
          "14px",
          { lineHeight: "1.5", letterSpacing: "0.02em", fontWeight: "400" },
        ],
      },
      borderRadius: {
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
      },
      spacing: {
        page: "max(4rem, calc((100vw - 1280px) / 2 + 4rem))",
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
    },
  },
  plugins: [],
};
export default config;
