import Candour from '../Candour'

# Usage of style props

 <Candour marginLeft={-.2} /> introduces a concept of component style props - a
way to style your components via `props` of a primitive component.

```jsx sandbox
render(
  <Container backgroundColor='black' color='white' padding='20px'>
    Container with style props
  </Container>
)
```

Style props just translate it to:
```js
<Container style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
  Container with style props
</Container>
```

Style props allow for easier style merging and passing down to child components,
since you can use the spread syntax `<Container {...props} />` instead of
merging the `style` prop.

There is nothing else to learn - [all CSS props](/docs/style-props/list)
are available to style through component `props`.
