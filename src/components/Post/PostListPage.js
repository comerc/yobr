import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect'
import { actions } from 'ducks/posts'
import Page, { Header, Footer } from 'components/Page'
import Helmet from 'react-helmet'

import Post from './Post'
// import PostAdd from './PostAdd'

class PostListPage extends React.Component {
  componentDidMount() {
    const { read, filterType, filteredId } = this.props
    read({ filterType, filteredId })
  }
  render() {
    const { isLoading, posts } = this.props
    return (
      <Page>
        <Helmet
          defaultTitle="Yobr"
        />
        <Header>Header
          {/* <div className="flows">
            <ul>
              {Object.keys(flows).map(key =>
                <li key={key}>
                  <Link to={`/flows/${key}`}>{flows[key].name}</Link>
                </li>
              )}
            </ul>
          </div> */}
        </Header>
        {/* <PostAdd/> */}
        {isLoading
          ?
            <div>Загрузка...</div>
          :
            <div className="main">
              {posts.map(post => <Post key={post.id} {...post} isTeaser />)}
            </div>
        }
        <Footer>Footer</Footer>
      </Page>
    )
  }
}

PostListPage.propTypes = {
  isLoading: PropTypes.bool,
  filterType: PropTypes.string,
  filterId: PropTypes.string,
  posts: PropTypes.arrayOf(PropTypes.object),
  flows: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })),
  read: PropTypes.func,
}

const getFilterType = (state, props) =>
  props.match.params.filterType

const getFilterId = (state, props) =>
  props.match.params.filterId

const getPosts = (state) =>
  state.posts

const filteredPosts = createSelector(
  [getPosts, getFilterType, getFilterId],
  (posts, filterType, filterId) => {
    if (filterType === 'flow') {
      return posts.filter(element =>
        element.flow.id === filterId)
    }
    if (filterType === 'hub') {
      return []
    }
    return posts
  }
)

const mapStateToProps = (state, props) => ({
  isLoading: state.app.isLoading,
  filterType: getFilterType(state, props),
  filterId: getFilterId(state, props),
  posts: filteredPosts(state, props),
  flows: state.flows,
})

const mapDispatchToProps = (dispatch) => {
  const { read } = actions
  return bindActionCreators({ read }, dispatch)
}

export { PostListPage } // тупой компонент для тестирования
export default connect(mapStateToProps, mapDispatchToProps)(PostListPage)
