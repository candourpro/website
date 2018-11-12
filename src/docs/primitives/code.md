import Candour from '../Candour'

# Code

`Code` is a built-in primitive that builds on `Container`.

 ```jsx sandbox
import { render } from 'react-dom'
import { Code } from 'candour'

render(
  <Code>
    Some code
  </Code>
)
```

## Props

`Code` has some useful <Candour />-related props. The rest of the props are
passed to the underlying `component`.

| Prop                                                                              | Default     | Description                                           |
| -------------                                                                     | ----------- | -----                                                 |
| `level`                                                                           | `6`         | Values between `1-6`                                  |
| `component`                                                                       | `div`       | Any HTML or React component (`div`, `p`, `Link`, etc) |
| [*camelCased CSS key*](/docs/style-props/list)                                    |             | Example: `fontWeight={700}`                           |
| [*camelCased CSS key*](/docs/style-props/list) *and camelCased value combination* |             | Example: `<Code alignTextCenter />`                |

## Theming

Base style of `Code` is defined in theme at `code` key. You can also
define styles of `Code` [levels](/docs/theme/levels) and
additional `Code`-specific [modifiers](/docs/theme/modifiers).


```js
{
  code: {
    base: {
      backgroundColor: 'blue',
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
