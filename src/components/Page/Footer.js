import React, { PropTypes } from 'react'

const Footer = ({ children }) => (
  <div>{children}</div>
)

Footer.propTypes = {
  children: PropTypes.any.isRequired,
}

export { Footer }
