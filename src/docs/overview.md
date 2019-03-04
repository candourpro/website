import Candour from './Candour'

# Overview

 <Candour marginLeft={-.2} /> is a fully configurable inline style system
for React.

**Core features:**
- Nothing to learn [inline style API](/docs/style-props/usage)
- [Redefine](/docs/converters/overview) CSS values and
[modify](/docs/theme/modifiers) component styles
- Maintain a consistent component [theme](/docs/theme/base)

```jsx sandbox
import { render } from 'react-dom'
import { CandourProvider, Container } from 'candour'
import fluidSteps from 'candour-fluid-steps'
import colors from 'candour-colors'

render(
  <CandourProvider
    converters={[fluidSteps(), colors({ aqua: '#66fcd9' })]}
  >
    <Container backgroundColor='aqua' fontWeight700 padding={2}>
      Candour
    </Container>
  </CandourProvider>
)
```

## Why Candour?

React ecosystem is absolutely thriving. There are many great attempts at
**design systems**, but none are built on
[**inline CSS styles**](/docs/style-props/why-inline-styles) and are
easily **maintainable**.

The goal of <Candour /> is to enable building powerful design systems through
total configurability.
