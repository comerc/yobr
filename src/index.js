import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createHistory from 'history/createBrowserHistory'
import logger from 'redux-logger'

import reducer from 'ducks'
import routes from 'routes'

const history = createHistory()
const router = routerMiddleware(history)
const store = createStore(reducer, composeWithDevTools(applyMiddleware(router, thunk, logger)))

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>{routes}</ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
