import _ from 'lodash'
import { levels } from 'candour'

import theme from './candour'

export default _.merge(
  _.cloneDeep(theme),
  {
    heading: _.merge(
      levels('fontSize', [2, 1.75, 1.5, 1.25]),
      levels('fontWeight', [700]),
      levels('marginBottom', [0.5]),
    ),
    text: _.merge(
      levels('marginBottom', [1]),
    ),
    code: {
      base: {
        width: '100%',
        boxSizing: 'border-box',
        marginBottom: 2,
      },
    },
  },
)