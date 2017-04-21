import React from 'react'
import AppBar from 'material-ui/AppBar'

const Header = () => (
  <div className="main">
    <AppBar
      title="YOBR"
      // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
      // iconElementRight={this.state.logged ? <Logged /> : <Login />}
    />
    <style jsx>{`
      .main {
      }
    `}</style>
  </div>
)

export default Header
