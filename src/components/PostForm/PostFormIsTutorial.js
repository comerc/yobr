import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from 'material-ui/Checkbox'
import { handleCheck, pureComponent } from 'utils'

const PostFormIsTutorial = ({ isTutorial, input }) => (
  <Checkbox
    id="PostFormIsTutorial"
    label="Tutorial"
    checked={isTutorial}
    onCheck={handleCheck('isTutorial', input)}
  />
)

PostFormIsTutorial.propTypes = {
  isTutorial: PropTypes.bool,
  input: PropTypes.func,
}

export default pureComponent(PostFormIsTutorial)
