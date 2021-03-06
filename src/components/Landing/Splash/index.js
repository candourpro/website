import React from 'react'
import {
  Container,
  Heading,
  Text,
  Button,
  useBreakpoints,
} from 'candour'
import { Link as RouterLink } from 'react-router-dom'
import Code from './Code/index'
import Point from './Point/index'

export default (props) => {
  const { small } = useBreakpoints()

  return (
    <Container
      padding
      paddingTop={small ? 1 : 5}
      paddingBottom={3}
      displayFlex={!small}
      justifyContentSpaceBetween
      limited
    >
      <Container maxWidth={32} paddingRight={2}>
        <Heading
          level={2}
          tight
          lineHeight={1.25}
          fontWeight700
          paddingBottom={2}
        >
          Next-gen React<br/>Design Abstraction Layer
        </Heading>

        <Text paddingBottom={2.6} level={4} colorLightBlack>
          <Text fontWeight500 level={4} displayInline>Candour</Text> is
            an abstraction layer to build context-aware designs systems.
        </Text>

        <Button
          component={RouterLink}
          to='/docs'
          level={6}
          paddingLeft={2}
          paddingRight={2}
          fontWeight700
          textTransformUppercase
        >
          Learn more
        </Button>

        <Container
          displayFlex={!small}
          paddingBottom={3}
          paddingTop={3}
        >
          <Point paddingRight={1.5}>
            Redefine any CSS value
          </Point>
          <Point paddingRight={1.5}>
            Theme easily
          </Point>
          <Point paddingRight={1.5}>
            Minimal, performant
          </Point>
        </Container>
      </Container>

      <Code />
    </Container>
  )
}
