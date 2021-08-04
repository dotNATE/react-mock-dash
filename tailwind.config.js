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
        "model-wiz-4":
          "url('images/form_bgs/ben-allan-BIeC4YK2MTA-unsplash.jpg')",
        "model-wiz-5":
          "url('images/form_bgs/ian-schneider-TamMbr4okv4-unsplash.jpg')",
        "model-wiz-6":
          "url('images/form_bgs/kyle-glenn--f8ssjFhD1k-unsplash.jpg')",
        "model-wiz-7":
          "url('images/form_bgs/sharon-mccutcheon-8lnbXtxFGZw-unsplash.jpg')",
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
