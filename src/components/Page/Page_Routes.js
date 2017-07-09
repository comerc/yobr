// @flow
import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from './Page_Loading'
import NotFound from './Page_NotFound'

const loadable = loader =>
  Loadable({
    loader,
    loading: () => <Loading />,
  })

const Post_ViewPage = loadable(() => import('pages/Post_ViewPage'))
const Post_ListPage = loadable(() => import('pages/Post_ListPage'))
const PostForm_AddPage = loadable(() => import('pages/PostForm_AddPage'))
const PostForm_EditPage = loadable(() => import('pages/PostForm_EditPage'))

const Routes = () =>
  <Switch>
    <Redirect exact from="/" to="/all/" />
    <Route exact path="/all/" component={Post_ListPage} />
    <Route exact path="/:filterType(flow|hub)/:filterId/" component={Post_ListPage} />
    <Route exact path="/post/:id(\d+)/" component={Post_ViewPage} />
    <Route exact path="/post/edit/:id(\d+)/" component={PostForm_EditPage} />
    <Route exact path="/post/add/" component={PostForm_AddPage} />
    <Route component={NotFound} />
  </Switch>

export default Routes
