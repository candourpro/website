import React from 'react'
import {
  Container,
  Heading,
  Text,
} from 'candour'
import colors from '../theme/colors'

export default () => (
  <Container
    padding={2}
    paddingTop={5}
    paddingBottom={6}
    backgroundColor={colors.black}
    color={colors.white}
  >
    <Heading>
      Candour
    </Heading>
    <Text level={3}>
      React design system to build faster
    </Text>
  </Container>
)
