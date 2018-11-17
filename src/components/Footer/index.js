import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Container,
  Link,
  Text,
} from 'candour'
import CandourBlock from '../CandourBlock'

export default () => (
  <Container padding paddingTop={3} paddingBottom={3} backgroundColorBlack colorWhite displayFlex alignItemsCenter>
    <Link component={RouterLink} to='/' displayFlex alignItemsCenter>
      <CandourBlock />
      <Text marginLeft fontWeight700>
        Candour
      </Text>
    </Link>
  </Container>
)
