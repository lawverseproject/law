import { ArrowRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BalanceScale from './BalanceScale';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36">
      {/* Background layers */}
      <div className="absolute inset-0 -z-30 bg-grid opacity-30" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-ink-950 via-ink-900/40 to-ink-950" />

      {/* Radial lighting behind the scale */}
      <div className="pointer-events-none absolute left-1/2 top-[55%] -z-20 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/6 blur-[140px]" />

      {/* Vertical light beams */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="light-beam left-[15%]" />
        <div className="light-beam left-[35%]" style={{ opacity: 0.5 }} />
        <div className="light-beam left-[65%]" style={{ opacity: 0.5 }} />
        <div className="light-beam left-[85%]" />
      </div>

      {/* Faint document texture lines */}
      <div className="pointer-events-none absolute left-1/2 top-[60%] -z-10 h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
        <div className="flex flex-col gap-3">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-px bg-gradient-to-r from-transparent via-gold-300/40 to-transparent" style={{ marginLeft: `${i % 2 === 0 ? '0' : '20px'}` }} />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Eyebrow with gold line */}
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <div className="inline-flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-gold-300/50" />
            <div className="inline-flex items-center gap-2.5 rounded-full border border-gold-400/15 bg-ink-800/30 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-300 animate-glow-pulse" />
              <span className="text-[10px] font-medium tracking-[0.28em] text-champagne-100/70">
                ARTIFICIAL INTELLIGENCE
              </span>
              <span className="text-gold-300/30">·</span>
              <span className="text-[10px] font-medium tracking-[0.28em] text-gold-300/80">
                FOR REAL-WORLD LAW
              </span>
            </div>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-gold-300/50" />
          </div>
        </div>

        {/* Main heading */}
        <h1
          className="mx-auto mt-7 max-w-4xl text-center font-serif text-[42px] leading-[1.02] tracking-tight text-champagne-100 animate-fade-up sm:text-[62px] lg:text-[78px]"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          Balanced
          <br className="hidden sm:block" /> Insights.{' '}
          <span className="text-gold-gradient">Brighter</span>
          <br className="hidden sm:block" />{' '}
          <span className="text-gold-gradient">Tomorrow.</span>
        </h1>

        {/* Description — two parts */}
        <div className="mx-auto mt-6 max-w-xl text-center animate-fade-up" style={{ animationDelay: '0.35s', opacity: 0 }}>
          <p className="text-[15px] font-medium tracking-[0.1em] text-gold-200/70 sm:text-[16px]">
            Research. Analyze. Understand. Draft.
          </p>
          <p className="mt-2.5 text-[14px] leading-relaxed text-champagne-100/50 sm:text-[15px]">
            A modern legal intelligence platform for professionals,
            researchers and the curious minds.
          </p>
        </div>

        {/* Buttons */}
        <div
          className="mt-8 flex flex-col items-center justify-center gap-4 animate-fade-up sm:flex-row"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          <button
            onClick={() => navigate('/signup')}
            className="btn-gold group inline-flex items-center gap-2 rounded-full px-8 py-4 text-[14px]"
          >
            Explore Platform
            <ArrowRight className="h-4 w-4 arrow-nudge" strokeWidth={2} />
          </button>
          <button className="btn-ghost group inline-flex items-center gap-3 rounded-full px-7 py-4 text-[14px]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gold-300/30 transition-colors group-hover:border-gold-300/50">
              <Play className="h-3 w-3 fill-gold-300 text-gold-300" />
            </span>
            Watch Our Story
            <span className="text-champagne-100/40 text-[12px]">2 min</span>
          </button>
        </div>

        {/* Scale */}
        <div
          className="mt-12 animate-fade-up sm:mt-16"
          style={{ animationDelay: '0.7s', opacity: 0 }}
        >
          <BalanceScale />
        </div>
      </div>
    </section>
  );
}
