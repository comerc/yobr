import React, { PropTypes } from 'react'

const Page = ({ children }) => (
  <div>
    {children}
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        overflow: hidden;
      }
      div#root {
        padding: 0 56px;
        display: flex;
        height: 100vh;
        overflow: auto;
      }
      a {
        text-decoration: none;
      }
    `}</style>
  </div>
)

Page.propTypes = {
  children: PropTypes.any.isRequired,
}

export { default as Header } from './Header'
export { default as Footer } from './Footer'
export { default as NotFound } from './NotFound'
export default Page
