import { createAction, createReducer } from 'redux-act'
import { actions as appActions } from './app'
import axios from 'axios'

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
  }, 500) // демонстрировать state.app.isLoading не менее 500 мс
  axios('/posts/')
    .then(response => {
      const posts = response.data
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

export const actions = { read, setPost }
export default reducer
