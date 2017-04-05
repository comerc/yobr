import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import logger from 'redux-logger'
import createHistory from 'history/createBrowserHistory'

import reducer from 'ducks'
import routes from 'routes'

const history = createHistory()
const router = routerMiddleware(history)
const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, router)))

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>{routes}</ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
