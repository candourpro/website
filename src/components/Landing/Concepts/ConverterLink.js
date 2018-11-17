import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Container,
  Link,
} from 'candour'

export default ({ value, current, children }) => (
  <Container>
    <Link
      component={RouterLink}
      to={`/concepts/${value}`}
      level={5}
      colorLightBlack
      fontWeight700={value === current}
      marginBottom={.2}
    >
      {children} →
    </Link>
  </Container>
)
