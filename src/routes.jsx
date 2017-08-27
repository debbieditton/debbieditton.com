import React from 'react';
import {Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Home from './components/home/_home';
import About from './components/about/_about';
import Services from './components/services/_services';
import Blog from './components/blog/_blog';
import Contact from './components/contact/_contact';
export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="services" component={Services} />
      <Route path="blog" component={Blog} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>
);
