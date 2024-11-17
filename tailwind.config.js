const { nextui } = require("@nextui-org/react");


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        titleColor: '#17181D',
        bgColor: '#0C3B2E',
        componentBgColor: '#17181D',
        textColor: '#17181D',
        bodyTextColor: '#17181D',
        buttonBgColor: '#17181D',
        colorOne: '#0C3B2E', // Replace with your desired color   #00df9a  #302E3B
        colorTwo: '#609773',
        colorThree: '#BB8A52',
        colorFour: '#FFBA00',
        colorFive: '#314440',
        colorSix: '#4A5660',
        colorSeven: '#929C9A',
        colorEight: '#E2E3E3',
        colorNine: '#0C2428',
        colorTen: '#1E3941',
        colorEleven: '#57737E'
      },
      backgroundImage: {
        'custom-image': "url('/myPhoto.png')"
    },
    boxShadow: {
      'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
      'custom-dark': '0 4px 6px #0C3B2E',
    },
  },
  fontFamily:{
    myFont: ["Yatra One"],
    
  }
  },
  darkMode: "class",
  plugins: [nextui()]
}

