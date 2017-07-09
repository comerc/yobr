// @flow
import React from 'react'
import LoginDialog from './Page_LoginDialog'
import Header from './Page_Header'
import Footer from './Page_Footer'
import Routes from './Page_Routes'

const Layout = () =>
  <div className="layout">
    <LoginDialog />
    <Header />
    <Routes />
    <Footer />
    <style jsx global>{`
      .u-fancy-scrollbar {
        -webkit-overflow-scrolling: touch;
      }
      /* BUGFIX если включить, то перестает работать position: fixed */
      /* BUGFIX если включить, то неправильно позиционируется AutoComplete popup */
      /*.u-fancy-scrollbar{-webkit-transform:translate3d(0,0,0)}*/
      .u-fancy-scrollbar::-webkit-scrollbar {
        height: 8px;
        width: 8px;
      }
      .u-fancy-scrollbar::-webkit-scrollbar-button:end:increment,
      .u-fancy-scrollbar::-webkit-scrollbar-button:start:decrement {
        background: 0 0;
        display: none;
      }
      .u-fancy-scrollbar::-webkit-scrollbar-track-piece {
        background: #d6dadc;
      }
      /*.u-fancy-scrollbar::-webkit-scrollbar-track-piece:vertical:start{border-radius:0px 0px 0 0}*/
      /*.u-fancy-scrollbar::-webkit-scrollbar-track-piece:vertical:end{border-radius:0 0 0px 0px}*/
      /*.u-fancy-scrollbar::-webkit-scrollbar-track-piece:horizontal:start{border-radius:0px 0 0 0px}*/
      /*.u-fancy-scrollbar::-webkit-scrollbar-track-piece:horizontal:end{border-radius:0 0px 0px 0}*/
      .u-fancy-scrollbar::-webkit-scrollbar-thumb:horizontal,
      .u-fancy-scrollbar::-webkit-scrollbar-thumb:vertical {
        background: #c4c9cc;
        display: block;
        height: 50px;
      }
      /*.u-fancy-scrollbar::-webkit-scrollbar-thumb:vertical{box-shadow:inset 8px 0 #D6DADC}*/
      /*.u-fancy-scrollbar::-webkit-scrollbar-thumb:horizontal{box-shadow:inset 0 8px #D6DADC}*/
      /*.u-fancy-scrollbar::-webkit-scrollbar-thumb:horizontal:hover,*/
      /*.u-fancy-scrollbar::-webkit-scrollbar-thumb:vertical:hover{box-shadow:none}*/
      html {
        overflow: scroll;
      }
      html,
      body,
      #root {
        height: 100%;
      }
      body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
      }
      a {
        text-decoration: none;
      }
    `}</style>
    <style jsx>{`
      .layout {
        display: flex;
        flex-direction: column;
        min-height: 100%;
        width: 100%;
      }
    `}</style>
  </div>

export default Layout