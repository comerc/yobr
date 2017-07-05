// @flow
import React from 'react'
import { connect } from 'react-redux'
import { read } from 'ducks/postView'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import Post, { type Props as PostProps } from 'components/Post'

import { isEmpty } from 'lodash'

const isMy = state => state.postView.author.id === state.currentUser.id

const mapStateToProps = (state, props) => ({
  isNotFound: isEmpty(state.postView),
  post: isEmpty(state.postView) ? state.postView : { ...state.postView, isMy: isMy(state) },
})

const mapDispatchToProps = (dispatch, props) => ({
  onMounted: () => dispatch(read(parseInt(props.match.params.id, 10))),
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
