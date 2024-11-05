/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      background: "#0D0D0D",
      white: "#FFFFFF",
      lightGray: "#A4ABB7",
    },
    fontFamily: {
      outfit: "Outfit, sans-serif",
    },
    screens: {
      xs: "375px",
      sm: "640px",

      md: "834px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {},
  },
};
