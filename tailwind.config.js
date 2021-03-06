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
        '80per': '80%',
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
