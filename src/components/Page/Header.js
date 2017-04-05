import React, { PropTypes } from 'react'

export const Header = ({ children }) => (
  <div>{children}</div>
)

Header.propTypes = {
  children: PropTypes.any.isRequired,
}
