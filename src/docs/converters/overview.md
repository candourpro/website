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

## Usage

You can use both shorthand `colorRaddish` and longhand `color='raddish'`
syntax with all converters. You can also use them in your [theme](/docs/theme/base).

### Style value naming

Redefined value names need to follow CSS style `kebab-case` format.

To define a multi-word color:
```
{ 'light-red': '#D45D8A' }
```

If you define it as `light-red`, you can still use it from the components
as `colorLightRed` or `color='light-red'`.

## List of available converters and their usage

Here's a list of currently supported style value converters:

| Converter                                      | Input                                                           | Output
| -------------                                  | --------                                                        | ---
| [fluidSteps](/docs/converters/fluid-steps)     | Values for size props specified without type (`2`, `3.5`, etc.) | Fluid CSS value based on step (`calc(21px + (6 * ((100vw - 320px) / 1280)))`).
| [colors](/docs/converters/colors)              | All values for color properties                                 | Picks by key from `colors` config.
| [borders](/docs/converters/borders)            | All values for border properties                                | Picks by key from `borders` config.
| [fontFamilies](/docs/converters/font-families) | All values for font family properties                           | Picks by key from `fontFamilies` config.
| [custom](/docs/converters/custom)              | All values of all properties                                    | Picks by key from `custom` config.

> **Note**

> You can also learn how to create a new converter [here](/converters/create-new).
