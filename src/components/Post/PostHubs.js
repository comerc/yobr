// @flow
import React from 'react'
import cx from 'classnames'
import { ga } from 'utils'
import { Link } from 'react-router-dom'

const PostHubs = ({ hubs }: Props) => (
  <ul>
    {hubs.map(hub =>
      <li key={hub.id}>
        <Link
          to={`/hub/${hub.id}/`}
          title={hub.isSubscribed ? 'Вы подписаны на этот хаб' : 'Вы не подписаны на этот хаб'}
          onClick={ga('hub', 'feed page', hub.name)}
          className={cx({ 'subscribed': hub.isSubscribed })}
        >{hub.name}</Link>
        {hub.isProfiled && <span className="profiled" title="Профильный хаб">*</span>}
      </li>
    )}
  </ul>
)

// PostHubs.propTypes = {
//   hubs: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string,
//     name: PropTypes.string,
//   })).isRequired,
// }

type Props = {
  hubs: Array<{
    id: string,
    name: string,
    isSubscribed?: boolean,
  }>,
}

export default PostHubs
