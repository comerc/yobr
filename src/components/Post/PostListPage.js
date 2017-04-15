// @flow
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect'
import { actions } from 'ducks/posts'
import Page, { Header, Footer } from 'components/Page'
import Helmet from 'react-helmet'
import Post from './Post'
import PostAdd from './PostAdd'
import type { Props as PostProps } from './Post.Props'

class PostListPage extends React.Component {
  props: Props
  _isMounted: boolean
  componentDidMount() {
    this._isMounted = true
    const { read, filterType, filterId } = this.props
    setImmediate(() =>
      read({ filterType, filterId })
    )
  }
  render() {
    if (!this._isMounted) {
      return null
    }
    const { isLoading, posts, currentUserId } = this.props
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
        {isLoading
          ?
            <div>Загрузка...</div>
          :
            <div className="main">
              <PostAdd/>
              {posts.map(post => {
                post.isEdit = post.author.id === currentUserId
                return <Post key={post.id} {...post} isTeaser={true} />
              })}
            </div>
        }
        <Footer>Footer</Footer>
      </Page>
    )
  }
}

// PostListPage.propTypes = {
//   isLoading: PropTypes.bool,
//   filterType: PropTypes.string,
//   filterId: PropTypes.string,
//   posts: PropTypes.arrayOf(PropTypes.object),
//   flows: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string,
//     name: PropTypes.string,
//   })),
//   currentUserId: PropTypes.number,
//   read: PropTypes.func,
// }

type Props = {
  isLoading: boolean,
  filterType: string,
  filterId: string,
  posts: Array<PostProps>,
  flows: Array<{
    id: string,
    name: string,
  }>,
  currentUserId: number,
  read: Function,
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
