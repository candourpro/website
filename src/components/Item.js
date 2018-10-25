import React from 'react'
import { Text, Container } from 'candour'
import { Link } from 'react-router-dom'

import Items from './Items'
import colors from '../theme/colors'

const to = (slug, items) => (
  items.length ? `/docs/${items[0].slug}` : `/docs/${slug}`
)

export default ({
  slug,
  currentSlug,
  name,
  items = [],
}) => (
  <>
    <Text
      component={Link}
      to={to(slug, items)}
      color={currentSlug === slug ? colors.blue : 'inherit'}
      displayBlock
      marginBottom={1.5}
      fontWeight700
    >
      {name}
    </Text>

    {!!items.length && <Container paddingLeft>
      <Items items={items} currentSlug={currentSlug} />
    </Container>}
  </>
)