import Candour from '../Candour'

# Container

Container is the most basic primitive component of <Candour />.
Every other component builds on this `Container` and passes all the props to
this one.

To stay consistent, it is advisable to use it in places where you'd
otherwise use a `div` or `span` HTML tag.

```jsx
import { render } from 'react-dom'
import { Container } from 'candour'

render(
  <Container backgroundColorBlack colorWhite padding>
    A container
  </Container>
)
```

`Container` accepts all CSS properties as camelCased `props`
which then are merged into the `style` property.

From the design rhytmn perspective, it is advised to always use naked sizes -
`padding={2}` and so on instead of specifying `px` or `em`.
They are automatically converted to steps. By doing that,
you will ensure that your whole design will be with a common rhythm.

## Props

`Container` has some useful <Candour />-related props. The rest of the props are
passed to the underlying `component`.

| Prop                                                  | Default  | Description                                           |
| -------------                                         | -------- | -----                                                 |
| `level`                                               | `6`      | Values between `1-6`                                  |
| `component`                                           | `div`    | Any HTML or React component (`div`, `p`, `Link`, etc) |
| *camelCased CSS key*                                  |          | Example: `fontWeight={700}`                           |
| *camelCased CSS key and camelCased value combination* |          | Example: `<Container justifyContentSpaceBetween />`   |

> **Note**

> Since `Container` is a basic building block of <Candour />, `level` prop
will likely not be really useful here, but is provided just for the
completeness sake.

Here are all the available keys:
[CSS properties]
