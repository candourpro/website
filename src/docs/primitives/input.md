import Candour from '../Candour'

# Input

`Input` is a built-in primitive that builds on `Container`.

 ```jsx sandbox
import { render } from 'react-dom'
import { Input } from 'candour'

render(
  <Input placeholder='An input' />
)
```

## Props

`Input` has some useful <Candour />-related props. The rest of the props are
passed to the underlying `component` (most likely `input`).

| Prop                                                                              | Default     | Description                                           |
| -------------                                                                     | ----------- | -----                                                 |
| `level`                                                                           | `6`         | Values between `1-6`                                  |
| `component`                                                                       | `input`     | Any HTML or React component (`div`, `p`, `Link`, etc) |
| [*camelCased CSS key*](/docs/style-props/list)                                    |             | Example: `fontWeight={700}`                           |
| [*camelCased CSS key*](/docs/style-props/list) *and camelCased value combination* |             | Example: `<Input alignTextCenter />`                |

## Theming

Base style of `Input` is defined in theme at `input` key. You can also
define styles of `Input` [levels](/docs/theme/levels) and
additional `Input`-specific [modifiers](/docs/theme/modifiers).


```js
{
  input: {
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
