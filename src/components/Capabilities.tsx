import { FileText, Search, FileCheck, MessageSquare } from 'lucide-react';
import Reveal from './Reveal';

const FEATURES = [
  {
    icon: FileText,
    title: 'Document Intelligence',
    desc: 'Upload, extract and understand legal documents instantly.',
  },
  {
    icon: Search,
    title: 'Legal Research',
    desc: 'Find relevant cases, statutes and legal insights.',
  },
  {
    icon: FileCheck,
    title: 'Contract Analysis',
    desc: 'Identify risks, ambiguities and compliance issues.',
  },
  {
    icon: MessageSquare,
    title: 'AI Legal Assistant',
    desc: 'Get grounded, explainable and citation-supported answers.',
  },
];

export default function Capabilities() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <span className="text-[11px] font-semibold tracking-[0.3em] text-gold-300/80">
              CAPABILITIES
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl leading-tight text-champagne-100 sm:text-5xl">
              Four pillars of intelligence.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-champagne-100/55">
              Every feature is designed for the demands of legal work —
              precision, traceability, and clarity.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 120}>
              <div className="group relative h-full overflow-hidden rounded-2xl glass p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-300/30 hover:shadow-[0_0_50px_-12px_rgba(212,164,78,0.25)]">
                {/* Hover sheen */}
                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-gold-400/0 to-gold-400/0 opacity-0 transition-opacity duration-500 group-hover:from-gold-400/5 group-hover:opacity-100" />

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gold-400/20 bg-ink-800/60 transition-colors duration-500 group-hover:border-gold-300/40 group-hover:bg-gold-400/10">
                  <f.icon className="h-6 w-6 text-gold-300" strokeWidth={1.3} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-champagne-100">
                  {f.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-champagne-100/55">
                  {f.desc}
                </p>

                {/* Bottom hairline */}
                <div className="absolute bottom-0 left-0 h-px w-0 hairline-gold transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
