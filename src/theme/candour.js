import colors from './colors'

export default {
  container: {
    base: {
      WebkitFontSmoothing: 'antialiased',
      fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      lineHeight: 1.5,
    },
  },
  readable: {
    maxWidth: '768px',
  },
  roundCorners: {
    borderRadius: '4px',
  },
  button: {
    base: {
      backgroundColor: colors.black,
      color: colors.white,
      cursor: 'pointer',
      padding: 1,
      paddingTop: .5,
      paddingBottom: .5,
    },
  },
}
