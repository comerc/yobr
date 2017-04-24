import { createAction, createReducer } from 'redux-act'

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

const initialState = {
  isLoading: false,
  mainError: '',
  isLoginDialog: false,
  isLogged: false,
}

const reducer = createReducer({
  [setLoading]: (state, isLoading) =>
    ({ ...state, isLoading }),
  [setMainError]: (state, mainError = '') =>
    ({ ...state, mainError }),
  [setLoginDialog]: (state, isLoginDialog) =>
    ({ ...state, isLoginDialog }),
  [setLogged]: (state, isLogged) =>
    ({ ...state, isLogged }),
}, initialState)

export const actions = { setLoading, setMainError, setLoginDialog, login, logout }
export default reducer
