import Introduction from './introduction.md'
import GettingStartedInstall from './getting-started/install.md'
import GettingStartedCustomTheme from './getting-started/custom-theme.md'

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
]
