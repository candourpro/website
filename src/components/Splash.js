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
    paddingTop={6}
    paddingBottom={6}
    backgroundColor={colors.blue}
    color={colors.white}
  >
    <Blocks />
    <Heading fontWeight700 paddingTop={2}>
      Candour
    </Heading>
    <Heading level={2} fontWeight300>
      React design system to build faster
    </Heading>
  </Container>
)
