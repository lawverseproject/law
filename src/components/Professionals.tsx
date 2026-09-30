import { Building2, BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import Reveal from './Reveal';

const PROFESSIONALS = [
  {
    icon: Building2,
    title: 'Law Firms',
    desc: 'Accelerate case preparation, automate document review, and deliver faster, more thorough analysis to your clients.',
  },
  {
    icon: BookOpen,
    title: 'Legal Researchers',
    desc: 'Search across jurisdictions, cross-reference citations, and surface relevant precedents with structured, traceable results.',
  },
  {
    icon: Briefcase,
    title: 'Businesses',
    desc: 'Understand contracts, obligations and legal risks faster.',
  },
  {
    icon: GraduationCap,
    title: 'Students & Researchers',
    desc: 'Learn and explore legal materials with structured, source-supported assistance.',
  },
];

export default function Professionals() {
  return (
    <section id="professionals" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <h2 className="font-serif text-3xl leading-tight text-champagne-100 sm:text-5xl">
              Built for professionals.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {PROFESSIONALS.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className="group h-full rounded-2xl glass p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-300/30">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gold-400/20 bg-ink-800/60 transition-colors duration-500 group-hover:border-gold-300/40 group-hover:bg-gold-400/10">
                  <p.icon className="h-6 w-6 text-gold-300" strokeWidth={1.3} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-champagne-100">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-champagne-100/55">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
