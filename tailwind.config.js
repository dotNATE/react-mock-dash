module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active", "even", "odd"],
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
