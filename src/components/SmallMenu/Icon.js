import React from 'react'
import {
  Link,
} from 'react-router-dom'
import {
  Container,
} from 'candour'

export default ({
  location: {
    state: {
      menu,
    } = {},
  },
}) => (
  <Container
    component={Link}
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
  </Container>
)
