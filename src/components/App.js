import React from 'react'
import { Container } from 'candour'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import ScrollToTop from 'react-router-scroll-top'

import Landing from './Landing'
import Docs from './Docs/index'

export default () => (
  <Container>
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/docs/*' component={Docs} />
          <Redirect exact from='/docs' to='/docs/overview/introduction' />
        </Switch>
      </ScrollToTop>
    </Router>
  </Container>
)
