module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        'catamaran': ['Catamaran', 'Helvetica', 'sans-serif']
      },
      colors: {
        'happy-dark-grey': '#282828',
        'happy-light-grey': '#707070',
        'happy-pink': '#FF31CF',
      },
      fontSize: {
        'happy-h1': '2.7rem',
      }
    },
  },
  variants: {
    borderWidth: ['responsive', 'last', 'hover', 'focus'],
  },
  plugins: [],
}
