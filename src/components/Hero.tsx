import { ArrowRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LegalUniverse3D from './LegalUniverse3D';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-ink-950 pt-28 sm:pt-32">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 -z-30 bg-ink-950" />

      <div className="pointer-events-none absolute inset-0 -z-20 bg-grid opacity-20" />

      <div className="pointer-events-none absolute left-[58%] top-[42%] -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/[0.045] blur-[150px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-30 h-32 bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent" />

      {/* =========================================================
          MAIN HERO
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid min-h-[650px] items-center lg:grid-cols-[0.9fr_1.1fr]">

          {/* =====================================================
              LEFT — HERO CONTENT
          ===================================================== */}

          <div className="relative z-20 max-w-2xl text-center lg:text-left">

            {/* Eyebrow */}
            <div
              className="flex justify-center animate-fade-in lg:justify-start"
              style={{
                animationDelay: '0.1s',
                opacity: 0,
              }}
            >
              <div className="inline-flex items-center gap-3">

                <div className="hidden h-px w-8 bg-gradient-to-r from-transparent to-gold-300/50 sm:block" />

                <div className="inline-flex items-center gap-2.5 rounded-full border border-gold-400/15 bg-ink-800/40 px-4 py-1.5 backdrop-blur-md">

                  <span className="h-1.5 w-1.5 rounded-full bg-gold-300 animate-glow-pulse" />

                  <span className="text-[9px] font-medium tracking-[0.24em] text-champagne-100/70 sm:text-[10px]">
                    ARTIFICIAL INTELLIGENCE
                  </span>

                  <span className="text-gold-300/30">
                    ·
                  </span>

                  <span className="text-[9px] font-medium tracking-[0.24em] text-gold-300/80 sm:text-[10px]">
                    REAL-WORLD LAW
                  </span>

                </div>
              </div>
            </div>

            {/* Main Heading */}
            <h1
              className="mt-7 font-serif text-[46px] leading-[0.98] tracking-tight text-champagne-100 animate-fade-up sm:text-[62px] lg:text-[70px]"
              style={{
                animationDelay: '0.2s',
                opacity: 0,
              }}
            >
              Balanced
              <br />

              <span className="text-champagne-100">
                Insights.
              </span>

              <br />

              <span className="text-gold-gradient">
                Brighter Tomorrow.
              </span>
            </h1>

            {/* Description */}
            <div
              className="mt-7 max-w-xl animate-fade-up"
              style={{
                animationDelay: '0.35s',
                opacity: 0,
              }}
            >
              <p className="text-[15px] font-medium tracking-[0.08em] text-gold-200/70 sm:text-[16px]">
                Research. Analyze. Understand. Draft.
              </p>

              <p className="mt-3 text-[14px] leading-relaxed text-champagne-100/50 sm:text-[15px]">
                A modern legal intelligence platform for professionals,
                researchers and the curious minds.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="mt-8 flex flex-col items-center gap-4 animate-fade-up sm:flex-row lg:items-start"
              style={{
                animationDelay: '0.5s',
                opacity: 0,
              }}
            >
              <button
                onClick={() => navigate('/signup')}
                className="btn-gold group inline-flex items-center gap-2 rounded-full px-8 py-4 text-[14px]"
              >
                Explore Platform

                <ArrowRight
                  className="h-4 w-4 arrow-nudge"
                  strokeWidth={2}
                />
              </button>

              <button className="btn-ghost group inline-flex items-center gap-3 rounded-full px-7 py-4 text-[14px]">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gold-300/30 transition-colors group-hover:border-gold-300/50">
                  <Play className="h-3 w-3 fill-gold-300 text-gold-300" />
                </span>

                Watch Our Story

                <span className="text-[12px] text-champagne-100/40">
                  2 min
                </span>
              </button>
            </div>

            {/* Bottom Philosophy */}
            <div
              className="mt-10 flex items-center justify-center gap-3 text-[9px] tracking-[0.25em] text-champagne-100/30 animate-fade-up lg:justify-start"
              style={{
                animationDelay: '0.7s',
                opacity: 0,
              }}
            >
              <span className="h-px w-8 bg-gold-300/20" />

              <span>INTELLIGENCE</span>

              <span className="text-gold-300/30">
                ·
              </span>

              <span>JUSTICE</span>

              <span className="text-gold-300/30">
                ·
              </span>

              <span>PROGRESS</span>

              <span className="h-px w-8 bg-gold-300/20" />
            </div>
          </div>

          {/* =====================================================
              RIGHT — 3D LEGAL UNIVERSE
          ===================================================== */}

          <div className="relative isolate mt-8 h-[520px] overflow-hidden lg:mt-0 lg:h-[680px]">

            {/* Atmospheric glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/[0.045] blur-[110px]" />

            {/* 3D Scene */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <LegalUniverse3D />
            </div>

            {/* =================================================
                FLOATING INTELLIGENCE CARD
            ================================================= */}

            <div className="pointer-events-none absolute bottom-8 right-2 z-20 hidden w-[210px] rounded-2xl border border-gold-300/15 bg-ink-900/70 p-4 shadow-2xl backdrop-blur-xl sm:block lg:right-0">

              <div className="flex items-center gap-2">

                <span className="h-2 w-2 rounded-full bg-gold-300 shadow-[0_0_10px_rgba(214,168,79,0.8)]" />

                <span className="text-[9px] font-medium tracking-[0.2em] text-gold-200/70">
                  LEGAL INTELLIGENCE
                </span>

              </div>

              <div className="mt-3 h-px bg-gold-300/10" />

              <div className="mt-3 space-y-3">

                {/* Documents */}
                <div>
                  <div className="flex items-center justify-between">

                    <span className="text-[10px] text-champagne-100/40">
                      Documents
                    </span>

                    <span className="text-[10px] text-champagne-100/70">
                      Analyzed
                    </span>

                  </div>

                  <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-[78%] rounded-full bg-gold-300/60" />
                  </div>
                </div>

                {/* Citations */}
                <div>
                  <div className="flex items-center justify-between">

                    <span className="text-[10px] text-champagne-100/40">
                      Citations
                    </span>

                    <span className="text-[10px] text-gold-200/70">
                      Connected
                    </span>

                  </div>

                  <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-[91%] rounded-full bg-gold-300/40" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}