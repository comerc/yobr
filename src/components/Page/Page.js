// @flow
import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Footer from './Footer'
import NotFound from './NotFound'

class Page extends React.Component {
  _isMounted: boolean

  componentDidMount() {
    this._isMounted = true
    const { onMounted } = this.props
    setImmediate(() =>
      onMounted()
    )
  }

  render() {
    if (!this._isMounted) {
      return null
    }
    const { isNotFound, isLoading, children } = this.props
    if (isNotFound) {
      return <NotFound />
    }
    return (
      <div className="main">
        <Header />
        <div className="children">
          {isLoading
            ?
              <div>Загрузка...</div>
            :
              children
          }
        </div>
        <Footer />
        <style jsx global>{`
          html, body, #root {
            height: 100%;
          }
          body {
            margin: 0;
            padding: 0;
            font-family: 'Roboto', sans-serif;
            overflow: hidden;
          }
          #root {
            // margin: 48px 0;
            // padding: 0 72px;
            overflow: auto;
          }
          a {
            text-decoration: none;
          }
          h2 {
            font-weight: normal;
            padding-bottom: .3em;
            margin-top: 0;
            margin-bottom: 16px;
            font-size: 1.5em;
            line-height: 1.334;
            border-bottom: 1px solid #eee;
          }
        `}</style>
        <style jsx>{`
          .main {
            display: flex;
            flex-direction: column;
            min-height: 100%;
          }
          .children {
            flex: 1;
          }
        `}</style>
      </div>
    )
  }
}

// Page.propTypes = {
//   children: PropTypes.any.isRequired,
//   isLoading: PropTypes.bool.isRequired,
//   onMounted: PropTypes.func.isRequired,
// }

const mapStateToProps = (state, props) => ({
  isLoading: state.app.isLoading
})

export { NotFound }
export default connect(mapStateToProps)(Page)
