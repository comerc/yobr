// @flow
import React from 'react'
import { connect } from 'react-redux'
import { actions } from 'ducks/postForm'
import memoize from 'fast-memoize'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import PostForm from './PostForm'

type Props = {
  onMounted?: Function,
  isNotFound: boolean,
}

const PostFormEditPage = (props: Props) => (
  <Page {...props}>
    <Helmet title="YOBR" />
    <PostForm />
  </Page>
)

// PostFormEditPage.propTypes = {
//   onMounted: PropTypes.func,
//   isNotFound: PropTypes.bool,
// }

const mapStateToProps = (state, props) => ({
  isNotFound: !state.postForm.id,
})

const onMounted = memoize((dispatch, id) => () => {
  dispatch(actions.read(id))
})

const mapDispatchToProps = (dispatch, props) => ({
  onMounted: onMounted(dispatch, parseInt(props.match.params.id, 10)),
})

export { PostFormEditPage } // тупой компонент для тестирования
export default connect(mapStateToProps, mapDispatchToProps)(PostFormEditPage)
