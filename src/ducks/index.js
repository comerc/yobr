import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import app from './app'
import flows from './flows'
import hubs from './hubs'
import postForm from './postForm'
import posts from './posts'
import currentUser from './currentUser'

export default combineReducers({
  routing: routerReducer,
  app,
  flows,
  hubs,
  postForm,
  posts,
  currentUser,
})
