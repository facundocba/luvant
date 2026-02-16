"use client";

interface LuvantLogoProps {
  variant?: "horizontal" | "vertical" | "symbol" | "wordmark";
  size?: number;
  colorScheme?: "light" | "dark";
  className?: string;
}

export default function LuvantLogo({
  variant = "horizontal",
  size = 32,
  colorScheme = "dark",
  className,
}: LuvantLogoProps) {
  const textColor = colorScheme === "dark" ? "#fff" : "#000";
  const bgColor = colorScheme === "dark" ? "#000" : "#000";

  const Symbol = ({ s = size }: { s?: number }) => (
    <svg
      width={s}
      height={s}
      viewBox="0 0 56 56"
      fill="none"
      aria-hidden="true"
    >
      <rect width="56" height="56" rx="12" fill={bgColor} />
      <path
        d="M14 40L28 16L42 40"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="16" r="4" fill="white" />
    </svg>
  );

  const Wordmark = ({ fontSize = size * 0.6 }: { fontSize?: number }) => (
    <span
      style={{
        fontSize: `${fontSize}px`,
        fontWeight: 500,
        letterSpacing: "0.04em",
        color: textColor,
      }}
    >
      LUVANT
    </span>
  );

  if (variant === "symbol") {
    return (
      <div className={className} aria-label="Luvant">
        <Symbol />
      </div>
    );
  }

  if (variant === "wordmark") {
    return (
      <div className={className} aria-label="Luvant">
        <Wordmark fontSize={size * 0.75} />
      </div>
    );
  }

  if (variant === "vertical") {
    return (
      <div
        className={className}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: `${size * 0.25}px`,
        }}
        aria-label="Luvant"
      >
        <Symbol />
        <Wordmark fontSize={size * 0.45} />
      </div>
    );
  }

  // horizontal (default)
  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        gap: `${size * 0.375}px`,
      }}
      aria-label="Luvant"
    >
      <Symbol />
      <Wordmark />
    </div>
  );
}
