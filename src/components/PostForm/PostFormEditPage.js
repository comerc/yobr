// @flow
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from 'ducks/postForm'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import PostForm from './PostForm'

const PostFormEditPage = ({ read, id, isNotFound }: Props) => (
  <Page onMounted={() => read(id)} {...{ isNotFound }}>
    <Helmet
      title="YOBR"
    />
    <PostForm />
  </Page>
)

// PostFormEditPage.propTypes = {
//   read: PropTypes.func,
//   id: PropTypes.number,
//   isNotFound: PropTypes.bool,
// }

type Props = {
  read: Function,
  id: number,
  isNotFound: boolean,
}

const mapStateToProps = (state, props) => ({
  id: parseInt(props.match.params.id, 10),
  isNotFound: !state.app.isLoading && !state.postForm.id,
})

const mapDispatchToProps = (dispatch) => {
  const { read } = actions
  return bindActionCreators({ read }, dispatch)
}

export { PostFormEditPage } // тупой компонент для тестирования
export default connect(mapStateToProps, mapDispatchToProps)(PostFormEditPage)
