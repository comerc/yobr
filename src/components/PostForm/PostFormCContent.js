// @flow
import React from 'react'
import TextField from 'material-ui/TextField'
import { onChange, pure, inputHintStyle } from 'utils'

type Props = {
  content: string,
  input: Function,
  error?: string,
}

const PostFormCContent = ({ content, input, error }: Props) =>
  <TextField
    id="PostFormCContent"
    floatingLabelText="Текст"
    hintText="Для переноса строк в тексте нажмите [ENTER]"
    value={content}
    fullWidth
    errorText={error}
    onChange={onChange('content', input, !!error)}
    multiLine
    hintStyle={inputHintStyle}
  />

// PostFormCContent.propTypes = {
//   content: PropTypes.string,
//   input: PropTypes.func,
//   error: PropTypes.string,
// }

export default pure(PostFormCContent)
