// import { normalize, schema } from 'normalizr'

const initialState = [
  { id: 'develop', name: 'Разработка' },
  { id: 'management', name: 'Управление' },
  { id: 'admin', name: 'Администрирование' }
]

// const normalizeOptions = (data) => {
//   const optionSchema = new schema.Entity('options')
//   const optionListSchema = [ optionSchema ]
//   return normalize(data, optionListSchema)
// }

// const initialState = {
//   'develop': 'Разработка',
//   'management': 'Управление',
//   'admin': 'Администрирование',
// }

export default (state = initialState, action) => {
  return state
}
