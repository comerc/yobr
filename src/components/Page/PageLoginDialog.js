import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { connect } from 'react-redux'
import { actions } from 'ducks/app'

type Props = {
  isLoginDialog: boolean,
  setLoginDialog: Function,
  login: Function,
}

const PageLoginDialog = ({ isLoginDialog, setLoginDialog, login }: Props) => {
  const closeLoginDialog = () => {
    setLoginDialog(false)
  }

  const handleLogin = () => {
    login()
    closeLoginDialog()
  }

  const actions = [
    <FlatButton label="Отмена" primary onTouchTap={closeLoginDialog} />,
    <FlatButton label="Войти" primary keyboardFocused onTouchTap={handleLogin} />,
  ]

  return (
    <Dialog
      title="Представьтесь, пожалуйста"
      actions={actions}
      modal={false}
      open={isLoginDialog}
      onRequestClose={closeLoginDialog}
    >
      {/* <input type='email' /> */}
      Пока просто нажмите [ВОЙТИ].
    </Dialog>
  )
}

const mapStateToProps = (state, props) => ({
  isLoginDialog: state.app.isLoginDialog,
})

const { setLoginDialog, login } = actions
const mapDispatchToProps = { setLoginDialog, login }

export { PageLoginDialog } // тупой компонент для тестирования
export default connect(mapStateToProps, mapDispatchToProps)(PageLoginDialog)
