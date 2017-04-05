import React, { PropTypes } from 'react'

const Page = ({ children }) => (
  <div>123
    {children}
  </div>
)

Page.propTypes = {
  children: PropTypes.any.isRequired,
}

export { Header } from './Header'
export { Footer } from './Footer'
export { NotFound } from './NotFound'
export default Page
