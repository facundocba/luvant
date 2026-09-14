type Props = { size?: number; tone?: "ink" | "paper"; className?: string };

export default function Mark({ size = 26, tone = "ink", className }: Props) {
  const bg = tone === "ink" ? "#1e2a23" : "#fdfcf7";
  const fg = tone === "ink" ? "#fdfcf7" : "#1e2a23";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect width="56" height="56" rx="12" fill={bg} />
      <path
        d="M14 40L28 16L42 40"
        stroke={fg}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="16" r="4" fill={fg} />
    </svg>
  );
}
