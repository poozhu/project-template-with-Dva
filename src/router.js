import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import main from './routes';

function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" component={main} />
            </Switch>
        </Router>
    );
}

export default RouterConfig;
