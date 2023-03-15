/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
        colors: {
          background: "#f5f5f5",
          charcoal: "#5B616D",
          mono: {
              500: "#282828",
              "white": "#FBFBFB",
          }
        }
    },
  },
  plugins: [],
}