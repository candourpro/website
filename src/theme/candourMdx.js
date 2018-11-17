import _ from 'lodash'
import { levels } from 'candour'

import theme from './candour'

export default _.merge(
  _.cloneDeep(theme),
  {
    heading: {
      ...levels('fontSize', [2, 1.5, 1.25, 1.10, 1]),
      base: {
        marginBottom: 0.5,
        fontWeight: 700,
      },
    },
    code: {
      base: {
        backgroundColor: '#F9FBFC',
        padding: 1,
        width: '100%',
        marginBottom: 2,
      },
    },
    link: {
      base: {
        textDecoration: 'underline',
      },
    },
  },
)
