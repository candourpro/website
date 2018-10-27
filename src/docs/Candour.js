import React from 'react'
import {
  Container,
} from 'candour'
import colors from '../theme/colors'

export default (props) => (
  <Container displayInlineBlock marginLeft={.3} {...props}>
    <Container
      displayInlineBlock
      backgroundColor={colors.black}
      height={.7}
      width={.7}
      marginRight={.3}
      marginBottom={.05}
    />
    <Container displayInline fontWeight700>
      Candour
    </Container>
  </Container>
)
