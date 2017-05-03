import React from 'react'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from 'ducks/app'

const originStyle = { horizontal: 'right', vertical: 'top' }

const PageHeaderMenu = ({ logout, ...props }) => {
  const handleItemTouchTap = (event, child) => {
    const cases = {
      'profile': () => {},
      'settings': () => {},
      'logout': () => logout()
    }
    cases[child.props.id]()
  }
  return (
    <IconMenu
      {...props}
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={originStyle}
      anchorOrigin={originStyle}
      onItemTouchTap={handleItemTouchTap}
    >
      <MenuItem primaryText='Профиль' id='profile' />
      <MenuItem primaryText='Настройки' id='settings' />
      <MenuItem primaryText='Выйти' id='logout' />
    </IconMenu>
  )
}

PageHeaderMenu.muiName = 'IconMenu'

const mapDispatchToProps = (dispatch) => {
  const { logout } = actions
  return bindActionCreators({ logout }, dispatch)
}

export { PageHeaderMenu } // тупой компонент для тестирования
export default connect(null, mapDispatchToProps)(PageHeaderMenu)
