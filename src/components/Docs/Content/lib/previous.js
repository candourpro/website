import _ from 'lodash'
import docs from '../../../../docs/index'
import flatten from './flatten'
import current from './current'

export default (props) => (
  flatten(docs)[_.findIndex(flatten(docs), { slug: current(props).slug }) - 1]
)
