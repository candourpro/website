import OverviewIntroduction from './overview/introduction.md'
import OverviewCoreOpinions from './overview/core-opinions.md'
import GettingStartedInstall from './getting-started/install.md'
import GettingStartedCustomTheme from './getting-started/custom-theme.md'
import ComponentsContainer from './components/container.md'
import ComponentsHeading from './components/heading.md'

export default [
  {
    name: 'Overview',
    slug: 'overview',
    items: [
      {
        name: 'Introduction',
        slug: 'overview/introduction',
        component: OverviewIntroduction,
      },
      {
        name: 'Core opinions',
        slug: 'overview/core-opinionts',
        component: OverviewCoreOpinions,
      },
    ],
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
