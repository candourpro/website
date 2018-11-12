import Candour from '../Candour'

# Inline styles and props

 <Candour marginLeft={-.2} /> uses inline styles to manage component styling
internally.

You won't usually use the `style` prop directly since <Candour /> abstracts it
through its modifiers and theming, but using inline styles provides
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
