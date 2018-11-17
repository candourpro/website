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
      borderRadius: '6px',
      textTransform: 'uppercase',
      boxShadow: '0 3px 10px hsla(0, 0%, 0%, 0.3)',
      padding: 1,
      paddingTop: .7,
      paddingBottom: .8,

      ':hover': {
        color: 'hsla(0, 0%, 95%, 1)',
        boxShadow: '0 5px 15px hsla(0, 0%, 0%, 0.3)',
      },
    },
    inverted: {
      backgroundColor: 'white',
      color: 'black',
      border: 'light',
      boxShadow: '0 3px 10px hsla(0, 0%, 0%, 0.1)',
      padding: 0.7,
      paddingTop: .5,
      paddingBottom: .5,

      ':hover': {
        backgroundColor: 'dark-blue',
        color: 'white',
        border: 'none',
      },
    },
  },
  link: {
    base: {
      ':hover': {
        textDecoration: 'underline',
      },
    },
  },
  code: {
    base: {
      backgroundColor: '#F9FBFC',
      borderRadius: '6px',
    },
  },
  rounded: {
    borderRadius: '6px',
  },
  tight: {
    letterSpacing: -0.07,
  },
  roadmapPoint: {
    base: {
      padding: 1,
      paddingTop: .2,
      paddingBottom: .2,
      backgroundColor: 'aqua',
      borderRadius: '999px',
      whiteSpace: 'nowrap',
      fontFamily: 'monospace',
      border: 'aqua',
      cursor: 'pointer',

      ':hover': {
        backgroundColor: 'transparent',
        boxShadow: '0 3px 10px hsla(166, 97%, 70%, .3)',
      },
    },
  },
  limited: {
    maxWidth: 62,
    margin: '0 auto',
  },
}
