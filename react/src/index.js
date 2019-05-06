import dva from 'dva';
import './index.css';
// 引入antd样式
import 'antd/dist/antd.css';
// 引入公共样式
import './base.css';


// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model,仓库
app.model(require('./models/width').default);
app.model(require('./models/list').default);


// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
