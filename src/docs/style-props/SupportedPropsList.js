import React from 'react'
import _ from 'lodash'
import {
  Container,
  Code,
  Button,
} from 'candour'
import { all } from 'known-css-properties'
import camelCaseCss from 'camelcase-css'
import { Toggle } from 'libreact/lib/Toggle'

export default (props) => (
  <Toggle>
    {({ on, toggle }) => (
      <Container {...props}>
        <Code padding>
          {_.map(on ? all : _.take(all, 5), (prop) => (
            <Code key={prop} margin={0} padding={0}>
              {camelCaseCss(prop)}
            </Code>
          ))}
        </Code>

        <Container>
          {on || <Button onClick={toggle} marginTop>Show all ({all.length})</Button>}
        </Container>
      </Container>
    )}
  </Toggle>
)
