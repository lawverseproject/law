import { type ReactNode } from 'react';

export interface SocialButtonProps {
  provider: string;
  icon: ReactNode;
  children: ReactNode;
  onClick?: () => void;
}

export default function SocialButton({
  provider,
  icon,
  children,
  onClick,
}: SocialButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Continue with ${provider}`}
      className="flex w-full items-center justify-center gap-3 rounded-full border border-gold-400/20 bg-ink-800/40 px-6 py-3.5 text-[14px] font-medium text-champagne-100/80 transition-all duration-400 hover:border-gold-300/35 hover:bg-ink-800/60 hover:text-champagne-100"
    >
      {icon}
      {children}
    </button>
  );
}
