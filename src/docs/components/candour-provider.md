import Candour from '../Candour'

# CandourProvider

`CandourProvider` is used to set up <Candour />.

```jsx
import React from 'react'
import { render } from 'react-dom'
import { CandourProvider, Text } from 'candour'

const theme = {
  text: {
    base: {
      color: 'gray',
    },
  },
}

const sizeConverter = (n) => `${n}px`

render(
  <CandourProvider theme={theme} sizeConverter={sizeConverter}>
    Your app here

    <Text fontSize={16}>
      Candour elements will work anywhere inside your app
    </Text>
  </CandourProvider>,
  document.getElementById('root')
)
```

## Props

`CandourProvider` has some useful <Candour />-related props.

| Prop            | Default                                | Description                                                                                                      |
| -------------   | --------                               | -----                                                                                                            |
| `theme`         | Default <Candour /> theme              | Set up the theme                                                                                                 |
| `sizeConverter` | `fluidStep` from `@candour/fluid-step` | Function that converts plain numbers (`padding={2}`, etc.) to CSS values. By default it uses fluidity converter. |
