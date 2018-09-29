import fluid from '@candour/fluid'
import step from '@candour/step'
import colors from './colors'

export default {
  heading: {
    1: {
      fontSize: step(6),
      lineHeight: step(6),
      fontWeight: 600,
      textIndent: fluid(-1, -8),
    },
    2: {
      fontSize: step(2.3),
      lineHeight: step(2.3),
      fontWeight: 500,
    },
    3: {
      fontWeight: 600,
    },
  },
  text: {
    1: {
      fontSize: fluid(14, 20),
      lineHeight: fluid(14, 20),
    },
    3: {
      fontSize: fluid(14, 18),
      lineHeight: fluid(14, 18),
    },
  },
  button: {
    base: {
      backgroundColor: colors.blue,
      padding: `${step()} ${step(2)}`,
      minWidth: step(12),
      height: 'inherit',
      fontWeight: 450,
      letterSpacing: fluid(0.5, 2),
    },
  },
  limited: {
    maxWidth: '700px',
  },
  constrained: {
    maxWidth: '768px',
  },
  roundCorners: {
    borderRadius: '6px',
  },
}
