export default {
  container: {
    base: {
      WebkitFontSmoothing: 'antialiased',
      lineHeight: 1.5,
    },
  },
  readable: {
    maxWidth: '768px',
  },
  button: {
    base: {
      backgroundColor: 'black',
      color: 'white',
      cursor: 'pointer',
      padding: 1,
      paddingTop: .5,
      paddingBottom: .55,
      borderRadius: '2px',

      ':hover': {
        backgroundColor: 'dark-blue',
      },
    },
  },
  link: {
    base: {
      ':hover': {
        color: 'blue',
      },
    },
  },
  code: {
    base: {
      backgroundColor: 'light-blue',
    },
  },
}
