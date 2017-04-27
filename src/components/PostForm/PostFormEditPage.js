// @flow
import React from 'react'
import { connect } from 'react-redux'
import { actions } from 'ducks/postForm'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import PostForm from './PostForm'

const PostFormEditPage = (props: Props) => (
  <Page {...props}>
    <Helmet
      title="YOBR"
    />
    <PostForm />
  </Page>
)

// PostFormEditPage.propTypes = {
//   onMounted: PropTypes.func,
//   isNotFound: PropTypes.bool,
// }

type Props = {
  onMounted: Function,
  isNotFound: boolean,
}

const mapStateToProps = (state, props) => ({
  isNotFound: !state.postForm.id,
})

const mapDispatchToProps = (dispatch, props) => ({
  onMounted: () => {
    const id = parseInt(props.match.params.id, 10)
    dispatch(actions.read(id))
  },
})

export { PostFormEditPage } // тупой компонент для тестирования
export default connect(mapStateToProps, mapDispatchToProps)(PostFormEditPage)
