import Candour from './Candour'

# Overview

 <Candour marginLeft={-.2} /> enables building fully configurable React
design systems.

**Core features:**
- Maintain a consistent [theme](/docs/theme/base) and a components library
- Nothing to learn [style API](/docs/style-props/usage)
- Redefine CSS values through [converters](/docs/converters/overview)

```jsx sandbox
import { render } from 'react-dom'
import { CandourProvider, Container } from 'candour'
import fluidSteps from 'candour-fluid-steps'
import colors from 'candour-colors'

render(
  <CandourProvider
    converters={[fluidSteps, colors]}
    colors={{ blue: '#055CFF' }}
  >
    <Container backgroundColor='blue' colorWhite padding={2}>
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
total configurability. There is no API to learn - everything you already
know about CSS is embraced through <Candour />.
