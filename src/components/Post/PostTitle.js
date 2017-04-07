import React, { PropTypes } from 'react'
import { ga } from 'utils'
import { Link } from 'react-router-dom'

const PostTitle = ({ isTeaser, flow, id, title, isDraft }) => (
  <div>
    <h1>
      {isTeaser ?
        <span>
          <Link className="flow" to={`/post/flow/${flow.id}/`} onClick={ga('flow', 'feed page', flow.name)}>{flow.name}</Link>
          <span className="arrow"> → </span>
          <Link className="link" to={`/post/${id}/`}>{title}</Link>
        </span>
      :
        {title}
      }
      {isDraft && <sup>&nbsp;*&nbsp;черновик</sup>}
      <sup>&nbsp;<Link className="link" to={`/post/${id}/edit`}>edit</Link></sup>
    </h1>
  </div>
)

PostTitle.propTypes = {
  isTeaser: PropTypes.bool,
  flow: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  id: PropTypes.number,
  title: PropTypes.string,
  isDraft: PropTypes.bool,
}

export default PostTitle
