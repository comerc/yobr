// @flow
import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { PostViewPage, PostListPage } from 'components/Post'
import { PostFormAddPage, PostFormEditPage } from 'components/PostForm'

import PageNotFound from './PageNotFound'

const PageRoutes = () =>
  <Switch>
    <Redirect exact from="/" to="/all/" />
    <Route exact path="/all/" component={PostListPage} />
    <Route exact path="/:filterType(flow|hub)/:filterId/" component={PostListPage} />
    <Route exact path="/post/:id(\d+)/" component={PostViewPage} />
    <Route exact path="/post/edit/:id(\d+)/" component={PostFormEditPage} />
    <Route exact path="/post/add/" component={PostFormAddPage} />
    <Route component={PageNotFound} />
  </Switch>

export default PageRoutes
