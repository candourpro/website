import Candour from './Candour'

# FAQ

## How to use Candour with external libraries?

To use [React Router](https://reacttraining.com/react-router/web) with <Candour />
primitives, you can just pass the router `Link` through the
`component` prop:

```jsx sandbox
import { render } from 'react-dom'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from 'candour'

render(
  <Link
    component={RouterLink}
    to='/docs/faq'
    textDecorationUnderline
  >
    React router link with Candour style
  </Link>
)
```
