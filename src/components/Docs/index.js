import React from 'react'
import {
  Container,
} from 'candour'

import Header from '../Header'
import Menu from './Menu/index'
import Content from './Content/index'

export default (props) => (
  <Container>
    <Header />
    <Container borderTopLight displayFlex>
      <Menu {...props} />
      <Content {...props} />
    </Container>
  </Container>
)
