/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'HSL(180, 75%, 96%)',
          100: 'HSL(180, 100%, 88%)',
          200: 'HSL(180, 100%, 72%)',
          300: 'HSL(180, 100%, 50%)',
          400: 'HSL(180, 89%, 44%)',
          500: 'HSL(180, 75%, 38%)',
          600: 'HSL(180, 55%, 31%)',
          700: 'HSL(180, 25%, 25%)',
          800: 'HSL(180, 18%, 20%)',
          900: 'HSL(180, 11%, 12%)',
        },
        neutral: {
          100: 'HSL(0, 0%, 97%)',
          200: 'HSL(0, 0%, 90%)',
          300: 'HSL(0, 0%, 75%)',
          500: 'HSL(0, 0%, 50%)',
          700: 'HSL(0, 0%, 35%)',
          900: 'HSL(0, 0%, 20%)',
        },
        accent1: {
          50: 'HSL(60, 100%, 95%)',
          100: 'HSL(60, 100%, 84%)',
          200: 'HSL(60, 100%, 72%)',
          300: 'HSL(60, 100%, 50%)',
          400: 'HSL(55, 97%, 49%)',
          500: 'HSL(50, 94%, 49%)',
          600: 'HSL(50, 91%, 38%)',
          700: 'HSL(50, 86%, 28%)',
          800: 'HSL(50, 73%, 20%)',
          900: 'HSL(49, 45%, 12%)',
        },
        accent2: {
          50: 'HSL(300, 100%, 92%)',
          100: 'HSL(300, 100%, 78%)',
          200: 'HSL(300, 100%, 64%)',
          300: 'HSL(300, 100%, 50%)',
          400: 'HSL(300, 100%, 44%)',
          500: 'HSL(300, 100%, 40%)',
          600: 'HSL(300, 100%, 32%)',
          700: 'HSL(300, 100%, 24%)',
          800: 'HSL(300, 100%, 16%)',
          900: 'HSL(300, 61%, 12%)',
        },
      },
      textShadow: {
        neonGlow:
          '0 0 7px HSL(180, 100%, 50%), 0 0 10px HSL(180, 100%, 50%), 0 0 21px HSL(180, 100%, 50%), 0 0 42px HSL(180, 100%, 50%)',
        sm: '0 1px 2px black',
        DEFAULT: '0 2px 4px black',
        lg: '0 8px 16px black',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
