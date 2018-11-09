import React from 'react'
import _ from 'lodash'
import { transform } from '@babel/core'
import babelPresetReact from '@babel/preset-react'
import {
  CandourProvider,
  Container,
  Heading,
  Text,
  Button,
  Input,
  Code,
  fluidSteps,
  colors,
  borders,
  fontFamilies,
  custom,
} from 'candour'
import CandourNormalize from '@candour/normalize'

const sandboxer = () => ({
  visitor: {
    Program(path, state) {
      const imports = _.filter(path.get('body'), (p) => p.isImportDeclaration())
      _.each(imports, (i) => i.remove())
    },
    Identifier(path) {
      if (path.node.name !== 'render') return

      path.node.name = 'return render'
    },
  },
})

export default props => {
  const { code } = transform(props.children, {
    presets: [
      babelPresetReact,
    ],
    plugins: [
      sandboxer,
    ],
  })

  const render = (result) => result

  const inputs = {
    React,
    render,
    CandourProvider,
    Heading,
    Container,
    Text,
    Code,
    Button,
    Input,
    CandourNormalize,
    fluidSteps,
    colors,
    borders,
    fontFamilies,
    custom,
  }

  const codeFunction = new Function(..._.keys(inputs), code)(..._.values(inputs))

  return (
    <Container borderLight padding>
      {codeFunction}
    </Container>
  )
}
