/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070b12',
          900: '#0a0f17',
          850: '#0c1320',
          800: '#0f1828',
          700: '#162234',
          600: '#1d2c42',
          500: '#27394f',
        },
        gold: {
          50: '#fbf6e9',
          100: '#f6ead0',
          200: '#ecd6a3',
          300: '#e0bd72',
          400: '#d4a44e',
          500: '#c08a36',
          600: '#a06f2a',
          700: '#7c5520',
          800: '#5a3f1b',
          900: '#3d2b13',
        },
        champagne: {
          100: '#f3e9d2',
          200: '#e8d8b6',
          300: '#dcc79a',
          400: '#cfb683',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'scale-oscillate': 'scaleOscillate 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleOscillate: {
          '0%, 100%': { transform: 'rotate(-2.2deg)' },
          '50%': { transform: 'rotate(2.2deg)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};
