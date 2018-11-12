import Candour from '../Candour'

# Text

`Text` is a built-in primitive that builds on `Container`.

It has special `level` prop that defines which style to use.

 ```jsx sandbox
import { render } from 'react-dom'
import { Text } from 'candour'

render(
  <Text>
    A text primitive
  </Text>
)
```

## Props

`Text` has some useful <Candour />-related props. The rest of the props are
passed to the underlying `component` (most likely `div`).

| Prop                                                                              | Default     | Description                                           |
| -------------                                                                     | ----------- | -----                                                 |
| `level`                                                                           | `6`         | Values between `1-6`                                  |
| `component`                                                                       | `div`       | Any HTML or React component (`div`, `p`, `Link`, etc) |
| [*camelCased CSS key*](/docs/style-props/list)                                    |             | Example: `fontWeight={700}`                           |
| [*camelCased CSS key*](/docs/style-props/list) *and camelCased value combination* |             | Example: `<Text alignTextCenter />`                |

## Theming

Base style of `Text` is defined in theme at `text` key. You can also
define styles of `Text` [levels](/docs/theme/levels) and
additional `Text`-specific [modifiers](/docs/theme/modifiers).


```js
{
  text: {
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
