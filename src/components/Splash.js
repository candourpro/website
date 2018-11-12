import React from 'react'
import {
  Container,
  Heading,
  Text,
} from 'candour'

export default () => (
  <Container
    padding
    paddingTop='20vh'
  >
    <Heading fontWeight600>
      Candour
    </Heading>
    <Text level={3}>
      Fully configurable inline style system for React
    </Text>
  </Container>
)
