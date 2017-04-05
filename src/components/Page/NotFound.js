import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import logo from 'resources/logo.svg'

export const NotFound = () => (
  <div className="not-found">
    <Helmet
      defaultTitle="YOBR"
    />
    <div className="logo">
      <Link to="/" title="На главную страницу"><img alt="logo" src={logo} /></Link>
    </div>
    <h1>Страница не найдена</h1>
    <p>Страница устарела, была удалена или не существовала вовсе</p>
    <div className="back">
      <Link to="/"><span>Вернуться на главную</span></Link>
    </div>
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        overflow: hidden;
      }
      div#root {
        padding: 0 56px;
        display: flex;
        height: 100vh;
        overflow: auto;
      }
    `}</style>
    <style jsx>{`
      .not-found {
        height: 50vh;
        margin: auto;
      }
      .logo img {
        width: 100px;
        height: 100px;
      }
      .back {
        border: 2px solid gray;
        border-radius: 8px;
        padding: 8px;
        background: #eee;
        display: inline-block;
      }
      .back span {
        color: green;
      }
    `}</style>
  </div>
)
