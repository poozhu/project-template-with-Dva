import dva from 'dva';
import './index.css';
import models from './models/modelConfig'


// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/page1').default);
models.forEach(m=>app.model(m))

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

