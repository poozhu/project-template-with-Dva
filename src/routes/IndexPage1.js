import React from 'react';
import { connect } from 'dva';
import Page1 from '../Views/page1';

class Index extends React.Component {
  render() {
    return <Page1 data={{ a: '我是组件参数' }}></Page1>;
  }
}
export default connect()(Index);
