import React from 'react'
import _ from 'lodash'
import {
  Container,
  Code,
  Button,
} from 'candour'
import cssProperties from 'css-properties'
import camelCaseCss from 'camelcase-css'
import { Toggle } from 'libreact/lib/Toggle'

export default (props) => (
  <Toggle>
    {({ on, toggle }) => (
      <Container {...props}>
        <Code padding>
          {_.map(on ? cssProperties : _.take(cssProperties, 5), (prop) => (
            <Code key={prop} margin={0} padding={0}>
              {camelCaseCss(prop)}
            </Code>
          ))}
        </Code>

        <Container>
          {on || <Button level={8} onClick={toggle}>Show all ({cssProperties.length})</Button>}
        </Container>
      </Container>
    )}
  </Toggle>
)
