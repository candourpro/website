import React from 'react'
import ReactDOM from 'react-dom'
import { CandourProvider } from 'candour'
import CandourNormalize from 'candour-normalize'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import candourTheme from './theme/candour'
import candourConverters from './theme/candourConverters'

ReactDOM.render(
  <CandourProvider
    theme={candourTheme}
    converters={candourConverters}
    breakpoints={{ small: '700px' }}
  >
    <CandourNormalize />
    <App />
  </CandourProvider>
, document.getElementById('root'))
registerServiceWorker()
