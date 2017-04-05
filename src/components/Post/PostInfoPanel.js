import React, { PropTypes } from 'react'

const PostInfoPanel = ({ isTeaser, id, author, viewsCount, favoritesCount }) => (
  <div>
    <div>id: {id}</div>
    <div>author.nick: {author.nick}</div>
    <div>viewsCount: {viewsCount}</div>
    <div>favoritesCount: {favoritesCount}</div>
  </div>
)

PostInfoPanel.propTypes = {
  isTeaser: PropTypes.bool,
  author: PropTypes.shape({
    id: PropTypes.number,
    nick: PropTypes.string,
    name: PropTypes.string,
    specialization: PropTypes.string,
    contacts: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string,
      url: PropTypes.string,
    })),
    votingCounter: PropTypes.number,
    karma: PropTypes.number,
    rating: PropTypes.number,
  }),
  viewsCount: PropTypes.number,
  favoritesCount: PropTypes.number,
}

export default PostInfoPanel
