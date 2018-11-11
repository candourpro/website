# Shorthand of style props

In addition to having the ability to specify `backgroudColor='black'`, you can
also use a shorter syntax of `backgroundColorBlack` that does the same exact
thing. The shorter syntax enables simpler usage of boolean variables (or
truthy/falsy variables, to be exact).

In case you want to have a style property depend on `isWeatherGood` boolean,
you can write it as:

```jsx sandbox
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
