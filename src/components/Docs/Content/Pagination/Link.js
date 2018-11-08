import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Text,
} from 'candour'

export default ({
  label,
  item: {
    name,
    slug,
  },
  ...rest,
}) => (
  <Container component={Link} to={`/docs/${slug}`} {...rest}>
    <Text>
      {label}
    </Text>
    <Text level={4} fontWeight600>
      {label === 'Previous' && '←'} {name} {label === 'Next' && '→'}
    </Text>
  </Container>
)
