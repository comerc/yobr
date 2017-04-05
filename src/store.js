import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import withRedux from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import reducer from 'ducks'

const initStore = (initialState) => {
  if (process.browser) {
    const logger = createLogger()
    return createStore(reducer, initialState,
      composeWithDevTools(applyMiddleware(thunk, logger))
    )
  } else {
    return createStore(reducer, initialState, applyMiddleware(thunk))
  }
}

export const connectPage = (mapStateToProps, mapDispatchToProps, mergeProps, options) => (Page) =>
  withRedux(initStore, mapStateToProps, mapDispatchToProps, mergeProps, options)(Page)
