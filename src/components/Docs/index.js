import React from 'react'
import {
  Container,
} from 'candour'

import Header from '../Header'
import borders from '../../theme/borders'
import Menu from './Menu/index'
import Content from './Content/index'

export default (props) => (
  <Container>
    <Header />
    <Container borderTop={borders.light} displayFlex>
      <Menu {...props} />
      <Content {...props} />
    </Container>
  </Container>
)
