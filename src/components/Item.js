import React from 'react'
import { Text, Container } from 'candour'
import { Link } from 'react-router-dom'

import Items from './Items'
import colors from '../theme/colors'

export default ({
  slug,
  currentSlug,
  name,
  items = [],
}) => (
  <>
    <Text
      component={Link}
      to={`/docs/${slug}`}
      color={currentSlug === slug ? colors.blue : 'inherit'}
      displayBlock
      paddingBottom
      fontWeight700
    >
      {name}
    </Text>

    {!!items.length && <Container paddingLeft>
      <Items items={items} currentSlug={currentSlug} />
    </Container>}
  </>
)
