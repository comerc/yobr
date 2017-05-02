// @flow
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  tags: Array<string>,
}

const PostTags = ({ tags }: Props) => (
  <ul>
    {tags.map(tag =>
      <li key={tag}>
        <Link
          to={`/search/?q=%5B${encodeURIComponent(tag)}%5D&target_type=posts`}
          rel='tag'
        >{tag}</Link>
      </li>
    )}
    <style jsx>{`
      ul {
        margin: 0;
        padding: 0;
      }
      li {
        white-space: nowrap;
        display: inline;
      }
      li:after {
        content: ', '
      }
      li:last-child:after {
        content: ''
      }
    `}</style>
  </ul>
)

// PostTags.propTypes = {
//   tags: PropTypes.arrayOf(PropTypes.string).isRequired,
// }

export default PostTags
