import React from 'react'
import Header from './Header'
import Footer from './Footer'
import NotFound from './NotFound'

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
        margin: 48px 0;
        padding: 0 72px;
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

// Page.propTypes = {
//   children: PropTypes.any.isRequired,
// }

export { Header, Footer, NotFound }
export default Page
