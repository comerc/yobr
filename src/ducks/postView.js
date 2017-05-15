import { createAction, createReducer } from 'redux-act'
import { appLoad, actions as appActions } from './app'
import { actions as postsActions } from './posts'

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
  appLoad(dispatch, `/post/${id}`, data => {
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

export const actions = { read }
export default reducer
