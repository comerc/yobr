// @flow
import React from 'react'
import Checkbox from 'material-ui/Checkbox'
import { onCheck, pure } from 'utils'

type Props = {
  isTutorial: boolean,
  input: Function,
}

const IsTutorial = ({ isTutorial, input }: Props) =>
  <Checkbox
    id="IsTutorial"
    label="Tutorial"
    checked={isTutorial}
    onCheck={onCheck('isTutorial', input)}
  />

// IsTutorial.propTypes = {
//   isTutorial: PropTypes.bool,
//   input: PropTypes.func,
// }

export default pure(IsTutorial)
