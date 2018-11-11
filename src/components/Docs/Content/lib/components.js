import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import {
  Container,
  Heading,
  Text,
  Code,
} from 'candour'
import Sandbox from '../Sandbox'
import borders from '../../../../theme/borders'

const heading = level => props => <Heading level={level} {...props} />
const code = ({ sandbox, ...rest }) => (
  <Container>
    {sandbox && <Sandbox {...rest} />}
    <Code {...rest} />
  </Container>
)

const inlineCode = props => (
  <Code display='inline' padding={0} paddingLeft={0.25} paddingRight={0.25} {...props} />
)

const table = props => <Container component='table' paddingBottom={2} {...props} />
const th = props => (
  <Text
    component='th'
    padding
    textAlignLeft
    borderBottom={borders.light}
    fontWeight600
    level={3}
    {...props}
  />
)

const td = props => <Container
  component='td'
  padding
  borderBottom={borders.light}
  {...props}
/>

const strong = props => <Text component='strong' fontWeight600 {...props} />
const hr = props => <Container paddingBottom {...props} />
const a = ({ href, ...props }) => {
  if (_.startsWith(href, '/')) {
    return (
      <Text
        component={Link}
        to={href}
        textDecoration='underline'
        {...props}
      />
    )
  } else {
    return (
      <Text
        component='a'
        href={href}
        target='_blank'
        textDecoration='underline'
        {...props}
      />
    )
  }
}
const ul = props => <Container component='ul' marginTop={-1} paddingBottom {...props} />
const li = props => (
  <Container component='li' displayFlex>
    <Text paddingRight={.5}>-</Text> <Text {...props} />
  </Container>
)

const p = props => <Text marginBottom {...props} />
const blockquote = props => <Container paddingLeft borderLeft={borders.black} borderWidth={.5} {...props} />

export default {
  h1: heading(1),
  h2: heading(2),
  h3: heading(3),
  h4: heading(4),
  h5: heading(5),
  h6: heading(6),
  p,
  code,
  inlineCode,
  table,
  td,
  th,
  strong,
  hr,
  a,
  ul,
  li,
  blockquote,
}
