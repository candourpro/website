import React from 'react'
import { transform } from '@babel/core'
import babelPresetReact from '@babel/preset-react'
import {
  Container,
  Heading,
  Text,
  Code,
  CandourProvider,
  defaultTheme,
} from 'candour'
import colors from '../../../theme/colors'

export default props => {
  console.log(props)

  const result = transform(props.children, {
    presets: [babelPresetReact],
  }).code

  console.log(result)
  window.React = React
  window.Heading = Heading

  // const Comp = eval(result)

  return (
    <Container border={`2px solid ${colors.superLightBlue}`} padding>
      <CandourProvider>
        <Heading level={2}>
          AAA
        </Heading>
        {eval(result)}
      </CandourProvider>
    </Container>
  )
}
