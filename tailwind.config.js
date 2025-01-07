/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        safiroregular: ["safiroregular", "Helvetica", "Arial", "sans-serif"],
        safiroregularitalic: [
          "safiroregular_italic",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        safiromedium: ["safiromedium", "Helvetica", "Arial", "sans-serif"],
        safiromediumitalic: [
          "safiromedium_italic",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        safirosemibold: ["safirosemibold", "Helvetica", "Arial", "sans-serif"],
        safirosemibolditalic: [
          "safirosemibold_italic",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        safirobold: ["safirobold", "Helvetica", "Arial", "sans-serif"],
        safirobolditalic: [
          "safirobold_italic",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      transitionProperty: {
        background: "background",
        filter: "filter",
      },
      transitionTimingFunction: {
        easeInOutCubic: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },
  plugins: [],
};
