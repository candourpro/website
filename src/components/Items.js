import React from 'react'
import _ from 'lodash'
import Item from './Item'

export default ({ items, currentSlug }) => (
  <>
    {_.map(items, (item, index) => (
      <Item key={index} currentSlug={currentSlug} {...item} />
    ))}
  </>
)
