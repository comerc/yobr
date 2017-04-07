import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { actions } from 'ducks/posts'
import Page, { Header, Footer, NotFoundPage } from 'components/Page'
import Helmet from 'react-helmet'

import Post from './Post'

class PostPage extends React.Component {
  componentDidMount() {
    const { read, id } = this.props
    read({ id })
  }
  render() {
    const { isLoading, post } = this.props
    if (!isLoading && post === void 0) {
      return <NotFoundPage />
    }
    return (
      <Page>
        <Helmet
          title="Yobr"
        />
        <Header>Header</Header>
        {isLoading
          ?
            <div>Загрузка...</div>
          :
            <Post {...post} />
        }
        <Footer>Footer</Footer>
      </Page>
    )
  }
}

PostPage.propTypes = {
  isLoading: PropTypes.bool,
  id: PropTypes.number,
  post: PropTypes.object,
  read: PropTypes.func,
}

const getId = (state, props) =>
  parseInt(props.match.params.id, 10)

const getPosts = (state) =>
  state.posts

const post = createSelector(
  [getPosts, getId],
  (posts, id) =>
    posts.find(element =>
      element.id === id)
)

const mapStateToProps = (state, props) => ({
  isLoading: state.app.isLoading,
  id: getId(state, props),
  post: post(state, props),
})

const mapDispatchToProps = (dispatch) => {
  const { read } = actions
  return bindActionCreators({ read }, dispatch)
}

export { PostPage } // тупой компонент для тестирования
export default connect(mapStateToProps, mapDispatchToProps)(PostPage)
