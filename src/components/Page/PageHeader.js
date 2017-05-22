import React from 'react'
import AppBar from 'material-ui/AppBar'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import PageHeaderMenu from './PageHeaderMenu'
import PageHeaderButtons from './PageHeaderButtons'

const styles = {
  title: {
    cursor: 'pointer',
  },
}

const Header = ({ isLogged, logout, setLoginDialog, dispatch }) => {
  const handleTouchTap = () => {
    dispatch(push(`/`))
  }

  return (
    <AppBar
      title={<span style={styles.title}>YOBR</span>}
      onTitleTouchTap={handleTouchTap}
      showMenuIconButton={false}
      iconElementRight={isLogged ? <PageHeaderMenu /> : <PageHeaderButtons />}
    />
  )
}

const mapStateToProps = (state, props) => ({
  isLogged: state.app.isLogged,
})

export { Header } // тупой компонент для тестирования
export default connect(mapStateToProps)(Header)
