import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ children }) => (
  <div>{children}</div>
)

Footer.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Footer
