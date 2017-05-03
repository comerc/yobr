// @flow
import React from 'react'
import { ga } from 'utils'
import { Link } from 'react-router-dom'

type Props = {
  isTeaser?: boolean,
  id: number,
  flow: {
    id: string,
    name: string,
  },
  title: string,
  isDraft?: boolean,
  isMy?: boolean,
}

const PostTitle = ({ isTeaser, flow, id, title, isDraft, isMy }: Props) => {
  const titleWithLinks = () => (
    <span>
      <Link className='flow' to={`/flow/${flow.id}/`} onClick={ga('flow', 'feed page', flow.name)}>{flow.name}</Link>
      <span className='arrow'> → </span>
      <Link className='link' to={`/post/${id}/`}>{title}</Link>
    </span>
  )
  return (
    <div>
      <h2>
        {isTeaser
          ? titleWithLinks()
          : title
        }
        {isDraft && <sup>&nbsp;*&nbsp;черновик</sup>}
        {isMy && <sup>&nbsp;<Link className='link' to={`/post/edit/${id}/`}>edit</Link></sup>}
      </h2>
      <style jsx>{`
        h2 {
          font-weight: normal;
          font-size: 1.5em;
          line-height: 1.334;
        }
      `}</style>
    </div>
  )
}

// PostTitle.propTypes = {
//   isTeaser: PropTypes.bool,
//   flow: PropTypes.shape({
//     id: PropTypes.string,
//     name: PropTypes.string,
//   }),
//   id: PropTypes.number,
//   title: PropTypes.string,
//   isDraft: PropTypes.bool,
//   isMy: PropTypes.bool,
// }

export default PostTitle
