import React from 'react'
import { Route } from 'react-router-dom'
import { Switch, Redirect } from 'react-router'

import { NotFound } from 'components/Page'
import { PostListPage } from 'components/Post'
// import Feedback from './components/Feedback'
// import Post from './components/Post'
// import PostForm from './components/PostForm'
// import PostTeaserList from './components/PostTeaserList'

export default (
  <Switch>
    <Route exact path="/" component={PostListPage} />
    <Route component={NotFound}/>
  </Switch>
  //
  // <Route path="/" component={App}>
  //   <Route component={App}>
  //     <IndexRoute component={PostTeaserList} />
  //     <Route path="flows" component={PostTeaserList}>
  //       <Route path=":selectedFlow" />
  //     </Route>
  //     <Redirect from="post" to="/404/" />
  //     <Route path="post">
  //       <Route path="add" component={PostForm} title="Новая публикация" />
  //       <Route path=":postId" component={Post}>
  //         <Route path="edit" component={PostForm} title="Редактирование публикации" />
  //       </Route>
  //     </Route>
  //     <Route path="feedback" component={Feedback} />
  //   </Route>
  //   <Route path="*" component={NotFound} />
  // </Route>
  //
)
