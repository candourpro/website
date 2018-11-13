import React from 'react'
import {
  Container,
  Heading,
  Text,
} from 'candour'
import Code from './Code/index'

export default (props) => (
  <Container
    padding
    displayFlex
    justifyContentSpaceBetween
  >
    <Container paddingRight={4} maxWidth={35}>
      <Heading fontWeight200>
        Candour
      </Heading>
      <Heading level={2} paddingBottom={2} fontWeight700 lineHeight={1.25}>
        Fully Configurable<br/> Inline Style System<br/> for React
      </Heading>

      <Text level={5} paddingBottom borderBottomBlack>
        Nothing to learn inline style API
      </Text>
      <Text level={5} paddingBottom paddingTop borderBottomBlack>
        Redefine CSS values and modify component styles
      </Text>
      <Text level={5} paddingTop>
        Maintain a consistent component theme
      </Text>
    </Container>

    <Code {...props} />
  </Container>
)
