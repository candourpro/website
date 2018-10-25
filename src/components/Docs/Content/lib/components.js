import React from 'react'
import {
  Heading,
  Text,
} from 'candour'

const heading = level => props => <Heading level={level} {...props} />

export default {
  h1: heading(1),
  h2: heading(2),
  h3: heading(3),
  h4: heading(4),
  h5: heading(5),
  h6: heading(6),
  text: Text,
}
