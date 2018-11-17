import React from 'react'
import CodeSandbox from 'react-code-sandbox'
import { Link as RouterLink } from 'react-router-dom'
import ErrorBoundary from 'react-error-boundary'
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

const Fallback = ({ error }) => (
  <Container colorRed padding={2} whiteSpacePreWrap fontFamilyMonospace>
    {error.toString()}
  </Container>
)

export default props => (
  <Container padding whiteSpaceNormal>
    <CandourProvider>
      <ErrorBoundary FallbackComponent={Fallback} key={props.children}>
        <CodeSandbox
          imports={{
            React,
            RouterLink,
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
      </ErrorBoundary>
    </CandourProvider>
  </Container>
)
