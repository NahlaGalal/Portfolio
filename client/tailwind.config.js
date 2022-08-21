/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      darkGreen: "#006666",
      lightGreen: "#CCFFFF",
      lightGrey: "#EEEEEE",
      darkGrey: "#6B6B6B",
      red: "#f00",
    },
    extend: {
      backgroundImage: {
        contact_background: "url('./images/contact.jpg')",
      },
    },
  },
  darkMode: "class",
};
