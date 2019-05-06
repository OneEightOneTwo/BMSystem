import { Component } from "react"
//引入样式
import style from "./PersonData.css"
//链接仓库
import { connect } from "dva"

//获取屏幕高度
let screenHeight = window.innerHeight;
//获取屏幕宽度
let screenWidth = window.innerWidth;
let widthBig = screenWidth - 185 + "px";
let widthSmall = screenWidth - 85 + "px";


export default connect((state) => {
  return state
})(class PersonData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      collapsed: false,
    }
  }

  componentDidMount() {
    this.setState({
      height: screenHeight - 80 + "px",
    });
  }

  render() {
    return (
      <div className={style.right} style={{ height: this.state.height, width: this.props.width.collapsed ? widthSmall : widthBig, transition: "all 0.2s" }}>
        <img src="../../img/background.jpg" alt="" className={style.background} />
        <i className={style.border}></i>
        <div>个人资料页面</div>
      </div>
    )
  }
})