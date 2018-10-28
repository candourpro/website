import _ from 'lodash'

export default (docs) => {
  const result = []

  _.each(_.cloneDeep(docs), (doc) => {
    if (!doc.items) {
      result.push(doc)
    } else {
      _.each(doc.items, (item) => (
        result.push(item)
      ))
    }
  })

  return result
}
