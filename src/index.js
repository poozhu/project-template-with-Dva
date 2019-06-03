import dva from 'dva';
import './index.css';
import models from './models/modelConfig'   // 引入model并全部注册
// import createHistory from 'history/createBrowserHistory';

// 1. Initialize
const app = dva({
    // history: createHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
models.forEach(m => app.model(m))

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

