// @flow
import React from 'react'
import { pure } from 'utils'
import Header from './PostHeader'
import Body from './PostBody'
import PostReadMore from './PostReadMore'
import PostTags from './PostTags'
import PostInfoPanel from './PostInfoPanel'
import type { Props } from './Post.Props'
import PostViewPage from './PostViewPage'
import PostListPage from './PostListPage'

const Post = ({
  isTeaser,
  id,
  published,
  flow,
  hubs,
  title,
  isDraft,
  isMy,
  author,
  company,
  tags,
  content,
  viewsCount,
  favoritesCount,
}: Props) =>
  <div>
    <Post.Header {...{ isTeaser, id, published, flow, hubs, title, isDraft, isMy }} />
    <Post.Body {...{ isTeaser, content }}>
      {isTeaser ? <PostReadMore {...{ id }} /> : <PostTags {...{ tags }} />}
    </Post.Body>
    <div className="footer">
      <PostInfoPanel {...{ isTeaser, id, author, viewsCount, favoritesCount }} />
    </div>
    <br />
  </div>

Post.Header = Header
Post.Body = Body

// Post.propTypes = {
//   isTeaser: PropTypes.bool,
//   id: PropTypes.number,
//   published: PropTypes.number,
//   flow: PropTypes.shape({
//     id: PropTypes.string,
//     name: PropTypes.string,
//   }),
//   hubs: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string,
//     name: PropTypes.string,
//   })).isRequired,
//   title: PropTypes.string,
//   isDraft: PropTypes.bool,
//   isMy: PropTypes.bool,
//   author: PropTypes.shape({
//     id: PropTypes.number,
//     nick: PropTypes.string,
//     name: PropTypes.string,
//     specialization: PropTypes.string,
//     contacts: PropTypes.arrayOf(PropTypes.shape({
//       type: PropTypes.string,
//       url: PropTypes.string,
//     })),
//     votingCounter: PropTypes.number,
//     karma: PropTypes.number,
//     rating: PropTypes.number,
//   }),
//   company: PropTypes.shape({
//     id: PropTypes.number,
//     avatar: PropTypes.string,
//     name: PropTypes.string,
//     specialization: PropTypes.string,
//     contacts: PropTypes.arrayOf(PropTypes.shape({
//       type: PropTypes.string,
//       url: PropTypes.string,
//     })),
//     rating: PropTypes.number,
//   }),
//   tags: PropTypes.arrayOf(PropTypes.string).isRequired,
//   content: PropTypes.string,
//   viewsCount: PropTypes.number,
//   favoritesCount: PropTypes.number,
// }

export { PostViewPage, PostListPage }
export default pure(Post)
