import React from 'react'
import ReactDOM from 'react-dom'
import { CandourProvider } from 'candour'
import CandourNormalize from '@candour/normalize'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import candourTheme from './theme/candour'

ReactDOM.render(
  <CandourProvider theme={candourTheme}>
    <CandourNormalize />
    <App />
  </CandourProvider>
, document.getElementById('root'))
registerServiceWorker()
