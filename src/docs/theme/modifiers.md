# Modifiers

Modifiers are additional styles you can define on your theme to modify
a component if a certain prop is present (`true`).

You can define modifiers per primitive type theme or across all primitives.

```jsx sandbox
import React from 'react'
import { render } from 'react-dom'
import { CandourProvider, Heading } from 'candour'

const candourTheme = {
  heading: {
    gray: {
      color: 'gray',
    },
  },
  bold: {
    fontWeight: 700,
  },
}

render(
  <CandourProvider theme={candourTheme}>
    <Heading>
      Regular heading
    </Heading>
    <Heading gray bold>
      Modified heading
    </Heading>
  </CandourProvider>,
  document.getElementById('root')
)
```
