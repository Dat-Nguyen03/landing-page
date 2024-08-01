/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,tsx,js,ts}"],
  theme: {
    extend: {
      colors: {
        primary_color: "#0C2D36",
        secondary_color: "#FFCD65",
      },
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Be_Vietnam_Pro: ["Be Vietnam Pro", "sans-serif"],
      Anton : ["Anton", "sans-serif"],
    },
  },
  plugins: [],
};
