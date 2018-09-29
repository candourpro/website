import React from 'react'
import {
  Container,
} from 'candour'

export default () => (
  <Container>
    <Container paddingTop={4} constrained>
      <Heading level={3}>
        Everything is in harmony with the viewport size
      </Heading>
      <Text level={2}>
        Fluid design is a new iteration of responsive design thinking. Everything
        is in harmony with the viewport size - every text, every box, every line.
      </Text>

      <Text
        component='pre'
        backgroundColor={colors.darkGrey}
        roundCorners
        padding
      >
        {
`<Container padding={2}>
</Container>`
        }
      </Text>
    </Container>

    <Container paddingTop={4} constrained>
      <Heading level={3}>
        Everything is in harmony with the viewport size
      </Heading>
      <Text level={2}>
        Fluid design is a new iteration of responsive design thinking. Everything
        is in harmony with the viewport size - every text, every box, every line.
      </Text>

      <Text
        component='pre'
        backgroundColor={colors.darkGrey}
        roundCorners
        padding
      >
        {
`<Container padding={2}>
</Container>`
        }
      </Text>
    </Container>
  </Container>
)
