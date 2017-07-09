// @flow
import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { pure } from 'utils'

const Add = () =>
  <div className="root">
    <FloatingActionButton mini href="/post/add/">
      <ContentAdd />
    </FloatingActionButton>
    <style jsx>{`
      .root {
        position: fixed;
        right: 32px;
        bottom: 32px;
      }
    `}</style>
  </div>

// Add.propTypes = {
//
// }

export default pure(Add)
