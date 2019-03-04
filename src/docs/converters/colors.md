import Candour from '../Candour'

# Colors

Colors converter is helpful when you want to define app-wide color theme and
reuse them easily.

## Usage

```jsx sandbox
import { render } from 'react-dom'
import { CandourProvider, Heading } from 'candour'
import colors from 'candour-colors'

render(
  <CandourProvider
    converters={[colors({ raddish: '#D41E5C', red: '#F5BCCF' })]}
  >
    <Heading colorRaddish backgroundColor='red'>
      Raddish color
    </Heading>
  </CandourProvider>
)
```

> **Note**

> You can both create your own color names or redefine existing CSS colors
(like `red`, `blue`, etc.)

## Supported props

```
color
backgroundColor
borderColor
// ...and anything else that matches /color/i
```
