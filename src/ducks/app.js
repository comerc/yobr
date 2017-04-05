import { createAction, createReducer } from 'redux-act'

const NS = '@@app/'

export const actions = {
  setLoading: createAction(`${NS}SET_LOADING`),
  setMainError: createAction(`${NS}SET_MAIN_ERROR`),
}

const initialState = {
  isLoading: false,
  mainError: '',
}

const reducer = createReducer({
  [actions.setLoading]: (state, isLoading) =>
    ({ ...state, isLoading }),
  [actions.setMainError]: (state, mainError = '') =>
    ({ ...state, mainError })
}, initialState)

export default reducer
