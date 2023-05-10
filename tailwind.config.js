/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      screens: {
        'xs': '480px',

      },
      fontFamily:{
        'Space-Grotesk': ['Space Grotesk', 'sans serif']
      },
    },
  },
  plugins: [],
}

