import React from 'react'
import _ from 'lodash'
import Item from './Item'

export default ({ items, ...rest }) => (
  <>
    {_.map(items, (item, index) => (
      <Item key={index} {...item} {...rest} />
    ))}
  </>
)
