/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        blue: {
          950: '#27304E',
          1000: '#030F2E'
        }
      },
      gridTemplateRows: {
        page: 'auto 1fr auto',
      },
      gridTemplateColumns: {
        responsive: 'repeat(auto-fill, minmax(300px, 1fr))'
      }
    },
  },
  plugins: [],
}
