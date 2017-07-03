// @flow
import React from 'react'
import { connect } from 'react-redux'
import { actions } from 'ducks/postForm'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import PostForm from './PostForm'

const mapDispatchToProps = (dispatch, props) => ({
  onMounted: () => dispatch(actions.read()),
})

@connect(null, mapDispatchToProps)
class PostFormAddPage extends React.Component {
  props: {
    onMounted: Function,
  }

  static defaultProps = {
    onMounted: () => {},
  }

  render() {
    const { onMounted } = this.props
    return (
      <Page {...{ onMounted }}>
        <Helmet title="YOBR" />
        <PostForm />
      </Page>
    )
  }
}

export default PostFormAddPage
