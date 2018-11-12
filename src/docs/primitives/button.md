import Candour from '../Candour'

# Button

`Button` is a built-in primitive that builds on `Container`.

 ```jsx sandbox
import { render } from 'react-dom'
import { Button } from 'candour'

render(
  <Button>
    A button
  </Button>
)
```

## Props

`Button` has some useful <Candour />-related props. The rest of the props are
passed to the underlying `component` (most likely `button`).

| Prop                                                                              | Default     | Description                                           |
| -------------                                                                     | ----------- | -----                                                 |
| `level`                                                                           | `6`         | Values between `1-6`                                  |
| `component`                                                                       | `button`    | Any HTML or React component (`div`, `p`, `Link`, etc) |
| [*camelCased CSS key*](/docs/style-props/list)                                    |             | Example: `fontWeight={700}`                           |
| [*camelCased CSS key*](/docs/style-props/list) *and camelCased value combination* |             | Example: `<Button alignTextCenter />`                |

## Theming

Base style of `Button` is defined in theme at `button` key. You can also
define styles of `Button` [levels](/docs/theme/levels) and
additional `Button`-specific [modifiers](/docs/theme/modifiers).


```js
{
  button: {
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
