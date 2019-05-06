import { Component } from "react"
//引入路由跳转方法
// import { Link } from 'react-router-dom'

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

  toOne() {
    window.location.href = "/#/home/one"
  }

  render() {
    return (
      <div className={style.container} style={{ height: this.state.height, width: this.state.buttonWidth ? "180px" : "80px" }}>
        <div style={{ float: "left", height: this.state.height, width: this.state.buttonWidth ? "185px" : "100px" }} className={style.left}>
          <Button type="primary" onClick={this.toggleCollapsed} style={{ height: 42, background: "#242939", transition: "all 0.2s", border: "none", borderRadius: 0, width: this.state.buttonWidth ? "180px" : "80px" }}>
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
          </Button>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
            style={{ width: this.state.buttonWidth ? "180px" : "80px" }}
          >
            <Menu.Item key="1" onClick={this.toOne.bind(this)}>
              <Icon type="pie-chart" />
              <span>个人资料</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>编辑个人资料</span>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>客户管理</span></span>}>
              <Menu.Item key="3">客户概览</Menu.Item>
              <Menu.Item key="4">客户信息系统</Menu.Item>
              <Menu.Item key="5">客户用电数据</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="mail" /><span>零售市场管理</span></span>}>
              <Menu.Item key="5">目标客户负荷特征</Menu.Item>
              <Menu.Item key="6">预购电成本预算</Menu.Item>
              <Menu.Item key="7">零售合同定价</Menu.Item>
              <Menu.Item key="8">定价申请</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="mail" /><span>批发市场管理</span></span>}>
              <Menu.Item key="9">日前申报方案</Menu.Item>
              <Menu.Item key="10">中长期交易方案</Menu.Item>
              <Menu.Item key="11">交易结果查询</Menu.Item>
              <Menu.Item key="12">历史成交数据分析</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="mail" /><span>负荷预测</span></span>}>
              <Menu.Item key="13">目前负荷预算</Menu.Item>
              <Menu.Item key="14">下周负荷预算</Menu.Item>
              <Menu.Item key="15">中长期负荷预算</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title={<span><Icon type="mail" /><span>合同管理</span></span>}>
              <Menu.Item key="16">零售合同</Menu.Item>
              <Menu.Item key="17">中长期合同</Menu.Item>
              <Menu.Item key="18">价差购电合同</Menu.Item>
              <Menu.Item key="19">价差售电合同</Menu.Item>
            </SubMenu>
            <SubMenu key="sub6" title={<span><Icon type="mail" /><span>结算管理</span></span>}>
              <Menu.Item key="20">现货版</Menu.Item>
              <Menu.Item key="21">差价版</Menu.Item>
            </SubMenu>
            <SubMenu key="sub7" title={<span><Icon type="mail" /><span>经营分析</span></span>}>
              <Menu.Item key="22">利润分析</Menu.Item>
              <Menu.Item key="23">收益风险</Menu.Item>
              <Menu.Item key="24">零售市场分析</Menu.Item>
            </SubMenu>
            <SubMenu key="sub8" title={<span><Icon type="mail" /><span>数据管理</span></span>}>
              <Menu.Item key="25">日前申报数据</Menu.Item>
              <Menu.Item key="26">现货电价数据</Menu.Item>
              <Menu.Item key="27">日志管理</Menu.Item>
            </SubMenu>
            <SubMenu key="sub9" title={<span><Icon type="mail" /><span>月度电量申报</span></span>}>
              <Menu.Item key="28">电量申报管理</Menu.Item>
              <Menu.Item key="29">电厂客户电量申报</Menu.Item>
              <Menu.Item key="30">需求申报分析报告</Menu.Item>
              <Menu.Item key="31">月度竞价</Menu.Item>
            </SubMenu>
            <SubMenu key="sub10" title={<span><Icon type="mail" /><span>报表管理</span></span>}>
              <Menu.Item key="32">收支总报表</Menu.Item>
            </SubMenu>
            <SubMenu key="sub11" title={<span><Icon type="mail" /><span>需求侧响应</span></span>}>
              <Menu.Item key="33">需求侧响应</Menu.Item>
            </SubMenu>
            <SubMenu key="sub12" title={<span><Icon type="mail" /><span>系统管理</span></span>}>
              <Menu.Item key="34">电价数据</Menu.Item>
            </SubMenu>
            <SubMenu key="sub13" title={<span><Icon type="mail" /><span>辅助决策</span></span>}>
              <Menu.Item key="35">中长期交易测算</Menu.Item>
              <Menu.Item key="36">负荷预算</Menu.Item>
              <Menu.Item key="37">现货价格仿真</Menu.Item>
              <Menu.Item key="38">历史成交分析</Menu.Item>
              <Menu.Item key="39">风险管理</Menu.Item>
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
