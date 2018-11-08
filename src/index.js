import React from 'react'
import ReactDOM from 'react-dom'
import { CandourProvider, Normalize } from 'candour'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import candourTheme from './theme/candour'

ReactDOM.render(
  <CandourProvider theme={candourTheme}>
    <Normalize />
    <App />
  </CandourProvider>
, document.getElementById('root'))
registerServiceWorker()
