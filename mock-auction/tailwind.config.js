/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // IMPORTANT (use class-based dark mode)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--accent)',
        background: 'var(--bg)',
        text: 'var(--text)',
        heading: 'var(--text-h)',
        border: 'var(--border)',
        code: 'var(--code-bg)',
      },
    },
  },
  plugins: [],
}