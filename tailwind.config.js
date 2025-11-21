/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         stone: { 50: '#fafaf9', 100: '#f5f5f4', 200: '#e7e5e4', 300: '#d6d3d1', 400: '#a8a29e', 500: '#78716c', 800: '#292524', 900: '#1c1917', 950: '#0c0a09' },
         'theme-accent': 'var(--theme-accent)',
         'retro-red': '#8C1007',
         'bright-yellow': '#E7B10A',
      }
    },
  },
  plugins: [],
}