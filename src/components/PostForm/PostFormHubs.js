import React, { PropTypes } from 'react'
import Chip from 'material-ui/Chip'
import { pureComponent } from 'app/utils'

const chipStyle = {
  margin: 4
}

const onRequestDelete = (input, hubs, index, isValidate) => (event) => {
  hubs = hubs.slice()
  hubs.splice(index, 1)
  input({ key: 'hubs', value: hubs })
  input({ key: 'searchHub', isValidate })
}

const PostFormHubs = ({ hubs, input, error }) => (
  <div>
      {hubs.map((hub, index) => (
        <Chip
          key={hub.id}
          onRequestDelete={onRequestDelete(input, hubs, index, !!error)}
          style={chipStyle}
        >
          {hub.name}
        </Chip>
      ))}
  </div>
)

PostFormHubs.propTypes = {
  hubs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  input: PropTypes.func,
  error: PropTypes.string,
}

export default pureComponent(PostFormHubs)
