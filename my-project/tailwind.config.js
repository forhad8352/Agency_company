/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", 'sans-serif'],
        dm: ["DM Sans", 'sans-serif'],
        nunito: ["Nunito", 'sans-serif'],
      },
      colors: {
        primary: '#1A1A1A',
        grayy: '#6B6161',
        
      },
      backgroundImage: {
        ban: "url(./src/assets/banner.png)",
        Com: "url(./src/assets/company.png)",
        World: "url(./src/assets/world.png)",
        
      },
         gradientColorStops:{
        'grad':'#FE651B',
        'ent':'#FFAA52',
      },
    },
  },
  plugins: [],
}

