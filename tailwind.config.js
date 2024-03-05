/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "10px",
    },
    extend: {
      colors: {
        dark: "#0f172a",
        biru: "rgb(59 130 246) ",
        secondary: "#64748b",
      },
      screens: {
        "2xl": "920px",
      },
    },
  },
  plugins: [],
};
