import React from 'react'
import {
  Container,
  Heading,
  Text,
} from 'candour'

import Concept from './Concept'
import ConverterLink from './ConverterLink'
import MoreLink from './MoreLink'
import styleProps from './examples/style-props.txt'
import theme from './examples/theme.txt'
import examples from './examples/index'
import { ReactComponent as CircleIcon } from '../../../assets/circle.svg'
import { ReactComponent as NumbersIcon } from '../../../assets/numbers.svg'
import { ReactComponent as ThemeIcon } from '../../../assets/theme.svg'

export default ({
  match: {
    params: {
      concept = 'colors',
    },
  },
}) => (
  <Container padding paddingTop={5} limited>
    <Heading fontWeight700 colorLightGrey>
      Concepts
    </Heading>

    <Concept title='Style props & primitives' icon={CircleIcon} code={styleProps} wrapper={(code) => `render(${code})`}>
      Styling components inline makes you develop and refactor faster. Any CSS prop is
      accessible by camelCasing its name as props. Shorthand syntax is
      really useful for Boolean toggles.

      <MoreLink to='/docs/style-props/usage'>
        More
      </MoreLink>
    </Concept>

    <Concept title='Converters' code={examples[concept]} icon={NumbersIcon}>
      <Text paddingBottom>
        Ability to convert style values allows you set up app-wide standarts
        for colors, borders, sizes. You can convert:
      </Text>
      <ConverterLink value='colors' current={concept}>
        Colors
      </ConverterLink>
      <ConverterLink value='sizes' current={concept}>
        Sizes
      </ConverterLink>
      <MoreLink to='/docs/converters/overview' marginTop={2}>
        Learn more about converters
      </MoreLink>
    </Concept>

    <Concept title='Theme' code={theme} icon={ThemeIcon}>
      Maintain a consistent theme. Set up app-wide theme to style
      different primitive components. You can also create your own primitive
      components and their styles.

      <MoreLink to='/docs/theme/base'>
        More
      </MoreLink>
    </Concept>
  </Container>
)
