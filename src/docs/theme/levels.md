import Candour from '../Candour'

# Levels

Levels are what you are used to with HTML headings (`h1`, `h2`, etc.). Every
component type from <Candour /> can have a level and different levels can be
themed with different styles.

Here's an example of two different levels of `<Heading />` component usage:

```jsx
import React from 'react'
import { render } from 'react-dom'
import { CandourProvider, Heading } from 'candour'

const candourTheme = {
  heading: {
    base: {
      color: 'blue',
    },
    3: {
      fontSize: 1,
    },
  },
}

render(
  <CandourProvider value={candourTheme}>
    <Heading>
      Themed heading
    </Heading>
    <Heading level={3}>
      Level 3 themed heading
    </Heading>
  </CandourProvider>,
  document.getElementById('root')
)
```

> **Note**

> In case of specifying levels with `Heading`, underlying HTML component is
chosen as `h1`...`h6` as `h${level}`. In case of other component types
(`Text`, `Button`, etc.) - underlying HTML component is not affected.
