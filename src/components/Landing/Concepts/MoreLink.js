import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Container,
  Link,
} from 'candour'

export default (props) => (
  <Container>
    <Link
      level={7}
      component={RouterLink}
      displayInlineBlock
      marginTop
      fontWeight700
      borderBottomAqua
      {...props}
    />
  </Container>
)
