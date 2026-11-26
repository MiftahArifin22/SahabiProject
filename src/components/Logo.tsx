export default function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lg-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F0CF6B" />
          <stop offset="1" stopColor="#B8922F" />
        </linearGradient>
      </defs>
      <rect x="16" y="3" width="32" height="12" rx="4" fill="url(#lg-gold)" opacity=".85" />
      <rect x="16" y="49" width="32" height="12" rx="4" fill="url(#lg-gold)" opacity=".85" />
      <rect x="9" y="12" width="46" height="40" rx="12" fill="#0e0e10" stroke="url(#lg-gold)" strokeWidth="3.5" />
      <path d="M18 33h7l3-7 5 13 3-6h10" fill="none" stroke="#F0CF6B" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
