// @flow
import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import { connect } from 'react-redux'
import { setLoginDialog } from 'ducks/app'

const mapDispatchToProps = { setLoginDialog }

@connect(null, mapDispatchToProps)
class PageHeaderButtons extends React.Component {
  static muiName = 'FlatButton'

  openLoginDialog = () => {
    const { setLoginDialog } = this.props
    setLoginDialog(true)
  }

  render() {
    const { setLoginDialog, ...props } = this.props
    return (
      <div>
        <FlatButton {...props} onTouchTap={this.openLoginDialog} label="Войти" />
      </div>
    )
  }
}

export default PageHeaderButtons
