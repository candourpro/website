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
        slug: 'getting-started/install',
        component: GettingStartedInstall,
      },
      {
        name: 'Custom theme',
        slug: 'getting-started/custom-theme',
        component: GettingStartedCustomTheme,
      },
    ],
  },
]

const flatItems = (items) => {
  const result = _.cloneDeep(items)

  _.each(items, (item) => (
    result.push(item.items)
  ))

  return _.compact(_.flatten(result))
}

export default ({
  match: {
    params,
  },
}) => {
  const slug = params[0]
  const CurrentComponent = _.find(flatItems(items), { slug }).component

  return (
    <Container>
      <Header />
      <Container borderTop={borders.gray} displayFlex>
        <Container padding={2} borderRight={borders.gray} minWidth={8} minHeight='100vh'>
          <Items items={items} currentSlug={slug} />
        </Container>
        <Container padding={2}>
          <CurrentComponent />
        </Container>
      </Container>
    </Container>
  )
}
