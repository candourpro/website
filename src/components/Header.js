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
      <Logo height={step(2)} width='inherit' />
      <Text marginLeft color={colors.blue}>
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
