import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import { handleChange, pureComponent } from 'utils'

const hintStyle = { whiteSpace: 'nowrap', textOverflow: 'ellipsis' }

const PostFormSourceLink = ({ sourceLink, isTranslation, input, error }) => (
  <TextField
    id="PostFormSourceLink"
    floatingLabelText="Ссылка на оригинал"
    hintText="Например, http://www.oreillynet.com/pub/a/oreilly/tim/news/2005/09/30/what-is-web-20.html?page=1"
    value={sourceLink}
    errorText={error}
    onChange={handleChange('sourceLink', input, !!error)}
    fullWidth={true}
    hintStyle={hintStyle}
    disabled={!isTranslation}
  />
)

PostFormSourceLink.propTypes = {
  sourceLink: PropTypes.string,
  isTranslation: PropTypes.bool,
  input: PropTypes.func,
  error: PropTypes.string,
}

export default pureComponent(PostFormSourceLink)
