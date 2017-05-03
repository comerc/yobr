// @flow
import React from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import { pure } from 'utils'
import { POST_FORM_HUBS_MAX } from 'consts'
import memoize from 'fast-memoize'

type Props = {
  searchHub: string,
  sourceHubs: Array<{
    id: string,
    name: string,
  }>,
  hubs: Array<{
    id: string,
    name: string,
  }>,
  input: Function,
  error?: string,
}

const onNewRequest = memoize((input, hubs, sourceHubs, isValidate) => (chosenRequest, index) => {
  if (index > -1) {
    const hub = sourceHubs[index]
    if (!hubs.find(element => element.id === hub.id)) {
      hubs = hubs.slice()
      hubs.push(hub)
      input({ key: 'hubs', value: hubs })
    }
    input({ key: 'searchHub', value: '', isValidate })
  }
})

const onUpdateInput = memoize((input) => (searchText, dataSource, params) => {
  input({ key: 'searchHub', value: searchText })
})

const dataSourceConfig = { value: 'id', text: 'name' }

const PostFormSearchHub = ({ searchHub, sourceHubs, hubs, input, error }: Props) => (
  <AutoComplete
    id='PostFormHubs'
    floatingLabelText='Хабы'
    hintText={`Выберите от 1 до ${POST_FORM_HUBS_MAX} хабов`}
    filter={AutoComplete.fuzzyFilter}
    dataSource={sourceHubs}
    dataSourceConfig={dataSourceConfig}
    maxSearchResults={5}
    onNewRequest={onNewRequest(input, hubs, sourceHubs, !!error)}
    errorText={error}
    searchText={searchHub}
    fullWidth
    openOnFocus
    onUpdateInput={onUpdateInput(input)}
  />
)

// PostFormSearchHub.propTypes = {
//   searchHub: PropTypes.string,
//   sourceHubs: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//     })
//   ),
//   hubs: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//     })
//   ),
//   input: PropTypes.func,
//   error: PropTypes.string,
// }

export default pure(PostFormSearchHub)
