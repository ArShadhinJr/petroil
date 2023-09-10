/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'pop': ['Poppins', 'sans-serif'],
    },
    maxWidth: {
      'container': '1144px', 
    }, 
    colors: {
      'primary': '#F40404',
      'secondary': '#6C6C6C',
      'white' : '#fff'
    },
  },
  plugins: [],
}