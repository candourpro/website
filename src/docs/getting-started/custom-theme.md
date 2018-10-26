# Setup custom theme

For the theming to work, you need to set up a `CandourProvider`. Here’s an example for Create React App:

```jsx
import React from 'react'
import { render } from 'react-dom'
import { CandourProvider } from 'candour'

const candourTheme = {
  heading: {
    3: {
      padding: 2,
    },
  },
}

render(
  <CandourProvider value={candourTheme}>
    <Heading level={3}>
      I'm a themed heading
    </Heading>
  </CandourProvider>,
  document.getElementById('root')
)
```
