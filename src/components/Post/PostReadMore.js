// @flow
import React from 'react'
import { Link } from 'react-router-dom'

const PostReadMore = ({ id }: Props) => (
  <Link to={`/post/${id}/#more`}>Читать дальше →</Link>
)

// PostReadMore.propTypes = {
//   id: PropTypes.number,
// }

type Props = {
  id: number,
}

export default PostReadMore
