// @flow
import React from 'react'
import TextField from 'material-ui/TextField'
import { handleChange, pureComponent } from 'utils'

const PostFormContent = ({ content, input, error }: Props) => (
  <TextField
    id="PostFormContent"
    floatingLabelText="Текст"
    hintText="Для переноса строк в тексте нажмите [ENTER]"
    value={content}
    fullWidth={true}
    errorText={error}
    onChange={handleChange('content', input, !!error)}
    multiLine={true}
    hintStyle={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
  />
)

// PostFormContent.propTypes = {
//   content: PropTypes.string,
//   input: PropTypes.func,
//   error: PropTypes.string,
// }

type Props = {
  content: string,
  input: Function,
  error?: string,
}

export default pureComponent(PostFormContent)
