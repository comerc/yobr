import React from 'react'
import { Route } from 'react-router-dom'
import { Switch, Redirect } from 'react-router'
import { NotFoundPage } from 'components/Page'
import { PostPage, PostListPage } from 'components/Post'
import { PostFormAddPage, PostFormEditPage } from 'components/PostForm'

export default (
  <Switch>
    <Route exact path="/"><Redirect to="/all/"/></Route>
    <Route exact path="/all/" component={PostListPage} />
    <Route exact path="/:filterType(flow|hub)/:filterId/" component={PostListPage} />
    <Route exact path="/post/:id(\d+)/" component={PostPage} />
    <Route exact path="/post/edit/:id(\d+)/" component={PostFormEditPage} />
    <Route exact path="/post/add/" component={PostFormAddPage} />
    <Route component={NotFoundPage}/>
  </Switch>
)
