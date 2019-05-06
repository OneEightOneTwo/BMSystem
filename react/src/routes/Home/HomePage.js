import { Component } from "react"
// 引入头部header组件
import Header from "../../components/HomeHeader/Header"
//引入左侧栏LeftSideBar组件
import LeftSideBar from "../../components/HomeLeftSideBar/LeftSideBar"
//引入左侧栏RightCont组件
import RightCont from "../../components/HomeRightCont/RightCont"
import One from '../HomeChildren/One/One';

// //引入路由跳转方法
// import { Link } from 'react-router-dom'


export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <LeftSideBar />
        <RightCont>
          <One />
        </RightCont>
      </div>
    )
  }
}