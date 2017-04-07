import React, { PropTypes } from 'react'
import { urlencode } from 'utils'
import { Link } from 'react-router-dom'

const PostTags = ({ tags }) => (
  <ul>
    {tags.map(tag =>
      <li key={tag}>
        <Link
          to={`/search/?q=%5B${urlencode(tag)}%5D&target_type=posts`}
          rel="tag"
        >{tag}</Link>
      </li>
    )}
  </ul>
)

PostTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default PostTags
