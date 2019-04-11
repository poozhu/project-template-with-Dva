import React, { Component } from 'react';
import { Link } from 'dva/router';
import { Router, Route, Switch } from 'dva/router';
import Page1 from './IndexPage1';
import Page2 from './IndexPage2';
import Page3 from './IndexPage3';

class main extends Component {
    render() {
        return (
            <div>
                <h1>Title</h1>
                <div>
                    <div><Link to="/">首页</Link></div>
                    <div><Link to="/1">Page1</Link></div>
                    <div><Link to="/2">Page2</Link></div>
                    <div><Link to="/3">Page3</Link></div>
                </div>
                <Switch>
                    <Route path="/1" component={Page1} />
                    <Route path="/2" component={Page2} />
                    <Route path="/3" component={Page3} />
                </Switch>
            </div>
        );
    }
}

export default main;
