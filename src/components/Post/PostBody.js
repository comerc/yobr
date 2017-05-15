// @flow
import React from 'react'
import cx from 'classnames'

type Props = {
  isTeaser?: boolean,
  content: string,
  children?: typeof React.Element,
}

const PostBody = ({ isTeaser, content, children }: Props) => (
  <div className={cx({ crop: isTeaser })}>
    <div className={cx('content', 'htmlFormat')}>{content}</div>
    {children}
  </div>
)

// PostBody.propTypes = {
//   isTeaser: PropTypes.bool,
//   content: PropTypes.string,
//   children: PropTypes.element,
// }

export default PostBody
