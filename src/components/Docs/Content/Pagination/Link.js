import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Text,
  Link,
} from 'candour'

export default ({
  label,
  item: {
    name,
    slug,
  },
  ...rest,
}) => (
  <Link component={RouterLink} to={`/docs/${slug}`} {...rest}>
    <Text>
      {label}
    </Text>
    <Text level={4} fontWeight600>
      {label === 'Previous' && '←'} {name} {label === 'Next' && '→'}
    </Text>
  </Link>
)
