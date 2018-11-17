import React from 'react'
import {
  Container,
} from 'candour'

import { ReactComponent as CheckmarkIcon } from '../../../../assets/checkmark.svg'

export default () => (
  <Container
    component={CheckmarkIcon}
    width
    height
    fill='aqua'
    marginRight={.3}
  />
)
