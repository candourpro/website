import Overview from './overview.md'
import StylePropsUsage from './style-props/usage.md'
import StylePropsShorthand from './style-props/shorthand.md'
import StylePropsList from './style-props/list.md'
import StylePropsWhyInlineStyles from './style-props/why-inline-styles.md'
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
import PrimitivesContainer from './primitives/container.md'
import PrimitivesHeading from './primitives/heading.md'
import PrimitivesText from './primitives/text.md'
import PrimitivesLink from './primitives/link.md'
import PrimitivesButton from './primitives/button.md'
import PrimitivesInput from './primitives/input.md'
import PrimitivesCode from './primitives/code.md'
import PrimitivesCreateNew from './primitives/create-new.md'
import CandourProvider from './candour-provider.md'
import Faq from './faq.md'

export default [
  {
    name: 'Overview',
    slug: 'overview',
    component: Overview,
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
      {
        name: 'Why inline styles',
        slug: 'style-props/why-inline-styles',
        component: StylePropsWhyInlineStyles,
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
    name: 'CandourProvider',
    slug: 'candour-provider',
    component: CandourProvider,
  },
  {
    name: 'Breakpoints',
    slug: 'breakpoints',
    component: Breakpoints,
  },
  {
    name: 'Primitives',
    slug: 'primitives',
    items: [
      {
        name: 'Container',
        slug: 'primitives/container',
        component: PrimitivesContainer,
      },
      {
        name: 'Heading',
        slug: 'primitives/heading',
        component: PrimitivesHeading,
      },
      {
        name: 'Text',
        slug: 'primitives/text',
        component: PrimitivesText,
      },
      {
        name: 'Link',
        slug: 'primitives/link',
        component: PrimitivesLink,
      },
      {
        name: 'Button',
        slug: 'primitives/button',
        component: PrimitivesButton,
      },
      {
        name: 'Input',
        slug: 'primitives/input',
        component: PrimitivesInput,
      },
      {
        name: 'Code',
        slug: 'primitives/code',
        component: PrimitivesCode,
      },
      {
        name: 'Create a new primitive',
        slug: 'primitives/create-new',
        component: PrimitivesCreateNew,
      },
    ],
  },
  {
    name: 'FAQ',
    slug: 'faq',
    component: Faq,
  },
]
