import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import Post from './Post'
import PostAdd from './PostAdd'
// import Link from './Link'

const PostList = ({ posts }) => (
  <div>
    <PostAdd/>
    {/* <div className={s.links}>
      <Link to="/post/add">Добавить</Link>
      <span> | </span>
      <Link to="/feedback">Обратная связь</Link>
    </div> */}
    {/* <div className={s.flows}>
      <ul>
        {Object.keys(flows).map(key =>
          <li key={key}>
            <Link to={`/flows/${key}`}>{flows[key].name}</Link>
          </li>
        )}
      </ul>
    </div> */}
    {/* TODO если массив пустой, то сообщить об отсутствии данных */}
    <div className={s.main}>
      {posts.map((post) => (
        <Post key={post.id} {...post} isTeaser />
      ))}
    </div>
  </div>
)

PostList.propTypes = {
  filterType: PropTypes.string,
  filterId: PropTypes.string,
  posts: PropTypes.arrayOf(PropTypes.shape(Post.propTypes)),
  // flows: PropTypes.arrayOf(PropTypes.shape({
  //   id: PropTypes.string,
  //   name: PropTypes.string,
  // })),
}

const getFilterType = (state, ownProps) =>
  ownProps.filterType

const getFilterId = (state, ownProps) =>
  ownProps.filterId

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
      // TODO фильтр по хабу
      return []
    }
    if (filterType === 'all') {
      return posts
    }
    return []
  }
)

// TODO преобразовать flows к массиву нужно тут и memoize
// TODO вынести flows в отдельный компонент

const mapStateToProps = (state, ownProps) => ({
  posts: filteredPosts(state, ownProps)
})

export default connect(mapStateToProps)(PostList)
