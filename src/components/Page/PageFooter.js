// @flow
import React from 'react'

const PageFooter = () =>
  <div className="root">
    <div className="copyright">
      <i className="fa fa-code" aria-hidden="true" />
      &nbsp;with&nbsp;
      <svg
        className="icon-love"
        width="21"
        height="17"
        viewBox="0 0 21 17"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>love</title>
        <path
          d="M14.725.032a5.31 5.31 0 0 0-4.687 2.814 5.312 5.312 0 0 0-10 2.498c0 4.763 5.834 7.397 10 11.564 4.306-4.306 10-6.76 10-11.563A5.312 5.312 0 0 0 14.725.032z"
          fill="#E82F2F"
          fillRule="evenodd"
        />
      </svg>
      &nbsp;by&nbsp;<a href="//github.com/comerc/" className="developer">
        comerc
      </a>&nbsp;
      <i className="fa fa-copyright" aria-hidden="true" />
      &nbsp;{new Date().getFullYear()}&nbsp;
    </div>
    <div className="bullet">
      <i className="fa fa-bug" aria-hidden="true" />
      &nbsp;Баги&nbsp;
    </div>
    <div className="bullet">
      <i className="fa fa-lightbulb-o" aria-hidden="true" />
      &nbsp;Идеи&nbsp;
    </div>
    <div className="bullet">
      <i className="fa fa-envelope" aria-hidden="true" />
      &nbsp;Связь&nbsp;
    </div>
    <div className="bullet">
      <i className="fa fa-life-ring" aria-hidden="true" />
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
        content: '•';
        opacity: 0.5;
        margin-right: 4px;
      }
      .bullet {
        display: inline-block;
        white-space: nowrap;
      }
      .icon-love {
        animation: a 1.2s ease-in-out infinite;
      }
      @keyframes a {
        0% {
          transform: scale(1);
        }
        14% {
          transform: scale(1.3);
        }
        28% {
          transform: scale(1);
        }
        42% {
          transform: scale(1.3);
        }
        70% {
          transform: scale(1);
        }
      }
    `}</style>
  </div>

export default PageFooter
