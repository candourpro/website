import Candour from '../Candour'

# Borders

Borders converter helps you define app-wide borders styles.

## Usage

```jsx
import { render } from 'react-dom'
import { CandourProvider, Heading, borders } from 'candour'

render(
  <CandourProvider
    converters={[borders]}
    borders={{ dark: '5px solid #000' }}
  >
    <Heading borderBottomDark>
      With dark border
    </Heading>
  </CandourProvider>
)
```

## Supported props

```
border
borderTop
borderRight
borderBottom
borderLeft
```
