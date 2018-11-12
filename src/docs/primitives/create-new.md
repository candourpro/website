import Candour from '../Candour'

# Create a new primitive

Built-in primitives can handle most of the needs, but sometimes its
useful to create a new primitive. It is advised when you start to copy the
same kind of [style props](/docs/style-props/usage) over and over again and
want to share a style.

```jsx sandbox
import { render } from 'react-dom'
import { CandourProvider, Container } from 'candour'

const BlueBox = (props) => (
  <Container primitiveType='blueBox' {...props} />
)

const theme = {
  blueBox: {
    base: {
      color: 'white',
      backgroundColor: '#055CFF',
      padding: '20px',
    },
  },
}

render(
  <CandourProvider theme={theme}>
    <BlueBox>
      A blue box
    </BlueBox>
  </CandourProvider>
)
```

## Setup

Use `Container` primitive and set the `primitiveType` key to a new key (by
default the key on `Container` is `container`).

```jsx
import { Container } from 'candour'

const BlueBox = (props) => (
  <Container primitiveType='blueBox' {...props} />
)
```

## Theming

Base style of `BlueBox` is defined in theme at `blueBox` key (or whatever
is set as `primitiveType`). You can also
define styles of `BlueBox` [levels](/docs/theme/levels) and
additional `BlueBox`-specific [modifiers](/docs/theme/modifiers).


```js
{
  blueBox: {
    1: {
      fontSize: 3,
    },
    5: {
      fontSize: 2,
    },
    grey: {
      color: 'grey',
    },
  },
}
```
