import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ children }) => (
  <div>{children}</div>
)

Header.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Header
