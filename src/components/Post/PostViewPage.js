// @flow
import React from 'react'
import { connect } from 'react-redux'
import { actions } from 'ducks/postView'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import Post from './Post'
import type { Props as PostProps } from './Post.Props'
import isEmpty from 'lodash/isEmpty'

const PostViewPage = ({ post, ...props }: Props) => (
  <Page {...props}>
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
  post: PostProps | {},
  onMounted: Function,
  isNotFound: boolean,
}

const isMy = (state) =>
  state.postView.author.id === state.currentUser.id

const mapStateToProps = (state, props) => ({
  isNotFound: isEmpty(state.postView),
  post: isEmpty(state.postView) ? state.postView : { ...state.postView, isMy: isMy(state) },
})

const mapDispatchToProps = (dispatch, props) => ({
  onMounted: () => {
    const id = parseInt(props.match.params.id, 10)
    dispatch(actions.read(id))
  },
})

export { PostViewPage } // тупой компонент для тестирования
export default connect(mapStateToProps, mapDispatchToProps)(PostViewPage)
