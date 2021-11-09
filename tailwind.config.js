module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.{html,js}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#012348',
          yellow: '#C29B40',
        }
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      spacing: {
        '9px': '9px',
        '13px': '13px',
        '70per': '70%',
      },
      maxWidth: {
        '83rem': '83rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
