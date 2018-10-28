import OverviewIntroduction from './overview/introduction.md'
import OverviewInlineStylesAndModifiers from './overview/inline-styles-and-modifiers.md'
import OverviewFluidDesignRhythmAndSteps from './overview/fluid-design-rhythm-and-steps.md'
import OverviewTheming from './overview/theming.md'
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
        name: 'Inline styles and modifiers',
        slug: 'overview/inline-styles-and-modifiers',
        component: OverviewInlineStylesAndModifiers,
      },
      {
        name: 'Fluid design rhythm and steps',
        slug: 'overview/fluid-design-rhythm-and-steps',
        component: OverviewFluidDesignRhythmAndSteps,
      },
      {
        name: 'Theming',
        slug: 'overview/theming',
        component: OverviewTheming,
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
