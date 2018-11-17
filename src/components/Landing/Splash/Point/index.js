import React from 'react'
import {
  Text,
} from 'candour'
import Checkmark from './Checkmark'

export default ({ children, ...rest }) => (
  <Text
    displayFlex
    alignItemsCenter
    level={8}
    colorLightBlack
    {...rest}
  >
    <Checkmark /> {children}
  </Text>
)
