export function MoonMark({
  className,
  withSparkles = true,
}: {
  className?: string;
  withSparkles?: boolean;
}) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden fill="none">
      <defs>
        <linearGradient id="nalua-moon-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fdeec2" />
          <stop offset="100%" stopColor="var(--gold)" />
        </linearGradient>
      </defs>
      <path
        fill="url(#nalua-moon-grad)"
        d="M132 24c-42 8-72 45-72 88 0 49 40 88 89 88 20 0 38-6 53-17-11 4-23 6-35 6-49 0-89-40-89-89 0-38 24-70 58-83-1 2-3 4-4 7z"
      />
      {withSparkles ? (
        <g fill="currentColor">
          <path d="M46 40 l6 14 14 6 -14 6 -6 14 -6 -14 -14 -6 14 -6 z" />
          <path d="M150 130 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4 z" />
          <path d="M60 150 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3 z" />
        </g>
      ) : null}
    </svg>
  );
}
