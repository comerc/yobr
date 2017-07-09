// @flow
import React from 'react'
import TextField from 'material-ui/TextField'
import { onChange, pure } from 'utils'

type Props = {
  sourceAuthor: string,
  isTranslation: boolean,
  input: Function,
  error?: string,
}

const SourceAuthor = ({ sourceAuthor, isTranslation, input, error }: Props) =>
  <TextField
    id="SourceAuthor"
    floatingLabelText="Автор оригинального текста"
    hintText="Например, Tim O'Reily"
    value={sourceAuthor}
    errorText={error}
    onChange={onChange('sourceAuthor', input, !!error)}
    fullWidth
    disabled={!isTranslation}
  />

// SourceAuthor.propTypes = {
//   sourceAuthor: PropTypes.string,
//   isTranslation: PropTypes.bool,
//   input: PropTypes.func,
//   error: PropTypes.string,
// }

export default pure(SourceAuthor)
