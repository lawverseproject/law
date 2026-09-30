import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Reveal from './Reveal';

export default function FinalCTA() {
  const navigate = useNavigate();

  return (
    <section id="get-started" className="relative py-24 sm:py-36">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-strong px-8 py-16 text-center sm:px-16 sm:py-24">
            {/* Decorative grid */}
            <div className="absolute inset-0 -z-10 bg-grid opacity-20" />
            {/* Glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[100px]" />
            {/* Corner accents */}
            <div className="absolute left-6 top-6 h-10 w-10 border-l border-t border-gold-300/30" />
            <div className="absolute right-6 top-6 h-10 w-10 border-r border-t border-gold-300/30" />
            <div className="absolute bottom-6 left-6 h-10 w-10 border-b border-l border-gold-300/30" />
            <div className="absolute bottom-6 right-6 h-10 w-10 border-b border-r border-gold-300/30" />

            <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-tight text-champagne-100 sm:text-5xl">
              Your legal workspace,
              <br />
              <span className="text-gold-gradient">rethought.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-champagne-100/55">
              Research deeper. Understand faster.
              <br />
              Work with greater clarity.
            </p>

            <button
              onClick={() => navigate('/signup')}
              className="btn-gold mt-9 inline-flex items-center gap-2 rounded-full px-8 py-4 text-[15px]"
            >
              Get Started
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
