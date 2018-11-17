import React from 'react'
import {
  Container,
  Link,
} from 'candour'

export default ({ href, ...rest }) => (
  <Link href={href} target='_blank'>
    <Container
      component='img'
      backgroundSize='contain'
      height={11}
      rounded
      boxShadow='0 3px 10px hsla(0, 0%, 0%, 0.3)'
      {...rest}
    />
  </Link>
)
