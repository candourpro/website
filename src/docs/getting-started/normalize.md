import Candour from '../Candour'

# Normalize

Normalizing your CSS is *optional* but highly useful if you want to have
a consistent experience over many browsers.

[candour-normalize](https://github.com/candourpro/normalize) is a dead-simple
normalization library that removes most of the weird browser-specific CSS.

> **Note**

> Alternatively, you can continue using [Normalize.css](https://necolas.github.io/normalize.css/)
or other normalization techniques.

## Install

To install [candour-normalize](https://github.com/candourpro/normalize):
```
yarn add candour-normalize
# or
npm install candour-normalize --save
```

## Usage

```jsx sandbox
import React from 'react'
import { render } from 'react-dom'
import { CandourProvider } from 'candour'
import CandourNormalize from 'candour-normalize'

const candourTheme = {
  text: {
    base: {
      color: 'gray',
    },
  },
}

render(
  <CandourProvider theme={candourTheme}>
    <CandourNormalize />

    <Text>
      Normalized text
    </Text>
  </CandourProvider>,
  document.getElementById('root')
)
```

## What's in it

[candour-normalize](https://github.com/candourpro/normalize) is really simple.
The gist is that it uses `Radium` to inject some styles over the `*` CSS:

```
{
  '*': {
    margin: 0,
    padding: 0,
    fontFamily: 'inherit',
    fontWeight: 'normal',
    textDecoration: 'none',
    color: 'inherit',
    backgroundColor: 'transparent',
    border: 0,
    outline: 0,
    textTransform: 'none',
    WebkitAppearance: 'inherit',
    boxSizing: 'border-box',
    whiteSpace: 'normal',
    // Safari 12 calc + vw resize fix
    minHeight: '0vw',
  }
}
```
