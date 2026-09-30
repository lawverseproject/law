import { useState } from 'react';
import { User, Mail, ArrowRight, Loader2, AlertCircle, Check, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SplitLayout from '@/components/auth/SplitLayout';
import AuthCard from '@/components/auth/AuthCard';
import AuthInput from '@/components/auth/AuthInput';
import PasswordInput from '@/components/auth/PasswordInput';
import PasswordStrength from '@/components/auth/PasswordStrength';
import AuthDivider from '@/components/auth/AuthDivider';
import SocialButton from '@/components/auth/SocialButton';

interface FormErrors {
  name?: string | null;
  email?: string | null;
  password?: string | null;
  confirm?: string | null;
  terms?: string | null;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const validate = (field: keyof FormErrors): string | null => {
    switch (field) {
      case 'name':
        if (!name.trim()) return 'Full name is required.';
        if (name.trim().length < 2) return 'Please enter your full name.';
        return null;
      case 'email':
        if (!email.trim()) return 'Email address is required.';
        if (!EMAIL_RE.test(email.trim())) return 'Please enter a valid email address.';
        return null;
      case 'password':
        if (!password) return 'Password is required.';
        if (password.length < 8) return 'Password must be at least 8 characters.';
        return null;
      case 'confirm':
        if (!confirm) return 'Please confirm your password.';
        if (confirm !== password) return 'Passwords do not match.';
        return null;
      case 'terms':
        if (!terms) return 'You must agree to the Terms of Service and Privacy Policy.';
        return null;
      default:
        return null;
    }
  };

  const validateAll = (): boolean => {
    const next: FormErrors = {
      name: validate('name'),
      email: validate('email'),
      password: validate('password'),
      confirm: validate('confirm'),
      terms: validate('terms'),
    };
    setErrors(next);
    setTouched({ name: true, email: true, password: true, confirm: true, terms: true });
    return !next.name && !next.email && !next.password && !next.confirm && !next.terms;
  };

  const handleField = (field: keyof FormErrors, value: string, setter: (v: string) => void) => {
    setter(value);
    if (touched[field]) setErrors((p) => ({ ...p, [field]: validate(field) }));
    // Re-validate confirm when password changes
    if (field === 'password' && touched.confirm) {
      setErrors((p) => ({ ...p, confirm: confirm ? (confirm !== value ? 'Passwords do not match.' : null) : null }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setNotice(null);
    if (!validateAll()) return;

    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setNotice('Authentication backend is not connected yet.');
    }, 1600);
  };

  const GoogleIcon = (
    <svg className="h-5 w-5" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
    </svg>
  );

  const reqs = [
    { label: 'At least 8 characters', met: password.length >= 8 },
    { label: 'Upper & lowercase', met: /[a-z]/.test(password) && /[A-Z]/.test(password) },
    { label: 'Number', met: /\d/.test(password) },
    { label: 'Special character', met: /[^A-Za-z0-9]/.test(password) },
  ];

  return (
    <SplitLayout mode="signup">
      <AuthCard>
        <h2 className="font-serif text-2xl font-semibold text-champagne-100 sm:text-3xl">
          Create your account
        </h2>
        <p className="mt-2 text-[14px] text-champagne-100/50">
          Start building your personal legal intelligence workspace.
        </p>

        <form className="mt-7 space-y-4" onSubmit={handleSubmit} noValidate>
          <AuthInput
            label="Full name"
            type="text"
            placeholder="Jane Doe"
            value={name}
            onChange={(v) => handleField('name', v, setName)}
            onBlur={() => {
              setTouched((p) => ({ ...p, name: true }));
              setErrors((p) => ({ ...p, name: validate('name') }));
            }}
            error={touched.name ? errors.name : null}
            icon={<User className="h-4 w-4" />}
            autoComplete="name"
          />

          <AuthInput
            label="Email address"
            type="email"
            placeholder="you@firm.com"
            value={email}
            onChange={(v) => handleField('email', v, setEmail)}
            onBlur={() => {
              setTouched((p) => ({ ...p, email: true }));
              setErrors((p) => ({ ...p, email: validate('email') }));
            }}
            error={touched.email ? errors.email : null}
            icon={<Mail className="h-4 w-4" />}
            autoComplete="email"
          />

          <div>
            <PasswordInput
              label="Password"
              placeholder="Create a password"
              value={password}
              onChange={(v) => handleField('password', v, setPassword)}
              onBlur={() => {
                setTouched((p) => ({ ...p, password: true }));
                setErrors((p) => ({ ...p, password: validate('password') }));
              }}
              error={touched.password ? errors.password : null}
              autoComplete="new-password"
            />
            <PasswordStrength password={password} />
            {/* Requirement checklist */}
            {password.length > 0 && (
              <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5">
                {reqs.map((req) => (
                  <li
                    key={req.label}
                    className="flex items-center gap-1.5 text-[11px] text-champagne-100/45"
                  >
                    {req.met ? (
                      <Check className="h-3 w-3 text-green-400" />
                    ) : (
                      <X className="h-3 w-3 text-champagne-100/25" />
                    )}
                    <span className={req.met ? 'text-champagne-100/65' : ''}>
                      {req.label}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <PasswordInput
            label="Confirm password"
            placeholder="Re-enter your password"
            value={confirm}
            onChange={(v) => handleField('confirm', v, setConfirm)}
            onBlur={() => {
              setTouched((p) => ({ ...p, confirm: true }));
              setErrors((p) => ({ ...p, confirm: validate('confirm') }));
            }}
            error={touched.confirm ? errors.confirm : null}
            autoComplete="new-password"
          />

          <div>
            <label className="flex cursor-pointer items-start gap-2.5 text-[12px] leading-relaxed text-champagne-100/45">
              <input
                type="checkbox"
                checked={terms}
                onChange={(e) => {
                  setTerms(e.target.checked);
                  if (touched.terms) setErrors((p) => ({ ...p, terms: e.target.checked ? null : validate('terms') }));
                }}
                onBlur={() => {
                  setTouched((p) => ({ ...p, terms: true }));
                  setErrors((p) => ({ ...p, terms: validate('terms') }));
                }}
                className="mt-0.5 h-4 w-4 rounded border-gold-400/30 bg-ink-800 accent-gold-400"
              />
              <span>
                I agree to the{' '}
                <a href="/#terms" className="text-gold-300/70 hover:text-gold-200">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="/#privacy" className="text-gold-300/70 hover:text-gold-200">
                  Privacy Policy
                </a>
                .
              </span>
            </label>
            {touched.terms && errors.terms && (
              <p role="alert" className="mt-1.5 text-[12px] leading-relaxed text-red-300/90">
                {errors.terms}
              </p>
            )}
          </div>

          {notice && (
            <div
              role="alert"
              className="flex items-start gap-2.5 rounded-xl border border-gold-400/20 bg-gold-400/5 px-4 py-3"
            >
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
              <p className="text-[13px] leading-relaxed text-champagne-100/70">{notice}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-gold group flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14px] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Creating account...
              </>
            ) : (
              <>
                Create Account
                <ArrowRight className="h-4 w-4 arrow-nudge" strokeWidth={2} />
              </>
            )}
          </button>
        </form>

        <AuthDivider />

        <SocialButton provider="Google" icon={GoogleIcon}>
          Continue with Google
        </SocialButton>

        <p className="mt-7 text-center text-[13px] text-champagne-100/45">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="group inline-flex items-center gap-1 font-medium text-gold-300 transition-colors hover:text-gold-200"
          >
            Sign in
            <ArrowRight className="h-3.5 w-3.5 arrow-nudge" />
          </button>
        </p>
      </AuthCard>

      <p className="mt-6 text-center text-[12px] leading-relaxed text-champagne-100/30">
        AI-assisted legal information. Not a substitute for professional legal advice.
      </p>
    </SplitLayout>
  );
}
