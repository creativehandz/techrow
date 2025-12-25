/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['League Spartan', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'league': ['League Spartan', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'quicksand': ['Quicksand', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}