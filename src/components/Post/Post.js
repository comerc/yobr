// @flow
import React from 'react'
import { pure } from 'utils'
import Header from './Post_Header'
import Body from './Post_Body'
import ReadMore from './Post_ReadMore'
import Tags from './Post_Tags'
import InfoPanel from './Post_InfoPanel'
import type { Props } from './Post.Props'
import Add from './Post_Add'

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
    <Header {...{ isTeaser, id, published, flow, hubs, title, isDraft, isMy }} />
    <Body {...{ isTeaser, content }}>
      {isTeaser ? <ReadMore {...{ id }} /> : <Tags {...{ tags }} />}
    </Body>
    <div className="footer">
      <InfoPanel {...{ isTeaser, id, author, viewsCount, favoritesCount }} />
    </div>
    <br />
  </div>

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

export type { Props }
export { Add }
export default pure(Post)
