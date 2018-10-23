import fluid from '@candour/fluid'
import step from '@candour/step'
import colors from './colors'

export default {
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
    borderRadius: '4px',
  },
}
