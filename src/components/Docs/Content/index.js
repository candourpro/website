import React from 'react'
import { CandourProvider, Container } from 'candour'

import candourMdxTheme from '../../../theme/candourMdx'
import Pagination from './Pagination/index'
import GitHubMeta from './GitHubMeta/index'

import current from './lib/current'
import components from './lib/components'

export default (props) => {
  const CurrentComponent = current(props).component

  return (
    <Container padding paddingLeft={2} paddingRight={2} width='100%'>
      <CandourProvider value={candourMdxTheme}>
        <CurrentComponent components={components} />
      </CandourProvider>
      <Pagination {...props} />
      <GitHubMeta {...props} />
    </Container>
  )
}
