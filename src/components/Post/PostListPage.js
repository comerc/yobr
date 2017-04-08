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
    this._isMounted = true
    const { read, filterType, filteredId } = this.props
    setTimeout(() =>
      read({ filterType, filteredId })
    )
  }
  renderPostList = () => {
    const { posts, currentUserId } = this.props
    return posts.map(post => {
      post.isEdit = post.author.id === currentUserId
      return <Post key={post.id} {...post} isTeaser />
    })
  }
  render() {
    if (!this._isMounted) {
      return null
    }
    const { isLoading } = this.props
    return (
      <Page>
        <Helmet
          title="Yobr"
        />
        <Header>Header
          {/* <div className="flows">
            <ul>
              {Object.keys(flows).map(key =>
                <li key={key}>
                  <Link to={`/flows/${key}/`}>{flows[key].name}</Link>
                </li>
              )}
            </ul>
          </div> */}
          {/* <div class="selected-hub"></div> */}
        </Header>
        {/* <PostAdd/> */}
        {isLoading
          ?
            <div>Загрузка...</div>
          :
            <div className="main">
              {this.renderPostList()}
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
  currentUserId: PropTypes.number,
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
      return posts.filter(post =>
        post.hubs.find(hub => hub.id === filterId)
      )
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
  currentUserId: state.currentUser.id,
})

const mapDispatchToProps = (dispatch) => {
  const { read } = actions
  return bindActionCreators({ read }, dispatch)
}

export { PostListPage } // тупой компонент для тестирования
export default connect(mapStateToProps, mapDispatchToProps)(PostListPage)
