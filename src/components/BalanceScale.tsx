import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus, LogIn, ArrowRight } from 'lucide-react';

type Side = 'signup' | 'login' | null;

export default function BalanceScale() {
  const [hovered, setHovered] = useState<Side>(null);
  const [tilting, setTilting] = useState<Side>(null);
  const navigate = useNavigate();

  // Tilt angle in degrees. Positive = right side down.
  let tilt = 0;
  if (hovered === 'signup') tilt = -5;
  else if (hovered === 'login') tilt = 5;
  if (tilting === 'signup') tilt = -9;
  else if (tilting === 'login') tilt = 9;

  // Pan vertical offsets — the heavier side moves down, the lighter side moves up
  const leftY = tilt < 0 ? 16 : tilt > 0 ? -12 : 0;
  const rightY = tilt > 0 ? 16 : tilt < 0 ? -12 : 0;

  const handleNavigate = (side: Side) => {
    setTilting(side);
    window.setTimeout(() => {
      navigate(side === 'signup' ? '/signup' : '/login');
    }, 600);
  };

  // Gold particles
  const particles = useMemo(
    () =>
      [...Array(8)].map((_, i) => ({
        id: i,
        left: `${15 + i * 9}%`,
        delay: `${i * 1.1}s`,
        duration: `${7 + (i % 3) * 2}s`,
        size: 2 + (i % 2),
      })),
    []
  );

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/8 blur-[100px]" />

      {/* Gold particles */}
      <div className="pointer-events-none absolute inset-0 -z-5 overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle absolute bottom-0 rounded-full bg-gold-300/40"
            style={{
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <svg
        viewBox="0 0 800 520"
        className="w-full"
        style={{ overflow: 'visible' }}
        aria-hidden
      >
        <defs>
          <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f6ead0" />
            <stop offset="50%" stopColor="#d4a44e" />
            <stop offset="100%" stopColor="#a06f2a" />
          </linearGradient>
          <linearGradient id="goldGradV" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e0bd72" />
            <stop offset="100%" stopColor="#7c5520" />
          </linearGradient>
          <linearGradient id="panGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#162234" />
            <stop offset="100%" stopColor="#0a0f17" />
          </linearGradient>
          <radialGradient id="panGlow" cx="0.5" cy="0.3" r="0.7">
            <stop offset="0%" stopColor="rgba(212,164,78,0.25)" />
            <stop offset="100%" stopColor="rgba(212,164,78,0)" />
          </radialGradient>
          <filter id="scaleGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Base pedestal */}
        <ellipse cx="400" cy="500" rx="120" ry="10" fill="rgba(212,164,78,0.06)" />
        <path d="M340 492 L460 492 L450 478 L350 478 Z" fill="url(#goldGradV)" />
        <rect x="355" y="478" width="90" height="6" rx="2" fill="url(#goldGrad)" />
        <rect x="385" y="470" width="30" height="10" rx="2" fill="url(#goldGradV)" />

        {/* Central column */}
        <rect x="395" y="150" width="10" height="320" rx="3" fill="url(#goldGradV)" />
        <rect x="395" y="150" width="10" height="320" rx="3" fill="none" stroke="rgba(246,234,208,0.15)" strokeWidth="0.5" />

        {/* Top finial */}
        <circle cx="400" cy="146" r="8" fill="url(#goldGrad)" />
        <circle cx="400" cy="146" r="4" fill="#7c5520" opacity="0.5" />

        {/* Beam group — rotates around the fulcrum at (400, 150) */}
        <g
          style={{
            transform: `rotate(${tilt}deg)`,
            transformOrigin: '400px 150px',
            transition: 'transform 0.6s cubic-bezier(0.34, 1.4, 0.64, 1)',
          }}
        >
          {/* Beam */}
          <rect x="180" y="147" width="440" height="6" rx="3" fill="url(#goldGrad)" />
          <rect x="180" y="147" width="440" height="6" rx="3" fill="none" stroke="rgba(246,234,208,0.2)" strokeWidth="0.5" />

          {/* End caps */}
          <circle cx="180" cy="150" r="6" fill="url(#goldGrad)" />
          <circle cx="620" cy="150" r="6" fill="url(#goldGrad)" />

          {/* LEFT chains + pan */}
          <g
            style={{
              transform: `translateY(${leftY}px)`,
              transition: 'transform 0.6s cubic-bezier(0.34, 1.4, 0.64, 1)',
            }}
          >
            {/* Chains */}
            <line x1="180" y1="153" x2="120" y2="250" stroke="url(#goldGrad)" strokeWidth="1.4" />
            <line x1="180" y1="153" x2="240" y2="250" stroke="url(#goldGrad)" strokeWidth="1.4" />
            <line x1="180" y1="153" x2="150" y2="250" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.4" />
            <line x1="180" y1="153" x2="210" y2="250" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.4" />

            {/* Pan */}
            <ellipse cx="180" cy="252" rx="72" ry="10" fill="url(#panGlow)" />
            <ellipse cx="180" cy="250" rx="68" ry="8" fill="url(#panGrad)" stroke="url(#goldGrad)" strokeWidth="1.2" />
            <path d="M112 250 Q180 278 248 250" fill="none" stroke="url(#goldGrad)" strokeWidth="1.4" />
            <path d="M112 250 Q180 272 248 250" fill="rgba(15,24,40,0.6)" stroke="none" />
          </g>

          {/* RIGHT chains + pan */}
          <g
            style={{
              transform: `translateY(${rightY}px)`,
              transition: 'transform 0.6s cubic-bezier(0.34, 1.4, 0.64, 1)',
            }}
          >
            <line x1="620" y1="153" x2="560" y2="250" stroke="url(#goldGrad)" strokeWidth="1.4" />
            <line x1="620" y1="153" x2="680" y2="250" stroke="url(#goldGrad)" strokeWidth="1.4" />
            <line x1="620" y1="153" x2="590" y2="250" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.4" />
            <line x1="620" y1="153" x2="650" y2="250" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.4" />

            <ellipse cx="620" cy="252" rx="72" ry="10" fill="url(#panGlow)" />
            <ellipse cx="620" cy="250" rx="68" ry="8" fill="url(#panGrad)" stroke="url(#goldGrad)" strokeWidth="1.2" />
            <path d="M552 250 Q620 278 688 250" fill="none" stroke="url(#goldGrad)" strokeWidth="1.4" />
            <path d="M552 250 Q620 272 688 250" fill="rgba(15,24,40,0.6)" stroke="none" />
          </g>
        </g>
      </svg>

      {/* Cards overlaid on pans */}
      <div className="pointer-events-none absolute inset-0">
        <ScaleCard
          icon={<UserPlus className="h-5 w-5" strokeWidth={1.5} />}
          title="Sign Up"
          subtitle="Begin Your Journey"
          active={hovered === 'signup' || tilting === 'signup'}
          translateY={leftY * 0.78}
          onEnter={() => setHovered('signup')}
          onLeave={() => setHovered(null)}
          onClick={() => handleNavigate('signup')}
          style={{ left: '22.5%', transform: 'translateX(-50%)' }}
        />
        <ScaleCard
          icon={<LogIn className="h-5 w-5" strokeWidth={1.5} />}
          title="Login"
          subtitle="Welcome Back"
          active={hovered === 'login' || tilting === 'login'}
          translateY={rightY * 0.78}
          onEnter={() => setHovered('login')}
          onLeave={() => setHovered(null)}
          onClick={() => handleNavigate('login')}
          style={{ right: '22.5%', transform: 'translateX(50%)' }}
        />
      </div>
    </div>
  );
}

function ScaleCard({
  icon,
  title,
  subtitle,
  active,
  translateY,
  onEnter,
  onLeave,
  onClick,
  style,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  active: boolean;
  translateY: number;
  onEnter: () => void;
  onLeave: () => void;
  onClick: () => void;
  style: React.CSSProperties;
}) {
  return (
    <button
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
      className={`pointer-events-auto absolute top-[42%] flex w-[140px] flex-col items-center gap-2 rounded-2xl px-4 py-5 text-center transition-all duration-600 sm:w-[170px] sm:py-6 ${
        active
          ? 'glass-strong border-gold-300/40 shadow-[0_0_40px_-8px_rgba(212,164,78,0.35)]'
          : 'glass border-gold-400/15'
      }`}
      style={{
        ...style,
        transform: `${style.transform} translateY(${translateY}px)`,
        transition: 'transform 0.6s cubic-bezier(0.34, 1.4, 0.64, 1), box-shadow 0.4s, border-color 0.4s',
        cursor: 'pointer',
      }}
    >
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-400 ${
          active
            ? 'border-gold-300/50 bg-gold-400/15 text-gold-200'
            : 'border-gold-400/25 bg-ink-800/60 text-gold-300/80'
        }`}
      >
        {icon}
      </div>
      <div className="font-serif text-lg font-semibold tracking-wide text-champagne-100">
        {title}
      </div>
      <div className="text-[10px] tracking-[0.15em] text-champagne-100/50 uppercase">
        {subtitle}
      </div>
      <ArrowRight
        className={`h-3.5 w-3.5 transition-all duration-400 ${
          active ? 'translate-x-1 text-gold-300 opacity-100' : 'text-gold-300/40 opacity-0'
        }`}
      />
    </button>
  );
}
