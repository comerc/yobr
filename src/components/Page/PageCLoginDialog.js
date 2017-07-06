// @flow
import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { connect } from 'react-redux'
import { setLoginDialog, login } from 'ducks/app'

const mapStateToProps = (state, props) => ({
  isLoginDialog: state.app.isLoginDialog,
})

const mapDispatchToProps = { setLoginDialog, login }

@connect(mapStateToProps, mapDispatchToProps)
class PageCLoginDialog extends React.Component {
  props: {
    isLoginDialog: boolean,
    setLoginDialog: Function,
    login: Function,
  }

  static defaultProps = {
    isLoginDialog: false,
    setLoginDialog: () => {},
    login: () => {},
  }

  closeLoginDialog = () => {
    this.props.setLoginDialog(false)
  }

  handleLogin = () => {
    this.props.login()
    this.closeLoginDialog()
  }

  render() {
    const { isLoginDialog } = this.props
    const actions = [
      <FlatButton label="Отмена" primary onTouchTap={this.closeLoginDialog} />,
      <FlatButton label="Войти" primary keyboardFocused onTouchTap={this.handleLogin} />,
    ]
    return (
      <Dialog
        title="Представьтесь, пожалуйста"
        actions={actions}
        modal={false}
        open={isLoginDialog}
        onRequestClose={this.closeLoginDialog}
      >
        {/* <input type='email' /> */}
        Пока просто нажмите [ВОЙТИ].
      </Dialog>
    )
  }
}

export default PageCLoginDialog
