// @flow
import React from 'react'
import Toggle from 'material-ui/Toggle'
import { pureComponent } from 'utils'

const onToggle = (input) => (event, isInputChecked) => {
  input({ key: 'isTranslation', value: isInputChecked })
  if (!isInputChecked) {
    input({ key: 'sourceAuthor', value: '', isValidate: true })
    input({ key: 'sourceLink', value: '', isValidate: true })
  }
}

const PostFormIsTranslation = ({ isTranslation, input }: Props) => (
  <Toggle
    id="PostFormIsTranslation"
    label="Перевод"
    labelPosition="right"
    toggled={isTranslation}
    onToggle={onToggle(input)}
  />
)

// PostFormIsTranslation.propTypes = {
//   isTranslation: PropTypes.bool,
//   input: PropTypes.func,
// }

type Props = {
  isTranslation: boolean,
  input: Function,
}

export default pureComponent(PostFormIsTranslation)
