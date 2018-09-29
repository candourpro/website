import React from 'react'
import {
  Container,
  Text,
} from 'candour'
import step from '@candour/step'
import fluid from '@candour/fluid'
import colors from '../theme/colors'

export default () => (
  <Container
    displayFlex
    justifyContentSpaceBetween
    alignItemsCenter
    padding={2}
    paddingTop={1.5}
    paddingBottom={1.5}
    backgroundColor={colors.black}
    color={colors.white}
    fontWeight450
  >
    <Text level={2}>
      Candour
    </Text>
    <Container displayFlex letterSpacing={fluid(0.5, 1)}>
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

const styles = {
  logo: {
    width: step(1.5),
    height: step(1.5),
  },
}
