// @flow
import React from 'react'
import { connect } from 'react-redux'
import { actions } from 'ducks/postForm'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import PostForm from './PostForm'

type Props = {
  onMounted: Function,
}

const PostFormAddPage = (props: Props) => (
  <Page {...props}>
    <Helmet
      title='YOBR'
    />
    <PostForm />
  </Page>
)

// PostFormAddPage.propTypes = {
//   onMounted: PropTypes.func,
// }

const mapDispatchToProps = (dispatch, props) => ({
  onMounted: () => {
    dispatch(actions.read())
  }
})

export { PostFormAddPage } // тупой компонент для тестирования
export default connect(null, mapDispatchToProps)(PostFormAddPage)
