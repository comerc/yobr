// @flow
import React from 'react'
import TextField from 'material-ui/TextField'
import { handleChange, pureComponent } from 'utils'

const PostFormSourceLink = ({ sourceLink, isTranslation, input, error }: Props) => (
  <TextField
    id="PostFormSourceLink"
    floatingLabelText="Ссылка на оригинал"
    hintText="Например, http://www.oreillynet.com/pub/a/oreilly/tim/news/2005/09/30/what-is-web-20.html?page=1"
    value={sourceLink}
    errorText={error}
    onChange={handleChange('sourceLink', input, !!error)}
    fullWidth={true}
    hintStyle={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
    disabled={!isTranslation}
  />
)

// PostFormSourceLink.propTypes = {
//   sourceLink: PropTypes.string,
//   isTranslation: PropTypes.bool,
//   input: PropTypes.func,
//   error: PropTypes.string,
// }

type Props = {
  sourceLink: string,
  isTranslation: boolean,
  input: Function,
  error?: string,
}

export default pureComponent(PostFormSourceLink)
