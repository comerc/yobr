import { SET, RESET } from '../types/user'

const initialState = {
  email: 'user@example.com',
}

export default function reducer(state: any = initialState, action: any) {
  switch (action.type) {
    case SET:
      return { ...state, ...action.payload }
    case RESET:
      return { ...initialState }
    default:
      return state
  }
}
