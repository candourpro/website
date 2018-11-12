import React from 'react'
import { Container, Text } from 'candour'

import docs from '../../../docs/index'
import Items from './Items'

export default (props) => (
  <Container padding borderRightLight minWidth={12} minHeight='100vh'>
    <Items items={docs} {...props} />

    <Text
      component='a'
      href='https://github.com/candourpro/candour'
      target='_blank'
      level={props.level}
      fontWeight700
    >
      GitHub
    </Text>
  </Container>
)
