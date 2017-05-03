// @flow
import React from 'react'
import Chip from 'material-ui/Chip'
import { pure } from 'utils'
import memoize from 'fast-memoize'

type Props = {
  hubs: Array<{
    id: string,
    name: string,
  }>,
  input: Function,
  error?: string,
}

const onRequestDelete = memoize((input, hubs, index, isValidate) => () => {
  hubs = hubs.slice()
  hubs.splice(index, 1)
  input({ key: 'hubs', value: hubs })
  input({ key: 'searchHub', isValidate })
})

const chipStyle = { margin: 4 }

const PostFormHubs = ({ hubs, input, error }: Props) => (
  <div className='root'>
    {hubs.map((hub, index) => (
      <Chip
        key={hub.id}
        onRequestDelete={onRequestDelete(input, hubs, index, !!error)}
        style={chipStyle}
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

export default pure(PostFormHubs)
