// @flow
import React from 'react'
import AppBar from 'material-ui/AppBar'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import HeaderMenu from './Page_HeaderMenu'
import HeaderButtons from './Page_HeaderButtons'

const mapStateToProps = (state, props) => ({
  isLogged: state.app.isLogged,
})

@connect(mapStateToProps)
class PageXHeader extends React.Component {
  styles = {
    title: {
      cursor: 'pointer',
    },
  }

  handleTouchTap = () => {
    this.props.dispatch(push(`/`))
  }

  render() {
    const { isLogged } = this.props
    return (
      <AppBar
        title={<span style={this.styles.title}>YOBR</span>}
        onTitleTouchTap={this.handleTouchTap}
        showMenuIconButton={false}
        iconElementRight={isLogged ? <HeaderMenu /> : <HeaderButtons />}
      />
    )
  }
}

export default PageXHeader
