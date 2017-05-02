// @flow
import React from 'react'
import { formatDateTime } from 'utils'
import PostTitle from './PostTitle'
import PostHubs from './PostHubs'

type Props = {
  isTeaser?: boolean,
  id: number,
  published: string,
  flow: {
    id: string,
    name: string,
  },
  hubs: Array<{
    id: string,
    name: string,
    isSubscribed?: boolean,
  }>,
  title: string,
  isDraft?: boolean,
  isMy?: boolean,
}

const PostHeader = ({ isTeaser, published, flow, id, title, hubs, isDraft, isMy }: Props) => (
  <div>
    <span className='published'>{formatDateTime(published)}</span>
    <PostTitle {...{ isTeaser, flow, id, title, isDraft, isMy }} />
    <PostHubs {...{ hubs }} />
  </div>
)

// PostHeader.propTypes = {
//   isTeaser: PropTypes.bool,
//   published: PropTypes.string,
//   flow: PropTypes.shape({
//     id: PropTypes.string,
//     name: PropTypes.string,
//   }),
//   id: PropTypes.number,
//   title: PropTypes.string,
//   hubs: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string,
//     name: PropTypes.string,
//   })).isRequired,
//   isDraft: PropTypes.bool,
//   isMy: PropTypes.bool,
// }

export default PostHeader
