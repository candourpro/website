# Heading

`Heading` is a built-in component that builds on a `Container`
(inherits all the CSS properties) but also is defined in a theme
(at `heading` key).

It has special `level` prop that defines which HTML component and style to use.

 ```jsx
import { render } from 'react-dom'
import { Heading } from 'candour'

render(
  <Heading level={2}>
    I'm an H2 heading
  </Heading>
)
```

## Props

`Heading` has some useful Candour-related props. The rest of the props are
passed to the underlying `component` (most likely `h1`, `h2`, `h3`, etc).

| Prop          | Default       | Description |
| ------------- | ------------- | ----- |
| `level`       | `6`           | Values between `1-6` |
| `component`   | `h${level}`   | Any HTML or React component (`div`, `p`, `Link`, etc) |
| *camelCased CSS key*   |    | Example: `fontWeight={700}` |
| *camelCased CSS key and camelCased value combination*   |    | Example: `<Container justifyContentSpaceBetween />` |
