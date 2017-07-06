// @flow
import React from 'react'
import Checkbox from 'material-ui/Checkbox'
import { onCheck, pure } from 'utils'

type Props = {
  isTutorial: boolean,
  input: Function,
}

const PostFormCIsTutorial = ({ isTutorial, input }: Props) =>
  <Checkbox
    id="PostFormCIsTutorial"
    label="Tutorial"
    checked={isTutorial}
    onCheck={onCheck('isTutorial', input)}
  />

// PostFormCIsTutorial.propTypes = {
//   isTutorial: PropTypes.bool,
//   input: PropTypes.func,
// }

export default pure(PostFormCIsTutorial)
