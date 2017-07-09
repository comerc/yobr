// @flow
import React from 'react'
import Toggle from 'material-ui/Toggle'
import { pure } from 'utils'
import memoize from 'fast-memoize'

const onToggle = memoize(input => (event, isInputChecked) => {
  input({ key: 'isTranslation', value: isInputChecked })
  if (!isInputChecked) {
    input({ key: 'sourceAuthor', value: '', isValidate: true })
    input({ key: 'sourceLink', value: '', isValidate: true })
  }
})

type Props = {
  isTranslation: boolean,
  input: Function,
}

const IsTranslation = ({ isTranslation, input }: Props) =>
  <div className="root">
    <Toggle
      id="IsTranslation"
      label="Перевод"
      labelPosition="right"
      toggled={isTranslation}
      onToggle={onToggle(input)}
    />
    <style jsx>{`
      .root {
        margin-top: 28px;
      }
    `}</style>
  </div>

// IsTranslation.propTypes = {
//   isTranslation: PropTypes.bool,
//   input: PropTypes.func,
// }

export default pure(IsTranslation)
