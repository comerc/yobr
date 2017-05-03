// @flow
import React from 'react'
import TextField from 'material-ui/TextField'
import { onChange, pure, inputHintStyle } from 'utils'

type Props = {
  sourceLink: string,
  isTranslation: boolean,
  input: Function,
  error?: string,
}

const PostFormSourceLink = ({ sourceLink, isTranslation, input, error }: Props) => (
  <TextField
    id='PostFormSourceLink'
    floatingLabelText='Ссылка на оригинал'
    hintText='Например, http://www.oreillynet.com/pub/a/oreilly/tim/news/2005/09/30/what-is-web-20.html?page=1'
    value={sourceLink}
    errorText={error}
    onChange={onChange('sourceLink', input, !!error)}
    fullWidth
    hintStyle={inputHintStyle}
    disabled={!isTranslation}
  />
)

// PostFormSourceLink.propTypes = {
//   sourceLink: PropTypes.string,
//   isTranslation: PropTypes.bool,
//   input: PropTypes.func,
//   error: PropTypes.string,
// }

export default pure(PostFormSourceLink)
