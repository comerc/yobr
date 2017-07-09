// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import logo from 'resources/logo.svg'

const NotFound = () =>
  <div className="not-found">
    <Helmet title="YOBR - 404" />
    <div className="logo">
      <Link to="/" title="На главную страницу">
        <img alt="logo" src={logo} />
      </Link>
    </div>
    <h1>Страница не найдена</h1>
    <p>Страница устарела, была удалена или не существовала вовсе</p>
    <div className="back-button">
      <Link to="/">
        <span className="back-text">Вернуться на главную</span>
      </Link>
    </div>
    {/*<style jsx global>{`
      html, body {
        height: 100%;
      }
      body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        overflow: hidden;
      }
      div#root {
        padding: 0 56px;
        display: flex;
        min-height: 100%;
        overflow: auto;
      }
      a {
        text-decoration: none;
      }
    `}</style>*/}
    <style jsx>{`
      .not-found {
        height: 50vh;
        margin: auto;
      }
      .logo img {
        width: 100px;
        height: 100px;
      }
      h1 {
        font-weight: normal;
      }
      .back-button {
        border: 2px solid gray;
        border-radius: 4px;
        padding: 8px;
        background: #eee;
        display: inline-block;
      }
      .back-text {
        color: black;
      }
    `}</style>
  </div>

export default NotFound
