import React from 'react'
import {
  Container,
} from 'candour'
import CandourBlock from '../components/CandourBlock'

export default (props) => (
  <Container displayInlineBlock marginLeft={.3} {...props}>
    <CandourBlock
      displayInlineBlock
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
