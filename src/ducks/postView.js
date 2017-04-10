import { createAction, createReducer } from 'redux-act'
import { actions as appActions } from './app'
import { actions as postsActions } from './posts'
import axios from 'axios'

const NS = '@@post-view/'

const reset = createAction(`${NS}RESET`)
const set = createAction(`${NS}SET`)

const read = id => (dispatch, getState) => {
  dispatch(appActions.setLoading(true))
  dispatch(reset())
  const state = getState()
  const posts = state.posts
  const post = posts.find(element => element.id === id)
  if (post) {
    dispatch(set(post))
    dispatch(appActions.setLoading(false))
    return
  }
  let isTimeout = false
  let isFetch = false
  setTimeout(() => {
    isTimeout = true
    if (isFetch) {
      dispatch(appActions.setLoading(false))
    }
  }, 500) // демонстрировать isLoading не менее 500 мс
  axios(`/post/${id}`)
    .then(response => {
      return response.data
    })
    .then(post => {
      dispatch(postsActions.setPost(post))
      dispatch(set(post))
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

const initialState = {}

const reducer = createReducer({
  [reset]: () => ({ ...initialState }),
  [set]: (state, post) => ({ ...state, ...post }),
}, initialState)

export const actions = { read }
export default reducer
