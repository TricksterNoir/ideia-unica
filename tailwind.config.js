const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
        'cougar-smoky-black': '#0B0807',
        'cougar-vermilion': '#F24333',
        'cougar-bistre': '#492C1F',
        'cougar-anti-flash-white': '#EEF0F2',
        'cougar-french-gray': '#C8C5C8',
      },
      fontFamily: {
        // to change, update font in _document.js
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-lora)", ...defaultTheme.fontFamily.serif],
        stock: [defaultTheme.fontFamily.sans]
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
        "9/16": "9 / 16"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/typography")]
};
