import { createAction, createReducer } from 'redux-act'
import 'isomorphic-fetch'
import { actions as appActions } from './app'

const NS = '@@posts/'

const set = createAction(`${NS}SET`)
const setPost = createAction(`${NS}SET_POST`)

const read = () => (dispatch) => {
  dispatch(appActions.setLoading(true))
  let isTimeout = false
  let isFetch = false
  setTimeout(() => {
    isTimeout = true
    if (isFetch) {
      dispatch(appActions.setLoading(false))
    }
  }, 500) // демонстрировать isLoading не менее 500 мс
  fetch('http://localhost:9000/api/posts/')
    .then(response => {
      return response.json()
    })
    .then(posts => {
      dispatch(set(posts))
      isFetch = true
      if (isTimeout) {
        dispatch(appActions.setLoading(false))
      }
    })
    .catch(error => {
      isFetch = true
      if (isTimeout) {
        dispatch(appActions.setLoading(false))
      }
      dispatch(appActions.setMainError(error.toString()))
    })
}

const readPost = id => (dispatch) => {
  dispatch(appActions.setLoading(true))
  let isTimeout = false
  let isFetch = false
  setTimeout(() => {
    isTimeout = true
    if (isFetch) {
      dispatch(appActions.setLoading(false))
    }
  }, 500) // демонстрировать isLoading не менее 500 мс
  fetch(`http://localhost:9000/api/post/${id}`)
    .then(response => {
      return response.json()
    })
    .then(post => {
      dispatch(setPost(post))
      isFetch = true
      if (isTimeout) {
        dispatch(appActions.setLoading(false))
      }
    })
    .catch(error => {
      isFetch = true
      if (isTimeout) {
        dispatch(appActions.setLoading(false))
      }
      dispatch(appActions.setMainError(error.toString()))
    })
}

const initialState = []

const reducer = createReducer({
  [set]: (state, posts) => posts.slice(),
  [setPost]: (state, post) => {
    const posts = state.slice()
    const index = posts.findIndex(element => element.id === post.id)
    if (index > -1) {
      posts[index] = post
    } else {
      posts.push(post)
    }
    return posts
  },
}, initialState)

export const actions = { read, readPost, setPost }
export default reducer
