/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9333EA",
        secondary: "#ff7e33",
        info: "#0C63E7",
      },
    },
  },
  plugins: [],
}

