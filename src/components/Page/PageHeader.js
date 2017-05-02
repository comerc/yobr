import React from 'react'
import AppBar from 'material-ui/AppBar'
import { connect } from 'react-redux'
import PageHeaderMenu from './PageHeaderMenu'
import PageHeaderButtons from './PageHeaderButtons'

const Header = ({ isLogged, logout, setLoginDialog }) => (
  <AppBar
    title='YOBR'
    showMenuIconButton={false}
    iconElementRight={isLogged ? <PageHeaderMenu /> : <PageHeaderButtons />}
  />
)

const mapStateToProps = (state, props) => ({
  isLogged: state.app.isLogged
})

export { Header } // тупой компонент для тестирования
export default connect(mapStateToProps)(Header)
