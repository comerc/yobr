import React from 'react'
import PropTypes from 'prop-types'
import { ga } from 'utils'
import { Link } from 'react-router-dom'

const PostTitle = ({ isTeaser, flow, id, title, isDraft, isEdit }) => (
  <div>
    <h1>
      {isTeaser ?
        <span>
          <Link className="flow" to={`/flow/${flow.id}/`} onClick={ga('flow', 'feed page', flow.name)}>{flow.name}</Link>
          <span className="arrow"> → </span>
          <Link className="link" to={`/post/${id}/`}>{title}</Link>
        </span>
      :
        {title}
      }
      {isDraft && <sup>&nbsp;*&nbsp;черновик</sup>}
      {isEdit && <sup>&nbsp;<Link className="link" to={`/post/edit/${id}/`}>edit</Link></sup>}
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
  isEdit: PropTypes.bool,
}

export default PostTitle
