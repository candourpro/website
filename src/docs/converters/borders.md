import Candour from '../Candour'

# Borders

Borders converter helps you define app-wide borders styles.

## Usage

```jsx sandbox
import { render } from 'react-dom'
import { CandourProvider, Heading } from 'candour'
import borders from 'candour-borders'

render(
  <CandourProvider
    converters={[borders({ dark: '5px solid #000' })]}
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
