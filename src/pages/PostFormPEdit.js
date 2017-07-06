// @flow
import React from 'react'
import { connect } from 'react-redux'
import { read } from 'ducks/postForm'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import PostForm from 'components/PostForm'

const mapStateToProps = (state, props) => ({
  isNotFound: !state.PostFormC.id,
})

const mapDispatchToProps = (dispatch, props) => ({
  onMounted: () => dispatch(read(parseInt(props.match.params.id, 10))),
})

@connect(mapStateToProps, mapDispatchToProps)
class PostFormPEdit extends React.Component {
  props: {
    isNotFound: boolean,
    onMounted: Function,
  }

  static defaultProps = {
    isNotFound: false,
    onMounted: () => {},
  }

  render() {
    const { isNotFound, onMounted } = this.props
    return (
      <Page {...{ isNotFound, onMounted }}>
        <Helmet title="YOBR" />
        <PostForm />
      </Page>
    )
  }
}

export default PostFormPEdit