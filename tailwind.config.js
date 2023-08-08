/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'none':'0px'
      },
      borderRadius: {
        '4xl': '4.5rem',
      },
      colors:{
        "pink-650":'#ff909d'
      }
    },
  },
  plugins: [],
}

