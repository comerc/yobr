import React, { PropTypes } from 'react'

const Page = ({ children }) => (
  <div>
    {children}
  </div>
)

Page.propTypes = {
  children: PropTypes.any.isRequired,
}

export { default as Header } from './Header'
export { default as Footer } from './Footer'
export { default as NotFoundPage } from './NotFoundPage'
export default Page
