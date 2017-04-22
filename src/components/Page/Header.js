import React from 'react'
import AppBar from 'material-ui/AppBar'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { withState } from 'utils'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import Toggle from 'material-ui/Toggle'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
// import NavigationClose from 'material-ui/svg-icons/navigation/close'

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

const Header = withState(({ state, setState }) => {
  const handleChange = (event, logged) => {
    setState({ logged })
  }
  return (
    <div className="main">
      <Toggle
        label="Logged"
        defaultToggled={true}
        onToggle={handleChange}
        labelPosition="right"
        style={{ margin: 20 }}
      />
      <AppBar
        title="YOBR"
        showMenuIconButton={false}
        iconElementRight={state.logged ? <Logged /> : <Login />}
      />
      <style jsx>{`
      .main {
      }
    `}</style>
    </div>
  )
}, { logged: true })

// const mapStateToProps = (state, props) => ({
//   // logged: state.currentUser.id,
// })

// const mapDispatchToProps = (dispatch) => {
//   // return bindActionCreators({}, dispatch)
// }

export { Header } // тупой компонент для тестирования
// export default connect(mapStateToProps, mapDispatchToProps)(Header)
export default Header
