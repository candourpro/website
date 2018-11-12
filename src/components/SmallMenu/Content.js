import React from 'react'
import Menu from '../Docs/Menu/index'

export default ({
  location: {
    state: {
      menu,
    } = {},
  },
  ...rest,
}) => {
  if (!menu) return null

  return (
    <Menu level={4} alwaysOpen {...rest} />
  )
}
