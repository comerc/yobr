import { createAction, createReducer } from 'redux-act'
import * as appActions from './app'
import * as postsActions from './posts'

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
  dispatch(appActions.appLoad(`/post/${id}`)).then(data => {
    dispatch(postsActions.setPost(data))
    dispatch(set(data))
  })
}

const initialState = {}

const reducer = createReducer(
  {
    [reset]: () => ({ ...initialState }),
    [set]: (state, post) => ({ ...state, ...post }),
  },
  initialState,
)

export { read }
export default reducer
