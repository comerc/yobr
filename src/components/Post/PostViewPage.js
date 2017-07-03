// @flow
import React from 'react'
import { connect } from 'react-redux'
import { actions } from 'ducks/postView'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import Post from './Post'
import type { Props as PostProps } from './Post.Props'
import isEmpty from 'lodash/isEmpty'

const isMy = state => state.postView.author.id === state.currentUser.id

const mapStateToProps = (state, props) => ({
  isNotFound: isEmpty(state.postView),
  post: isEmpty(state.postView) ? state.postView : { ...state.postView, isMy: isMy(state) },
})

const mapDispatchToProps = (dispatch, props) => ({
  onMounted: () => dispatch(actions.read(parseInt(props.match.params.id, 10))),
})

@connect(mapStateToProps, mapDispatchToProps)
class PostViewPage extends React.Component {
  props: {
    post: PostProps | {},
    isNotFound: boolean,
    onMounted: Function,
  }

  static defaultProps = {
    post: {},
    isNotFound: false,
    onMounted: () => {},
  }

  render() {
    const { post, isNotFound, onMounted } = this.props
    return (
      <Page {...{ isNotFound, onMounted }}>
        <Helmet title="YOBR - post" />
        <Post {...post} />
      </Page>
    )
  }
}

// PostViewPage.propTypes = {
//   post: PropTypes.object,
// }

export default PostViewPage
