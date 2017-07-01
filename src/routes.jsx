import React from 'react';
import {Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Home from './components/home/_home';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);
