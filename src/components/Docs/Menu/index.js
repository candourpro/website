import React from 'react'
import { Container } from 'candour'

import docs from '../../../docs/index'
import borders from '../../../theme/borders'
import Items from './Items'

export default (props) => (
  <Container padding borderRight={borders.light} minWidth={8} minHeight='100vh'>
    <Items items={docs} {...props} />
  </Container>
)
