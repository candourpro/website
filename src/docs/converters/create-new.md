# Create a new converter

When you pass `converters` to `CandourProvider`, they will be evaluated
sequentially.

The first converter that returns `true` from it's `match` function will return
the `value` to the style prop.

```jsx sandbox
import React from 'react'
import { render } from 'react-dom'
import { CandourProvider, Text } from 'candour'
import fluidSteps from 'candour-fluid-steps'
import colors from 'candour-colors'

render(
  <CandourProvider
    converters={[fluidSteps(), colors({ raddish: '#D41E5C' })]}
  >
    Your app here

    <Text fontSize={2}>
      Size style values will be converted with fluid steps converter
    </Text>

    <Text colorRaddish>
      Color style values will be converted with colors converter
    </Text>
  </CandourProvider>,
  document.getElementById('root')
)
```

## Structure

This is the gist of the `colors` converter:
```
import _ from 'lodash'

export default (colors) => ({
  match: (theme, value, key) => (
    colors && value && key.match(/color/i) && _.has(colors, value)
  ),
  value: (theme, value) => colors[value],
})
```

The arguments that are passed to `match` and `value` functions:

| Argument                     | Description
| ---                          | ---
| All `CandourProvider` props  | This usually includes `theme` and other props passed to `CandourProvider`
| `value`                      | The value of the style prop as it's passed initially (`raddish`, `1`, etc.)
| `key`                        | The key of the style prop (`border`, `color`, etc.)

### Match function

If `match` function returns `true`, the `value` function will be returned from
the converter and used as the value of the style prop.

### Value function

Returns the converted value to be used as the final prop value.
