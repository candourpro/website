import _ from 'lodash'
import { levels } from 'candour'

import theme from './candour'

export default _.merge(
  theme,
  {
    heading: _.merge(
      levels('fontSize', [2, 1.75, 1.5, 1.25]),
      levels('fontWeight', [700]),
      levels('paddingBottom', [0.5]),
    ),
  },
)
