import _ from 'lodash'
import docs from '../../../../docs/index'
import flatten from './flatten'

export default ({
  match: {
    params,
  },
}) => (
  _.find(flatten(docs), { slug: params[0] })
)
