/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      textColorBlack: '#000000',
      textInputBackgroundColor: "rgba(118, 118, 128, 0.12)",
      blueButtonColor: "#3478F6",
      accountBorderRadius: "12px 12px 0px 0px;",
      viewProfileBoxColor: "rgba(118, 118, 128, 0.12)"
    },
    // fontFamily: {
    //   : ['SF Pro']
    // },

    // fontFamily: {
    //   'sf': ['SF Pro']
    // },
    extend: {
      // backgroundImage: {
      //   "viewProfile": "url('./src/assets/viewprofile.png')",
      // }
    },
  },
  plugins: [],
}