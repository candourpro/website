import React from 'react'
import { Text, Container } from 'candour'
import { Link } from 'react-router-dom'

import Items from './Items'

const to = (slug, items) => (
  items.length ? `/docs/${items[0].slug}` : `/docs/${slug}`
)

export default ({
  slug,
  name,
  items = [],
  match: {
    params,
  },
  match,
  level,
}) => (
  <>
    <Text
      level={level}
      component={Link}
      to={to(slug, items)}
      colorBlue={params[0] === slug}
      displayBlock
      marginBottom
      fontWeight700
    >
      {name}
    </Text>

    {!!items.length && <Container paddingLeft>
      <Items level={level} items={items} match={match} />
    </Container>}
  </>
)
