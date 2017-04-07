import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { actions } from 'ducks/posts'
import Post from './Post'
import Page, { Header, Footer } from 'components/Page'
import Helmet from 'react-helmet'

class PostPage extends React.Component {
  componentDidMount() {
    const { read, id } = this.props
    read({ id })
  }
  render() {
    const { post } = this.props
    return (
      <Page>
        <Helmet
          defaultTitle="Yobr"
        />
        <Header>Header</Header>
        <Post {...post} />
        <Footer>Footer</Footer>
      </Page>
    )
  }
}

PostPage.propTypes = {
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
  id: getId(state, props),
  post: post(state, props),
})

const mapDispatchToProps = (dispatch) => {
  const { read } = actions
  return bindActionCreators({ read }, dispatch)
}

export { PostPage } // тупой компонент для тестирования
export default connect(mapStateToProps, mapDispatchToProps)(PostPage)
