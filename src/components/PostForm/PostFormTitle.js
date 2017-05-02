// @flow
import React from 'react'
import TextField from 'material-ui/TextField'
import { handleChange, pureComponent } from 'utils'
import { POST_FORM_TITLE_MAX } from 'consts'

type Props = {
  title: string,
  input: Function,
  error?: string,
}

const PostFormTitle = ({ title, input, error }: Props) => (
  <TextField
    floatingLabelText={
      title.length === 0
        ? 'Заголовок'
        : `Заголовок (ещё ${POST_FORM_TITLE_MAX - title.length})`
    }
    id='PostFormTitle'
    hintText='Заголовок должен быть наполнен смыслом'
    value={title}
    fullWidth
    errorText={error}
    onChange={handleChange('title', input, !!error)}
    maxLength={POST_FORM_TITLE_MAX}
    hintStyle={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
  />
)

// PostFormTitle.propTypes = {
//   title: PropTypes.string,
//   input: PropTypes.func,
//   error: PropTypes.string,
// }

export default pureComponent(PostFormTitle)
