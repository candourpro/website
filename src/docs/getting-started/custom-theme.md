### Setup custom theme

For the theming to work, you need to set up a `CandourProvider`. Here’s an example for Create React App:

```javascript
import React from 'react'
import { render } from 'react-dom'
import { CandourProvider } from 'candour'

const candourTheme = {
  heading: {
    2: {
      padding: 3,
    },
  },
}

render(
  <CandourProvider value={candourTheme}>
    <Heading level={2}>
      This is your heading
    </Heading>
  </CandourProvider>,
  document.getElementById('root')
)
```
