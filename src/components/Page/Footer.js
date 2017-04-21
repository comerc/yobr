import React from 'react'

const Footer = () => (
  <div className="main">
    <div className="copyright">
      <i className="fa fa-code" aria-hidden="true"/>
      &nbsp;with&nbsp;
      <i className="fa fa-heart" aria-hidden="true"/>
      &nbsp;by&nbsp;<a href="//github.com/comerc/" className="developer">comerc</a>&nbsp;
      <i className="fa fa-copyright" aria-hidden="true"/>
      &nbsp;{(new Date()).getFullYear()}&nbsp;
    </div>
    <style jsx>{`
      .main {
      }
    `}</style>
  </div>
)

export default Footer
