/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      primary: "#1E90FF",
      secondary: "#FF6347",
      primaryLight: "#00BFFF",
      black: "#1E1E1E",
      white: "#FFFFFF",
      goldenrod: "#DAA520",
      green: "#3BB143"
    },
    extend:{
      fontFamily: {
        sans: ['Poppins' , ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}