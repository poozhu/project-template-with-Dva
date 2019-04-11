import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Page1 from './routes/IndexPage1';
import Page2 from './routes/IndexPage2';
import Page3 from './routes/IndexPage3';
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
