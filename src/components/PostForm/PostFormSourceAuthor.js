import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import { handleChange, pureComponent } from 'app/utils'

const PostFormSourceAuthor = ({ sourceAuthor, isTranslation, input, error }) => (
  <div className={s.root}>
    <div className={s.container}>
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
    </div>
  </div>
)

PostFormSourceAuthor.propTypes = {
  sourceAuthor: PropTypes.string,
  isTranslation: PropTypes.bool,
  input: PropTypes.func,
  error: PropTypes.string,
}

export default pureComponent(PostFormSourceAuthor)
