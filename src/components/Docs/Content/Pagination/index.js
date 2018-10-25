import React from 'react'
import { Container } from 'candour'

import previous from '../lib/previous'
import next from '../lib/next'
import Link from './Link'

export default (props) => (
  <Container displayFlex paddingTop={2} paddingBottom={2}>
    {previous(props) && <Link label='Previous' item={previous(props)} />}
    {next(props) && <Link label='Next' item={next(props)} marginLeftAuto />}
  </Container>
)
