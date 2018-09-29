import React from 'react'
import { Container } from 'candour'
import Header from './Header'
import Splash from './Splash'
import step from '@candour/step'

export default () => (
  <Container style={styles.container}>
    <Header />
    <Splash />
  </Container>
)

const styles = {
  container: {
    backgroundSize: step(4),
    backgroundImage: 'linear-gradient(to right, #f2f2f2 1px, transparent 1px)',
    backgroundPositionX: step(2),
    minHeight: '100vh',
  },
}
