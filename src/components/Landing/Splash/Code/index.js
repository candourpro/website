import React from 'react'
import {
  Container,
  useBreakpoints,
} from 'candour'
import CodeWithSandbox from '../../../CodeWithSandbox'
import example from './example.txt'

const wrapper = (code) => `
  render(
    <CandourProvider
      converters={[fluidSteps(), colors({ aqua: '#66FCD9' })]}
    >
      ${code}
    </CandourProvider>
  )
`

export default () => {
  const { small } = useBreakpoints()

  return (
    <Container minWidth25={!small}>
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
}
