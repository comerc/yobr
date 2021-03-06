import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from 'components/App'
import registerServiceWorker from './registerServiceWorker'
import 'index.css'
import 'resources/main.less'

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)
registerServiceWorker()
