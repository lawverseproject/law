import { useId, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export interface PasswordInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  error?: string | null;
  autoComplete?: string;
  ariaLabel?: string;
}

export default function PasswordInput({
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error = null,
  autoComplete,
  ariaLabel,
}: PasswordInputProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[12px] font-medium tracking-wide text-champagne-100/60"
      >
        {label}
      </label>
      <div className="group relative">
        <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold-300/35 transition-colors duration-300 group-focus-within:text-gold-300/70">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <input
          id={id}
          type={visible ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          autoComplete={autoComplete}
          aria-label={ariaLabel ?? label}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={`input-focus-glow w-full rounded-xl border bg-ink-800/50 py-3.5 pl-12 pr-12 text-[14px] text-champagne-100 placeholder:text-champagne-100/30 outline-none transition-all duration-300 ${
            error
              ? 'border-red-400/50'
              : 'border-gold-400/15 focus:border-gold-300/40'
          }`}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? 'Hide password' : 'Show password'}
          className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-champagne-100/35 transition-colors hover:text-gold-300/70"
        >
          {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
      {error && (
        <p
          id={errorId}
          role="alert"
          className="error-slide mt-1.5 text-[12px] leading-relaxed text-red-300/90"
        >
          {error}
        </p>
      )}
    </div>
  );
}
