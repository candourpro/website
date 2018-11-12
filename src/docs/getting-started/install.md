import Candour from '../Candour'

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

```jsx sandbox
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
  <CandourProvider theme={candourTheme}>
    Your app here

    <Text>
      Candour primitives will use the theme anywhere in your app
    </Text>
  </CandourProvider>,
  document.getElementById('root')
)
```
