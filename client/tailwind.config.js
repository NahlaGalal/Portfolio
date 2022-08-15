/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      darkGreen: "#006666",
      lightGreen: "#9DBCBC",
      lightGrey: "#EEEEEE",
      darkGrey: "#6B6B6B",
    },
    extend: {},
  },
  darkMode: "class",
};
