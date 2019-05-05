import { Component } from "react"
import style from "./Header.css"
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  toLogin() {
    // this.props.history.push("/login");
    window.location.href="/#/"
  }
  render() {
    return (
      <div className={style.header}>
        <div className={style.container}>
          <i className={style.logo}></i>
          <p className={style.name}>后台管理系统</p>
          <i className={style.clock}></i>
          <i className={style.house}></i>
          <i className={style.fengjie}>|</i>
          <i className={style.photo}></i>
          <p className={style.world}>HD Aua</p>
          <p className={style.goOut} onClick={this.toLogin.bind(this)}>[ 退出 ]</p>
        </div>
      </div>
    )
  }
}