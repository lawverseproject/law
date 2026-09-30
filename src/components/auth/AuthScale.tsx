/** Lightweight animated justice balance scale for auth pages. */
export default function AuthScale() {
  return (
    <div className="relative mx-auto w-full max-w-[260px]">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/8 blur-[80px]" />

      <svg viewBox="0 0 300 220" className="w-full" style={{ overflow: 'visible' }} aria-hidden>
        <defs>
          <linearGradient id="authGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f6ead0" />
            <stop offset="50%" stopColor="#d4a44e" />
            <stop offset="100%" stopColor="#a06f2a" />
          </linearGradient>
          <linearGradient id="authGoldV" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e0bd72" />
            <stop offset="100%" stopColor="#7c5520" />
          </linearGradient>
          <linearGradient id="authPan" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#162234" />
            <stop offset="100%" stopColor="#0a0f17" />
          </linearGradient>
        </defs>

        {/* Base */}
        <ellipse cx="150" cy="210" rx="55" ry="6" fill="rgba(212,164,78,0.06)" />
        <path d="M115 204 L185 204 L178 194 L122 194 Z" fill="url(#authGoldV)" />
        <rect x="135" y="194" width="30" height="5" rx="1.5" fill="url(#authGold)" />
        <rect x="143" y="188" width="14" height="7" rx="1.5" fill="url(#authGoldV)" />

        {/* Column */}
        <rect x="147" y="60" width="6" height="128" rx="2" fill="url(#authGoldV)" />

        {/* Finial */}
        <circle cx="150" cy="58" r="6" fill="url(#authGold)" />
        <circle cx="150" cy="58" r="3" fill="#7c5520" opacity="0.5" />

        {/* Beam — subtle oscillation */}
        <g
          style={{
            transformOrigin: '150px 60px',
            animation: 'authBeamSway 7s ease-in-out infinite',
          }}
        >
          <rect x="55" y="57" width="190" height="5" rx="2.5" fill="url(#authGold)" />
          <circle cx="55" cy="60" r="5" fill="url(#authGold)" />
          <circle cx="245" cy="60" r="5" fill="url(#authGold)" />

          {/* Left chains + pan */}
          <g
            style={{
              animation: 'authPanLeft 7s ease-in-out infinite',
            }}
          >
            <line x1="55" y1="62" x2="30" y2="105" stroke="url(#authGold)" strokeWidth="1.2" />
            <line x1="55" y1="62" x2="80" y2="105" stroke="url(#authGold)" strokeWidth="1.2" />
            <ellipse cx="55" cy="107" rx="34" ry="4.5" fill="url(#authPan)" stroke="url(#authGold)" strokeWidth="1" />
            <path d="M21 107 Q55 122 89 107" fill="none" stroke="url(#authGold)" strokeWidth="1.2" />
            <path d="M21 107 Q55 118 89 107" fill="rgba(15,24,40,0.5)" stroke="none" />
          </g>

          {/* Right chains + pan */}
          <g
            style={{
              animation: 'authPanRight 7s ease-in-out infinite',
            }}
          >
            <line x1="245" y1="62" x2="220" y2="105" stroke="url(#authGold)" strokeWidth="1.2" />
            <line x1="245" y1="62" x2="270" y2="105" stroke="url(#authGold)" strokeWidth="1.2" />
            <ellipse cx="245" cy="107" rx="34" ry="4.5" fill="url(#authPan)" stroke="url(#authGold)" strokeWidth="1" />
            <path d="M211 107 Q245 122 279 107" fill="none" stroke="url(#authGold)" strokeWidth="1.2" />
            <path d="M211 107 Q245 118 279 107" fill="rgba(15,24,40,0.5)" stroke="none" />
          </g>
        </g>
      </svg>

      <style>{`
        @keyframes authBeamSway {
          0%, 100% { transform: rotate(-1.8deg); }
          50% { transform: rotate(1.8deg); }
        }
        @keyframes authPanLeft {
          0%, 100% { transform: translateY(4px); }
          50% { transform: translateY(-3px); }
        }
        @keyframes authPanRight {
          0%, 100% { transform: translateY(-3px); }
          50% { transform: translateY(4px); }
        }
      `}</style>
    </div>
  );
}
