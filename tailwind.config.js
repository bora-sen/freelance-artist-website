/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html}"],
  theme: {
    extend: {
      fontFamily:{
        display:["Phantom"]
      },
      colors:{
        beige:"#f5eee6",
        darkGray:"#131313",
        darkRed:"#75340f"
      }
    },
  },
  plugins: [],
}
