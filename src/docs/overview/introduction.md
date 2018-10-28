import Candour from '../Candour'

# Introduction

 <Candour marginLeft={-.2} /> is a React design system that improves development
speed and maintainablility.

Main goals:
- Embrace [inline styles through modifiers](/docs/overview/inline-styles-and-modifiers)
- Introduce little or no new API to learn if possible
- Allow consistent and [fluid design rhythm](/docs/overview/fluid)
- Enable reusable design / theming
- Improve development speed

```jsx
import { render } from 'react-dom'
import { Container } from 'candour'

render(
  <Container backgroundColor='black' colorWhite padding={2}>
    Candour
  </Container>
)
```

## Why Candour?

React ecosystem is absolutely thriving with amazing libraries but I am
unsatisfied with the current state of **design systems**.
I've found that none of them embrace **inline CSS styles**,
**responsiveness** and **maintainable design** yet.

In that space, there's [Rebass](https://rebassjs.org) and
[Evergreen](https://evergreen.segment.com).
While I feel that they are great UI libraries - they are not neccessary
amazing design systems. With UI libraries there's usually component API
to learn and custom UI themes to like or not.

In comparison, the goal of <Candour /> is to enable full power of inline
styles and maintainable designs with no API to learn. Everything you already
know about CSS is embraced through <Candour />. It also builds on top of
[Radium](https://formidable.com/open-source/radium/), which is a workhorse
of many who use inline styles.

### Core concepts

 <Candour marginLeft={-.2} /> tries to introduce little-to-no API to learn.
That are introduced are simple and interconnected for the best learn/reward ratio.

- Theming
- Steps
- Modifiers
