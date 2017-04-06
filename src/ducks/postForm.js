import { createAction, createReducer } from 'redux-act'
import { POST_FORM_TITLE_MAX, POST_FORM_HUBS_MAX } from 'consts'
import { sleep } from 'utils'
import isEmpty from 'lodash/isEmpty'
import { actions as appActions } from './app'
import { actions as postsActions } from './posts'

const NS = '@@post-form/'

// Private Actions
const reset = createAction(`${NS}RESET`)
const set = createAction(`${NS}SET`)
const setField = createAction(`${NS}SET_FIELD`)
const setErrors = createAction(`${NS}SET_ERRORS`)
const setError = createAction(`${NS}SET_ERROR`)

// Validate rules
const required = value => value ? null : 'Required'
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : null
const range = (value, min, max) =>
  value && value.length >= min && value.length <= max ? null : `Must be from ${min} to ${max} elements`

const validators = {
  flow: (value) => required(value.id),
  title: (value) => required(value) || maxLength(POST_FORM_TITLE_MAX)(value),
  content: (value) => required(value),
  searchHub: (value, state) => {
    const hubs = state.postForm.hubs
    return required(!isEmpty(hubs)) || range(hubs, 1, POST_FORM_HUBS_MAX)
  },
  sourceAuthor: (value, state) => {
    return state.postForm.isTranslation && required(value)
  },
  sourceLink: (value, state) => {
    return state.postForm.isTranslation && required(value)
  },
}

export const actions = {
  read: id => (dispatch, getState) => {
    dispatch(reset())
    if (id === void 0) {
      return Promise.resolve()
    }
    // dispatch(appActions.setLoading(true))
    return sleep(100) // simulate server latency
      .then(
        () => {
          const state = getState()
          const posts = state.posts
          const post = posts.find(element => element.id === id)
          if (!post) {
            throw `Post ${id} not found.`
          }
          dispatch(set(post))
          // dispatch(appActions.setLoading(false))
        }
      )
      .catch(
        (error) => {
          // dispatch(appActions.setLoading(error.message))
          // dispatch(appActions.setMainError(error.message))
          throw error
        }
      )
  },
  save: () => (dispatch, getState) => {
    const state = getState()
    const errors = {}
    Object.keys(validators).forEach(key => {
      const validate = validators[key]
      const error = validate(state.postForm[key], state)
      if (!!error) {
        errors[key] = error
      }
    })
    if (!isEmpty(errors)) {
      dispatch(setErrors(errors))
      dispatch(appActions.setMainError('Исправьте ошибки в форме'))
      return
    }
    dispatch(appActions.setMainError())
    // Dispatch from anywhere like normal.
    // import { push } from 'react-router-redux'
    // store.dispatch(push('/foo'))

    // dispatch(appActions.setLoading(true))
    // sleep(1000) // simulate server latency
    //   .then(
    //     (id) => {
    //       const state = getState()
    //       const posts = state.posts
    //       const { searchHub, errors, ...post } = state.postForm
    //       if (post.id) {
    //         const index = posts.findIndex(element => element.id === post.id)
    //         posts[index] = post
    //       } else {
    //         post.id = +Math.random().toString().slice(2)
    //         post.published = (new Date()).toLocaleString()
    //         post.author = state.currentUser
    //         posts.push(post)
    //       }
    //       dispatch(postsActions.set(posts))
    //       dispatch(appActions.setLoading(false))
    //       if (process.browser) {
    //         Router.push(`/post/${post.id}`)
    //       }
    //     }
    //   )
    //   .catch(
    //     (error) => {
    //       dispatch(appActions.setLoading(false))
    //       dispatch(appActions.setMainError(error.toString()))
    //     }
    //   )
  },
  input: ({ key, value, isValidate = false }) => (dispatch, getState) => {
    if (isValidate) {
      const validate = validators[key]
      if (!!validate) {
        const state = getState()
        const error = validate(value, state)
        if (state.postForm[key] !== error) {
          dispatch(setError({ key, error }))
        }
      }
    }
    if (value !== void 0) {
      dispatch(setField({ key, value }))
    }
  },
}

const initialState = {
  id: null,
  flow: {
    id: null,
    name: ''
  },
  title: '',
  content: '',
  hubs: [],
  isTranslation: false,
  sourceAuthor: '',
  sourceLink: '',
  isTutorial: false,
  published: '',
  viewsCount: 0,
  favoritesCount: 0,
  author: {},
  isDraft: false,
  searchHub: '',
  errors: {},
}

const reducer = createReducer({
  [reset]: () => ({ ...initialState }),
  [set]: (state, post) => ({ ...state, ...post }),
  [setField]: (state, { key, value }) =>
    ({ ...state, [key]: value }),
  [setErrors]: (state, errors) => ({ ...state, errors: { ...errors } }),
  [setError]: (state, { key, error }) =>
    ({ ...state, errors: { ...state.errors, [key]: error } }),
}, initialState)

export default reducer
