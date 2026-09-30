import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BRAND } from '@/components/Logo';
import Logo from '@/components/Logo';
import AuthScale from '@/components/auth/AuthScale';

export interface SplitLayoutProps {
  mode: 'login' | 'signup';
  children: ReactNode;
}

export default function SplitLayout({ mode, children }: SplitLayoutProps) {
  const isLogin = mode === 'login';

  const supportingText = isLogin
    ? 'PRECISION • TRACEABILITY • CLARITY'
    : 'RESEARCH • ANALYZE • UNDERSTAND • DRAFT';

  return (
    <div className="relative min-h-screen bg-ink-950">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-grid opacity-15" />
      <div className="pointer-events-none absolute left-1/4 top-0 -z-10 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-gold-500/5 blur-[120px]" />

      {/* Back link */}
      <div className="absolute left-5 top-6 z-30 sm:left-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[13px] text-champagne-100/50 transition-colors hover:text-champagne-100/80"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>
      </div>

      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* LEFT PANEL — 45% on desktop */}
        <aside className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-12 lg:w-[45%] lg:py-24">
          {/* Subtle grid + glow */}
          <div className="absolute inset-0 -z-10 bg-grid-fine opacity-15" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/6 blur-[100px]" />
          {/* Vertical light beams */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="light-beam left-[20%]" style={{ opacity: 0.4 }} />
            <div className="light-beam left-[80%]" style={{ opacity: 0.4 }} />
          </div>

          <div className="w-full max-w-sm text-center">
            {/* Brand */}
            <Link to="/" className="inline-block">
              <Logo size="lg" className="justify-center" />
            </Link>

            {/* Heading */}
            <h1 className="mt-10 font-serif text-3xl font-semibold leading-tight text-champagne-100 sm:text-4xl">
              {isLogin ? 'Welcome back.' : 'Build your legal workspace.'}
            </h1>
            <p className="mt-4 text-[14px] leading-relaxed text-champagne-100/50">
              {isLogin
                ? 'Continue your legal intelligence workspace.'
                : 'Bring research, documents and legal intelligence together.'}
            </p>

            {/* Scale animation */}
            <div className="mt-10">
              <AuthScale />
            </div>

            {/* Supporting text line */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold-300/30" />
              <span className="text-[10px] font-medium tracking-[0.25em] text-gold-300/50">
                {supportingText}
              </span>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold-300/30" />
            </div>
          </div>
        </aside>

        {/* RIGHT PANEL — 55% on desktop */}
        <main className="relative flex flex-1 items-center justify-center px-5 py-12 sm:px-8 lg:w-[55%] lg:py-24">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink-900/30 to-ink-950" />
          <div className="w-full max-w-md">{children}</div>
        </main>
      </div>
    </div>
  );
}
