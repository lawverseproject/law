export interface PasswordStrengthProps {
  password: string;
}

type Strength = {
  score: 0 | 1 | 2 | 3 | 4;
  label: string;
  color: string;
  trackColor: string;
};

const LABELS = ['Too weak', 'Weak', 'Fair', 'Good', 'Strong'];
const COLORS = ['#475569', '#ef4444', '#f97316', '#eab308', '#22c55e'];

function evaluate(password: string): Strength {
  if (!password) return { score: 0, label: '', color: '', trackColor: '' };

  let score = 0;
  if (password.length >= 8) score++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  // Length bonus
  if (password.length >= 12 && score >= 3) score = 4;

  const s = score as 0 | 1 | 2 | 3 | 4;
  return {
    score: s,
    label: LABELS[s],
    color: COLORS[s],
    trackColor: COLORS[s],
  };
}

export default function PasswordStrength({ password }: PasswordStrengthProps) {
  const strength = evaluate(password);
  const show = password.length > 0;

  return (
    <div
      className={`transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}
      aria-live="polite"
    >
      <div className="mt-2.5 flex items-center gap-1.5">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-1 flex-1 overflow-hidden rounded-full bg-ink-700"
          >
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: i < strength.score ? '100%' : '0%',
                backgroundColor: i < strength.score ? strength.color : 'transparent',
              }}
            />
          </div>
        ))}
      </div>
      {show && (
        <p className="mt-1.5 text-[11px] tracking-wide text-champagne-100/40">
          Password strength:{' '}
          <span style={{ color: strength.color }} className="font-medium">
            {strength.label}
          </span>
        </p>
      )}
    </div>
  );
}
