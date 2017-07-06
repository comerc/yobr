// @flow
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  id: number,
}

const PostCReadMore = ({ id }: Props) => <Link to={`/post/${id}/#more`}>Читать дальше →</Link>

// PostCReadMore.propTypes = {
//   id: PropTypes.number,
// }

export default PostCReadMore
