/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      width: {
        '726': '726px'
      }
      
    },
  },
  plugins: [],
}

