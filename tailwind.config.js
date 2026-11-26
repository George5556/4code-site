/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  safelist: ['bg-bg/95'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--c-bg) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        border: 'rgb(var(--c-border) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        accent: '#FF5500',
        'accent-ink': 'rgb(var(--c-accent-ink) / <alpha-value>)',
        'accent-ink-hover': 'rgb(var(--c-accent-ink-hover) / <alpha-value>)',
        'accent-chip': 'rgb(var(--c-accent-chip) / <alpha-value>)',
        'accent-solid': '#CC4400',
        'accent-solid-hover': '#B03D00',
        'accent-hover': '#E04B00',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
