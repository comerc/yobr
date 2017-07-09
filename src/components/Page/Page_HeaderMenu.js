// @flow
import React from 'react'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import { connect } from 'react-redux'
import { logout } from 'ducks/app'

const mapDispatchToProps = { logout }

@connect(null, mapDispatchToProps)
class HeaderMenu extends React.Component {
  static muiName = 'IconMenu'

  originStyle = { horizontal: 'right', vertical: 'top' }

  handleItemTouchTap = (event, child) => {
    const cases = {
      profile: () => alert('profile'),
      settings: () => alert('settings'),
      logout: () => this.props.logout(),
    }
    cases[child.props.id]()
  }

  render() {
    const { logout, ...props } = this.props
    return (
      <IconMenu
        {...props}
        iconButtonElement={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        targetOrigin={this.originStyle}
        anchorOrigin={this.originStyle}
        onItemTouchTap={this.handleItemTouchTap}
      >
        <MenuItem primaryText="Профиль" id="profile" />
        <MenuItem primaryText="Настройки" id="settings" />
        <MenuItem primaryText="Выйти" id="logout" />
      </IconMenu>
    )
  }
}

export default HeaderMenu
