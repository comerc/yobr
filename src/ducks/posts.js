import { createAction, createReducer } from 'redux-act'
import 'isomorphic-fetch'
// import 'es6-promise'

const HTTP_BAD_REQUEST = 400
const HTTP_OK = 200

const initialState = []

const NS = '@@posts/'

const set = createAction(`${NS}SET`);

export const actions = {
  fetch: () => (dispatch, getState) => {
    return fetch('http://localhost:3000/api/posts')
      .then(response => {
        if (response.status >= HTTP_BAD_REQUEST) {
          throw new Error('Bad response from server')
        }
        return response.json()
      })
      .then(posts =>
        dispatch(set(posts))
      )
      .catch(error => {
        throw error
      })
  },
  // TODO перенести в postForm > save
  update: (post) => (dispatch, getState) => {
    // const posts = require('data/posts').default
    // if (posts) {
    //   dispatch(set(posts))
    // }
    return fetch('/api/posts', {
      credentials: 'same-origin',
      method: 'POST',
      headers: {
        'Accept': 'text/plain',
        // 'X-Accept-API-Version': '12345',
        'Content-Type': 'application/json',
        // 'x-csrf-jwt': token // TODO добавить защиту csrf
      },
      body: JSON.stringify(post)
    })
    .then(response => {
      if (response.status >= HTTP_BAD_REQUEST) {
        throw new Error('Bad response from server')
      }
      return response.text()
    })
    .then(id => {
      console.log('response', id)
    })
    .catch(err => {
      throw new Error('Error Updating Storage', err)
    })
  },
}

const reducer = createReducer({
  [set]: (state, posts) => posts.slice(),
}, initialState)

export default reducer
