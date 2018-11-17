import React from 'react'
import {
  Container,
} from 'candour'

import Splash from './Splash'
import Roadmap from './Roadmap'
import Concepts from './Concepts'
import Users from './Users'

export default (props) => (
  <Container>
    <Splash />
    <Roadmap />
    <Concepts {...props} />
    <Users />
  </Container>
)
