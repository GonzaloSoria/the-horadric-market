/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "first": "#D2C8AE"
    },
    fontFamily: {
      "cinzel": "'Cinzel', serif;",
      "roboto": "'Roboto', sans-serif"
    }
  },
  plugins: [],
}
