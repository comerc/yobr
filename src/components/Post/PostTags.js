// @flow
import React from 'react'
import { Link } from 'react-router-dom'

const PostTags = ({ tags }: Props) => (
  <ul>
    {tags.map(tag =>
      <li key={tag}>
        <Link
          to={`/search/?q=%5B${encodeURIComponent(tag)}%5D&target_type=posts`}
          rel="tag"
        >{tag}</Link>
      </li>
    )}
  </ul>
)

// PostTags.propTypes = {
//   tags: PropTypes.arrayOf(PropTypes.string).isRequired,
// }

type Props = {
  tags: Array<string>,
}

export default PostTags
