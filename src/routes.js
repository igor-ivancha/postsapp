import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/app';
import PostsNew from './components/posts_new';

export default (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/posts/new" component={PostsNew} />
  </Switch>
);
