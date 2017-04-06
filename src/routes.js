import React from 'react';
import { Route, IndexRoute, Switch } from 'react-router-dom';
import App from './components/app';

const Greeting = () => {
  return (
    <div>Hi there!</div>
  )
}

export default (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/greet" component={Greeting} />
    <Route path="/greet2" component={Greeting} />
    <Route path="/greet3" component={Greeting} />
  </Switch>
);
