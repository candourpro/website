import React from 'react'
import {
  Container,
  Text,
} from 'candour'

import editUrl from './lib/editUrl'

export default (props) => (
  <Container paddingBottom={2} displayFlex justifyContentCenter>
    <Text component='a' href={editUrl(props)} target='_blank' fontWeight300>
      Edit this page on GitHub
    </Text>
  </Container>
)
