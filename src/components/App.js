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
import Header from './Header'
import Docs from './Docs/index'
import SmallMenuContent from './SmallMenu/Content'

export default () => (
  <Container>
    <Router>
      <ScrollToTop>
        <Route component={Header} />
        <Route component={SmallMenuContent} />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/docs/*' component={Docs} />
          <Redirect exact from='/docs' to='/docs/overview/introduction' />
        </Switch>
      </ScrollToTop>
    </Router>
  </Container>
)
