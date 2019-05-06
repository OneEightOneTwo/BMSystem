import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// 引入路由页面
import LoginPage from './routes/Login/LoginPage.js';
import HomePage from './routes/Home/HomePage.js';

// 引入子路由页面
import One from './routes/HomeChildren/One/One.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/home" exact component={HomePage} />
        {/* home的宝宝们 */}
        <Route path="/home/one" component={One} />
      </Switch>
    </Router>
  );
}


export default RouterConfig;
