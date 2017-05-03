// @flow
import React from 'react'
import { connect } from 'react-redux'
import { actions } from 'ducks/postView'
import memoize from 'fast-memoize'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import Post from './Post'
import type { Props as PostProps } from './Post.Props'
import isEmpty from 'lodash/isEmpty'

type Props = {
  post: PostProps | {},
  onMounted?: Function,
  isNotFound: boolean,
}

const PostViewPage = ({ post, ...props }: Props) => (
  <Page {...props}>
    <Helmet
      title='YOBR'
    />
    <Post {...post} />
  </Page>
)

// PostViewPage.propTypes = {
//   onMounted: PropTypes.func,
//   isNotFound: PropTypes.bool,
//   post: PropTypes.object,
// }

const isMy = (state) =>
  state.postView.author.id === state.currentUser.id

const mapStateToProps = (state, props) => ({
  isNotFound: isEmpty(state.postView),
  post: isEmpty(state.postView) ? state.postView : { ...state.postView, isMy: isMy(state) },
})

const onMounted = memoize((dispatch, id) => () => {
  dispatch(actions.read(id))
})

const mapDispatchToProps = (dispatch, props) => ({
  onMounted: onMounted(dispatch, parseInt(props.match.params.id, 10))
})

export { PostViewPage } // тупой компонент для тестирования
export default connect(mapStateToProps, mapDispatchToProps)(PostViewPage)
