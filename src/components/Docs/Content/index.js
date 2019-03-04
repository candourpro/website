import React from 'react'
import {
  CandourProvider,
  Container,
  Text,
  useBreakpoints,
} from 'candour'

import candourMdxTheme from '../../../theme/candourMdx'
import candourConverters from '../../../theme/candourConverters'
import Pagination from './Pagination/index'
import GitHubMeta from './GitHubMeta/index'

import current from './lib/current'
import components from './lib/components'

export default (props) => {
  const CurrentComponent = current(props).component
  const { small } = useBreakpoints()

  return (
    <Container padding paddingLeft={small ? 1 : 2} paddingRight={small ? 1 : 2} paddingBottom={6} width='100%'>
      <Text readable>
        <CandourProvider
          theme={candourMdxTheme}
          converters={candourConverters}
        >
          <CurrentComponent components={components} />
        </CandourProvider>
      </Text>
      <Pagination {...props} />
      <GitHubMeta {...props} />
    </Container>
  )
}
