import React from 'react'
import PropTypes from 'prop-types'
import AutoComplete from 'material-ui/AutoComplete'
import { pureComponent } from 'utils'
import { POST_FORM_HUBS_MAX } from 'consts'

const onNewRequest = (input, hubs, sourceHubs, isValidate) => (chosenRequest, index) => {
  if (index > -1) {
    const hub = sourceHubs[index]
    if (!hubs.find(element => element.id === hub.id)) {
      hubs = hubs.slice()
      hubs.push(hub)
      input({ key: 'hubs', value: hubs })
    }
    input({ key: 'searchHub', value: '', isValidate })
  }
}

const onUpdateInput = (input) => (searchText, dataSource, params) => {
  input({ key: 'searchHub', value: searchText })
}

const dataSourceConfig = {
  value: 'id',
  text: 'name',
}

const PostFormSearchHub = ({ searchHub, sourceHubs, hubs, input, error }) => (
  <AutoComplete
    id="PostFormHubs"
    floatingLabelText="Хабы"
    hintText={`Выберите от 1 до ${POST_FORM_HUBS_MAX} хабов`}
    filter={AutoComplete.fuzzyFilter}
    dataSource={sourceHubs}
    dataSourceConfig={dataSourceConfig}
    maxSearchResults={5}
    onNewRequest={onNewRequest(input, hubs, sourceHubs, !!error)}
    errorText={error}
    searchText={searchHub}
    fullWidth={true}
    openOnFocus={true}
    onUpdateInput={onUpdateInput(input)}
  />
)

PostFormSearchHub.propTypes = {
  searchHub: PropTypes.string,
  sourceHubs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  input: PropTypes.func,
  error: PropTypes.string,
}

export default pureComponent(PostFormSearchHub)
