import { createAction, createReducer } from 'redux-act'
import { push } from 'react-router-redux'
import { POST_FORM_TITLE_MAX, POST_FORM_HUBS_MAX } from 'consts'
import isEmpty from 'lodash/isEmpty'
import { appLoad, actions as appActions } from './app'
import { actions as postsActions } from './posts'
import axios from 'axios'
import { select, put, call, takeEvery, all } from 'redux-saga/effects'

const NS = '@@post-form/'

const reset = createAction(`${NS}RESET`)
const set = createAction(`${NS}SET`)
const setField = createAction(`${NS}SET_FIELD`)
const setErrors = createAction(`${NS}SET_ERRORS`)
const setError = createAction(`${NS}SET_ERROR`)
const setSubmitting = createAction(`${NS}SET_SUBMITTING`)
const save = createAction(`${NS}SAVE`)

// Validate rules
const required = value => (value ? null : 'Required')
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : null
const range = (value, min, max) =>
  value && value.length >= min && value.length <= max
    ? null
    : `Must be from ${min} to ${max} elements`

const validators = {
  flow: value => required(value.id),
  title: value => required(value) || maxLength(POST_FORM_TITLE_MAX)(value),
  content: value => required(value),
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
  appLoad(dispatch, `/post/${id}`).then(data => {
    dispatch(postsActions.setPost(data))
    dispatch(set(clearPostForm(data)))
  })
}

function* saveSaga(action) {
  const clearPost = ({ searchHub, errors, isSubmitting, ...result }) => result
  const state = yield select()
  const errors = {}
  Object.keys(validators).forEach(key => {
    const validate = validators[key]
    const error = validate(state.postForm[key], state)
    if (error) {
      errors[key] = error
    }
  })
  if (!isEmpty(errors)) {
    yield put(setErrors(errors))
    yield put(appActions.setMainError('Исправьте ошибки в форме'))
    return
  }
  if (state.app.mainError) {
    yield put(appActions.setMainError())
  }
  yield put(setSubmitting(true))
  try {
    const response = yield call(axios.post, '/post/', clearPost(state.postForm))
    const post = response.data
    yield put(postsActions.setPost(post))
    yield put(push(`/post/${post.id}/`))
  } catch (error) {
    yield put(appActions.setMainError(error.toString()))
  } finally {
    yield put(setSubmitting(false))
  }
}

export function* subscribeToSagas() {
  yield all([takeEvery(save, saveSaga)])
}

// const save = () => (dispatch, getState) => {
//   const clearPost = ({ searchHub, errors, isSubmitting, ...result }) => result
//   const state = getState()
//   const errors = {}
//   Object.keys(validators).forEach(key => {
//     const validate = validators[key]
//     const error = validate(state.postForm[key], state)
//     if (error) {
//       errors[key] = error
//     }
//   })
//   if (!isEmpty(errors)) {
//     dispatch(setErrors(errors))
//     dispatch(appActions.setMainError('Исправьте ошибки в форме'))
//     return
//   }
//   if (state.app.mainError) {
//     dispatch(appActions.setMainError())
//   }
//   dispatch(setSubmitting(true))
//   axios
//     .post('/post/', clearPost(state.postForm))
//     .then(response => {
//       const post = response.data
//       dispatch(postsActions.setPost(post))
//       dispatch(push(`/post/${post.id}/`))
//     })
//     .catch(error => {
//       dispatch(appActions.setMainError(error.toString()))
//     })
//     .then(() => {
//       dispatch(setSubmitting(false))
//     })
// }

const input = ({ key, value, isValidate = false }) => (dispatch, getState) => {
  if (isValidate) {
    const validate = validators[key]
    if (validate) {
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
    name: '',
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

const reducer = createReducer(
  {
    [reset]: () => ({ ...initialState }),
    [set]: (state, post) => ({ ...state, ...post }),
    [setField]: (state, { key, value }) => ({ ...state, [key]: value }),
    [setErrors]: (state, errors) => ({ ...state, errors: { ...errors } }),
    [setError]: (state, { key, error }) => ({
      ...state,
      errors: { ...state.errors, [key]: error },
    }),
    [setSubmitting]: (state, isSubmitting) => ({ ...state, isSubmitting }),
  },
  initialState,
)

export const actions = { read, save, input }
export default reducer
