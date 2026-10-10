/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          base: '#0a0a0a',
          charcoal: '#111111',
          elevated: '#1a1a1a',
          border: '#222222',
          'border-light': '#2e2e2e',
        },
        accent: {
          DEFAULT: '#5b9b95',
          dim: '#4a8580',
          glow: 'rgba(91, 155, 149, 0.08)',
        },
        muted: {
          DEFAULT: '#9a9a9a',
          dim: '#7a7a7a',
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
    },
  },
  plugins: [],
};
