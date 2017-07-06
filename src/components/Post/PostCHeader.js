// @flow
import React from 'react'
import { formatDateTime } from 'utils'
import PostCTitle from './PostCTitle'
import PostCHubs from './PostCHubs'

type Props = {
  isTeaser?: boolean,
  id: number,
  published: number,
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

const PostCHeader = ({ isTeaser, published, flow, id, title, hubs, isDraft, isMy }: Props) =>
  <div>
    <span className="published">
      {formatDateTime(published)}
    </span>
    <PostCTitle {...{ isTeaser, flow, id, title, isDraft, isMy }} />
    <PostCHubs {...{ hubs }} />
  </div>

// PostCHeader.propTypes = {
//   isTeaser: PropTypes.bool,
//   published: PropTypes.number,
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

export default PostCHeader
