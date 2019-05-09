import React, { Component } from 'react';
import { Link } from 'dva/router';
import { Route, Switch } from 'dva/router';
import Page1 from './routePage1';
import Page2 from './routePage2.';
import Page3 from './routePage3';

class main extends Component {
    render() {
        return (
            <div>
                <h1>Title</h1>
                <div>
                    <div><Link to="/">首页</Link></div>
                    <div><Link to="/Page1">Go to Page1</Link></div>
                    <div><Link to="/Page2">Go to Page2</Link></div>
                    <div><Link to="/Page3">Go to Page3</Link></div>
                </div>
                <Switch>
                    <Route path="/Page1" component={Page1} />
                    <Route path="/Page2" component={Page2} />
                    <Route path="/Page3" component={Page3} />
                </Switch>
            </div>
        );
    }
}

export default main;


// 路由管理用例，可以封装并在此引入layout组件来确认系统整体布局
