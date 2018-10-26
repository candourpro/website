import React from 'react'
import {
  Container,
  Heading,
  Text,
  Code,
} from 'candour'
import Sandbox from '../Sandbox'

const heading = level => props => <Heading level={level} {...props} />
const code = props => {
  if (!props.className === 'language-jsx') return <Code {...props} />

  return (
    <Container>
      <Sandbox {...props} />
      <Code {...props} />
    </Container>
  )
}

export default {
  h1: heading(1),
  h2: heading(2),
  h3: heading(3),
  h4: heading(4),
  h5: heading(5),
  h6: heading(6),
  text: Text,
  code,
}
