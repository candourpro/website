import _ from 'lodash'

export default (docs) => {
  const result = _.cloneDeep(docs)

  _.each(docs, (doc) => (
    result.push(doc.items)
  ))

  return _.filter(_.compact(_.flatten(result)), 'component')
}