import React from 'react'
import ReactDOM from 'react-dom'
import { CandourProvider, Heading, Text } from 'candour'
import { MDXProvider } from '@mdx-js/tag'
import './theme/index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import candourTheme from './theme/candour'

const components = {
  wrapper: Text,
  h1: Heading,
  p: Text,
}

ReactDOM.render(
  <CandourProvider value={candourTheme}>
    <MDXProvider components={components}>
      <App />
    </MDXProvider>
  </CandourProvider>
, document.getElementById('root'))
registerServiceWorker()
