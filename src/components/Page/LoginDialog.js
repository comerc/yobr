import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from 'ducks/app'

const LoginDialog = ({ isLoginDialog, setLoginDialog }) => {
  const handleClose = () => {
    setLoginDialog(false)
  }

  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={handleClose}
    />,
    <FlatButton
      label="Submit"
      primary={true}
      keyboardFocused={true}
      onTouchTap={handleClose}
    />,
  ]

  return (
    <div>
      <Dialog
        title="Dialog With Actions"
        actions={actions}
        modal={false}
        open={isLoginDialog}
        onRequestClose={handleClose}
      >
        The actions in this window were passed in as an array of React objects.
      </Dialog>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  isLoginDialog: state.app.isLoginDialog,
})

const mapDispatchToProps = (dispatch) => {
  const { setLoginDialog } = actions
  return bindActionCreators({ setLoginDialog }, dispatch)
}

export { LoginDialog } // тупой компонент для тестирования
export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog)
