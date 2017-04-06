import React, { PropTypes } from 'react'
import { formatDateTime } from 'app/utils'
import PostTitle from './PostTitle'
import PostHubs from './PostHubs'

const PostHeader = ({ isTeaser, published, flow, id, title, hubs, isDraft }) => (
  <div>
    <span className="published">{formatDateTime(published)}</span>
    <PostTitle {...{ isTeaser, flow, id, title, isDraft }} />
    <PostHubs {...{ hubs }} />
  </div>
)

PostHeader.propTypes = {
  isTeaser: PropTypes.bool,
  published: PropTypes.string,
  flow: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  id: PropTypes.number,
  title: PropTypes.string,
  hubs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  isDraft: PropTypes.bool,
}

export default PostHeader
