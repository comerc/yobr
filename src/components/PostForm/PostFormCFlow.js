// @flow
import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { onSelectFieldChange, pure } from 'utils'

type Props = {
  flowId?: string,
  sourceFlows: Array<{
    id: string,
    name: string,
  }>,
  input: Function,
  error?: string,
}

const PostFormCFlow = ({ flowId, sourceFlows, input, error }: Props) =>
  <SelectField
    id="PostFormCFlow"
    floatingLabelText="Поток"
    hintText="Выберите поток"
    value={flowId}
    errorText={error}
    onChange={onSelectFieldChange('flow', input, sourceFlows, !!error)}
  >
    {sourceFlows.map(({ id, name }) => <MenuItem key={id} value={id} primaryText={name} />)}
  </SelectField>

// PostFormCFlow.propTypes = {
//   flowId: PropTypes.string,
//   sourceFlows: PropTypes.arrayOf(PropTypes.shape({
//
//   })),
//   input: PropTypes.func,
//   error: PropTypes.string,
// }

export default pure(PostFormCFlow)
