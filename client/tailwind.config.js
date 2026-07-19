/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3b12',
          900: '#7c2d12',
        },
      },
      boxShadow: {
        soft: '0 12px 30px rgba(249, 115, 22, 0.14)',
      },
    },
  },
  plugins: [],
}
