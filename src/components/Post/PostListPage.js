// @flow
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect'
import { actions } from 'ducks/posts'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import Post from './Post'
import PostAdd from './PostAdd'
import type { Props as PostProps } from './Post.Props'

const PostListPage = ({ read, filterType, filterId, flows, posts, currentUserId }: Props) => (
  <Page onMounted={() => read({ filterType, filterId })}>
    <Helmet
      title="YOBR"
    />
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
    <div className="main">
      <PostAdd/>
      {posts.map(post => {
        post.isMy = post.author.id === currentUserId
        return <Post key={post.id} {...post} isTeaser={true} />
      })}
    </div>
  </Page>
)

// PostListPage.propTypes = {
//   read: PropTypes.func,
//   filterType: PropTypes.string,
//   filterId: PropTypes.string,
//   flows: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string,
//     name: PropTypes.string,
//   })),
//   posts: PropTypes.arrayOf(PropTypes.object),
//   currentUserId: PropTypes.number,
// }

type Props = {
  read: Function,
  filterType: string,
  filterId: string,
  flows: Array<{
    id: string,
    name: string,
  }>,
  posts: Array<PostProps>,
  currentUserId: number,
}

const getFilterType = (state, props) =>
  props.match.params.filterType || ''

const getFilterId = (state, props) =>
  props.match.params.filterId || ''

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
  filterType: getFilterType(state, props),
  filterId: getFilterId(state, props),
  flows: state.flows,
  posts: filteredPosts(state, props),
  currentUserId: state.currentUser.id,
})

const mapDispatchToProps = (dispatch) => {
  const { read } = actions
  return bindActionCreators({ read }, dispatch)
}

export { PostListPage } // тупой компонент для тестирования
export default connect(mapStateToProps, mapDispatchToProps)(PostListPage)
