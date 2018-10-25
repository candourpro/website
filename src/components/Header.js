import React from 'react'
import {
  Container,
  Text,
} from 'candour'
import {
  Link,
} from 'react-router-dom'
import colors from '../theme/colors'

export default () => (
  <Container
    displayFlex
    justifyContentSpaceBetween
    alignItemsCenter
    padding
    fontWeight700
  >
    <Container component={Link} to='/' displayFlex alignItemsCenter>
      <Container height width backgroundColor={colors.black} />
      <Text marginLeft>
        Candour
      </Text>
    </Container>
    <Container displayFlex>
      <Text component={Link} to='/docs/introduction' marginLeft={3}>
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
