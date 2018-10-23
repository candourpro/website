import React from 'react'
import { Container } from 'candour'
import Block from './Block'
import colors from '../theme/colors'

export default () => (
  <Container displayFlex fontWeight900 alignItemsCenter color={colors.peach}>
    <Block />
    <Container paddingRight>
      +
    </Container>
    <Block />
    <Container paddingRight>
      =
    </Container>
    <Block />
    <Block />
    <Block />
  </Container>
)
