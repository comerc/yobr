// @flow
import React from 'react'
import { formatDateTime } from 'utils'
import Title from './Post_Title'
import Hubs from './Post_Hubs'

type Props = {
  isTeaser?: boolean,
  id: number,
  published: number,
  flow: {
    id: string,
    name: string,
  },
  hubs: Array<{
    id: string,
    name: string,
    isSubscribed?: boolean,
  }>,
  title: string,
  isDraft?: boolean,
  isMy?: boolean,
}

const Header = ({ isTeaser, published, flow, id, title, hubs, isDraft, isMy }: Props) =>
  <div>
    <span className="published">
      {formatDateTime(published)}
    </span>
    <Title {...{ isTeaser, flow, id, title, isDraft, isMy }} />
    <Hubs {...{ hubs }} />
  </div>

// Header.propTypes = {
//   isTeaser: PropTypes.bool,
//   published: PropTypes.number,
//   flow: PropTypes.shape({
//     id: PropTypes.string,
//     name: PropTypes.string,
//   }),
//   id: PropTypes.number,
//   title: PropTypes.string,
//   hubs: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string,
//     name: PropTypes.string,
//   })).isRequired,
//   isDraft: PropTypes.bool,
//   isMy: PropTypes.bool,
// }

export default Header
