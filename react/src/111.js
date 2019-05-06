import React from 'react';
import { Router, Route, Switch, Redirect, routerRedux } from 'dva/router';
import Home from './routes/Index/IndexPage';
// import app from './index'

import List from "./routes/List/List.js";

import Login from "./components/Login.js";

import dynamic from 'dva/dynamic'  //关键作用   用于每个路由模块的 按需加载    第一个参数 app ： 是 需要挂载router的app实例  第二个参数是model  ：  reducer仓库  第三个参数是component ： 组件

const {ConnectedRouter}=routerRedux  //将histrory 分发到所有的组件上
const routeArr = [
  {
    path: '/Home/List',
    component: () => List,//必须是函数  返回组件
    models: () => [import('./models/products')], //必须是函数  返回一个数组
  }, {
    path: '/Login',
    component: () => Login,
    models: () => [import('./models/Login')],
  }
]

function RouterConfig({ history, app }) {
  return (
    <ConnectedRouter history={history}>
      <Home >
        <Router history={history}>
          <Switch>
            <Route path="/" exact render={() => <Redirect to="/Login" />} />  
            {
              routeArr.map((item, key) => {
                return <Route key={key} exact path={item.path} component={dynamic({  //保证路由的唯一性 exact   key
                  app,
                  model: item.models,
                  component: item.component,
                })} />
              })
            }
          </Switch>
        </Router>
      </Home>
    </ConnectedRouter>
  );
}

export default RouterConfig;
