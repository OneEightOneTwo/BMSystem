import { Component } from "react"
import style from "./LoginPage.css"
export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCont: "",
      paspasswordCont: "",
      tanchuangValue:true,
    }
  }

  // 失焦时获取user和password
  getUser(event) {
    this.setState({
      userCont: event.target.value
    })
  }
  getPassw(event) {
    this.setState({
      passwordCont: event.target.value
    })
  }

  // 点击登录按钮成功进行页面跳转
  login() {
    if(this.state.userCont==="Aua"&&this.state.passwordCont==="123456"){
      this.props.history.push("/home");
    }else{
      this.setState({
        tanchuangValue: !this.state.tanchuangValue
      })
    }
  }

  render() {
    return (
      <div className={style.login}>
        <div className={style.container}>
          <p className={style.world}>后台管理系统</p>
          <input className={style.user} placeholder="手机/邮箱/用户名" onBlur={this.getUser.bind(this)}></input>
          <input className={style.passworld} placeholder="密码" onBlur={this.getPassw.bind(this)} type="password"></input>
          <button className={style.loginBtn} onClick={this.login.bind(this)}>登陆</button>
          <i className={style.icon1}></i>
          <i className={style.icon2}></i>
          <div className={style.tanChuang}  style={{top:this.state.tanchuangValue?"-50px":"30px"}}>
          <i className={style.noIcon}></i>
          <span className={style.noWorld}>用户名不存在或者密码错误！</span>
          </div>
        </div>
      </div>
    )
  }
}