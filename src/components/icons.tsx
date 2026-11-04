export function ArrowUpRight({ size = 12 }: { size?: number }) {
  return (
    <svg className="arr" width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M3 9l6-6M4 3h5v5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** The plus-shaped medical cross used in the badge, marquee and credentials card. */
export function MedicalCross({
  size = 28,
  fill,
  stroke,
  strokeWidth,
  className,
  style,
}: {
  size?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number | string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M11 3h6v8h8v6h-8v8h-6v-8H3v-6h8z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
