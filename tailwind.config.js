/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./utils/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColors: {
        primary: '#24BAEC',
        secondary: '#1B1E28'
      },
      fontFamily: {
        Geometric: ['Geometric', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
        Gil: ['Gil', 'sans-serif'],
      },
      backgroundColor: {
        primary: '#24BAEC',
        light: '#F7F7F9'
      },
      borderColor: {
        primary: '#24BAEC',
      },
      colors: {
        primary: '#24BAEC',
        secondary: '#1B1E28'
      }
    },

  },
  plugins: [],
}

