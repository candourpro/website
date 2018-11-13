import React from 'react'
import {
  Container,
} from 'candour'
import CodeWithSandbox from '../../CodeWithSandbox'
import examples from './examples/index'
import Link from './Link'

export default ({
  location: {
    state: {
      exampleId = 'styleProps',
    } = {},
  },
}) => (
  <Container paddingTop={2} maxWidth={36} width='100%' overflowYAuto paddingBottom={4}>
    <CodeWithSandbox editable sandbox key={exampleId}>
      {examples[exampleId]}
    </CodeWithSandbox>

    <Container padding marginTop={-1.5} backgroundColorLightBlue>
      <Link example='styleProps' exampleId={exampleId}>
        Style props
      </Link>
      <Link example='colors' exampleId={exampleId}>
        Redefine colors
      </Link>
      <Link example='sizes' exampleId={exampleId}>
        Redefine sizes
      </Link>
      <Link example='theme' exampleId={exampleId}>
        Theme
      </Link>
      <Link example='modifiers' exampleId={exampleId}>
        Modifiers
      </Link>
    </Container>
  </Container>
)
