/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      display: ['Ubuntu', 'sans-serif'],
      sliderNum: ['"Fira Mono"', 'monospace'],
      title: ['"Major Mono Display"', 'monospace'],
    },
  },
  plugins: [],
}
