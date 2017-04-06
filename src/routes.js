import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/app';

export default (
  <Switch>
    <Route exact path="/" component={App} />
  </Switch>
);
