import { Building2, GraduationCap, Microscope, Briefcase } from 'lucide-react';
import Reveal from './Reveal';

const CATEGORIES = [
  { icon: Building2, label: 'Law Firms' },
  { icon: GraduationCap, label: 'Universities' },
  { icon: Microscope, label: 'Researchers' },
  { icon: Briefcase, label: 'Businesses' },
];

export default function Trust() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-[13px] tracking-[0.15em] text-champagne-100/45 uppercase">
            Trusted by legal professionals, researchers and institutions.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-16">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.label}
                className="group flex items-center gap-3 transition-colors duration-400"
              >
                <cat.icon
                  className="h-6 w-6 text-champagne-100/30 transition-colors duration-400 group-hover:text-gold-300/70"
                  strokeWidth={1.2}
                />
                <span className="font-serif text-lg tracking-wide text-champagne-100/40 transition-colors duration-400 group-hover:text-champagne-100/70">
                  {cat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
