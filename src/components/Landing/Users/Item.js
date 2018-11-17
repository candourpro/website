import React from 'react'
import {
  Container,
  Link,
  useBreakpoints,
} from 'candour'

export default ({ href, ...rest }) => {
  const { small } = useBreakpoints()

  return (
    <Link href={href} target='_blank'>
      <Container
        component='img'
        backgroundSize='contain'
        height={small ? 'auto' : 11}
        width={small ? '100%' : 'auto'}
        rounded
        boxShadow='0 3px 10px hsla(0, 0%, 0%, 0.3)'
        {...rest}
      />
    </Link>
  )
}
