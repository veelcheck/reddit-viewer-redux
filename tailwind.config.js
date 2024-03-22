/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'reddit-orange': '#ff4400',
        'button-blue': '#1976d2',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
      container: {
        padding: {
          sm: '2rem',
        },
      },
      gridTemplateColumns: {
        'only-two': '140px, 1fr',
      },
    },
  },
  plugins: [],
};
