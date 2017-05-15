// @flow
import React from 'react'
import { connect } from 'react-redux'
import { actions } from 'ducks/posts'
import { createSelector } from 'reselect'
import memoize from 'fast-memoize'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import Post from './Post'
import PostAdd from './PostAdd'
import type { Props as PostProps } from './Post.Props'

type Props = {
  flows: Array<{
    id: string,
    name: string,
  }>,
  posts: Array<PostProps>,
  currentUserId: number,
  onMounted?: Function,
}

const PostListPage = ({ flows, posts, currentUserId, ...props }: Props) => (
  <Page {...props}>
    <Helmet title="YOBR" />
    {/* <div className='flows'>
     <ul>
     {Object.keys(flows).map(key =>
     <li key={key}>
     <Link to={`/flows/${key}/`}>{flows[key].name}</Link>
     </li>
     )}
     </ul>
     </div> */}
    {/* <div class='selected-hub'></div> */}
    <div className="posts">
      <PostAdd />
      {posts.map(post => (
        <Post
          key={post.id}
          {...{ ...post, isTeaser: true, isMy: post.author.id === currentUserId }}
        />
      ))}
    </div>
  </Page>
)

// PostListPage.propTypes = {
//   flows: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string,
//     name: PropType s.string,
//   })),
//   posts: PropTypes.arrayOf(PropTypes.object),
//   currentUserId: PropTypes.number,
//   onMounted: PropTypes.func,
// }

const getFilterType = (state, props) => props.match.params.filterType || ''

const getFilterId = (state, props) => props.match.params.filterId || ''

const getPosts = state => state.posts

const filteredPosts = createSelector(
  [getPosts, getFilterType, getFilterId],
  (posts, filterType, filterId) => {
    if (filterType === 'flow') {
      return posts.filter(element => element.flow.id === filterId)
    }
    if (filterType === 'hub') {
      return posts.filter(post => post.hubs.find(hub => hub.id === filterId))
    }
    return posts
  },
)

const mapStateToProps = (state, props) => ({
  flows: state.flows,
  posts: filteredPosts(state, props),
  currentUserId: state.currentUser.id,
})

const onMounted = memoize((dispatch, filterType, filterId) => () => {
  dispatch(actions.read({ filterType, filterId }))
})

const mapDispatchToProps = (dispatch, props) => ({
  onMounted: onMounted(dispatch, getFilterType(null, props), getFilterId(null, props)),
})

export { PostListPage } // тупой компонент для тестирования
export default connect(mapStateToProps, mapDispatchToProps)(PostListPage)
