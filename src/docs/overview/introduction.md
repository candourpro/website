import Candour from '../Candour'

# Introduction

<Candour marginLeft={0} /> is a simple & maintainable inline-styles React
design system.

---

Main goals:
- Embrace inline styles
- Reusable design / theming
- Enables consistent and [fluid](/docs/overview/fluid) design rhythm
- Improve web app development speed and reuse

---

## Demo

```jsx
import { render } from 'react-dom'
import { Container } from 'candour'

render(
  <Container backgroundColor='black' colorWhite padding={2}>
    Candour
  </Container>
)
```

React ecosystem is absolutely thriving with amazing libraries but I am
unsatisfied with the current state of **design systems**.
I've found that none of them embraced **inline CSS styles**,
**responsiveness** and **maintainable design** fully.

There are frameworks that try to solve this already:
[Rebass](https://rebassjs.org) and [Evergreen](https://evergreen.segment.com).
While I feel that they are great UI libraries - they are not neccessary
amazing design systems. With UI libraries there's usually component API
to learn and custom UI themes to like or not.

In comparison, the goal of <Candour /> is to enable full power of inline
styles and maintainable designs with no API to learn. Everything you already
know about CSS is embraced through <Candour />. It also builds on top of
[Radium](https://formidable.com/open-source/radium/), which is a workhorse
of many who use inline styles.

## Demo
