import React from 'react'
import _ from 'lodash'
import {
  Container,
} from 'candour'
import Introduction from '../docs/introduction.md'
import GettingStartedInstall from '../docs/getting-started/install.md'
import GettingStartedCustomTheme from '../docs/getting-started/custom-theme.md'

import Header from './Header'
import Items from './Items'
import borders from '../theme/borders'

const items = [
  {
    name: 'Introduction',
    slug: 'introduction',
    component: Introduction,
  },
  {
    name: 'Getting started',
    slug: 'getting-started',
    items: [
      {
        name: 'Install',
        slug: 'install',
        component: GettingStartedInstall,
      },
      {
        name: 'Custom theme',
        slug: 'custom-theme',
        component: GettingStartedCustomTheme,
      },
    ],
  },
]

export default ({
  match: {
    params: {
      slug,
    },
  },
}) => {
  const CurrentComponent = _.find(items, { slug }).component

  return (
    <Container>
      <Header />
      <Container borderTop={borders.gray} displayFlex>
        <Container padding={2} borderRight={borders.gray} minWidth={8} minHeight='100vh'>
          <Items items={items} slug={slug} />
        </Container>
        <Container padding={2}>
          <CurrentComponent />
        </Container>
      </Container>
    </Container>
  )
}
