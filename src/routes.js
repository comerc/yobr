import React from 'react'
// import { Route } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'

import Page, { NotFound } from 'components/Page'
// import Feedback from './components/Feedback'
// import Post from './components/Post'
// import PostForm from './components/PostForm'
// import PostTeaserList from './components/PostTeaserList'

export default (
  <Switch>
    <Route exact path="/" component={Page} />
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

// TODO при переходе на страницу поста по хештегам #habracut или #comments, происходит редирект с вырезанием этого хештега (чтобы дальше поделиться правильным URL)

// TODO react-router/examples/huge-apps - Partial App Loading

// TODO /help/... > page-header__title > `Помощь -> ${title}` со ссылкой

// TODO /topic/add/ > page-header__title > "Хочу разместить публикацию"

// TODO настроить редирект url без оконечного / на уровне насторек сервера nginx

// TODO редирект, если блог компании: `/post/${id}/` > `/company/${nick}/blog/${id}/`
