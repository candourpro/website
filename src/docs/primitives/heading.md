import Candour from '../Candour'

# Heading

`Heading` is a built-in primitive that builds on `Container`.

It has special `level` prop that defines which HTML component and style to use.

 ```jsx sandbox
import { render } from 'react-dom'
import { Heading } from 'candour'

render(
  <Heading level={2}>
    An H2 heading
  </Heading>
)
```

## Props

`Heading` has some useful <Candour />-related props. The rest of the props are
passed to the underlying `component` (most likely `h1`, `h2`, `h3`, etc).

| Prop                                                                              | Default     | Description                                           |
| -------------                                                                     | ----------- | -----                                                 |
| `level`                                                                           | `1`         | Values between `1-6`                                  |
| `component`                                                                       | `h${level}` | Any HTML or React component (`div`, `p`, `Link`, etc) |
| [*camelCased CSS key*](/docs/style-props/list)                                    |             | Example: `fontWeight={700}`                           |
| [*camelCased CSS key*](/docs/style-props/list) *and camelCased value combination* |             | Example: `<Heading alignTextCenter />`                |

> **Note**

> `Heading` is the only primitive from <Candour />, that has `level` default
at `1`. This is because `h1` is more commonly used than `h6`.

## Theming

Base style of `Heading` is defined in theme at `heading` key. You can also
define styles of `Heading` [levels](/docs/theme/levels) and
additional `Heading`-specific [modifiers](/docs/theme/modifiers).


```js
{
  heading: {
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
