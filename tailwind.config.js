/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      background: "#0D0D0D",
      white: "#FFFFFF",
      lightGray: "#A4ABB7",
      textBlack: "#171219",
      borderGray: "#D9D9D9",
      teal: "#26B5A1",
      backGray: "#ECEEFF",
      orange: "#EF5D30",
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
