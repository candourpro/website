import React from 'react'
import {
  CandourProvider,
  Container,
  Text,
  useBreakpoints,
} from 'candour'

import candourMdxTheme from '../../../theme/candourMdx'
import candourConverters from '../../../theme/candourConverters'
import colors from '../../../theme/colors'
import borders from '../../../theme/borders'
import Pagination from './Pagination/index'
import GitHubMeta from './GitHubMeta/index'

import current from './lib/current'
import components from './lib/components'

export default (props) => {
  const CurrentComponent = current(props).component
  const { small } = useBreakpoints()

  return (
    <Container padding paddingLeft={small ? 1 : 2} paddingRight={small ? 1 : 2} width='100%'>
      <Text readable>
        <CandourProvider
          theme={candourMdxTheme}
          converters={candourConverters}
          colors={colors}
          borders={borders}
        >
          <CurrentComponent components={components} />
        </CandourProvider>
      </Text>
      <Pagination {...props} />
      <GitHubMeta {...props} />
    </Container>
  )
}
