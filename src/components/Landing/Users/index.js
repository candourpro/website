import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Container,
  Heading,
  Button,
} from 'candour'

import Item from './Item'

export default () => (
  <Container backgroundColor='#F9FBFC' padding paddingTop={5} paddingBottom={10} border='1px solid #E9EAE9'>
    <Container limited>
      <Heading level={2} fontWeight700 tight colorLightGrey lineHeight={.75}>
        Candour
      </Heading>

      <Heading level={2} fontWeight700 tight>
        Showcase
      </Heading>

      <Container paddingTop={3} paddingBottom={3} displayFlex justifyContentSpaceBetween flexWrapWrap>
        <Item marginTop src='/users/domasbitvinskas.jpg' href='https://domasbitvinskas.com' />
        <Item marginTop src='/users/kurkim.jpg' href='https://kurkim.lt' />
        <Item marginTop src='/users/bloometry.jpg' href='https://bloometry.com' />
      </Container>

      <Button
        component={RouterLink}
        to='/docs'
        level={8}
        paddingLeft={2}
        paddingRight={2}
        textTransformUppercase
      >
        Get started with Candour
      </Button>
    </Container>
  </Container>
)
