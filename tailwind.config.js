/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'big' : '40rem'
      }
    },
    screens: {
      'sm':'480px',
      md:"768px",
      lg:"1024px",
      xl:"1280px"
    },
    fontFamily:{
      nunito:['sans-serif']
    }
  },
  plugins: [],
}




// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }