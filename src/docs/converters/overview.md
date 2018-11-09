# Overview of style value converters

Style value converters are useful if you want to define app-wide colors,
borders or any other custom style value that is likely to be reused.

## Setup

To set up style value converters, pass `converters` array to the `CandourProvider`.

```jsx
import React from 'react'
import { render } from 'react-dom'
import { CandourProvider, Text, fluidSteps, colors } from 'candour'

render(
  <CandourProvider
    converters={[fluidSteps, colors]}
    colors={{ raddish: '#D41E5C' }}
  >
    Your app here

    <Text fontSize={2}>
      Size style values will be converted with fluidSteps converter
    </Text>

    <Text colorRaddish>
      Color style values will be converted with colors converter
    </Text>
  </CandourProvider>,
  document.getElementById('root')
)
```

## List of available converters

Here's a list of currently supported style value converters:

| Converter                                      | Input                                                           | Output
| -------------                                  | --------                                                        | ---
| [fluidStep](/docs/converters/fluid-step)       | Values for size props specified without type (`2`, `3.5`, etc.) | Fluid CSS value based on step (`calc(21px + (6 * ((100vw - 320px) / 1280)))`).
| [colors](/docs/converters/colors)              | All values for color properties                                 | Picks by key from `colors` config.
| [borders](/docs/converters/borders)            | All values for border properties                                | Picks by key from `borders` config.
| [fontFamilies](/docs/converters/font-families) | All values for font family properties                           | Picks by key from `fontFamilies` config.
| [custom](/docs/converters/custom)              | All values of all properties                                    | Picks by key from `custom` config.

## Creating your own converter

Converters will be evaluated following their order in the array. The first
converter that returns `true` from it's `match` function will return the `value`
to the style prop.

### Structure

This is the gist of the `colors` converter:
```
import _ from 'lodash'

export default {
  match: ({ colors }, value, key) => (
    colors && value && key.match(/color/i) && _.has(colors, value)
  ),
  value: ({ colors }, value) => colors[value],
}
```

The arguments that are passed to `match` and `value` functions:

| Argument                     | Description
| ---                          | ---
| All `CandourProvider` props  | This usually includes `theme` and converter configs (`colors`, etc.)
| `value`                      | The value of the style prop as it's passed initially (`raddish`, `1`, etc.)
| `key`                        | The key of the style prop (`border`, `color`, etc.)

#### Match function

If `match` function returns `true`, the `value` function will be returned from
the converter and used as the value of the style prop.

#### Value function

Returns the converted value to be used as the final prop value.
