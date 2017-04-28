// @flow
import React from 'react'
import { connect } from 'react-redux'
import PageLoginDialog from './PageLoginDialog'
import PageHeader from './PageHeader'
import PageFooter from './PageFooter'
import NotFound from './NotFound'

class Page extends React.Component {
  props: Props
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
      <div className="root">
        <PageLoginDialog />
        <PageHeader />
        <div className="main">
          {this._isMounted && !isLoading
            ?
              children
            :
              <div>Загрузка...</div>
          }
        </div>
        <PageFooter />
        <style jsx global>{`
          .u-fancy-scrollbar{-webkit-overflow-scrolling:touch}
          /* BUGFIX если включить, то перестает работать position: fixed */
          /* BUGFIX если включить, то неправильно позиционируется AutoComplete popup */
          /*.u-fancy-scrollbar{-webkit-transform:translate3d(0,0,0)}*/
          .u-fancy-scrollbar::-webkit-scrollbar{height:8px;width:8px}
          .u-fancy-scrollbar::-webkit-scrollbar-button:end:increment,
          .u-fancy-scrollbar::-webkit-scrollbar-button:start:decrement{background:0 0;display:none}
          .u-fancy-scrollbar::-webkit-scrollbar-track-piece{background:#D6DADC}
          /*.u-fancy-scrollbar::-webkit-scrollbar-track-piece:vertical:start{border-radius:0px 0px 0 0}*/
          /*.u-fancy-scrollbar::-webkit-scrollbar-track-piece:vertical:end{border-radius:0 0 0px 0px}*/
          /*.u-fancy-scrollbar::-webkit-scrollbar-track-piece:horizontal:start{border-radius:0px 0 0 0px}*/
          /*.u-fancy-scrollbar::-webkit-scrollbar-track-piece:horizontal:end{border-radius:0 0px 0px 0}*/
          .u-fancy-scrollbar::-webkit-scrollbar-thumb:horizontal,
          .u-fancy-scrollbar::-webkit-scrollbar-thumb:vertical{background:#C4C9CC;display:block;height:50px}
          /*.u-fancy-scrollbar::-webkit-scrollbar-thumb:vertical{box-shadow:inset 8px 0 #D6DADC}*/
          /*.u-fancy-scrollbar::-webkit-scrollbar-thumb:horizontal{box-shadow:inset 0 8px #D6DADC}*/
          /*.u-fancy-scrollbar::-webkit-scrollbar-thumb:horizontal:hover,*/
          /*.u-fancy-scrollbar::-webkit-scrollbar-thumb:vertical:hover{box-shadow:none}*/
          html {
            overflow: scroll;
          }
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
        `}</style>
        <style jsx>{`
          .root {
            display: flex;
            flex-direction: column;
            min-height: 100%;
          }
          .main {
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

type Props = {
  onMounted?: Function,
  isNotFound?: boolean,
  isLoading: boolean,
  children?: typeof React.Element,
}

const mapStateToProps = (state, props) => ({
  isLoading: state.app.isLoading
})

export { NotFound }
export default connect(mapStateToProps)(Page)
