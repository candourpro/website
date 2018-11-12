import React from 'react'
import {
  Link as RouterLink,
} from 'react-router-dom'
import {
  Container,
  Link,
} from 'candour'

export default ({
  location: {
    state: {
      menu,
    } = {},
  },
}) => (
  <Link
    component={RouterLink}
    to={{ state: { menu: !menu } }}
    padding
    paddingRight={0}
  >
    <Container
      borderTopBlack
      borderBottomBlack
      height={.5}
      width={1.25}
    />
  </Link>
)
