/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'none':'0px',
        '152':'38rem'
      },
      borderRadius: {
        '4xl': '4.5rem',
        '2.5':'2.5rem'
      },
      colors:{
        "pink-650":'#ff909d'
      },
      borderWidth:{
        '1':"1px"
      },
      fontSize:{
        "xs":"11px"
      }
    },
  },
  plugins: [],
}

