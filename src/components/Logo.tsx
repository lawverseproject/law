import { Scale } from 'lucide-react';

/** Central brand config — change in one place to rebrand the entire app. */
export const BRAND = {
  line1: 'LEGAL',
  line2: 'INTELLIGENCE',
  tagline: 'Artificial Intelligence for Real-World Law.',
};

export default function Logo({
  className = '',
  size = 'md',
}: {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const iconSize = size === 'lg' ? 'h-8 w-8' : size === 'sm' ? 'h-5 w-5' : 'h-6 w-6';
  const textSize = size === 'lg' ? 'text-[19px]' : size === 'sm' ? 'text-[13px]' : 'text-[15px]';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gold-400/20 blur-md" />
        <div className="relative flex items-center justify-center">
          <Scale
            className={`${iconSize} text-gold-300`}
            strokeWidth={1.3}
            aria-hidden
          />
        </div>
      </div>
      <div className="leading-none">
        <div className={`font-serif ${textSize} font-semibold tracking-[0.2em] text-champagne-100`}>
          {BRAND.line1}
        </div>
        <div className={`font-serif ${textSize} font-semibold tracking-[0.2em] text-gold-300`}>
          {BRAND.line2}
        </div>
      </div>
    </div>
  );
}
