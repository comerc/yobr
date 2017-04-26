// @flow
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from 'ducks/postForm'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import PostForm from './PostForm'

const PostFormAddPage = ({ read }: Props) => (
  <Page onMounted={() => read()}>
    <Helmet
      title="YOBR"
    />
    <PostForm />
  </Page>
)

// PostFormAddPage.propTypes = {
//   read: PropTypes.func,
// }

type Props = {
  read: Function,
}

const mapDispatchToProps = (dispatch) => {
  const { read } = actions
  return bindActionCreators({ read }, dispatch)
}

export { PostFormAddPage } // тупой компонент для тестирования
export default connect(null, mapDispatchToProps)(PostFormAddPage)
