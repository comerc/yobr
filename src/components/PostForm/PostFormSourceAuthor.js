import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import { handleChange, pureComponent } from 'utils'

const PostFormSourceAuthor = ({ sourceAuthor, isTranslation, input, error }) => (
  <TextField
    id="PostFormSourceAuthor"
    floatingLabelText="Автор оригинального текста"
    hintText="Например, Tim O'Reily"
    value={sourceAuthor}
    errorText={error}
    onChange={handleChange('sourceAuthor', input, !!error)}
    fullWidth={true}
    disabled={!isTranslation}
  />
)

PostFormSourceAuthor.propTypes = {
  sourceAuthor: PropTypes.string,
  isTranslation: PropTypes.bool,
  input: PropTypes.func,
  error: PropTypes.string,
}

export default pureComponent(PostFormSourceAuthor)
