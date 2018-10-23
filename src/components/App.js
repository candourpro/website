import React from 'react'
import { Container } from 'candour'
import Header from './Header'
import Splash from './Splash'
import Motivation from '../docs/motivation.md'
import step from '@candour/step'

export default () => (
  <Container>
    <Header />
    <Splash />
    <Container>
      <Motivation />
    </Container>
  </Container>
)
