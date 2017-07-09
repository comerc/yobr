// @flow
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  id: number,
}

const ReadMore = ({ id }: Props) => <Link to={`/post/${id}/#more`}>Читать дальше →</Link>

// ReadMore.propTypes = {
//   id: PropTypes.number,
// }

export default ReadMore
