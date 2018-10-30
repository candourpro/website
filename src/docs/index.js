import OverviewIntroduction from './overview/introduction.md'
import OverviewInlineStylesAndProps from './overview/inline-styles-and-props.md'
import OverviewFluidDesignRhythmAndSteps from './overview/fluid-design-rhythm-and-steps.md'
import StylePropsUsage from './style-props/usage.md'
import StylePropsShorthand from './style-props/shorthand.md'
import StylePropsList from './style-props/list.md'
import ThemeBase from './theme/base.md'
import ThemeModifiers from './theme/modifiers.md'
import ThemeLevels from './theme/levels.md'
import GettingStarted from './getting-started.md'
import ComponentsContainer from './components/container.md'
import ComponentsHeading from './components/heading.md'
import ComponentsButton from './components/button.md'
import ComponentsInput from './components/input.md'
import ComponentsCode from './components/code.md'

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
        name: 'Inline styles and props',
        slug: 'overview/inline-styles-and-props',
        component: OverviewInlineStylesAndProps,
      },
      {
        name: 'Fluid design rhythm and steps',
        slug: 'overview/fluid-design-rhythm-and-steps',
        component: OverviewFluidDesignRhythmAndSteps,
      },
    ],
  },
  {
    name: 'Getting started',
    slug: 'getting-started',
    component: GettingStarted,
  },
  {
    name: 'Theme',
    slug: 'theme',
    items: [
      {
        name: 'Base',
        slug: 'theme/base',
        component: ThemeBase,
      },
      {
        name: 'Modifiers',
        slug: 'theme/modifiers',
        component: ThemeModifiers,
      },
      {
        name: 'Levels',
        slug: 'theme/levels',
        component: ThemeLevels,
      },
    ],
  },
  {
    name: 'Style props',
    slug: 'style-props',
    items: [
      {
        name: 'Usage',
        slug: 'style-props/usage',
        component: StylePropsUsage,
      },
      {
        name: 'Shorthand',
        slug: 'style-props/shorthand',
        component: StylePropsShorthand,
      },
      {
        name: 'List',
        slug: 'style-props/list',
        component: StylePropsList,
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
      {
        name: 'Button',
        slug: 'components/button',
        component: ComponentsButton,
      },
      {
        name: 'Input',
        slug: 'components/input',
        component: ComponentsInput,
      },
      {
        name: 'Code',
        slug: 'components/code',
        component: ComponentsCode,
      },
    ],
  },
]
