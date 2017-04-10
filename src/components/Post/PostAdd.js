import React from 'react'
// import PropTypes from 'prop-types'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { pureComponent } from 'utils'

const PostAdd = () => (
  <div>
    <FloatingActionButton mini={true} href="/post/add/">
      <ContentAdd />
    </FloatingActionButton>
  </div>
)

// PostAdd.propTypes = {
//
// }

export default pureComponent(PostAdd)
