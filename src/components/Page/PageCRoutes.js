// @flow
import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import PageCLoading from './PageCLoading'
import PageCNotFound from './PageCNotFound'

const loadable = loader =>
  Loadable({
    loader,
    loading: () => <PageCLoading />,
  })

const PostPView = loadable(() => import('pages/PostPView'))
const PostPList = loadable(() => import('pages/PostPList'))
const PostFormPAdd = loadable(() => import('pages/PostFormPAdd'))
const PostFormPEdit = loadable(() => import('pages/PostFormPEdit'))

const PageCRoutes = () =>
  <Switch>
    <Redirect exact from="/" to="/all/" />
    <Route exact path="/all/" component={PostPList} />
    <Route exact path="/:filterType(flow|hub)/:filterId/" component={PostPList} />
    <Route exact path="/post/:id(\d+)/" component={PostPView} />
    <Route exact path="/post/edit/:id(\d+)/" component={PostFormPEdit} />
    <Route exact path="/post/add/" component={PostFormPAdd} />
    <Route component={PageCNotFound} />
  </Switch>

export default PageCRoutes
