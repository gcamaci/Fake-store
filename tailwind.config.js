/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary':'#151515',
        'secondary':'#202020',
        'lite':'hsla(0,0%,100%,.1)'
      },
      colors: {
        'primary': '#fff'
      }
    },
  },
  plugins: [],
}

