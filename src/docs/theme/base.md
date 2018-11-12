# Theme base

For best component reuse, its best to do most of styling
through a theme.

For the theming to work, you need to set up a `CandourProvider`.
Here's an example with Create React App:

```jsx sandbox
import React from 'react'
import { render } from 'react-dom'
import { CandourProvider, Heading } from 'candour'

const candourTheme = {
  heading: {
    base: {
      color: 'blue',
    },
  },
}

render(
  <CandourProvider theme={candourTheme}>
    <Heading>
      Themed heading
    </Heading>
  </CandourProvider>,
  document.getElementById('root')
)
```

`base`

Every primitive type (`Heading`, `Text`, etc.) inherit their `base`
style.
