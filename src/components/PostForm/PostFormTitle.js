import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import { handleChange, pureComponent } from 'app/utils'
import { POST_FORM_TITLE_MAX } from 'app/consts'

const hintStyle = { whiteSpace: 'nowrap', textOverflow: 'ellipsis' }

const PostFormTitle = ({ title, input, error }) => (
  <TextField
    floatingLabelText={
      title.length === 0
      ?
      'Заголовок'
      :
      `Заголовок (ещё ${POST_FORM_TITLE_MAX - title.length})`
    }
    id="PostFormTitle"
    hintText="Заголовок должен быть наполнен смыслом"
    value={title}
    fullWidth={true}
    errorText={error}
    onChange={handleChange('title', input, !!error)}
    maxLength={POST_FORM_TITLE_MAX}
    hintStyle={hintStyle}
  />
)

PostFormTitle.propTypes = {
  title: PropTypes.string,
  input: PropTypes.func,
  error: PropTypes.string,
}

export default pureComponent(PostFormTitle)
