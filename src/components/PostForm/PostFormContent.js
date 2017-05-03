// @flow
import React from 'react'
import TextField from 'material-ui/TextField'
import { onChange, pureComponent, hintStyle } from 'utils'

type Props = {
  content: string,
  input: Function,
  error?: string,
}



const PostFormContent = ({ content, input, error }: Props) => (
  <TextField
    id='PostFormContent'
    floatingLabelText='Текст'
    hintText='Для переноса строк в тексте нажмите [ENTER]'
    value={content}
    fullWidth
    errorText={error}
    onChange={onChange('content', input, !!error)}
    multiLine
    hintStyle={hintStyle}
  />
)

// PostFormContent.propTypes = {
//   content: PropTypes.string,
//   input: PropTypes.func,
//   error: PropTypes.string,
// }

export default pureComponent(PostFormContent)
