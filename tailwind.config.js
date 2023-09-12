/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      textColorBlack: '#000000',
      textInputBackgroundColor: "rgba(118, 118, 128, 0.12)",
      blueButtonColor: "#3478F6"
    },
    // fontFamily: {
    //   : ['SF Pro']
    // },

    // fontFamily: {
    //   'sf': ['SF Pro']
    // },
    extend: {},
  },
  plugins: [],
}