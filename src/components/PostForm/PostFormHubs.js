// @flow
import React from 'react'
import Chip from 'material-ui/Chip'
import { pureComponent } from 'utils'

const onRequestDelete = (input, hubs, index, isValidate) => (event) => {
  hubs = hubs.slice()
  hubs.splice(index, 1)
  input({ key: 'hubs', value: hubs })
  input({ key: 'searchHub', isValidate })
}

const PostFormHubs = ({ hubs, input, error }: Props) => (
  <div className="root">
      {hubs.map((hub, index) => (
        <Chip
          key={hub.id}
          onRequestDelete={onRequestDelete(input, hubs, index, !!error)}
          style={{ margin: 4 }}
        >
          {hub.name}
        </Chip>
      ))}
    <style jsx>{`
      .root {
        display: flex;
        flex-wrap: wrap;
      }
    `}</style>
  </div>
)

// PostFormHubs.propTypes = {
//   hubs: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//     })
//   ),
//   input: PropTypes.func,
//   error: PropTypes.string,
// }

type Props = {
  hubs: Array<{
    id: string,
    name: string,
  }>,
  input: Function,
  error?: string,
}

export default pureComponent(PostFormHubs)
