import { type ReactNode, useId } from 'react';

export interface AuthInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  icon?: ReactNode;
  error?: string | null;
  autoComplete?: string;
  ariaLabel?: string;
}

export default function AuthInput({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  icon,
  error = null,
  autoComplete,
  ariaLabel,
}: AuthInputProps) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[12px] font-medium tracking-wide text-champagne-100/60 transition-colors"
      >
        {label}
      </label>
      <div className="group relative">
        {icon && (
          <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold-300/35 transition-colors duration-300 group-focus-within:text-gold-300/70">
            {icon}
          </div>
        )}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          autoComplete={autoComplete}
          aria-label={ariaLabel ?? label}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={`input-focus-glow w-full rounded-xl border bg-ink-800/50 py-3.5 text-[14px] text-champagne-100 placeholder:text-champagne-100/30 outline-none transition-all duration-300 ${
            icon ? 'pl-12 pr-4' : 'px-4'
          } ${
            error
              ? 'border-red-400/50'
              : 'border-gold-400/15 focus:border-gold-300/40'
          }`}
        />
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
