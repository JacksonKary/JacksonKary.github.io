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
        'md+': '875px',
        'xs': '540px',
        'xxs' : '400px'
      },
      margin: {
        // Used as left margin for signature img
        'vw-2': '2vw',
        'vw-4': '4vw',
        'vw-6': '6vw',
        'vw-8': '8vw',
        'vw-11': '11vw',
        'vw-15': '15vw',
      },
      width: { // Custom width values in rem
        '416': '26rem',   // 416px
        '448': '28rem',   // 448px
        '480': '30rem',   // 480px
        '512': '32rem',   // 512px
        '544': '34rem',   // 544px
        '576': '36rem',   // 576px
        '608': '38rem',   // 608px
      },
      height: { // Custom height values in rem
        '416': '26rem',   // 416px
        '448': '28rem',   // 448px
        '480': '30rem',   // 480px
        '512': '32rem',   // 512px
        '544': '34rem',   // 544px
        '576': '36rem',   // 576px
        '608': '38rem',   // 608px
      },
      fontFamily: {
        montserrat: ["Montserrat", "serif"]
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.9)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    })
  ],
}