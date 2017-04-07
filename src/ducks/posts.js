import { createAction, createReducer } from 'redux-act'
import 'isomorphic-fetch'
import { actions as appActions } from './app'

const NS = '@@posts/'

const set = createAction(`${NS}SET`)

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
  fetch('http://localhost:9000/api/posts')
    .then(response => {
      return response.json()
    })
    .then(posts => {
      isFetch = true
      if (isTimeout) {
        dispatch(appActions.setLoading(false))
      }
      dispatch(set(posts))
    })
    .catch(error => {
      isFetch = true
      if (isTimeout) {
        dispatch(appActions.setLoading(false))
      }
      dispatch(appActions.setMainError(error.toString()))
    })
}

// // TODO перенести в postForm > save
// const update = (post) => (dispatch, getState) => {
//   // const posts = require('data/posts').default
//   // if (posts) {
//   //   dispatch(set(posts))
//   // }
//   return fetch('/api/posts', {
//     credentials: 'same-origin',
//     method: 'POST',
//     headers: {
//       'Accept': 'text/plain',
//       // 'X-Accept-API-Version': '12345',
//       'Content-Type': 'application/json',
//       // 'x-csrf-jwt': token // TODO добавить защиту csrf
//     },
//     body: JSON.stringify(post)
//   })
//   .then(response => {
//     if (response.status >= HTTP_BAD_REQUEST) {
//       throw new Error('Bad response from server')
//     }
//     return response.text()
//   })
//   .then(id => {
//     console.log('response', id)
//   })
//   .catch(err => {
//     throw new Error('Error Updating Storage', err)
//   })
// }

const initialState = []

const reducer = createReducer({
  [set]: (state, posts) => posts.slice(),
}, initialState)

export const actions = { read }
export default reducer
