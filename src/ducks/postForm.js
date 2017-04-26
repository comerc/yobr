import { createAction, createReducer } from 'redux-act'
import { push } from 'react-router-redux'
import { POST_FORM_TITLE_MAX, POST_FORM_HUBS_MAX } from 'consts'
import isEmpty from 'lodash/isEmpty'
import { actions as appActions } from './app'
import { actions as postsActions } from './posts'
import axios from 'axios'

const NS = '@@post-form/'

const reset = createAction(`${NS}RESET`)
const set = createAction(`${NS}SET`)
const setField = createAction(`${NS}SET_FIELD`)
const setErrors = createAction(`${NS}SET_ERRORS`)
const setError = createAction(`${NS}SET_ERROR`)
const setSubmitting = createAction(`${NS}SET_SUBMITTING`)

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

const read = id => (dispatch, getState) => {
  const clearPostForm = ({ published, author, viewsCount, favoritesCount, ...result }) => result
  dispatch(appActions.setLoading(true))
  dispatch(reset())
  if (!id) {
    dispatch(appActions.setLoading(false))
    return
  }
  const state = getState()
  const posts = state.posts
  const post = posts.find(element => element.id === id)
  if (post) {
    dispatch(set(clearPostForm(post)))
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
  }, 500) // демонстрировать state.app.isLoading не менее 500 мс
  axios(`/post/${id}`)
    .then(response => {
      const post = response.data
      dispatch(postsActions.setPost(post))
      dispatch(set(clearPostForm(post)))
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

const save = () => (dispatch, getState) => {
  const clearPost = ({ searchHub, errors, isSubmitting, ...result }) => result
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
  if (state.app.mainError) {
    dispatch(appActions.setMainError())
  }
  dispatch(setSubmitting(true))
  axios.post('/post/', clearPost(state.postForm))
    .then(response => {
      const post = response.data
      dispatch(postsActions.setPost(post))
      dispatch(setSubmitting(false))
      dispatch(push(`/post/${post.id}/`))
    })
    .catch(error => {
      dispatch(setSubmitting(false))
      dispatch(appActions.setMainError(error.toString()))
    })
}

const input = ({ key, value, isValidate = false }) => (dispatch, getState) => {
  if (isValidate) {
    const validate = validators[key]
    if (!!validate) {
      const state = getState()
      const oldError = state.postForm.errors[key] || ''
      const error = validate(value, state) || ''
      if (oldError !== error) {
        dispatch(setError({ key, error }))
      }
    }
  }
  if (value !== void 0) {
    dispatch(setField({ key, value }))
  }
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
  isDraft: false,
  // meta data
  searchHub: '',
  errors: {},
  isSubmitting: false,
}

const reducer = createReducer({
  [reset]: () => ({ ...initialState }),
  [set]: (state, post) => ({ ...state, ...post }),
  [setField]: (state, { key, value }) =>
    ({ ...state, [key]: value }),
  [setErrors]: (state, errors) => ({ ...state, errors: { ...errors } }),
  [setError]: (state, { key, error }) =>
    ({ ...state, errors: { ...state.errors, [key]: error } }),
  [setSubmitting]: (state, isSubmitting) =>
    ({ ...state, isSubmitting }),
}, initialState)

export const actions = { read, save, input }
export default reducer
