import React from 'react'
import ReactDOM from 'react-dom'
import { CandourProvider } from 'candour'

import './theme/index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import candourTheme from './theme/candour'

ReactDOM.render(
  <CandourProvider theme={candourTheme}>
    <App />
  </CandourProvider>
, document.getElementById('root'))
registerServiceWorker()
