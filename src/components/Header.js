import React from 'react'
import {
  Container,
  Text,
} from 'candour'
import step from '@candour/step'
import fluid from '@candour/fluid'
import colors from '../theme/colors'
import { ReactComponent as Logo } from '../assets/logo.svg'

export default () => (
  <Container
    displayFlex
    justifyContentSpaceBetween
    alignItemsCenter
    padding={2}
    paddingTop={1.5}
    paddingBottom={1.5}
    backgroundColor='#fff'
    color='#000'
    fontWeight700
  >
    <Container displayFlex alignItemsCenter>
      <Container height width backgroundColor={colors.black} />
      <Text marginLeft>
        Candour
      </Text>
    </Container>
    <Container displayFlex>
      <Text marginLeft={3}>
        Docs
      </Text>
      <Text marginLeft={3}>
        GitHub
      </Text>
      <Text marginLeft={3}>
        Get started
      </Text>
    </Container>
  </Container>
)
