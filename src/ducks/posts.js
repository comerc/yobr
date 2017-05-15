import { createAction, createReducer } from 'redux-act'
import { appLoad, actions as appActions } from './app'

const NS = '@@posts/'

const set = createAction(`${NS}SET`)
const setPost = createAction(`${NS}SET_POST`)

const read = () => dispatch => {
  dispatch(appActions.setLoading(true))
  appLoad(dispatch, '/posts/', data => {
    dispatch(set(data))
  })
}

const initialState = []

const reducer = createReducer(
  {
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
  },
  initialState,
)

export const actions = { read, setPost }
export default reducer
