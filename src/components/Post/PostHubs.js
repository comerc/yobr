import React, { PropTypes } from 'react'
import cx from 'classnames'
import { ga } from 'app/utils'
import Link from 'next/link'

const onClick = (hub) => (event) => {
  event.preventDefault()
  alert(event.target.href)
  ga('hub', 'feed page', hub.name)
}

const PostHubs = ({ hubs }) => (
  <ul>
    {hubs.map(hub =>
      <li key={hub.id}>
        <Link
          to={`/post/hub/${hub.id}/`}
          title={hub.isSubscribed ? 'Вы подписаны на этот хаб' : 'Вы не подписаны на этот хаб'}
          onClick={onClick(hub)}
          className={cx({ 'subscribed': hub.isSubscribed })}
        >{hub.name}</Link>
        {hub.isProfiled && <span className="profiled" title="Профильный хаб">*</span>}
      </li>
    )}
  </ul>
)

PostHubs.propTypes = {
  hubs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
}

export default PostHubs
