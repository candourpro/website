import React from 'react'
import ReactDOM from 'react-dom'
import { CandourProvider } from 'candour'
import CandourNormalize from '@candour/normalize'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import candourTheme from './theme/candour'
import candourConverters from './theme/candourConverters'
import colors from './theme/colors'
import borders from './theme/borders'

ReactDOM.render(
  <CandourProvider
    theme={candourTheme}
    converters={candourConverters}
    colors={colors}
    borders={borders}
  >
    <CandourNormalize />
    <App />
  </CandourProvider>
, document.getElementById('root'))
registerServiceWorker()
