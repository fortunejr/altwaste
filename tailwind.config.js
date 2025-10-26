/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: "#005c56",
        lightGreen: "#02EA02",
        
      }
    },
  },
  plugins: [],
}