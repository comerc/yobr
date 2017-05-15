import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import { connect } from 'react-redux'
import { actions } from 'ducks/app'

const PageHeaderButtons = ({ setLoginDialog, ...props }) => {
  const openLoginDialog = () => {
    setLoginDialog(true)
  }
  return (
    <div>
      <FlatButton {...props} onTouchTap={openLoginDialog} label="Войти" />
    </div>
  )
}

PageHeaderButtons.muiName = 'FlatButton'

const { setLoginDialog } = actions
const mapDispatchToProps = { setLoginDialog }

export { PageHeaderButtons } // тупой компонент для тестирования
export default connect(null, mapDispatchToProps)(PageHeaderButtons)
