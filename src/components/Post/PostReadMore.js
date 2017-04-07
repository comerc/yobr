import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'

const PostReadMore = ({ id }) => (
  <Link to={`/post/${id}/#more`}>Читать дальше →</Link>
)

PostReadMore.propTypes = {
  id: PropTypes.number,
}

export default PostReadMore
