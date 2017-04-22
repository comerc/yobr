import React from 'react'
import AppBar from 'material-ui/AppBar'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import Toggle from 'material-ui/Toggle'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import LoginDialog from './LoginDialog'
import { actions } from 'ducks/app'

const Login = (props) => (
  <FlatButton {...props} label="Login" />
)

Login.muiName = 'FlatButton'

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
)

Logged.muiName = 'IconMenu'

const Header = ({ isLogged, setLogged, setLoginDialog }) => {
  const handleChange = (event, isInputChecked) => {
    setLogged(isInputChecked)
  }
  const openLoginDialog = () => {
    setLoginDialog(true)
  }
  return (
    <div className="main">
      <LoginDialog />
      <Toggle
        label="Logged"
        toggled={isLogged}
        onToggle={handleChange}
        labelPosition="right"
        style={{ margin: 20 }}
      />
      <AppBar
        title="YOBR"
        showMenuIconButton={false}
        iconElementRight={isLogged ? <Logged /> : <Login onTouchTap={openLoginDialog} />}
      />
      <style jsx>{`
        .main {
        }
      `}</style>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  isLogged: state.app.isLogged,
})

const mapDispatchToProps = (dispatch) => {
  const { setLogged, setLoginDialog } = actions
  return bindActionCreators({ setLogged, setLoginDialog }, dispatch)
}

export { Header } // тупой компонент для тестирования
export default connect(mapStateToProps, mapDispatchToProps)(Header)
