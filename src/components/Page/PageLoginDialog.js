import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from 'ducks/app'

const PageLoginDialog = ({ isLoginDialog, setLoginDialog, login }) => {
  const closeLoginDialog = () => {
    setLoginDialog(false)
  }

  const handleLogin = () => {
    login()
    closeLoginDialog()
  }

  const actions = [
    <FlatButton
      label="Отмена"
      primary={true}
      onTouchTap={closeLoginDialog}
    />,
    <FlatButton
      label="Войти"
      primary={true}
      keyboardFocused={true}
      onTouchTap={handleLogin}
    />,
  ]

  return (
    <Dialog
      title="Представьтесь, пожалуйста"
      actions={actions}
      modal={false}
      open={isLoginDialog}
      onRequestClose={closeLoginDialog}
    >
      {/*<input type="email"/>*/}
      Пока просто нажмите [ВОЙТИ].
    </Dialog>
  )
}

const mapStateToProps = (state, props) => ({
  isLoginDialog: state.app.isLoginDialog,
})

const mapDispatchToProps = (dispatch) => {
  const { setLoginDialog, login } = actions
  return bindActionCreators({ setLoginDialog, login }, dispatch)
}

export { PageLoginDialog } // тупой компонент для тестирования
export default connect(mapStateToProps, mapDispatchToProps)(PageLoginDialog)
