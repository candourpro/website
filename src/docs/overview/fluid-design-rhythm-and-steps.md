import Candour from '../Candour'

# Fluid design rhytmn and steps

Fluid design allows you to specify less breakpoints and enable
a more adaptive user experience.

If you resize your browser window, you'll notice that the "**Fluid heading**"
below will change it's font size in proportion.

```jsx
import { render } from 'react-dom'
import { Heading } from 'candour'

render(
  <Heading>
    Fluid heading
  </Heading>
)
```

This is **fluid design** - it adapts to the viewport in a fluid manner. You can
think of it as a **next generation of responsive design**. Every `width`,
`height`, `padding`, `margin` and everything else that you usually specify in
`px` or `em` is now proportional to the viewport width (`vw`).

## Design rhythmn and a fluid step

Most of the sizes that are used in <Candour /> use `step`. Step is a building
block that every size of your design stems from (similar to grid).

`step` is a size that is calculated from the current viewport width
(`vw`). It changes proportionally to it in a similar way that `em` changes
proportionally to the `font-size`. It is fluid between `14px` and `16px`.

**Note**: to make designing for edge cases easier, `step` is capped with minimum and
maximum viewport widths. `step` will not resize further if the viewport gets
smaller than `320px` or bigger than `1600px`. So step size will always remain
between `14px` and `16px`.

### Usage

Every CSS-based size property of component's style is converted
to `step` by default. `fontSize` of "**Heading with font size**" below
gets converted from `1` to `step(1)` which in turn gets converted into
a viewport width-based `calc` css formula.

```jsx
import { render } from 'react-dom'
import { Heading } from 'candour'

render(
  <Heading fontSize={1}>
    Heading with font size
  </Heading>
)
```

### Step formula

Step is calculated through a CSS `calc` function:

```
calc(
  ${min}px +
  (${max} - ${min}) *
  ((100vw - ${minWidth}) / (${maxWidth} - ${minWidth}))
)
```

For step `1` count, this translates to:
```
calc(
  14px +
  (16px - 14px) *
  ((100vw - 320px) / (1600px - 320px))
)
```


When rendered in the DOM, `1` is converted to:
```
calc(14px + (2px * ((100vw - 320px) / 1280)))
```
