import { Component } from "react"
//引入样式
import style from "./RightCont.css"
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/line';
// 引入提示框和标题组件
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/title';

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
})(class RightCont extends Component {
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

    var myChart = echarts.init(document.getElementById('main'));
    var option = {
      xAxis: {
        type: 'category',
        data: ['Ws2', 'W1', 'W2', 'W3'],
        //坐标轴样式
        axisLine: {
          lineStyle: {
            color: "#101c34",
            width: 2,
          },
        },
        //字体样式
        axisLabel: {
          color: "#fff",
          fontSize: 10,
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: "#101c34",
            width: 2,
          },
        },
        axisLabel: {
          color: "#fff",
          fontSize: 10,
        },
      },
      //调整表格大小
      grid: {
        x: 25,
        y: 45,
        x2: 5,
        y2: 20,
      },
      series: [{
        data: [458, 674, 498, 624, 856, 789, 1020],
        type: 'line'
      }, {
        data: [250, 581, 125, 864, 954, 1120, 1320],
        type: 'line'
      }, {
        data: [850, 981, 1125, 795, 1020, 952, 1320],
        type: 'line'
      }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }

  render() {
    return (
      <div className={style.right} style={{ height: this.state.height, width: this.props.width.collapsed ? widthSmall : widthBig, transition: "all 0.2s" }}>
        <div className={style.content}>
          <img src="../../img/background.jpg" alt="" className={style.background} />
          <i className={style.border}></i>
          <i className={style.title}>
            <i className={style.titleWorld}>经营概况</i>
          </i>
          <div className={style.bottom}>
            <div className={style.bottomLeft}>
              <div className={style.lone}>
                <p className={style.loneP1}>
                  <i className={style.loneTitle1}>本月中长期交易约束</i>
                  <i className={style.loneMusic} ></i>
                </p>
                <p className={style.loneP2}>
                  <p style={{ width: "90px", float: "left" }}>
                    <p style={{ fontSize: "8px", }}><i style={{ fontSize: "18px", fontWeight: "900", color: "#00b1ce" }}>-,417</i>万kWh</p>
                    <p style={{ fontSize: "12px", }}>剩余净合约量</p>
                  </p>
                  <p style={{ width: "90px", float: "left", marginLeft: "60px" }}>
                    <p style={{ fontSize: "8px", }}><i style={{ fontSize: "18px", fontWeight: "900", color: "#00b1ce" }}>-,417</i>万kWh</p>
                    <p style={{ fontSize: "12px", }}>剩余净交易量</p>
                  </p>
                </p>
                <p className={style.loneP2} style={{ color: "#ccc", textAlign: "top", marginTop: "30px" }}>
                  <p style={{ width: "90px", float: "left", borderLeft: "5px solid #012a4f", paddingLeft: "8px", boxSizing: "border-box" }}>
                    <p style={{ fontSize: "12px", }}><i style={{ fontSize: "14px", color: "#00b1ce" }}>417</i>万kWh</p>
                    <p style={{ fontSize: "12px", }}>净合约量</p>
                  </p>
                  <p style={{ width: "90px", float: "left", marginLeft: "60px", borderLeft: "5px solid #012a4f", paddingLeft: "8px", boxSizing: "border-box" }}>
                    <p style={{ fontSize: "8px", }}><i style={{ fontSize: "14px", color: "#00b1ce" }}>417</i>万kWh</p>
                    <p style={{ fontSize: "12px", }}>累计交易量</p>
                  </p>
                </p>
                <p className={style.loneP2} style={{ color: "#ccc", textAlign: "top", marginTop: "20px" }}>
                  <p style={{ width: "90px", float: "left", borderLeft: "5px solid #00cdeb", paddingLeft: "8px", boxSizing: "border-box" }}>
                    <p style={{ fontSize: "12px", }}><i style={{ fontSize: "14px", color: "#00b1ce" }}>0</i>万kWh</p>
                    <p style={{ fontSize: "12px", }}>净合约量上限</p>
                  </p>
                  <p style={{ width: "90px", float: "left", marginLeft: "60px", borderLeft: "5px solid #00cdeb", paddingLeft: "8px", boxSizing: "border-box" }}>
                    <p style={{ fontSize: "8px", }}><i style={{ fontSize: "14px", color: "#00b1ce" }}>0</i>万kWh</p>
                    <p style={{ fontSize: "12px", width: "100px" }}>累计交易量上限</p>
                  </p>
                </p>
              </div>
              <div className={style.ltwo}>
                <p className={style.loneP1}>
                  <i className={style.loneTitle1}>中长期市场走势</i>
                  <i className={style.loneMusic} style={{ marginLeft: "45px" }}></i>
                </p>
                {/* <!-- 为ECharts准备一个具备大小（宽高）的Dom --> */}
                <div id="main" style={{ width: "100%", height: "180px", marginTop: "-20px" }}></div>

              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
})