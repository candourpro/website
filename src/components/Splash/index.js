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

export default (props) => {
  const { small } = useBreakpoints()

  return (
    <Container
      padding
      paddingBottom={5}
      displayFlex={!small}
      justifyContentSpaceBetween
    >
      <Container paddingRight={!small && 4} paddingBottom={2} maxWidth={35}>
        <Heading fontWeight200>
          Candour
        </Heading>
        <Heading level={2} paddingBottom={2} fontWeight700 lineHeight={1.25}>
          Fully Configurable<br/> Inline Style System<br/> for React
        </Heading>

        <Container paddingBottom={2}>
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

        <Button level={4} marginTop paddingBottom={.7} component={RouterLink} to='/docs'>
          Get started
        </Button>
      </Container>

      <Code {...props} />
    </Container>
  )
}
