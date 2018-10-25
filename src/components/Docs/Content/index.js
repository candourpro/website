import React from 'react'
import { CandourProvider, Container } from 'candour'

import candourMdxTheme from '../../../theme/candourMdx'
import currentComponent from './lib/currentComponent'
import components from './lib/components'

export default (props) => {
  const CurrentComponent = currentComponent(props)

  return (
    <Container padding paddingLeft={2} paddingRight={2} width='100%'>
      <CandourProvider value={candourMdxTheme}>
        <CurrentComponent components={components} />
      </CandourProvider>
    </Container>
  )
}
