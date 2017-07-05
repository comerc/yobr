// @flow
import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
// import Page from './Page'
import PageLoading from './PageLoading'
import PageNotFound from './PageNotFound'

const loadable = loader =>
  Loadable({
    loader,
    loading: () => <PageLoading />,
  })

const PostViewPage = loadable(() => import('pages/PostViewPage'))
const PostListPage = loadable(() => import('pages/PostListPage'))
const PostFormAddPage = loadable(() => import('pages/PostFormAddPage'))
const PostFormEditPage = loadable(() => import('pages/PostFormEditPage'))

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
