import React from 'react'
import _ from 'lodash'
import {
  Container,
  Heading,
  Text,
  Button,
} from 'candour'
import step from '@candour/step'

import Blocks from './Blocks'
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
    <Text level={2}>
      React design system to build faster
    </Text>
  </Container>
)
