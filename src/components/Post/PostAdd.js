import React, { PropTypes } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { pureComponent } from 'app/utils'

const PostAdd = () => (
  <div>
    <FloatingActionButton mini={true} href="/post/add">
      <ContentAdd />
    </FloatingActionButton>
  </div>
)

PostAdd.propTypes = {

}

export default pureComponent(PostAdd)
