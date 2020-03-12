// See https://tailwindcss.com/docs/configuration for details
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Oswald', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require('@tailwindcss/custom-forms')],
};
