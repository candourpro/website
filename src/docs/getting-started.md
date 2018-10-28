import Candour from './Candour'

# Install

To install the library:
```
yarn add candour
# or
npm install candour --save
```

## Setup

To setup <Candour />, just wrap your app with `CandourProvider`.
Here's a simple example with
[Create React App](https://facebook.github.io/create-react-app/):

```jsx
import React from 'react'
import { render } from 'react-dom'
import { CandourProvider, Text } from 'candour'

const candourTheme = {
  text: {
    base: {
      color: 'gray',
    },
  },
}

render(
  <CandourProvider value={candourTheme}>
    Your app here

    <Text>
      Candour elements will work anywhere inside your app
    </Text>
  </CandourProvider>,
  document.getElementById('root')
)
```
