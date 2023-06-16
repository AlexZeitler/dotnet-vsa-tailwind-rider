module.exports = {
  content: [
    "Features/**/*.{cshtml,js}",
    "Layouts/*.{cshtml,js}"
  ],
  safelist: [
    'field-validation-error',
    'input-validation-error',
    'validation-summary-errors'
  ],
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("tailwindcss-debug-screens"),
  ],

  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
};
