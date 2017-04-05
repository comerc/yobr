import React, { PropTypes } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { handleSelectFieldChange, pureComponent } from 'app/utils'

const PostFormFlow = ({ flowId, sourceFlows, input, error }) => (
  <SelectField
    id="PostFormFlow"
    floatingLabelText="Поток"
    hintText="Выберите поток"
    value={flowId}
    errorText={error}
    onChange={handleSelectFieldChange('flow', input, sourceFlows, !!error)}
  >
    {sourceFlows.map(({ id, name }) =>
      <MenuItem key={id} value={id} primaryText={name} />
    )}
  </SelectField>
)

PostFormFlow.propTypes = {
  flowId: PropTypes.string,
  sourceFlows: PropTypes.arrayOf(PropTypes.shape({

  })),
  input: PropTypes.func,
  error: PropTypes.string,
}

export default pureComponent(PostFormFlow)
