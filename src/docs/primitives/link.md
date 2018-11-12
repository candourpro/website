import Candour from '../Candour'

# Link

`Link` is a primitive that builds on `Container`.

It has special `level` prop that defines which theme style to use.

 ```jsx sandbox
import { render } from 'react-dom'
import { Link } from 'candour'

render(
  <Link href='https://github.com/candourpro/candour' target='_blank'>
    A link primitive
  </Link>
)
```

## Props

`Link` has some useful <Candour />-related props. The rest of the props are
passed to the underlying `component` (most likely `a`).

| Prop                                                                              | Default     | Description                                           |
| -------------                                                                     | ----------- | -----                                                 |
| `level`                                                                           | `6`         | Values between `1-6`                                  |
| `component`                                                                       | `a`         | Any HTML or React component (`div`, `p`, `Link`, etc) |
| [*camelCased CSS key*](/docs/style-props/list)                                    |             | Example: `fontWeight={700}`                           |
| [*camelCased CSS key*](/docs/style-props/list) *and camelCased value combination* |             | Example: `<Link alignTextCenter />`                |

## Theming

Base style of `Link` is defined in theme at `link` key. You can also
define styles of `Link` [levels](/docs/theme/levels) and
additional `Link`-specific [modifiers](/docs/theme/modifiers).


```js
{
  link: {
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
