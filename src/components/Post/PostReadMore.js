// @flow
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  id: number,
}

const PostReadMore = ({ id }: Props) => (
  <Link to={`/post/${id}/#more`}>Читать дальше →</Link>
)

// PostReadMore.propTypes = {
//   id: PropTypes.number,
// }

export default PostReadMore
