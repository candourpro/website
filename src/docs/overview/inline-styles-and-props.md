import Candour from '../Candour'

# Inline styles and props

 <Candour marginLeft={-.2} /> uses inline styles to manage component styling
internally.

You won't usually use the `style` prop directly since <Candour /> abstracts it
through its component modifiers and theming, but using inline styles provides
many advantages over using CSS class names.

If you're skeptical about this, you can check out
[CSS in JS](https://speakerdeck.com/vjeux/react-css-in-js) - a talk by
Christopher Chedeau ([@vjeux](https://twitter.com/Vjeux)).

Here's a short gist of advantages of inline styles:
- No global CSS namespace
- No dependencies (no CSS import handling)
- Dead code elimination
- Automatic minification (assuming you minify your JavaScript)
- Constant sharing (just using JavaScript variables)

 <Candour marginLeft={-.2} /> also builds upon
[Radium](https://formidable.com/open-source/radium/), which enables simple
browser state (`:hover`, `:focus`, `:active`) support, automatic vendor
prefixing and other inline style improvements.

## Candour style props

 <Candour marginLeft={-.2} /> introduces a concept of component style props - a
way to style your components via `props` of a component.

```jsx
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

There is nothing else to learn - all CSS props are available to style through
component `props`.

### Advanced style props usage

In addition to having the ability to specify `backgroudColor='black'`, you can
also use a shorter syntax of `backgroundColorBlack` that does the same exact
thing. The shorter syntax enables simpler usage of boolean variables, so
in case you want to have a style property depend on `isWeatherBad` you can
write it as:

```jsx
const isWeatherGood = true

render(
  <Container
    backgroundColorBlack
    backgroundColorGreen={isWeatherGood}
    colorWhite
    fontWeight700
    padding='20px'
  >
    Container is green when weather is good
  </Container>
)
```
