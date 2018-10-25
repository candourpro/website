import React from 'react'
import _ from 'lodash'
import { Container } from 'candour'

import docs from '../../docs/index'

const flatten = (docs) => {
  const result = _.cloneDeep(docs)

  _.each(docs, (doc) => (
    result.push(doc.items)
  ))

  return _.compact(_.flatten(result))
}

export default ({
  match: {
    params,
  },
}) => {
  const CurrentComponent = _.find(flatten(docs), { slug: params[0] }).component

  return (
    <Container padding>
      <CurrentComponent />
    </Container>
  )
}
