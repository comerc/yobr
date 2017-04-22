import { createAction, createReducer } from 'redux-act'

const NS = '@@app/'

export const actions = {
  setLoading: createAction(`${NS}SET_LOADING`),
  setMainError: createAction(`${NS}SET_MAIN_ERROR`),
  setLoginDialog: createAction(`${NS}SET_LOGIN_DIALOG`),
  setLogged: createAction(`${NS}SET_LOGGED`),
}

const initialState = {
  isLoading: false,
  mainError: '',
  isLoginDialog: false,
  isLogged: false,
}

const reducer = createReducer({
  [actions.setLoading]: (state, isLoading) =>
    ({ ...state, isLoading }),
  [actions.setMainError]: (state, mainError = '') =>
    ({ ...state, mainError }),
  [actions.setLoginDialog]: (state, isLoginDialog) =>
    ({ ...state, isLoginDialog }),
  [actions.setLogged]: (state, isLogged) =>
    ({ ...state, isLogged }),
}, initialState)

export default reducer
