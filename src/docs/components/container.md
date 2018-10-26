# Container

Container is a primitive component on which every other component builds upon. You can also use it in places where you’d otherwise use `div` or a `span` HTML tag.

```jsx
import { render } from 'react-dom'
import { Container } from 'candour'

render(
  <Container backgroundColor='black' color='white' padding>
    I'm a container
  </Container>
)
```

`Container` accepts all CSS properties as camelCased props which then are merged into the style property. Here are all the available keys:
[CSS properties]

All the properties that a related to sizes can be specified in steps:
```jsx
import { render } from 'react-dom'
import { Container } from 'candour'

render(
  <Container padding={2}>
    I am a container
  </Container>
)

// equivalent to:
render(
  <Container padding={step(2)}>
    I am a container
  </Container>
)
```

It is advisable from the rhythmical design perspective to always use sizes that are based on steps.
