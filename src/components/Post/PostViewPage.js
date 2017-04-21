// @flow
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from 'ducks/postView'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import Post from './Post'
import type { Props as PostProps } from './Post.Props'

const PostViewPage = ({ read, id, isNotFound, post }: Props) => (
  <Page onMounted={() => read(id)} {...{ isNotFound }}>
    <Helmet
      title="YOBR"
    />
    <Post {...post} />
  </Page>
)

// PostViewPage.propTypes = {
//   read: PropTypes.func,
//   id: PropTypes.number,
//   isNotFound: PropTypes.bool,
//   post: PropTypes.object,
// }

type Props = {
  read: Function,
  id: number,
  isNotFound: boolean,
  post: PostProps | {},
}

const isMy = (state) =>
  state.postView.author && state.postView.author.id === state.currentUser.id

const mapStateToProps = (state, props) => ({
  id: parseInt(props.match.params.id, 10),
  isNotFound: !state.app.isLoading && !state.postView.id,
  post: { ...state.postView, isMy: isMy(state) },
})

const mapDispatchToProps = (dispatch) => {
  const { read } = actions
  return bindActionCreators({ read }, dispatch)
}

export { PostViewPage } // тупой компонент для тестирования
export default connect(mapStateToProps, mapDispatchToProps)(PostViewPage)
