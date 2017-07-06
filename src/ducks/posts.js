import { createAction, createReducer } from 'redux-act'
import * as app from './app'

const NS = '@@posts/'

const set = createAction(`${NS}SET`)
const setPost = createAction(`${NS}SET_POST`)

const read = () => dispatch => {
  dispatch(app.setLoading(true))
  dispatch(app.appLoad('/posts/')).then(data => {
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

export { read, setPost }
export default reducer
