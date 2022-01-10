const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      amber: colors.amber,
      red: colors.red,
      'white': '#ffffff',
      'tealGreen': '#128C7E',
      'tealGreenDark': '#075E54',
      'lightGreen': '#25D366',
      'teaGreen': '#DCF8C6',
      'blue': '#34B7F1',
      'stone': '#ece5dd'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
