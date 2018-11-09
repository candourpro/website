import Candour from '../Candour'

# Font families

Font families converter helps you define app-wide font family styles.

## Usage

```jsx
import { render } from 'react-dom'
import { CandourProvider, Heading, fontFamilies } from 'candour'

render(
  <CandourProvider
    converters={[fontFamilies]}
    fontFamilies={{ mono: 'monospace' }}
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
