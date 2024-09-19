/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors:{
      "bgColor_1":"#111111",
      "black": "#000000",
      "colorWhite": "#ffffff",
      "colorRed": "#FF4949",
      "inputBG":"#0000001A",
    },
    backgroundImage:{
      "posterHome":"url(/src/images/poster1.jpg)"
    },
    extend: {
      
    },
  },
  plugins: [],
}

