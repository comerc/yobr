import React, { PropTypes } from 'react'
import { urlencode } from 'app/utils'
import Link from 'next/link'

const PostTags = ({ tags }) =>
  tags && tags.length > 0 && (
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
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default PostTags
