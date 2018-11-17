import React from 'react'
import { Container, Link } from 'candour'

import docs from '../../../docs/index'
import Items from './Items'

export default (props) => (
  <Container padding borderRightLight minWidth={12} minHeight='100vh'>
    <Items items={docs} {...props} />

    <Link
      href='https://github.com/candourpro/candour'
      target='_blank'
      level={props.level}
    >
      GitHub
    </Link>
  </Container>
)
