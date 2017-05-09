import { createAction, createReducer } from 'redux-act'
import axios from 'axios'

const NS = '@@app/'

const setLoading = createAction(`${NS}SET_LOADING`)
const setMainError = createAction(`${NS}SET_MAIN_ERROR`)
const setLoginDialog = createAction(`${NS}SET_LOGIN_DIALOG`)
const setLogged = createAction(`${NS}SET_LOGGED`)

const login = () => (dispatch, getState) => {
  const state = getState()
  if (!state.app.isLogged) {
    dispatch(setLogged(true))
  }
}

const logout = () => (dispatch, getState) => {
  const state = getState()
  if (state.app.isLogged) {
    dispatch(setLogged(false))
  }
}

export const load = (dispatch, config, cb) => {
  let isTimeout = false
  let isFetch = false
  setTimeout(() => {
    isTimeout = true
    if (!isFetch) {
      dispatch(setLoading(false))
    }
  }, 500) // демонстрировать state.app.isLoading не менее 500 мс
  axios(config)
    .then(response => {
      cb(response.data)
      isFetch = true
      if (!isTimeout) {
        dispatch(setLoading(false))
      }
    })
    .catch(error => {
      isFetch = true
      if (!isTimeout) {
        dispatch(setLoading(false))
      }
      dispatch(setMainError(error.toString()))
    })
}

const initialState = {
  isLoading: false,
  mainError: '',
  isLoginDialog: false,
  isLogged: true
}

const reducer = createReducer({
  [setLoading]: (state, isLoading) =>
    ({ ...state, isLoading }),
  [setMainError]: (state, mainError = '') =>
    ({ ...state, mainError }),
  [setLoginDialog]: (state, isLoginDialog) =>
    ({ ...state, isLoginDialog }),
  [setLogged]: (state, isLogged) =>
    ({ ...state, isLogged })
}, initialState)

export const actions = { setLoading, setMainError, setLoginDialog, login, logout }
export default reducer
