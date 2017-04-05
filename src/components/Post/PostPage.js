import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import Post from './Post'

const PostPage = ({ ...post }) => (
  <Post {...post} />
)

PostPage.propTypes = {
  // id: PropTypes.number,
}

const getId = (state, ownProps) =>
  ownProps.id

const getPosts = (state) =>
  state.posts

const mapStateToProps = createSelector(
  [getPosts, getId],
  (posts, id) =>
    posts.find(element =>
      element.id === id)
)

export default connect(mapStateToProps)(PostPage)
