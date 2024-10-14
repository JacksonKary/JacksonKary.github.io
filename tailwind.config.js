/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Viewport Width Breakpoints
        'xl+': '1445px',
        'md+': '875px',
        'xs': '540px',
        'xxs': '400px',
        'xxxs': '320px',
      },
      padding: {
        '1.5': '6px',
        'vw-2': '2vw',
        'vw-4': '4vw',
        'vw-6': '6vw',
        'vw-8': '8vw',
        'vw-11': '11vw',
        'vw-15': '15vw',
        'vw-20': '20vw',
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
        'vw-20': '20vw',
        // Viewport Height
        '5vh': '5vh',
        '10vh': '10vh',
        '15vh': '15vh',
        '20vh': '20vh',
        '25vh': '25vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
        '100vh': '100vh',
        // Small Viewport Height
        '5svh': '5svh',
        '10svh': '10svh',
        '15svh': '15svh',
        '20svh': '20svh',
        '25svh': '25svh',
        '30svh': '30svh',
        '40svh': '40svh',
        '50svh': '50svh',
        '60svh': '60svh',
        '70svh': '70svh',
        '80svh': '80svh',
        '90svh': '90svh',
        '100svh': '100svh',
      },
      height: {
        '70svh': '70svh',
        '80svh': '80svh',
        '90svh': '90svh',
        '100svh': '100svh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
        '100vh': '100vh',
      },
      minHeight: {
        '100svh': '100svh', 
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