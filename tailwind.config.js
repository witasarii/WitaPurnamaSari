/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        Primary: '#40A2D8',
        secondary: '#64748b',
        Dark: '#0f172a',
      },
      screens: {
        '2xl':'1320px'
      },
    },
  },
  plugins: [],
}

