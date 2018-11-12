import React from 'react'
import CodeSandbox from 'react-code-sandbox'
import {
  CandourProvider,
  Container,
  Heading,
  Text,
  Link,
  Button,
  Input,
  Code,
  useBreakpoints,
} from 'candour'
import CandourNormalize from 'candour-normalize'
import fluidSteps from 'candour-fluid-steps'
import colors from 'candour-colors'
import borders from 'candour-borders'
import fontFamilies from 'candour-font-families'
import custom from 'candour-custom'

export default props => (
  <Container borderLight padding>
    <CandourProvider>
      <CodeSandbox
        imports={{
          React,
          CandourProvider,
          Heading,
          Container,
          Text,
          Link,
          Code,
          Button,
          Input,
          CandourNormalize,
          fluidSteps,
          colors,
          borders,
          fontFamilies,
          custom,
          useBreakpoints,
        }}
        {...props}
      />
    </CandourProvider>
  </Container>
)
