import { Component } from "react"
//引入antd组件
import { Menu, Icon, Button } from 'antd';
//引入样式
import style from "./LeftSideBar.css"
//连接仓库
import { connect } from "dva"

const SubMenu = Menu.SubMenu;
//获取屏幕高度
let screenHeight = window.innerHeight;

class LeftSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      buttonWidth: true,
      height: "",
    }
  }
  componentDidMount() {
    this.setState({
      height: screenHeight - 80 + "px",
    });
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      buttonWidth: !this.state.buttonWidth,
    });
    this.props.dispatch({
      // 触发reducer
      // 触发student仓库里面的editAuthor的reducer
      type: "width/editWidthState",
      // 传递到仓库的值
      payload: {
        collapsed: !this.state.collapsed,
      }
    })
  }

  render() {
    return (
      <div className={style.container} style={{ height: this.state.height,width: this.state.buttonWidth ? "180px" : "80px"  }}>
        <div style={{float: "left", height: this.state.height ,width: this.state.buttonWidth ? "185px" : "100px" }} className={style.left}>
          <Button type="primary" onClick={this.toggleCollapsed} style={{ height: 42, background: "#242939", transition:"all 0.2s",border: "none", borderRadius: 0, width: this.state.buttonWidth ? "180px" : "80px" }}>
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
          </Button>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
            style={{width: this.state.buttonWidth ? "180px" : "80px" }}
          >
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>个人资料</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>编辑个人资料</span>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>零售市场管理</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="mail" /><span>批发市场管理</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="mail" /><span>负荷预测</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="mail" /><span>客户管理</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title={<span><Icon type="mail" /><span>合同管理</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub6" title={<span><Icon type="mail" /><span>结算管理</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub7" title={<span><Icon type="mail" /><span>经营分析</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub8" title={<span><Icon type="mail" /><span>数据管理</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub9" title={<span><Icon type="mail" /><span>月度电量申报</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub10" title={<span><Icon type="mail" /><span>报表管理</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub11" title={<span><Icon type="mail" /><span>月度电量申报</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </div>
    )
  }
}
export default connect((state) => {
  return state
})(LeftSideBar)
