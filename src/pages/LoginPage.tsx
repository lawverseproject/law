import { useState } from 'react';
import { Mail, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SplitLayout from '@/components/auth/SplitLayout';
import AuthCard from '@/components/auth/AuthCard';
import AuthInput from '@/components/auth/AuthInput';
import PasswordInput from '@/components/auth/PasswordInput';
import AuthDivider from '@/components/auth/AuthDivider';
import SocialButton from '@/components/auth/SocialButton';

interface FormErrors {
  email?: string | null;
  password?: string | null;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const validate = (field: keyof FormErrors): string | null => {
    if (field === 'email') {
      if (!email.trim()) return 'Email address is required.';
      if (!EMAIL_RE.test(email.trim())) return 'Please enter a valid email address.';
    }
    if (field === 'password') {
      if (!password) return 'Password is required.';
    }
    return null;
  };

  const validateAll = (): boolean => {
    const next: FormErrors = {
      email: validate('email'),
      password: validate('password'),
    };
    setErrors(next);
    setTouched({ email: true, password: true });
    return !next.email && !next.password;
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
    }, 1400);
  };

  const GoogleIcon = (
    <svg className="h-5 w-5" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
    </svg>
  );

  return (
    <SplitLayout mode="login">
      <AuthCard>
        <h2 className="font-serif text-2xl font-semibold text-champagne-100 sm:text-3xl">
          Welcome back
        </h2>
        <p className="mt-2 text-[14px] text-champagne-100/50">
          Sign in to continue to your legal intelligence workspace.
        </p>

        <form className="mt-7 space-y-5" onSubmit={handleSubmit} noValidate>
          <AuthInput
            label="Email address"
            type="email"
            placeholder="you@firm.com"
            value={email}
            onChange={(v) => {
              setEmail(v);
              if (touched.email) setErrors((p) => ({ ...p, email: validate('email') }));
            }}
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
              placeholder="••••••••"
              value={password}
              onChange={(v) => {
                setPassword(v);
                if (touched.password) setErrors((p) => ({ ...p, password: validate('password') }));
              }}
              onBlur={() => {
                setTouched((p) => ({ ...p, password: true }));
                setErrors((p) => ({ ...p, password: validate('password') }));
              }}
              error={touched.password ? errors.password : null}
              autoComplete="current-password"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex cursor-pointer items-center gap-2.5 text-[13px] text-champagne-100/55">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 rounded border-gold-400/30 bg-ink-800 accent-gold-400"
              />
              Remember me
            </label>
            <button
              type="button"
              className="text-[13px] text-gold-300/70 transition-colors hover:text-gold-200"
            >
              Forgot password?
            </button>
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
                Signing in...
              </>
            ) : (
              <>
                Sign In
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
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/signup')}
            className="group inline-flex items-center gap-1 font-medium text-gold-300 transition-colors hover:text-gold-200"
          >
            Create an account
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
