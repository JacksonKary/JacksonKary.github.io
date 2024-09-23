/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Custom breakpoints
        'xl+': '1445px',
        'md+': '875px',
        'xs': '540px',
        'xxs': '400px'
      },
      margin: {
        // Used as left margin for signature img
        '1.5': '6px',
        'vw-2': '2vw',
        'vw-4': '4vw',
        'vw-6': '6vw',
        'vw-8': '8vw',
        'vw-11': '11vw',
        'vw-15': '15vw',
      },
      borderWidth: {
        '6': '6px',
      },
      fontFamily: {
        montserrat: ["Montserrat", "serif"],
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.9)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    })
  ],
}