import React from 'react'
import {
  Container,
  Heading,
  Text,
  Button,
} from 'candour'
import step from '@candour/step'

import colors from '../theme/colors'
import Box from './Box'
        // Design framework based on fluid rhythm.
//      <Heading style={styles.heading.box}>
//        Candour.
//      </Heading>

//<Container style={styles.main.container} />
export default () => (
  <Container displayFlex>
    <Container padding={2} paddingBottom={4} paddingTop={6} minWidth={38}>
      <Heading paddingBottom={2}>
        Fluid design<br/>framework
      </Heading>
      <Heading level={2} paddingBottom>
        Utility-driven, minimalistic, effective.
      </Heading>
      <Container displayFlex alignItemsCenter>
        <Button width='inherit'>
          Getting started
        </Button>
        <Button width='inherit' marginLeft={2} backgroundColor={colors.white} border={`1px solid ${colors.blue}`} color={colors.blue}>
          View on GitHub
        </Button>
      </Container>
    </Container>
    <Container
      backgroundImage='url("/woman.png")'
      backgroundPosition='center'
      backgroundSize='contain'
      backgroundRepeat='no-repeat'
      style={{
        width: step(28),
      }} />
  </Container>
)

const styles = {
  main: {
    container: {
      width: step(40),
      height: step(40),
      marginBottom: step(-40),
      backgroundImage: `linear-gradient(to right, ${colors.darkGrey} 1px, transparent 1px),
        linear-gradient(to bottom, ${colors.darkGrey} 1px, transparent 1px)`,
      backgroundSize: `${step(2)} ${step(2)}`,
    },
  },
  heading: {
    box: {
      backgroundImage: 'linear-gradient(to right, rgb(249, 214, 194), rgb(196, 152, 122))',
      // backgroundImage: `linear-gradient(to right, ${colors.darkGrey} 2px, transparent 2px),
      //   linear-gradient(to bottom, ${colors.darkGrey} 2px, transparent 2px)`,
      // backgroundSize: `${step(2)} ${step(2)}`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }
  },
}
