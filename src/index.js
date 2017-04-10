import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createHistory from 'history/createBrowserHistory'
import logger from 'redux-logger'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FastClick from 'fastclick'
import injectTapEventPlugin from 'react-tap-event-plugin'
import 'es6-promise/auto'
import 'setimmediate'
import axios from 'axios'

import reducer from 'ducks'
import routes from 'routes'
import { actions as appActions } from 'ducks/app'

const history = createHistory()
const router = routerMiddleware(history)
const store = createStore(reducer, composeWithDevTools(applyMiddleware(router, thunk, logger)))

axios.defaults.baseURL = 'http://localhost:9000'

// Make taps on links and buttons work fast on mobiles
FastClick.attach(document.body)
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

history.listen((location, action) => {
  // console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
  // console.log(`The last navigation action was ${action}`)
  const state = store.getState()
  if (state.app.mainError) {
    store.dispatch(appActions.setMainError())
  }
})

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <ConnectedRouter history={history}>{routes}</ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
