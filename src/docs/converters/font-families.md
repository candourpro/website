import Candour from '../Candour'

# Font families

Font families converter helps you define app-wide font family styles.

## Usage

```jsx sandbox
import { render } from 'react-dom'
import { CandourProvider, Heading } from 'candour'
import fontFamilies from 'candour-font-families'

render(
  <CandourProvider
    converters={[fontFamilies({ mono: 'monospace' })]}
  >
    <Heading fontFamilyMono>
      Monospace font
    </Heading>
  </CandourProvider>
)
```

## Supported props

```
fontFamily
```
