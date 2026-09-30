import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { useScrolled } from '@/hooks/useScrolled';

const NAV_LINKS = [
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/#process' },
  { label: 'Capabilities', href: '/#features' },
  { label: 'For Professionals', href: '/#professionals' },
  { label: 'Pricing', href: '/#pricing' },
];

export default function Header() {
  const scrolled = useScrolled(20);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:px-6 sm:pt-5">
      <div
          className={`flex w-full max-w-6xl items-center justify-between rounded-[20px] px-5 py-3 transition-all duration-500 sm:px-7 ${
            scrolled ? 'navbar-scrolled' : 'navbar-floating'
          }`}
        >
        {/* Left: logo */}
        <Link to="/" className="group shrink-0" aria-label="Legal Intelligence home">
          <Logo />
        </Link>

        {/* Center nav (desktop) */}
        <nav className="hidden items-center gap-8 xl:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link text-[13px] font-medium tracking-wide text-champagne-100/60 hover:text-gold-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTAs (desktop) */}
        <div className="hidden items-center gap-4 xl:flex">
          <button
            onClick={() => navigate('/login')}
            className="text-[13px] font-medium tracking-wide text-champagne-100/60 transition-colors hover:text-champagne-100"
          >
            Log in
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="btn-gold group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px]"
          >
            Get Started
            <ArrowRight className="h-3.5 w-3.5 arrow-nudge" strokeWidth={2} />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/20 text-champagne-100 xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 xl:hidden transition-all duration-400 ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        {/* Drawer panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[300px] max-w-[85vw] glass-strong overflow-y-auto transition-transform duration-500 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 pt-6">
            <Logo size="sm" />
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/20 text-champagne-100"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-1 px-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] text-champagne-100/75 transition-colors hover:bg-gold-400/5 hover:text-champagne-100"
              >
                {link.label}
                <ArrowRight className="h-4 w-4 text-gold-300/40" />
              </a>
            ))}
          </nav>

          <div className="mx-4 mt-6 h-px hairline-gold" />

          <div className="mt-6 flex flex-col gap-3 px-4 pb-8">
            <button
              onClick={() => {
                setOpen(false);
                navigate('/login');
              }}
              className="btn-ghost flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-[14px]"
            >
              Log in
            </button>
            <button
              onClick={() => {
                setOpen(false);
                navigate('/signup');
              }}
              className="btn-gold flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-[14px]"
            >
              Get Started
              <ArrowRight className="h-4 w-4 arrow-nudge" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
