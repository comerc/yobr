// @flow
import React from 'react'
import { connect } from 'react-redux'
import { actions } from 'ducks/posts'
import { createSelector } from 'reselect'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import Post from './Post'
import PostAdd from './PostAdd'
import type { Props as PostProps } from './Post.Props'

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

const mapDispatchToProps = (dispatch, props) => ({
  onMounted: () => {
    const filterType = getFilterType(null, props)
    const filterId = getFilterId(null, props)
    dispatch(actions.read({ filterType, filterId }))
  },
})

@connect(mapStateToProps, mapDispatchToProps)
class PostListPage extends React.Component {
  props: {
    flows: Array<{
      id: string,
      name: string,
    }>,
    posts: Array<PostProps>,
    currentUserId: number,
    onMounted: Function,
  }

  static defaultProps = {
    flows: [],
    posts: [],
    currentUserId: null,
    onMounted: () => {},
  }

  render() {
    const {
      // flows,
      posts,
      currentUserId,
      onMounted,
    } = this.props
    return (
      <Page {...{ onMounted }}>
        <Helmet title="YOBR - list" />
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
          {posts.map(post =>
            <Post
              key={post.id}
              {...{ ...post, isTeaser: true, isMy: post.author.id === currentUserId }}
            />,
          )}
        </div>
      </Page>
    )
  }
}

// PostListPage.propTypes = {
//   flows: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string,
//     name: PropType s.string,
//   })),
//   posts: PropTypes.arrayOf(PropTypes.object),
//   currentUserId: PropTypes.number,
// }

export default PostListPage
