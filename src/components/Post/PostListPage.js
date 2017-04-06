import React, { PropTypes } from 'react'
import { actions } from 'ducks/posts'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import Post from './Post'
// import PostAdd from './PostAdd'
// import Link from './Link'

class PostListPage extends React.Component {
  componentDidMount() {
    const { dispatch, filterType, filteredId } = this.props
    dispatch(actions.read({ filterType, filteredId }))
  }
  render() {
    const { posts } = this.props
    return (
      <div>
        <div className="main">
          {posts.map((post) => (
            <Post key={post.id} {...post} isTeaser />
          ))}
        </div>

      </div>
    )
  }
}

// class PostListPage extends React.Component {
//
//
//   render() {
//     const { posts } = this.props
//     return (
//       <div>
//         {/* <PostAdd/> */}
//         {/* <div className={s.links}>
//           <Link to="/post/add">Добавить</Link>
//           <span> | </span>
//           <Link to="/feedback">Обратная связь</Link>
//         </div> */}
//         {/* <div className={s.flows}>
//           <ul>
//             {Object.keys(flows).map(key =>
//               <li key={key}>
//                 <Link to={`/flows/${key}`}>{flows[key].name}</Link>
//               </li>
//             )}
//           </ul>
//         </div> */}
//         <div className="main">
//           {posts.map((post) => (
//             // <Post key={post.id} {...post} isTeaser />
//             <div key={post.id}>{...post}</div>
//           ))}
//         </div>
//       </div>
//     )
//   }
// }

// PostListPage.propTypes = {
//   filterType: PropTypes.string,
//   filterId: PropTypes.string,
//   // posts: PropTypes.arrayOf(PropTypes.shape(Post.propTypes)),
//   // flows: PropTypes.arrayOf(PropTypes.shape({
//   //   id: PropTypes.string,
//   //   name: PropTypes.string,
//   // })),
// }
//
// const getFilterType = (state, ownProps) =>
//   ownProps.filterType
//
// const getFilterId = (state, ownProps) =>
//   ownProps.filterId
//
// const getPosts = (state) =>
//   state.posts
//
// const filteredPosts = createSelector(
//   [getPosts, getFilterType, getFilterId],
//   (posts, filterType, filterId) => {
//     if (filterType === 'flow') {
//       return posts.filter(element =>
//         element.flow.id === filterId)
//     }
//     if (filterType === 'hub') {
//       return []
//     }
//     if (filterType === 'all') {
//       return posts
//     }
//     return []
//   }
// )
//
const mapStateToProps = (state, ownProps) => ({
  // posts: filteredPosts(state, ownProps)
  posts: state.posts
})

export default connect(mapStateToProps)(PostListPage)
