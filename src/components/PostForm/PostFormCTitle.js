// @flow
import React from 'react'
import TextField from 'material-ui/TextField'
import { onChange, pure, inputHintStyle } from 'utils'
import { POST_FORM_TITLE_MAX } from 'consts'

type Props = {
  title: string,
  input: Function,
  error?: string,
}

const PostFormCTitle = ({ title, input, error }: Props) =>
  <TextField
    floatingLabelText={
      title.length === 0 ? 'Заголовок' : `Заголовок (ещё ${POST_FORM_TITLE_MAX - title.length})`
    }
    id="PostFormCTitle"
    hintText="Заголовок должен быть наполнен смыслом"
    value={title}
    fullWidth
    errorText={error}
    onChange={onChange('title', input, !!error)}
    maxLength={POST_FORM_TITLE_MAX}
    hintStyle={inputHintStyle}
  />

// PostFormCTitle.propTypes = {
//   title: PropTypes.string,
//   input: PropTypes.func,
//   error: PropTypes.string,
// }

export default pure(PostFormCTitle)
