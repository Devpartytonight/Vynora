export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden>
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="32" y2="32">
            <stop stopColor="#7c5cff" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="9" fill="url(#lg)" />
        <path d="M8 9l8 15 8-15" stroke="#07080d" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight">
        Vynora<span className="text-muted font-normal"> Technologies</span>
      </span>
    </span>
  );
}
