import React, { PropTypes } from 'react'
import cx from 'classnames'

const PostBody = ({ isTeaser, content, children }) => (
  <div className={cx({ 'crop': isTeaser })}>
    <div
      className={cx("content", "htmlFormat")}
      // TODO dangerouslySetInnerHTML={{ __html: content }}
    >{content}</div>
    {children}
  </div>
)

PostBody.propTypes = {
  isTeaser: PropTypes.bool,
  content: PropTypes.string,
  children: PropTypes.element,
}

export default PostBody
