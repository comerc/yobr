import React from 'react'

const Footer = () => (
  <div className="root">
    <div className="copyright">
      <i className="fa fa-code" aria-hidden="true"/>
      &nbsp;with&nbsp;
      <i className="fa fa-heart" aria-hidden="true"/>
      &nbsp;by&nbsp;<a href="//github.com/comerc/" className="developer">comerc</a>&nbsp;
      <i className="fa fa-copyright" aria-hidden="true"/>
      &nbsp;{(new Date()).getFullYear()}&nbsp;
    </div>
    <div className="bullet">
      <i className="fa fa-bug" aria-hidden="true"/>
      &nbsp;Баги&nbsp;
    </div>
    <div className="bullet">
      <i className="fa fa-lightbulb-o" aria-hidden="true"/>
      &nbsp;Идеи&nbsp;
    </div>
    <div className="bullet">
      <i className="fa fa-envelope" aria-hidden="true"/>
      &nbsp;Связь&nbsp;
    </div>
    <div className="bullet">
      <i className="fa fa-life-ring" aria-hidden="true"/>
      &nbsp;Помощь&nbsp;
    </div>
    <style jsx>{`
      .root {
        margin: 8px auto;
      }
      .copyright {
        display: inline-block;
        white-space: nowrap;
      }
      .copyright a.developer {
        font-weight: bold;
        font-size: larger;
      }
      .bullet:before {
        content: "•";
        opacity: 0.5;
        margin-right: 4px;
      }
      .bullet {
        display: inline-block;
        white-space: nowrap;
      }
    `}</style>
  </div>
)

export default Footer
