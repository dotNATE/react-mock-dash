module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "model-wiz-1":
          "url('images/form_bgs/dan-burton-x6EokdaNzJc-unsplash.jpg')",
        "model-wiz-2":
          "url('images/form_bgs/r-architecture-0tKCSyLXqQM-unsplash.jpg')",
        "model-wiz-3":
          "url('images/form_bgs/mikita-yo-iet7azddZz0-unsplash.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "even", "odd"],
      backdropBlur: ["focus-within"],
      backdropGrayscale: ["focus-within"],
    },
  },
  plugins: [],
};
