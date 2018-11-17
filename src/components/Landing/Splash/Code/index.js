import React from 'react'
import {
  Container,
} from 'candour'
import CodeWithSandbox from '../../../CodeWithSandbox'
import example from './example.txt'

const wrapper = (code) => `
  render(
    <CandourProvider
      converters={[fluidSteps, colors]}
      colors={{ aqua: '#66FCD9' }}
    >
      ${code}
    </CandourProvider>
  )
`

export default () => (
  <Container minWidth={25}>
    <CodeWithSandbox
      editable
      sandbox
      wrapper={wrapper}
      level={5}
    >
      {example}
    </CodeWithSandbox>
  </Container>
)
