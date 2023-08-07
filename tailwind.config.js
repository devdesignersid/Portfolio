/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        sm: '8px',
        lg: '12px',
      },
      fontFamily: {
        primary: ['var(--font-primary)'],
        secondary: ['var(--font-secondary)'],
        tertiary: ['var(--font-tertiary)'],
      },
      colors: {
        portfolio: {
          background: 'var(--background)',
          text: 'var(--text)',
        },
      },
    },
  },
  plugins: [],
};
