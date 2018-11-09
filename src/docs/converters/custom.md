import Candour from '../Candour'

# Custom

Custom converter allows to define custom values that are not handled
by other converters. Usually its for one-off things and its not advised
to have a bunch of custom values.

## Usage

```jsx
import { render } from 'react-dom'
import { CandourProvider, Heading, custom } from 'candour'

render(
  <CandourProvider
    converters={[custom]}
    custom={{ 'extra-bold': 900 }}
  >
    <Heading fontWeightExtraBold>
      Extra bold font
    </Heading>
  </CandourProvider>
)
```

## Supported props

```
fontFamily
```