// @flow
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { all } from 'redux-saga/effects'
import app from './app'
import flows from './flows'
import hubs from './hubs'
import posts from './posts'
import postView from './postView'
import postForm, { subscribeToSagas } from './postForm'
import currentUser from './currentUser'

export function* rootSaga() {
  yield all([subscribeToSagas()])
}

export default combineReducers({
  routing: routerReducer,
  app,
  flows,
  hubs,
  posts,
  postView,
  postForm,
  currentUser,
})
