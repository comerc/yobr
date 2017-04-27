// @flow
import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { actions } from 'ducks/posts'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import Post from './Post'
import PostAdd from './PostAdd'
import type { Props as PostProps } from './Post.Props'

const PostListPage = ({ flows, posts, currentUserId, ...props }: Props) => (
  <Page {...props}>
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
    <div className="posts">
      <PostAdd/>
      {posts.map(post =>
        <Post key={post.id} {...post} isMy={post.author.id === currentUserId} isTeaser={true} />
      )}
    </div>
  </Page>
)

// PostListPage.propTypes = {
//   flows: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string,
//     name: PropTypes.string,
//   })),
//   posts: PropTypes.arrayOf(PropTypes.object),
//   currentUserId: PropTypes.number,
//   onMounted: PropTypes.func,
// }

type Props = {
  flows: Array<{
    id: string,
    name: string,
  }>,
  posts: Array<PostProps>,
  currentUserId: number,
  onMounted: Function,
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
  flows: state.flows,
  posts: filteredPosts(state, props),
  currentUserId: state.currentUser.id,
})

const mapDispatchToProps = (dispatch, props) => ({
  onMounted: () => {
    const filterType = props.match.params.filterType || ''
    const filterId = props.match.params.filterId || ''
    dispatch(actions.read({ filterType, filterId }))
  },
})

export { PostListPage } // тупой компонент для тестирования
export default connect(mapStateToProps, mapDispatchToProps)(PostListPage)
