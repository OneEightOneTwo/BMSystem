import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/Index/IndexPage.js';
import LoginPage from './routes/Login/LoginPage.js';
import HomePage from './routes/Home/HomePage.js';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/home" exact component={HomePage} />

      </Switch>
    </Router>
  );
}


export default RouterConfig;
