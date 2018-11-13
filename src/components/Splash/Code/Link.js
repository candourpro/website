import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Link,
} from 'candour'

export default ({ example, exampleId, ...rest }) => (
  <Link
    level={8}
    colorBlue={example === exampleId}
    fontWeight700
    component={RouterLink}
    marginRight
    to={`/examples/${example}`}
    {...rest}
  />
)
