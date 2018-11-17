import React from 'react'
import { Container } from 'candour'
import { ReactComponent as Icon } from '../assets/logo.svg'

export default (props) => (
  <Container component={Icon} height width borderRadius='3px' {...props} />
)
