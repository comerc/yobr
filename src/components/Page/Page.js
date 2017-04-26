// @flow
import React from 'react'
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars'
import PageLoginDialog from './PageLoginDialog'
import PageHeader from './PageHeader'
import PageFooter from './PageFooter'
import NotFound from './NotFound'

class Page extends React.Component {
  props: {
    onMounted?: Function,
    isNotFound?: boolean,
    isLoading?: boolean,
    children?: typeof React.Element,
  }
  _isMounted = false

  componentDidMount() {
    this._isMounted = true
    const { onMounted } = this.props
    if (onMounted !== void 0) {
      onMounted()
    }
  }

  render() {
    const { isNotFound, isLoading, children } = this.props
    if (this._isMounted && !isLoading && isNotFound) {
      return <NotFound />
    }
    return (
      <Scrollbars className="scrollbars" autoHide={true}>
        <div className="main">
          <PageLoginDialog />
          <PageHeader />
          <div className="children">
            {this._isMounted && !isLoading
              ?
                children
              :
                <div>Загрузка...</div>
            }
          </div>
          <PageFooter />
        </div>
        <style jsx global>{`
          html, body, #root {
            height: 100%;
          }
          body {
            margin: 0;
            padding: 0;
            font-family: 'Roboto', sans-serif;
          }
          a {
            text-decoration: none;
          }
          .scrollbars > div:not(:first-child) {
            z-index: 1200;
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
            margin: 40px 24px 0;
          }
        `}</style>
      </Scrollbars>
    )
  }
}

// Page.propTypes = {
//   children: PropTypes.any.isRequired,
//   isLoading: PropTypes.bool.isRequired,
//   onMounted: PropTypes.func.isRequired,
//   isNotFound: PropTypes.bool,
// }

const mapStateToProps = (state, props) => ({
  isLoading: state.app.isLoading
})

export { NotFound }
export default connect(mapStateToProps)(Page)
