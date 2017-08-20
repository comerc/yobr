import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userActions from '../actions/user'
import { Link } from 'react-router-dom'
// import './FirstPage.css'

class FirstPage extends Component<{ staticContext: any; user: any; userActions: any }> {
  render() {
    const b64 = this.props.staticContext ? 'wait for it' : window.btoa('wait for it')
    return (
      <div className="bold">
        <h2>First Page</h2>
        <p>{`Email: ${this.props.user.email}`}</p>
        <p>{`b64: ${b64}`}</p>
        <Link to={'/second'}>Second</Link>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  user: state.user,
})

const mapDispatchToProps = (dispatch: any): {} => bindActionCreators(userActions as {}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FirstPage)
