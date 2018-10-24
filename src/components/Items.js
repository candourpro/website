import React from 'react'
import _ from 'lodash'
import Item from './Item'

export default ({ items, slug }) => (
  <>
    {_.map(items, (item, index) => (
      <Item key={index} isActive={slug === item.slug} {...item} />
    ))}
  </>
)
