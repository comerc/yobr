import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from 'ducks/postForm'
import Page, { Header, Footer } from 'components/Page'
import Helmet from 'react-helmet'
import PostForm from './PostForm'

class PostFormAddPage extends React.Component {
  componentDidMount() {
    this._isMounted = true
    const { reset } = this.props
    setTimeout(() =>
      reset()
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

PostFormAddPage.propTypes = {
  reset: PropTypes.func,
}

const mapStateToProps = (state, props) => ({
})

const mapDispatchToProps = (dispatch) => {
  const { reset } = actions
  return bindActionCreators({ reset }, dispatch)
}

export { PostFormAddPage } // тупой компонент для тестирования
export default connect(mapStateToProps, mapDispatchToProps)(PostFormAddPage)
