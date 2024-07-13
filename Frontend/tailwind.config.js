/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'button': '#bfc500'
      },
      height: {
        'background': '500px'
      },
    },
  },
  plugins: [],
}