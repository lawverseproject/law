import { type ReactNode } from 'react';

export interface AuthCardProps {
  children: ReactNode;
  className?: string;
}

export default function AuthCard({ children, className = '' }: AuthCardProps) {
  return (
    <div
      className={`float-subtle rounded-[24px] p-7 sm:p-9 ${className}`}
      style={{
        background: 'linear-gradient(145deg, rgba(29, 44, 66, 0.65) 0%, rgba(15, 24, 40, 0.8) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(212, 164, 78, 0.18)',
        boxShadow:
          '0 20px 60px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(212,164,78,0.04) inset, 0 1px 0 rgba(246,234,208,0.06) inset',
      }}
    >
      {children}
    </div>
  );
}
