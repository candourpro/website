import _ from 'lodash'
import { levels } from 'candour'

import theme from './candour'

export default _.merge(
  _.cloneDeep(theme),
  {
    heading: {
      ...levels('fontSize', [2, 1.75, 1.5, 1.25]),
      base: {
        marginBottom: 0.5,
        fontWeight: 700,
      },
    },
    text: {
      base: {
        marginBottom: 1,
      },
    },
    code: {
      base: {
        width: '100%',
        boxSizing: 'border-box',
        marginBottom: 2,
      },
    },
  },
)
