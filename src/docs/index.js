import Introduction from './introduction.md'
import GettingStartedInstall from './getting-started/install.md'
import GettingStartedCustomTheme from './getting-started/custom-theme.md'
import ComponentsContainer from './components/container.md'
import ComponentsHeading from './components/heading.md'

export default [
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
  {
    name: 'Components',
    slug: 'components',
    items: [
      {
        name: 'Container',
        slug: 'components/container',
        component: ComponentsContainer,
      },
      {
        name: 'Heading',
        slug: 'components/heading',
        component: ComponentsHeading,
      },
    ],
  },
]
