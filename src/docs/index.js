import OverviewIntroduction from './overview/introduction.md'
import OverviewInlineStylesAndProps from './overview/inline-styles-and-props.md'
import StylePropsUsage from './style-props/usage.md'
import StylePropsShorthand from './style-props/shorthand.md'
import StylePropsList from './style-props/list.md'
import ConvertersOverview from './converters/overview.md'
import ConvertersFluidSteps from './converters/fluid-steps.md'
import ConvertersColors from './converters/colors.md'
import ConvertersBorders from './converters/borders.md'
import ConvertersFontFamilies from './converters/font-families.md'
import ConvertersCustom from './converters/custom.md'
import ConvertersCreateNew from './converters/create-new.md'
import Breakpoints from './breakpoints.md'
import ThemeBase from './theme/base.md'
import ThemeModifiers from './theme/modifiers.md'
import ThemeLevels from './theme/levels.md'
import GettingStartedInstall from './getting-started/install.md'
import GettingStartedNormalize from './getting-started/normalize.md'
import ComponentsContainer from './components/container.md'
import ComponentsHeading from './components/heading.md'
import ComponentsText from './components/text.md'
import ComponentsButton from './components/button.md'
import ComponentsInput from './components/input.md'
import ComponentsCode from './components/code.md'
import ComponentsCandourProvider from './components/candour-provider.md'

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
        name: 'Normalize',
        slug: 'getting-started/normalize',
        component: GettingStartedNormalize,
      },
    ],
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
        name: 'List',
        slug: 'style-props/list',
        component: StylePropsList,
      },
      {
        name: 'Shorthand',
        slug: 'style-props/shorthand',
        component: StylePropsShorthand,
      },
    ],
  },
  {
    name: 'Converters',
    slug: 'converters',
    items: [
      {
        name: 'Overview',
        slug: 'converters/overview',
        component: ConvertersOverview,
      },
      {
        name: 'Fluid steps',
        slug: 'converters/fluid-steps',
        component: ConvertersFluidSteps,
      },
      {
        name: 'Colors',
        slug: 'converters/colors',
        component: ConvertersColors,
      },
      {
        name: 'Borders',
        slug: 'converters/borders',
        component: ConvertersBorders,
      },
      {
        name: 'Font families',
        slug: 'converters/font-families',
        component: ConvertersFontFamilies,
      },
      {
        name: 'Custom',
        slug: 'converters/custom',
        component: ConvertersCustom,
      },
      {
        name: 'Create a new converter',
        slug: 'converters/create-new',
        component: ConvertersCreateNew,
      },
    ],
  },
  {
    name: 'Breakpoints',
    slug: 'breakpoints',
    component: Breakpoints,
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
        name: 'Text',
        slug: 'components/text',
        component: ComponentsText,
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
      {
        name: 'CandourProvider',
        slug: 'components/candour-provider',
        component: ComponentsCandourProvider,
      },
    ],
  },
]
