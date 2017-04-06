import React, { PropTypes } from 'react'

const Header = ({ children }) => (
  <div>{children}</div>
)

Header.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Header
