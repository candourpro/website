# Heading

`Heading` is a special component that builds on a `Container` (inherits all the CSS properties) but also is defined in a theme (at `theme.heading`).

It has special `level` prop that defines which HTML component and style to use.

 ```jsx
import { render } from 'react-dom'
import { Heading } from 'candour'

render(
  <Heading level={3}>
    I'm an H3 heading
  </Heading>
)
```
