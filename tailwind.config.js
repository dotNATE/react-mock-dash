module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "model-wiz-1":
          "url('images/form_bgs/dan-burton-x6EokdaNzJc-unsplash.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "even", "odd"],
      backdropBlur: ["focus-within"],
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
