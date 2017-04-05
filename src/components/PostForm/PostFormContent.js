import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import { handleChange, pureComponent } from 'app/utils'

const hintStyle = { whiteSpace: 'nowrap', textOverflow: 'ellipsis' }

const PostFormContent = ({ content, input, error }) => (
  <TextField
    id="PostFormContent"
    floatingLabelText="Текст"
    hintText="Для переноса строк в тексте нажмите [ENTER]"
    value={content}
    fullWidth={true}
    errorText={error}
    onChange={handleChange('content', input, !!error)}
    multiLine={true}
    hintStyle={hintStyle}
  />
)

PostFormContent.propTypes = {
  content: PropTypes.string,
  input: PropTypes.func,
  error: PropTypes.string,
}

export default pureComponent(PostFormContent)
