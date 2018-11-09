import Candour from '../Candour'

# Colors

Colors converter is helpful when you want to define app-wide color theme and
reuse them easily.

## Setup

```jsx
import { render } from 'react-dom'
import { CandourProvider, Heading, colors } from 'candour'

render(
  <CandourProvider
    converters={[colors]}
    colors={{ raddish: '#D41E5C', red: '#F5BCCF' }}
  >
    <Heading colorRaddish backgroundColor='red'>
      Raddish color
    </Heading>
  </CandourProvider>
)
```

> **Note**

> You can both create your own color names or redefine existing colors (like `red`,
`blue`, etc).
