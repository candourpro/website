import Candour from './Candour'

# Breakpoints

> **Note**

> This feature uses [React hooks](https://reactjs.org/docs/hooks-intro.html)
and is only available if you use `react@16.7.0-alpha.0` or above.

Breakpoints are essential for a fully responsive design. <Candour /> provides
`useBreakpoints` utility based on React hooks.

## Usage

```jsx sandbox
import React from 'react'
import { render } from 'react-dom'
import { CandourProvider, Text, useBreakpoints } from 'candour'

const App = () => {
  const { small } = useBreakpoints()

  return (
    <>
      <Text>
        This will be shown on any screens
      </Text>
      {small && <Text>This will be shown only on small screens</Text>}
    </>
  )
}

render(
  <CandourProvider breakpoints={{ small: '768px' }}>
    <App />
  </CandourProvider>,
  document.getElementById('root')
)
```

## Setup

To setup breakpoints, use the `breakpoints` key on the `CandourProvider`.
```jsx
render(
  <CandourProvider breakpoints={{ small: '768px', medium: '1080px' }}>
    <App />
  </CandourProvider>,
  document.getElementById('root')
)
```

Each key in the `breakpoints` object will be returned from `useBreakpoints`
hook as `true` if current viewport width is smaller than its value:

```js
const breakpoints = useBreakpoints()
console.log(breakpoints)
// if the viewport is 900px
// { small: false, medium: true }
```
