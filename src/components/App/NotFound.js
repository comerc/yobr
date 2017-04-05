import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import logo from 'resources/logo.svg'

export const NotFound = () => (
  <div>
    <Helmet
      defaultTitle="YOBR"
    />
    <div className="logo">
      <Link to="/" title="На главную страницу"><img alt="logo" src={logo} /></Link>
    </div>
    <h1>Страница не найдена</h1>
    <p>Страница устарела, была удалена или не существовала вовсе</p>
    <div className="back">
      <Link to="/">Вернуться на главную</Link>
    </div>
  </div>
)
