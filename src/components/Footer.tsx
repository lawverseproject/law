import { Link } from 'react-router-dom';
import { Scale } from 'lucide-react';
import { BRAND } from './Logo';

const COLUMNS = [
  {
    title: 'PRODUCT',
    links: [
      { label: 'Features', href: '/#features' },
      { label: 'How It Works', href: '/#process' },
      { label: 'Pricing', href: '/#pricing' },
    ],
  },
  {
    title: 'RESOURCES',
    links: [
      { label: 'Research', href: '/#research' },
      { label: 'Documentation', href: '/#docs' },
      { label: 'Help', href: '/#help' },
    ],
  },
  {
    title: 'COMPANY',
    links: [
      { label: 'About', href: '/#about' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
  {
    title: 'LEGAL',
    links: [
      { label: 'Privacy', href: '/#privacy' },
      { label: 'Terms', href: '/#terms' },
      { label: 'Disclaimer', href: '/#disclaimer' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-gold-400/10 bg-ink-950">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          {/* Brand block */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gold-400/20 blur-md" />
                <Scale className="relative h-6 w-6 text-gold-300" strokeWidth={1.4} />
              </div>
              <div className="leading-none">
                <div className="font-serif text-[15px] font-semibold tracking-[0.18em] text-champagne-100">
                  {BRAND.line1}
                </div>
                <div className="font-serif text-[15px] font-semibold tracking-[0.18em] text-gold-300">
                  {BRAND.line2}
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-champagne-100/45">
              Artificial Intelligence for Real-World Law.
            </p>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] font-semibold tracking-[0.2em] text-gold-300/70">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-champagne-100/50 transition-colors duration-300 hover:text-champagne-100/80"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-14 h-px hairline-gold" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-[12px] text-champagne-100/35">
            AI-assisted legal information. Not a substitute for professional legal advice.
          </p>
          <p className="text-[12px] text-champagne-100/30">
            © {new Date().getFullYear()} {BRAND.line1} {BRAND.line2}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
