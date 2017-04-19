// @flow
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from 'ducks/postForm'
import Page, { Header, Footer } from 'components/Page'
import Helmet from 'react-helmet'
import PostForm from './PostForm'

type Props = {
  isLoading: boolean,
  read: Function,
}

class PostFormAddPage extends React.Component {
  props: Props
  _isMounted: boolean
  componentDidMount() {
    this._isMounted = true
    const { read } = this.props
    setImmediate(() =>
      read()
    )
  }
  render() {
    if (!this._isMounted) {
      return null
    }
    return (
      <Page>
        <Helmet
          title="Yobr"
        />
        <Header><h1>Хочу разместить публикацию</h1></Header>
        <PostForm />
        <Footer>Footer</Footer>
      </Page>
    )
  }
}

// PostFormAddPage.propTypes = {
//   isLoading: PropTypes.bool,
//   read: PropTypes.func,
// }

const mapStateToProps = (state, props) => ({
  isLoading: state.app.isLoading
})

const mapDispatchToProps = (dispatch) => {
  const { read } = actions
  return bindActionCreators({ read }, dispatch)
}

export { PostFormAddPage } // тупой компонент для тестирования
export default connect(mapStateToProps, mapDispatchToProps)(PostFormAddPage)
