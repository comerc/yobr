import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import createHistory from 'history/createBrowserHistory'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FastClick from 'fastclick'
import injectTapEventPlugin from 'react-tap-event-plugin'
import 'es6-promise/auto'
import 'setimmediate'
import axios from 'axios'

import reducer, { rootSaga } from 'ducks'
// import { setMainError } from 'ducks/app'
import { PageLayout } from 'components/Page'

const history = createHistory()
const router = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()
const middlewares = [router, thunk, sagaMiddleware]
const isLogger = false
if (isLogger && process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)))
sagaMiddleware.run(rootSaga)

const isLocalServer = true
axios.defaults.baseURL = isLocalServer ? 'http://localhost:9000' : 'https://yobr-server.now.sh'

// Make taps on links and buttons work fast on mobiles
FastClick.attach(document.body)
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

// ???
// history.listen((location, action) => {
//   // console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
//   // console.log(`The last navigation action was ${action}`)
//   const state = store.getState()
//   if (state.app.mainError) {
//     store.dispatch(setMainError())
//   }
// })

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <PageLayout />
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root'),
)
