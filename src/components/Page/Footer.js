import React, { PropTypes } from 'react'

export const Footer = ({ children }) => (
  <div>{children}</div>
)

Footer.propTypes = {
  children: PropTypes.any.isRequired,
}
