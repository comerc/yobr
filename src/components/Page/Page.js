// @flow
import React from 'react'
import { connect } from 'react-redux'
import PageLayout from './PageLayout'
import PageNotFound from './PageNotFound'

class Page extends React.Component {
  props: {
    onMounted?: Function,
    isNotFound?: boolean,
    isLoading: boolean,
    children?: typeof React.Element,
  }
  _isMounted = false

  componentDidMount() {
    this._isMounted = true
    const { onMounted } = this.props
    if (onMounted !== void 0) {
      setTimeout(() => onMounted())
    }
  }

  render() {
    const { onMounted, isNotFound, isLoading, children } = this.props
    if ((onMounted === void 0 || (this._isMounted && !isLoading)) && isNotFound) {
      return <PageNotFound />
    }
    return (
      <div className="page">
        {onMounted === void 0 || (this._isMounted && !isLoading)
          ? children
          : <div>Загрузка...</div>}
        <style jsx>{`
          .page {
            flex: 1;
            margin: 40px 24px 0;
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
//   isNotFound: PropTypes.bool,
// }

const mapStateToProps = (state, props) => ({
  isLoading: state.app.isLoading,
})

export { PageLayout }
export default connect(mapStateToProps)(Page)
