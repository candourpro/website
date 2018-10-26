import React from 'react'
import {
  Container,
  Heading,
  Text,
  Code,
} from 'candour'
import Sandbox from '../Sandbox'
import borders from '../../../../theme/borders'

const heading = level => props => <Heading level={level} {...props} />
const code = props => {
  if (props.className !== 'language-jsx') return <Code {...props} />

  return (
    <Container>
      <Sandbox {...props} />
      <Code {...props} />
    </Container>
  )
}

const inlineCode = props => (
  <Code display='inline' padding={0} paddingLeft={0.25} paddingRight={0.25} {...props} />
)

const table = props => <Container component='table' {...props} />
const th = props => (
  <Text
    component='th'
    padding
    textAlignLeft
    borderBottom={borders.light}
    fontWeight600
    level={5}
    {...props}
  />
)

const td = props => <Container
  component='td'
  padding
  borderBottom={borders.light}
  {...props}
/>

export default {
  h1: heading(1),
  h2: heading(2),
  h3: heading(3),
  h4: heading(4),
  h5: heading(5),
  h6: heading(6),
  p: Text,
  code,
  inlineCode,
  table,
  td,
  th,
}
