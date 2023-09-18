/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#31A94A",
        orange: "#FFB600",
        red: "#D23A3D",
        blue: "#49ABDB",
        pink: "#FF549A",
        shadow:  '#e7e8e7',
      },
      width: {
        wc: '48%'
      }
    },
  },
  plugins: [],
}

